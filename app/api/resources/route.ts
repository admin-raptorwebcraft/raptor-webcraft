import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Resource from "@/models/Resource";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const resources = await Resource.find({ active: true }).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ resources });
  } catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }); }
}
