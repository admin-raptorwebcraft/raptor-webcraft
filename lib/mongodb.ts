import mongoose from "mongoose";

declare global {
  var _mongooseConn: typeof mongoose | null;
  var _mongoosePromise: Promise<typeof mongoose> | null;
}

if (!global._mongooseConn) { global._mongooseConn = null; }
if (!global._mongoosePromise) { global._mongoosePromise = null; }

export async function dbConnect(): Promise<typeof mongoose> {
  if (global._mongooseConn && global._mongooseConn.connection.readyState === 1) {
    return global._mongooseConn;
  }
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI environment variable is not set");

  if (!global._mongoosePromise) {
    global._mongoosePromise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 30000,
      maxPoolSize: 10,
    });
  }
  global._mongooseConn = await global._mongoosePromise;
  return global._mongooseConn;
}
export default dbConnect;
