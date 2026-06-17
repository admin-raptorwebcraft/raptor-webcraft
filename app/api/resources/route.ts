import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Resource from "@/models/Resource";

export async function GET() {
  try {
    await dbConnect();
    const resources = await Resource.find({ active: true }).lean();
    return NextResponse.json({ resources });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const resource = await Resource.create(body);
    return NextResponse.json({ resource }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
