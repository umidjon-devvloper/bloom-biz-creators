import mongoose from "mongoose";

/**
 * No localhost fallback. The old default sent every call to a database on this
 * machine that, on most machines, is not running — and a refused connection is
 * not instant: mongoose keeps trying until its timeout, so an unconfigured
 * environment paid seconds per request to learn what the empty variable already
 * said. Set MONGODB_URI (`mongodb://localhost:27017/umidjon-agency` for a local
 * server) to use one.
 */
const MONGODB_URI = process.env.MONGODB_URI ?? "";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // Throwing beats returning null: every caller already treats a failed connect
  // as "no database", and this way none of them can accidentally query undefined.
  if (!MONGODB_URI) throw new Error("MONGODB_URI is not set");

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      // Mongoose waits 30s by default before admitting it cannot reach a server.
      // That default is written for a background job, not for a request a person
      // is watching a spinner on: an unreachable database made the contact form
      // sit there for half a minute before it even tried Telegram. Fail fast and
      // let the caller decide what to do without the visitor.
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
