"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rwt_user");
      if (!stored) { router.push("/login"); return; }
      const u = JSON.parse(stored);
      setUser(u);
    } catch { router.push("/login"); }
  }, [router]);

  const logout = async () => {
    try { await fetch("/api/auth/logout", { method: "POST" }); } catch {}
    localStorage.clear();
    router.push("/login");
  };

  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#0d0618", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#9ca3af" }}>Loading...</div>
    </div>
  );

  const stats = [
    { label: "Resources Available", value: "6",  icon: "📁" },
    { label: "Notices",             value: "6",  icon: "📢" },
    { label: "Support Tickets",     value: "0",  icon: "🎫" },
    { label: "Account Status",      value: "Active", icon: "✅" },
  ];

  return (
    <div style={{ background: "#0d0618", minHeight: "100vh", paddingTop: "4rem", color: "#fbfbff" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1.5rem" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 900 }}>My Dashboard</h1>
            <p style={{ color: "#9ca3af", marginTop: ".25rem" }}>Welcome, {user.name}!</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", background: "rgba(240,68,56,0.15)", border: "1px solid rgba(240,68,56,0.4)", color: "#f04438", borderRadius: ".75rem", cursor: "pointer", fontWeight: 600 }}>
            Logout
          </button>
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(91,44,159,0.3), rgba(255,140,0,0.2))", border: "1px solid rgba(91,44,159,0.4)", borderRadius: "1.25rem", padding: "1.75rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ width: 64, height: 64, background: "linear-gradient(to right, #FF8C00, #5B2C9F)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", fontWeight: 900, color: "#fff", flexShrink: 0 }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 style={{ fontWeight: 800, fontSize: "1.25rem" }}>{user.name}</h2>
              <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>{user.email}</p>
              <span style={{ background: "rgba(91,44,159,0.3)", color: "#c084fc", padding: ".2rem .625rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 700, textTransform: "capitalize" }}>
                {user.role}
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{s.icon}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF8C00" }}>{s.value}</div>
              <div style={{ color: "#9ca3af", fontSize: ".8rem" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>📁 Recent Resources</h3>
            {["Web Dev Best Practices","IT Infrastructure Template","Cybersecurity Checklist"].map((r) => (
              <div key={r} style={{ padding: ".625rem 0", borderBottom: "1px solid rgba(91,44,159,0.15)", color: "#9ca3af", fontSize: ".9rem" }}>{r}</div>
            ))}
          </div>
          <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>📢 Recent Notices</h3>
            {["System Maintenance Scheduled","New IT Consulting Services","Office Closed – Holiday"].map((n) => (
              <div key={n} style={{ padding: ".625rem 0", borderBottom: "1px solid rgba(91,44,159,0.15)", color: "#9ca3af", fontSize: ".9rem" }}>{n}</div>
            ))}
          </div>
          <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>📞 Contact Raptor Webcraft</h3>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.7 }}>
              📍 Mandikhatar, Budhanilkantha-09,<br />Kathmandu 44600, Nepal<br />
              📞 +977-01-4375420<br />
              ✉️ rwct.raptorwebcraft@gmail.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
