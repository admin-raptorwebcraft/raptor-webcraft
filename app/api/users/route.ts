import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session || session.role !== "admin") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    await dbConnect();
    const users = await User.find({}, "-password").lean();
    return NextResponse.json({ users });
  } catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }); }
}
