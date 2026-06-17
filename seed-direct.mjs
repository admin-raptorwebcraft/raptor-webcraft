import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// ─────────────────────────────────────────────────────────────────
// DIRECT CONNECTION — bypasses SRV DNS (use if seed.mjs fails)
// Format: mongodb://user:pass@host1:27017,host2:27017/db?authSource=admin&replicaSet=atlas-xxx
//
// HOW TO GET YOUR DIRECT HOSTS:
//   1. Go to MongoDB Atlas → Connect → Shell
//   2. Copy the connection string — it shows direct IPs like:
//      ac-abc123-shard-00-00.yock6h0.mongodb.net:27017
//   3. Paste them below replacing HOST1, HOST2, HOST3
// ─────────────────────────────────────────────────────────────────

const HOST1 = "raptor-webcraft-shard-00-00.yock6h0.mongodb.net";
const HOST2 = "raptor-webcraft-shard-00-01.yock6h0.mongodb.net";
const HOST3 = "raptor-webcraft-shard-00-02.yock6h0.mongodb.net";
const PASSWORD = "_S2VCyQximD95g6";

const MONGODB_URI = `mongodb://admin:${PASSWORD}@${HOST1}:27017,${HOST2}:27017,${HOST3}:27017/raptor-webcraft?ssl=true&replicaSet=atlas-raptor-webcraft&authSource=admin&retryWrites=true&w=majority`;

async function seed() {
  console.log("🔌 Connecting via direct TCP (no SRV DNS)...");
  
  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 15000,
  });

  console.log("✅ Connected successfully!");

  const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["admin", "user"], default: "user" },
    active: { type: Boolean, default: true },
  }, { timestamps: true });

  const User = mongoose.models.User || mongoose.model("User", UserSchema);

  await User.deleteMany({ email: { $in: ["admin@raptorwebcraft.com", "user@raptorwebcraft.com"] } });

  const adminHash = await bcrypt.hash("Admin@Raptor2024", 12);
  const userHash  = await bcrypt.hash("User@Raptor2024", 12);

  await User.create([
    { name: "Raptor Admin", email: "admin@raptorwebcraft.com", password: adminHash, role: "admin", active: true },
    { name: "John Doe",     email: "user@raptorwebcraft.com",  password: userHash,  role: "user",  active: true },
  ]);

  console.log("\n🎉 Seed complete! Your login credentials:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("👑 ADMIN → admin@raptorwebcraft.com / Admin@Raptor2024");
  console.log("👤 USER  → user@raptorwebcraft.com  / User@Raptor2024");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("\n❌ Direct seed failed:", err.message);
  process.exit(1);
});
