import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const cached: Cached = (global as any).__mongoose ?? ((global as any).__mongoose = { conn: null, promise: null });

export default async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
