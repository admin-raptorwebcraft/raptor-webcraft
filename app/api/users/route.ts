import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const users = await User.find({}).select("-password").sort({ createdAt: -1 });
    return NextResponse.json({ users, count: users.length });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
