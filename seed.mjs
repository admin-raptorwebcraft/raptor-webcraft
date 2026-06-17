import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const URI = "mongodb+srv://raptor-webcraft:Techfreak2026@raptor-webcraft.wupqjnf.mongodb.net/raptor-webcraft?retryWrites=true&w=majority&appName=raptor-webcraft";

async function main() {
  console.log("🔌 Connecting to MongoDB Atlas...");
  const client = new MongoClient(URI, { serverSelectionTimeoutMS: 15000 });
  await client.connect();
  console.log("✅ Connected!");

  const db   = client.db("raptor-webcraft");
  const coll = db.collection("users");

  const adminHash = await bcrypt.hash("Admin@Raptor2024", 12);
  const userHash  = await bcrypt.hash("User@Raptor2024",  12);

  await coll.deleteMany({ email: { $in: ["admin@raptorwebcraft.com", "user@raptorwebcraft.com"] } });

  await coll.insertMany([
    { name: "Raptor Admin", email: "admin@raptorwebcraft.com", password: adminHash, role: "admin", active: true },
    { name: "John Doe",     email: "user@raptorwebcraft.com",  password: userHash,  role: "user",  active: true },
  ]);

  console.log("🎉 Seed complete!");
  console.log("   Admin → admin@raptorwebcraft.com / Admin@Raptor2024");
  console.log("   User  → user@raptorwebcraft.com  / User@Raptor2024");
  await client.close();
}

main().catch((e) => { console.error("❌", e.message); process.exit(1); });
