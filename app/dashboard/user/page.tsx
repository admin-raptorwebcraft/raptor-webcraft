"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const u = localStorage.getItem("rwt_user");
      if (!u) { router.push("/login"); return; }
      setUser(JSON.parse(u));
    } catch { router.push("/login"); }
  }, []);

  const logout = async () => {
    try { await fetch("/api/auth/logout", { method: "POST" }); } catch {}
    localStorage.clear();
    router.push("/login");
  };

  if (!user) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0d0618" }}>
      <div style={{ width: "40px", height: "40px", border: "3px solid rgba(91,44,159,.3)",
        borderTop: "3px solid #FF8C00", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
    </div>
  );

  const quickStats = [
    { label: "Resources Available", value: "6",  icon: "📚", color: "#3b82f6" },
    { label: "Active Notices",       value: "5",  icon: "📢", color: "#f59e0b" },
    { label: "New This Month",       value: "3",  icon: "🆕", color: "#10b981" },
    { label: "Account Status",       value: "Active", icon: "✅", color: "#8b5cf6" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0d0618", paddingTop: "4rem" }}>
      <div style={{ maxWidth: "75rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff" }}>My Dashboard</h1>
            <p style={{ color: "#9ca3af" }}>Welcome back, {user.name}</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", borderRadius: ".75rem",
            background: "none", border: "1px solid rgba(239,68,68,.4)", color: "#ef4444",
            cursor: "pointer", fontWeight: 600 }}>Logout</button>
        </div>

        <div style={{ background: "linear-gradient(to right,rgba(255,140,0,.1),rgba(91,44,159,.1))",
          border: "1px solid rgba(91,44,159,.3)", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem",
          display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%",
            background: "linear-gradient(to bottom right,#FF8C00,#5B2C9F)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.75rem", fontWeight: 900, color: "#fff", flexShrink: 0 }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#fff", marginBottom: ".25rem" }}>{user.name}</h2>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>{user.email}</p>
            <span style={{ padding: ".25rem .75rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 600,
              background: "rgba(91,44,159,.3)", color: "#c084fc" }}>{user.role}</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
          {quickStats.map((s) => (
            <div key={s.label} style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
              borderRadius: "1.25rem", padding: "1.5rem" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: ".75rem" }}>{s.icon}</div>
              <div style={{ fontSize: "1.75rem", fontWeight: 900, color: s.color, marginBottom: ".25rem" }}>{s.value}</div>
              <div style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
            borderRadius: "1.25rem", padding: "1.75rem" }}>
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>📢 Recent Notices</h3>
            {["System Maintenance - Important","Security Alert - Urgent","New Services Launch - Update"].map((n) => (
              <div key={n} style={{ padding: ".75rem", borderRadius: ".75rem", marginBottom: ".75rem",
                background: "rgba(91,44,159,.1)", border: "1px solid rgba(91,44,159,.2)" }}>
                <p style={{ color: "#d1d5db", fontSize: ".875rem" }}>{n}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
            borderRadius: "1.25rem", padding: "1.75rem" }}>
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>📚 Recent Resources</h3>
            {["Web Dev Best Practices Guide","IT Security Checklist","Cloud Migration Playbook"].map((r) => (
              <div key={r} style={{ padding: ".75rem", borderRadius: ".75rem", marginBottom: ".75rem",
                background: "rgba(91,44,159,.1)", border: "1px solid rgba(91,44,159,.2)" }}>
                <p style={{ color: "#d1d5db", fontSize: ".875rem" }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
