import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const mongoUri = process.env.MONGODB_URI;
  const jwtSec   = process.env.JWT_SECRET;

  let dbStatus = "NOT_TESTED";
  let dbError  = "";

  if (mongoUri) {
    try {
      await dbConnect();
      dbStatus = "CONNECTED";
    } catch (e: any) {
      dbStatus = "FAILED";
      dbError  = e?.message || "Unknown error";
    }
  } else {
    dbStatus = "SKIPPED_NO_URI";
  }

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: {
      MONGODB_URI: mongoUri ? "SET" : "MISSING — add to Vercel env vars!",
      JWT_SECRET:  jwtSec   ? "SET" : "MISSING — add to Vercel env vars!",
    },
    database: {
      status: dbStatus,
      error:  dbError || undefined,
    },
    fix: dbError.includes("bad auth")
      ? "PASSWORD WRONG in MONGODB_URI. Fix it in Vercel → Settings → Environment Variables"
      : dbError.includes("ECONNREF")
      ? "Network blocked. Add 0.0.0.0/0 to MongoDB Atlas Network Access"
      : undefined,
  });
}
