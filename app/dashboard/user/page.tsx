"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rwt_user");
      if (!stored) { router.push("/login"); return; }
      setUser(JSON.parse(stored));
    } catch { router.push("/login"); }
  }, [router]);

  const logout = async () => {
    try { await fetch("/api/auth/logout", { method: "POST" }); } catch {}
    localStorage.clear();
    router.push("/login");
  };

  if (!user) return <div style={{ minHeight: "100vh", background: "#0d0618", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>Loading...</div>;

  return (
    <div style={{ background: "#0d0618", minHeight: "100vh", paddingTop: "5rem" }}>
      <style>{`
        .dash-card { background: rgba(26,10,46,.6); border: 1px solid rgba(91,44,159,.25); border-radius: 1.25rem; padding: 1.75rem; }
      `}</style>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "1.75rem" }}>
              My <span style={{ color: "#FF8C00" }}>Dashboard</span>
            </h1>
            <p style={{ color: "#9ca3af" }}>Welcome back, {user.name}!</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.4)", borderRadius: ".75rem", color: "#f87171", cursor: "pointer", fontWeight: 600 }}>
            Logout
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
          {[
            { icon: "📚", label: "Resources Available", val: "6"  },
            { icon: "📢", label: "Active Notices",       val: "5"  },
            { icon: "📧", label: "Support Tickets",      val: "0"  },
            { icon: "⭐", label: "Account Status",       val: "Active" },
          ].map((s) => (
            <div key={s.label} style={{ background: "rgba(26,10,46,.6)", border: "1px solid rgba(91,44,159,.25)", borderRadius: "1.25rem", padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{s.icon}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF8C00" }}>{s.val}</div>
              <div style={{ color: "#9ca3af", fontSize: ".8rem" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          <div className="dash-card">
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>👤 My Profile</h3>
            <p style={{ color: "#9ca3af", fontSize: ".9rem", marginBottom: ".5rem" }}><span style={{ color: "#d1d5db" }}>Name:</span> {user.name}</p>
            <p style={{ color: "#9ca3af", fontSize: ".9rem", marginBottom: ".5rem" }}><span style={{ color: "#d1d5db" }}>Email:</span> {user.email}</p>
            <p style={{ color: "#9ca3af", fontSize: ".9rem" }}><span style={{ color: "#d1d5db" }}>Role:</span> <span style={{ color: "#c084fc", textTransform: "capitalize" }}>{user.role}</span></p>
          </div>

          <div className="dash-card">
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>📞 Contact Support</h3>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".75rem" }}>📍 Mandikhatar, Budhanilkantha-09, Kathmandu</p>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>📞 +977-01-4375420</p>
            <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ color: "#c084fc", fontSize: ".875rem" }}>✉️ rwct.raptorwebcraft@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
