import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. Check env vars first
    const mongoUri = process.env.MONGODB_URI;
    const jwtSecret = process.env.JWT_SECRET;

    if (!mongoUri) {
      return NextResponse.json(
        { error: "MONGODB_URI is not set in environment variables. Please add it in Vercel Settings > Environment Variables and redeploy." },
        { status: 503 }
      );
    }
    if (!jwtSecret) {
      return NextResponse.json(
        { error: "JWT_SECRET is not set in environment variables. Please add it in Vercel Settings > Environment Variables and redeploy." },
        { status: 503 }
      );
    }

    // 2. Parse body
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { email, password, role } = body;
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // 3. Connect to MongoDB
    try {
      await dbConnect();
    } catch (dbErr: any) {
      console.error("MongoDB connection error:", dbErr);
      return NextResponse.json(
        { error: "Cannot connect to database. Check your MONGODB_URI and ensure 0.0.0.0/0 is whitelisted in MongoDB Atlas Network Access." },
        { status: 503 }
      );
    }

    // 4. Find user
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // 5. Check active
    if (!user.active) {
      return NextResponse.json({ error: "Your account has been deactivated. Contact admin." }, { status: 403 });
    }

    // 6. Check role
    if (role && user.role !== role) {
      return NextResponse.json(
        { error: `This account is registered as '${user.role}', not '${role}'. Please select the correct login type.` },
        { status: 403 }
      );
    }

    // 7. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // 8. Generate JWT
    const token = jwt.sign(
      { id: user._id.toString(), name: user.name, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: "7d" }
    );

    // 9. Set cookie + return response
    const res = NextResponse.json({
      success: true,
      user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role },
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
    return NextResponse.json(
      { error: "Server error: " + (err?.message || "Unknown error occurred") },
      { status: 500 }
    );
  }
}
