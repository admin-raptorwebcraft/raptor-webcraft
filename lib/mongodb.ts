import mongoose from "mongoose";

export const runtime = "nodejs";

declare global {
  var _mongooseConn: typeof mongoose | null;
  var _mongoosePromise: Promise<typeof mongoose> | null;
}

const MONGODB_URI = process.env.MONGODB_URI;

export default async function dbConnect(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables. Please add it to Vercel → Settings → Environment Variables.");
  }

  if (global._mongooseConn) return global._mongooseConn;
  if (global._mongoosePromise) return global._mongoosePromise;

  const opts = {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 30000,
    bufferCommands: false,
  };

  global._mongoosePromise = mongoose.connect(MONGODB_URI, opts).then((m) => {
    global._mongooseConn = m;
    return m;
  });

  return global._mongoosePromise;
}
