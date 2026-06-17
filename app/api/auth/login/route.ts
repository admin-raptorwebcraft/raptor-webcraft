import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return NextResponse.json({ message: "No account found with this email address." }, { status: 401 });
    }

    if (!user.active) {
      return NextResponse.json({ message: "This account has been deactivated. Contact admin." }, { status: 403 });
    }

    if (role && user.role !== role) {
      return NextResponse.json({ message: `This account is registered as "${user.role}", not "${role}". Please select the correct role.` }, { status: 401 });
    }

    const valid = await user.comparePassword(password);
    if (!valid) {
      return NextResponse.json({ message: "Incorrect password. Please try again." }, { status: 401 });
    }

    const token = signToken({ id: user._id, email: user.email, role: user.role, name: user.name });

    const res = NextResponse.json({
      message: "Login successful!",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token,
    });

    res.cookies.set("rwt_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return res;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    const isDbErr = msg.includes("ECONNREFUSED") || msg.includes("querySrv") || msg.includes("timed out") || msg.includes("connect");
    if (isDbErr) {
      return NextResponse.json({
        message: "Cannot connect to database. Check your MONGODB_URI in .env.local and ensure your IP is whitelisted in Atlas.",
      }, { status: 503 });
    }
    return NextResponse.json({ message: "Internal server error. Please try again." }, { status: 500 });
  }
}
