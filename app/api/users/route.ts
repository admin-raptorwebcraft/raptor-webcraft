import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("rwt_token")?.value;
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const payload = verifyToken(token) as any;
    if (payload.role !== "admin") return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    await dbConnect();
    const users = await User.find({}, "-password").sort({ createdAt: -1 });
    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Error" }, { status: 500 });
  }
}
