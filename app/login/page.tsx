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
    if (!email || !password) { toast.error("Please fill in all fields"); return; }
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
      localStorage.setItem("rwt_user",  JSON.stringify(data.user));
      toast.success("Welcome back, " + data.user.name + "!");
      router.push(data.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user");
    } catch {
      toast.error("Network error — please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#0d0618 0%,#1a0a2e 50%,#0d0618 100%)", padding: "5rem 1rem 2rem" }}>
      <style>{`
        .login-card { background: rgba(26,10,46,.8); border: 1px solid rgba(91,44,159,.4); border-radius: 1.5rem; padding: 2.5rem; width: 100%; max-width: 420px; backdrop-filter: blur(16px); }
        .role-btn { flex: 1; padding: .75rem; border-radius: .75rem; font-weight: 600; font-size: .9rem; cursor: pointer; transition: all .2s; border: 1px solid rgba(91,44,159,.4); }
        .role-btn-active { background: linear-gradient(to right,#FF8C00,#5B2C9F); color: #fff; border-color: transparent; }
        .role-btn-inactive { background: transparent; color: #9ca3af; }
        .input-field { width: 100%; padding: .875rem 1rem; border-radius: .75rem; background: rgba(13,6,24,.6); border: 1px solid rgba(91,44,159,.3); color: #fff; font-size: 1rem; outline: none; transition: border .2s; }
        .input-field:focus { border-color: #FF8C00; }
        .submit-btn { width: 100%; padding: 1rem; border-radius: .75rem; background: linear-gradient(to right,#FF8C00,#5B2C9F); color: #fff; font-weight: 700; font-size: 1rem; cursor: pointer; border: none; transition: opacity .2s; }
        .submit-btn:hover { opacity: .9; }
        .submit-btn:disabled { opacity: .6; cursor: not-allowed; }
      `}</style>

      <div className="login-card">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image src="/logo.jpeg" alt="Raptor Webcraft" width={80} height={80} style={{ borderRadius: "1rem", objectFit: "contain", margin: "0 auto 1rem" }} />
          <h1 style={{ fontWeight: 900, fontSize: "1.5rem" }}>
            <span style={{ color: "#FF8C00" }}>Raptor</span>
            <span style={{ color: "#fff" }}> Webcraft</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: ".875rem", marginTop: ".25rem" }}>Sign in to your account</p>
        </div>

        <div style={{ display: "flex", gap: ".5rem", marginBottom: "1.5rem" }}>
          <button onClick={() => setRole("user")}  className={"role-btn " + (role === "user"  ? "role-btn-active" : "role-btn-inactive")}>User</button>
          <button onClick={() => setRole("admin")} className={"role-btn " + (role === "admin" ? "role-btn-active" : "role-btn-inactive")}>Admin</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              style={{ paddingRight: "3rem" }}
              required
            />
            <button type="button" onClick={() => setShowPw(!showPw)}
              style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: "1.1rem" }}>
              {showPw ? "🙈" : "👁️"}
            </button>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(13,6,24,.4)", borderRadius: ".75rem", border: "1px solid rgba(91,44,159,.2)" }}>
          <p style={{ color: "#6b7280", fontSize: ".75rem", textAlign: "center" }}>
            Default credentials:<br />
            <span style={{ color: "#c084fc" }}>admin@raptorwebcraft.com / Admin@Raptor2024</span><br />
            <span style={{ color: "#86efac" }}>user@raptorwebcraft.com / User@Raptor2024</span>
          </p>
        </div>
      </div>
    </div>
  );
}
