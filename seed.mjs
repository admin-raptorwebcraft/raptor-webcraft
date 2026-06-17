import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = "mongodb+srv://raptor-webcraft:Techfreak2026@raptor-webcraft.wupqjnf.mongodb.net/raptor-webcraft?retryWrites=true&w=majority&appName=raptor-webcraft";

console.log("Connecting to MongoDB Atlas...");
await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
console.log("Connected!");

const UserSchema = new mongoose.Schema({
  name: String, email: String, password: String, role: String, active: Boolean
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", UserSchema);

const adminHash = await bcrypt.hash("Admin@Raptor2024", 12);
const userHash  = await bcrypt.hash("User@Raptor2024",  12);

await User.deleteMany({ email: { $in: ["admin@raptorwebcraft.com", "user@raptorwebcraft.com"] } });

await User.create({ name: "Raptor Admin", email: "admin@raptorwebcraft.com", password: adminHash, role: "admin",  active: true });
await User.create({ name: "John Doe",     email: "user@raptorwebcraft.com",  password: userHash,  role: "user",   active: true });

console.log("Seed complete!");
console.log("Admin → admin@raptorwebcraft.com / Admin@Raptor2024");
console.log("User  → user@raptorwebcraft.com  / User@Raptor2024");
await mongoose.disconnect();
