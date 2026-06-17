import { NextResponse } from "next/server";

export async function GET() {
  const mongoUri = process.env.MONGODB_URI;
  const jwtSecret = process.env.JWT_SECRET;

  return NextResponse.json({
    status: "ok",
    env: {
      MONGODB_URI:  mongoUri  ? "SET ✅" : "MISSING ❌ — Add in Vercel Settings → Environment Variables",
      JWT_SECRET:   jwtSecret ? "SET ✅" : "MISSING ❌ — Add in Vercel Settings → Environment Variables",
    },
    timestamp: new Date().toISOString(),
  });
}
