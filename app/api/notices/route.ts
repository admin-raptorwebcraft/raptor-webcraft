import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Notice from "@/models/Notice";

export async function GET() {
  try {
    await dbConnect();
    const notices = await Notice.find({ active: true }).sort({ pinned: -1, createdAt: -1 }).lean();
    return NextResponse.json({ notices });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const notice = await Notice.create(body);
    return NextResponse.json({ notice }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
