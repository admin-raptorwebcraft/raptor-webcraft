import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const mongoUri = process.env.MONGODB_URI;
  const jwtSecret = process.env.JWT_SECRET;

  let dbStatus = "NOT TESTED";
  let dbError = null;

  if (mongoUri) {
    try {
      await dbConnect();
      dbStatus = "CONNECTED";
    } catch (e: any) {
      dbStatus = "FAILED";
      dbError = e?.message;
    }
  }

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: {
      MONGODB_URI: mongoUri ? "SET" : "MISSING - Add in Vercel Settings > Environment Variables",
      JWT_SECRET:  jwtSecret ? "SET" : "MISSING - Add in Vercel Settings > Environment Variables",
    },
    database: { status: dbStatus, error: dbError },
  });
}
