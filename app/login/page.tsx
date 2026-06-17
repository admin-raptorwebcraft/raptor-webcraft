"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [role, setRole]   = useState<"user"|"admin">("user");
  const [email, setEmail] = useState("");
  const [pass,  setPass]  = useState("");
  const [show,  setShow]  = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !pass) { toast.error("Please enter email and password"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: pass, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Login failed");
      } else {
        localStorage.setItem("rwt_user", JSON.stringify(data.user));
        toast.success("Welcome back, " + data.user.name + "!");
        setTimeout(() => {
          router.push(data.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user");
        }, 800);
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally { setLoading(false); }
  };

  const card: React.CSSProperties = {
    background: "rgba(26,10,46,0.9)", border: "1px solid rgba(91,44,159,0.4)",
    borderRadius: "1.5rem", padding: "2.5rem", width: "100%", maxWidth: "420px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.6)"
  };
  const inp: React.CSSProperties = {
    width: "100%", padding: ".75rem 1rem", borderRadius: ".75rem", fontSize: "1rem",
    background: "rgba(91,44,159,0.1)", border: "1px solid rgba(91,44,159,0.4)",
    color: "#fff", outline: "none", boxSizing: "border-box"
  };
  const btn: React.CSSProperties = {
    width: "100%", padding: ".875rem", borderRadius: ".75rem", fontSize: "1rem",
    fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", border: "none",
    background: loading ? "#555" : "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff",
    transition: "opacity .2s", opacity: loading ? 0.7 : 1
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "6rem 1rem 2rem", background: "radial-gradient(ellipse at top,#1a0a2e,#0d0618)" }}>
      <div style={card}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image src="/logo.jpeg" alt="Raptor Webcraft" width={72} height={72}
            style={{ borderRadius: "1rem", objectFit: "contain", marginBottom: "1rem" }} />
          <h1 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff", marginBottom: ".5rem" }}>
            Welcome Back
          </h1>
          <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>
            Sign in to Raptor Webcraft Technologies
          </p>
        </div>

        <div style={{ display: "flex", gap: ".75rem", marginBottom: "1.75rem" }}>
          {(["user","admin"] as const).map((r) => (
            <button key={r} onClick={() => setRole(r)} style={{
              flex: 1, padding: ".625rem", borderRadius: ".75rem", cursor: "pointer",
              fontWeight: 600, fontSize: ".875rem", transition: "all .2s",
              background: role === r ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "rgba(91,44,159,0.15)",
              border: role === r ? "none" : "1px solid rgba(91,44,159,0.4)",
              color: role === r ? "#fff" : "#9ca3af"
            }}>
              {r === "user" ? "👤 User Login" : "👑 Admin Login"}
            </button>
          ))}
        </div>

        <form onSubmit={submit}>
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", color: "#d1d5db", fontSize: ".875rem", marginBottom: ".5rem", fontWeight: 500 }}>
              Email Address
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@raptorwebcraft.com" style={inp} required />
          </div>

          <div style={{ marginBottom: "1.75rem" }}>
            <label style={{ display: "block", color: "#d1d5db", fontSize: ".875rem", marginBottom: ".5rem", fontWeight: 500 }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input type={show ? "text" : "password"} value={pass} onChange={(e) => setPass(e.target.value)}
                placeholder="Enter your password" style={{ ...inp, paddingRight: "3rem" }} required />
              <button type="button" onClick={() => setShow(!show)}
                style={{ position: "absolute", right: ".75rem", top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: "1.1rem" }}>
                {show ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button type="submit" style={btn} disabled={loading}>
            {loading ? "Signing in..." : "Sign In as " + (role === "admin" ? "Admin" : "User")}
          </button>
        </form>

        <p style={{ textAlign: "center", color: "#6b7280", fontSize: ".8rem", marginTop: "1.5rem" }}>
          Protected by JWT authentication
        </p>
      </div>
    </div>
  );
}
