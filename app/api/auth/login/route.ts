import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    // Step 1: Check env vars are set (most common Vercel issue)
    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI is not set in environment variables");
      return NextResponse.json(
        { message: "Server configuration error: MONGODB_URI not set. Add it in Vercel Settings → Environment Variables." },
        { status: 503 }
      );
    }
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not set in environment variables");
      return NextResponse.json(
        { message: "Server configuration error: JWT_SECRET not set. Add it in Vercel Settings → Environment Variables." },
        { status: 503 }
      );
    }

    // Step 2: Parse body
    const body = await req.json();
    const { email, password, role } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    // Step 3: Connect to MongoDB
    await dbConnect();

    // Step 4: Find user
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select("+password");

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    if (!user.active) {
      return NextResponse.json({ message: "Your account has been deactivated. Contact admin." }, { status: 403 });
    }

    if (role && user.role !== role) {
      return NextResponse.json(
        { message: "This account is not registered as " + role + ". Please select the correct role." },
        { status: 403 }
      );
    }

    // Step 5: Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    // Step 6: Generate JWT
    const token = jwt.sign(
      { id: user._id.toString(), role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    const response = NextResponse.json({
      token,
      name:  user.name,
      email: user.email,
      role:  user.role,
    });

    response.cookies.set("rwt_token", token, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge:   7 * 24 * 60 * 60,
      path:     "/",
    });

    return response;

  } catch (err: any) {
    console.error("Login API error:", err);
    // Give specific message for MongoDB connection failures
    if (err.name === "MongooseServerSelectionError" || err.message?.includes("connect")) {
      return NextResponse.json(
        { message: "Database connection failed. Check MONGODB_URI in Vercel Environment Variables and ensure 0.0.0.0/0 is whitelisted in MongoDB Atlas Network Access." },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { message: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
