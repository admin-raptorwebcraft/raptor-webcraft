import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Resource from "@/models/Resource";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const resources = await Resource.find({ active: true }).lean();
    return NextResponse.json({ success: true, resources });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
