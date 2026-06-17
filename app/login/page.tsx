"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUser, FaLock, FaShieldAlt, FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [role,     setRole]     = useState<"user"|"admin">("user");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPw,   setShowPw]   = useState(false);
  const [loading,  setLoading]  = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) { toast.error(data.message || "Login failed"); return; }
      localStorage.setItem("rwt_token", data.token);
      localStorage.setItem("rwt_user", JSON.stringify(data.user));
      toast.success("Welcome back, " + data.user.name + "!");
      router.push(data.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user");
    } catch {
      toast.error("Network error. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d0618", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image src="/logo.jpeg" alt="Raptor Webcraft" width={72} height={72} style={{ borderRadius: "1rem", objectFit: "contain", margin: "0 auto 1rem" }} />
          <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 900, marginBottom: ".25rem" }}>
            <span style={{ color: "#FF8C00" }}>Raptor</span> Webcraft
          </h1>
          <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>Sign in to your account</p>
        </div>
        <div style={{ background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.4)", borderRadius: "1.25rem", padding: "2rem" }}>
          <div style={{ display: "flex", marginBottom: "1.5rem", background: "rgba(13,6,24,0.6)", borderRadius: ".75rem", padding: ".25rem" }}>
            {(["user","admin"] as const).map((r) => (
              <button key={r} onClick={() => setRole(r)} style={{ flex: 1, padding: ".5rem", borderRadius: ".5rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: ".875rem", display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem", background: role === r ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "transparent", color: role === r ? "#fff" : "#9ca3af", transition: "all .2s" }}>
                {r === "user" ? <FaUserCircle /> : <FaShieldAlt />}
                {r === "user" ? "User" : "Admin"}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", color: "#d1d5db", fontSize: ".875rem", marginBottom: ".5rem" }}>Email Address</label>
              <div style={{ position: "relative" }}>
                <FaUser style={{ position: "absolute", left: ".875rem", top: "50%", transform: "translateY(-50%)", color: "#6b7280" }} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@raptorwebcraft.com" style={{ width: "100%", padding: ".75rem .75rem .75rem 2.5rem", background: "rgba(13,6,24,0.6)", border: "1px solid rgba(91,44,159,0.4)", borderRadius: ".75rem", color: "#fff", fontSize: ".875rem", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", color: "#d1d5db", fontSize: ".875rem", marginBottom: ".5rem" }}>Password</label>
              <div style={{ position: "relative" }}>
                <FaLock style={{ position: "absolute", left: ".875rem", top: "50%", transform: "translateY(-50%)", color: "#6b7280" }} />
                <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" style={{ width: "100%", padding: ".75rem 2.5rem .75rem 2.5rem", background: "rgba(13,6,24,0.6)", border: "1px solid rgba(91,44,159,0.4)", borderRadius: ".75rem", color: "#fff", fontSize: ".875rem", boxSizing: "border-box" }} />
                <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: "absolute", right: ".875rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#6b7280", cursor: "pointer" }}>
                  {showPw ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} style={{ width: "100%", padding: ".875rem", border: "none", borderRadius: ".75rem", background: loading ? "#374151" : "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff", fontWeight: 700, fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer" }}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
        <p style={{ textAlign: "center", color: "#6b7280", fontSize: ".75rem", marginTop: "1.5rem" }}>© 2024 Raptor Webcraft Technologies. All rights reserved.</p>
      </div>
    </div>
  );
}
