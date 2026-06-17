import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    const JWT_SECRET  = process.env.JWT_SECRET;

    if (!MONGODB_URI) {
      return NextResponse.json(
        { error: "MONGODB_URI is not set. Go to Vercel → Settings → Environment Variables and add it." },
        { status: 503 }
      );
    }
    if (!JWT_SECRET) {
      return NextResponse.json(
        { error: "JWT_SECRET is not set. Go to Vercel → Settings → Environment Variables and add it." },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { email, password, role } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return NextResponse.json({ error: "No account found with this email address." }, { status: 401 });
    }

    if (!user.active) {
      return NextResponse.json({ error: "This account has been deactivated. Contact admin." }, { status: 403 });
    }

    if (role && user.role !== role) {
      return NextResponse.json(
        { error: "This account is not registered as " + role + ". Try the other login option." },
        { status: 403 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Incorrect password. Please try again." }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role },
      token,
    });

    response.cookies.set("rwt_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (err: any) {
    console.error("Login error:", err);
    const msg = err?.message || "Unknown error";
    if (msg.includes("bad auth") || msg.includes("authentication failed")) {
      return NextResponse.json(
        { error: "MongoDB authentication failed. Your MONGODB_URI password may be wrong. Check Vercel env vars." },
        { status: 503 }
      );
    }
    if (msg.includes("ECONNREFUSED") || msg.includes("querySrv") || msg.includes("timed out")) {
      return NextResponse.json(
        { error: "Cannot connect to MongoDB Atlas. Check Network Access (0.0.0.0/0) in Atlas." },
        { status: 503 }
      );
    }
    return NextResponse.json({ error: "Server error: " + msg }, { status: 500 });
  }
}
