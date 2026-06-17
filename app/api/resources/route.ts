import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Resource from "@/models/Resource";

export async function GET() {
  try {
    await dbConnect();
    const resources = await Resource.find({ active: true }).sort({ createdAt: -1 });
    return NextResponse.json(resources);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const resource = await Resource.create(body);
    return NextResponse.json(resource, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
