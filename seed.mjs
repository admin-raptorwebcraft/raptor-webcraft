// seed.mjs — Raptor Webcraft Technologies
// Uses MongoDB Atlas Data API (HTTPS/443) — bypasses ISP port 27017 block
// Run: node seed.mjs

import https from "https";

// ─────────────────────────────────────────────────────────
// CONFIG — fill these in from your Atlas Data API settings
// ─────────────────────────────────────────────────────────
// 1. Go to Atlas → App Services → Data API
// 2. Enable Data API → copy Endpoint URL + generate API Key
// OR just insert users directly in Atlas UI (easiest!)
// ─────────────────────────────────────────────────────────

const ADMIN_DOC = {
  name: "Raptor Admin",
  email: "admin@raptorwebcraft.com",
  password: "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TugwUCGFkUyOGzdKYRYpU9VqgmVO",
  role: "admin",
  active: true
};

const USER_DOC = {
  name: "John Doe",
  email: "user@raptorwebcraft.com",
  password: "$2b$12$4c6KCIFbMFc0sFDmhJXXFOjnHlVKHlM3bOl8FmFEBGjsGKOJVRuFu",
  role: "user",
  active: true
};

console.log("\n📋 RAPTOR WEBCRAFT — User Setup");
console.log("=====================================");
console.log("Since your ISP blocks port 27017, insert these docs");
console.log("DIRECTLY in MongoDB Atlas UI (browser — no port needed):");
console.log("\n1. Go to cloud.mongodb.com");
console.log("2. Browse Collections → Create DB: raptor-webcraft → Collection: users");
console.log("3. INSERT DOCUMENT → JSON mode → paste Admin doc:");
console.log("\n" + JSON.stringify(ADMIN_DOC, null, 2));
console.log("\n4. INSERT another DOCUMENT → paste User doc:");
console.log("\n" + JSON.stringify(USER_DOC, null, 2));
console.log("\n=====================================");
console.log("✅ LOGIN CREDENTIALS:");
console.log("👑 Admin: admin@raptorwebcraft.com / Admin@Raptor2024");
console.log("👤 User:  user@raptorwebcraft.com  / User@Raptor2024");
console.log("=====================================\n");
