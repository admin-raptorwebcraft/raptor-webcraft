import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const MONGODB_URI = "mongodb+srv://raptor-webcraft:Techfreak2026@raptor-webcraft.wupqjnf.mongodb.net/raptor-webcraft?retryWrites=true&w=majority&appName=raptor-webcraft";

async function seed() {
  console.log("🔌 Connecting to MongoDB Atlas...");
  const client = new MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 15000 });
  try {
    await client.connect();
    const db = client.db("raptor-webcraft");
    const users = db.collection("users");
    await users.deleteMany({ email: { $in: ["admin@raptorwebcraft.com", "user@raptorwebcraft.com"] } });
    const adminHash = await bcrypt.hash("Admin@Raptor2024", 12);
    const userHash  = await bcrypt.hash("User@Raptor2024",  12);
    await users.insertMany([
      { name: "Raptor Admin", email: "admin@raptorwebcraft.com", password: adminHash, role: "admin", active: true },
      { name: "John Doe",     email: "user@raptorwebcraft.com",  password: userHash,  role: "user",  active: true },
    ]);
    console.log("✅ Seeded! Login: admin@raptorwebcraft.com / Admin@Raptor2024");
  } catch (e) {
    console.error("❌ Failed:", e.message);
  } finally {
    await client.close();
  }
}
seed();
