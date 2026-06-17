import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("rwt_token")?.value;
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const payload = verifyToken(token) as { role: string };
    if (payload.role !== "admin") return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    await dbConnect();
    const users = await User.find({}).select("-password").lean();
    return NextResponse.json({ users });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("rwt_token")?.value;
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const payload = verifyToken(token) as { role: string };
    if (payload.role !== "admin") return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    await dbConnect();
    const body = await req.json();
    const user = await User.create(body);
    return NextResponse.json({ user }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
