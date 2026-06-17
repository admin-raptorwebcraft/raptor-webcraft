import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    await dbConnect();
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return NextResponse.json({ message: "No account found with this email" }, { status: 401 });
    }
    if (!user.active) {
      return NextResponse.json({ message: "Your account has been deactivated" }, { status: 403 });
    }
    if (role && user.role !== role) {
      return NextResponse.json({ message: `This account is not registered as ${role}` }, { status: 403 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    }

    const token = signToken({ id: user._id.toString(), email: user.email, role: user.role, name: user.name });

    const res = NextResponse.json({
      message: "Login successful",
      user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role },
      token,
    });

    res.cookies.set("rwt_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return res;
  } catch (err: any) {
    console.error("Login error:", err);
    if (err.message?.includes("ECONNREFUSED") || err.message?.includes("querySrv") || err.message?.includes("connect")) {
      return NextResponse.json({ message: "Database connection failed. Check MONGODB_URI in your environment variables." }, { status: 503 });
    }
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
