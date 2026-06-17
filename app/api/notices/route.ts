import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Notice from "@/models/Notice";

export async function GET() {
  try {
    await dbConnect();
    const notices = await Notice.find({}).sort({ pinned: -1, createdAt: -1 });
    return NextResponse.json({ notices, count: notices.length });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await dbConnect();
    const notice = await Notice.create(body);
    return NextResponse.json({ notice }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
