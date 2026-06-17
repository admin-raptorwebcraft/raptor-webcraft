"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [role,     setRole]     = useState<"user" | "admin">("user");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPwd,  setShowPwd]  = useState(false);
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error("Please fill in all fields."); return; }
    setLoading(true);
    try {
      const res  = await fetch("/api/auth/login", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("rwt_token", data.token);
      localStorage.setItem("rwt_user",  JSON.stringify({ name: data.name, role: data.role, email: data.email }));
      toast.success("Welcome back, " + data.name + "!");
      router.push(data.role === "admin" ? "/dashboard/admin" : "/dashboard/user");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0d0618 0%, #1a0a2e 50%, #0d0618 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem 1rem 2rem",
  };

  const cardStyle: React.CSSProperties = {
    background: "rgba(19,8,32,0.9)",
    border: "1px solid rgba(91,44,159,0.4)",
    borderRadius: "1.5rem",
    padding: "2rem",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 25px 50px rgba(91,44,159,0.3)",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0d0618",
    border: "1px solid rgba(91,44,159,0.4)",
    color: "#fff",
    padding: ".75rem 1rem",
    borderRadius: ".75rem",
    fontSize: ".9rem",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Image src="/logo.jpeg" alt="Raptor Webcraft" width={72} height={72}
            style={{ borderRadius: "1rem", objectFit: "contain", marginBottom: ".75rem" }} />
          <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 900 }}>Welcome Back</h1>
          <p style={{ color: "#9ca3af", fontSize: ".875rem", marginTop: ".25rem" }}>
            Sign in to Raptor Webcraft Technologies
          </p>
        </div>

        <div style={{ display: "flex", background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "4px", marginBottom: "1.5rem" }}>
          {(["user", "admin"] as const).map((r) => (
            <button key={r} type="button" onClick={() => setRole(r)}
              style={{
                flex: 1, padding: ".625rem", borderRadius: ".75rem", border: "none", cursor: "pointer",
                fontWeight: 600, fontSize: ".875rem", transition: "all .2s",
                background: role === r ? "linear-gradient(to right, #FF8C00, #5B2C9F)" : "transparent",
                color: role === r ? "#fff" : "#9ca3af",
              }}>
              {r === "admin" ? "Admin Login" : "User Login"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ color: "#9ca3af", fontSize: ".8rem", display: "block", marginBottom: ".375rem" }}>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder={role === "admin" ? "admin@raptorwebcraft.com" : "you@example.com"}
              style={inputStyle} required />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ color: "#9ca3af", fontSize: ".8rem", display: "block", marginBottom: ".375rem" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input type={showPwd ? "text" : "password"} value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ ...inputStyle, paddingRight: "3rem" }} required />
              <button type="button" onClick={() => setShowPwd(!showPwd)}
                style={{ position: "absolute", right: ".75rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: "1rem" }}>
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading}
            style={{
              width: "100%", padding: ".875rem",
              background: loading ? "rgba(91,44,159,0.5)" : "linear-gradient(to right, #FF8C00, #5B2C9F)",
              border: "none", borderRadius: ".75rem", color: "#fff",
              fontWeight: 700, fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem",
            }}>
            {loading ? (
              <span style={{ width: "20px", height: "20px", border: "3px solid rgba(255,255,255,.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block" }} className="animate-spin" />
            ) : (
              "Sign In as " + (role === "admin" ? "Admin" : "User")
            )}
          </button>
        </form>

        <p style={{ textAlign: "center", color: "#6b7280", fontSize: ".8rem", marginTop: "1.25rem" }}>
          Need access?{" "}
          <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ color: "#FF8C00" }}>Contact the admin team</a>
        </p>
      </div>
    </div>
  );
}
