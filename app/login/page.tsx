"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [role,     setRole]     = useState<"user" | "admin">("user");
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
      if (!res.ok || !data.success) {
        toast.error(data.error || "Login failed");
        return;
      }
      localStorage.setItem("rwt_token", data.token);
      localStorage.setItem("rwt_user",  JSON.stringify(data.user));
      toast.success("Welcome back, " + data.user.name + "!");
      router.push(data.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user");
    } catch (err: any) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #0d0618 0%, #1a0a2e 50%, #0d0618 100%)", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image src="/logo.jpeg" alt="Raptor Webcraft" width={80} height={80}
            style={{ borderRadius: "1rem", objectFit: "contain", marginBottom: "1rem" }} />
          <h1 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff" }}>
            <span style={{ color: "#FF8C00" }}>Raptor</span> Webcraft
          </h1>
          <p style={{ color: "#9ca3af", marginTop: ".5rem" }}>Sign in to your account</p>
        </div>

        <div style={{ background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.4)",
          borderRadius: "1.5rem", padding: "2rem", backdropFilter: "blur(16px)" }}>

          <div style={{ display: "flex", marginBottom: "1.5rem", background: "rgba(13,6,24,0.6)",
            borderRadius: ".75rem", padding: ".25rem" }}>
            {(["user", "admin"] as const).map((r) => (
              <button key={r} onClick={() => setRole(r)} style={{
                flex: 1, padding: ".625rem", borderRadius: ".5rem", border: "none", cursor: "pointer",
                background: role === r ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "transparent",
                color: role === r ? "#fff" : "#9ca3af", fontWeight: 600, fontSize: ".875rem",
                transition: "all .2s" }}>
                {r === "admin" ? "Admin Login" : "User Login"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", color: "#d1d5db", fontSize: ".875rem", marginBottom: ".5rem" }}>
                Email Address
              </label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                placeholder="admin@raptorwebcraft.com"
                style={{ width: "100%", padding: ".75rem 1rem", background: "rgba(13,6,24,0.8)",
                  border: "1px solid rgba(91,44,159,0.4)", borderRadius: ".75rem", color: "#fff",
                  fontSize: ".9375rem", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", color: "#d1d5db", fontSize: ".875rem", marginBottom: ".5rem" }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input type={showPw ? "text" : "password"} value={password}
                  onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password"
                  style={{ width: "100%", padding: ".75rem 3rem .75rem 1rem", background: "rgba(13,6,24,0.8)",
                    border: "1px solid rgba(91,44,159,0.4)", borderRadius: ".75rem", color: "#fff",
                    fontSize: ".9375rem", outline: "none", boxSizing: "border-box" }} />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: "1.1rem" }}>
                  {showPw ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading} style={{
              width: "100%", padding: ".875rem",
              background: loading ? "rgba(91,44,159,0.5)" : "linear-gradient(to right,#FF8C00,#5B2C9F)",
              color: "#fff", border: "none", borderRadius: ".75rem", fontWeight: 700,
              fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer", transition: "all .2s" }}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
