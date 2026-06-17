"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const tabs = ["Overview","Users","Notices","Resources"];

export default function AdminDashboard() {
  const [tab, setTab] = useState("Overview");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const u = localStorage.getItem("rwt_user");
      if (!u) { router.push("/login"); return; }
      const parsed = JSON.parse(u);
      if (parsed.role !== "admin") { router.push("/dashboard/user"); return; }
      setUser(parsed);
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

  const stats = [
    { label: "Total Users", value: "2", icon: "👥", color: "#3b82f6" },
    { label: "Active Notices", value: "5", icon: "📢", color: "#f59e0b" },
    { label: "Resources", value: "6", icon: "📚", color: "#10b981" },
    { label: "Projects", value: "50+", icon: "🚀", color: "#8b5cf6" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0d0618", paddingTop: "4rem" }}>
      <div style={{ maxWidth: "75rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff" }}>Admin Dashboard</h1>
            <p style={{ color: "#9ca3af" }}>Welcome back, {user.name}</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", borderRadius: ".75rem",
            background: "none", border: "1px solid rgba(239,68,68,.4)", color: "#ef4444",
            cursor: "pointer", fontWeight: 600 }}>Logout</button>
        </div>

        <div style={{ display: "flex", gap: ".75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: ".625rem 1.5rem", borderRadius: ".75rem", cursor: "pointer",
              fontWeight: 600, fontSize: ".9rem", transition: "all .2s",
              background: tab === t ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "rgba(91,44,159,.15)",
              border: tab === t ? "none" : "1px solid rgba(91,44,159,.4)",
              color: tab === t ? "#fff" : "#9ca3af"
            }}>{t}</button>
          ))}
        </div>

        {tab === "Overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
                  borderRadius: "1.25rem", padding: "1.5rem" }}>
                  <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>{s.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: s.color, marginBottom: ".25rem" }}>{s.value}</div>
                  <div style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
              borderRadius: "1.25rem", padding: "1.75rem" }}>
              <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Company Info</h3>
              <p style={{ color: "#d1d5db", marginBottom: ".5rem" }}>📍 Mandikhatar, Budhanilkantha-09, Kathmandu 44600, Bagmati, Nepal</p>
              <p style={{ color: "#d1d5db", marginBottom: ".5rem" }}>📞 +977-01-4375420</p>
              <p style={{ color: "#d1d5db" }}>✉ rwct.raptorwebcraft@gmail.com</p>
            </div>
          </div>
        )}

        {tab === "Users" && (
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
            borderRadius: "1.25rem", padding: "1.75rem" }}>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.5rem" }}>Registered Users</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Name","Email","Role","Status"].map((h) => (
                      <th key={h} style={{ padding: ".75rem 1rem", textAlign: "left",
                        color: "#9ca3af", fontSize: ".875rem", fontWeight: 600,
                        borderBottom: "1px solid rgba(91,44,159,.2)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Raptor Admin", email: "admin@raptorwebcraft.com", role: "admin", active: true },
                    { name: "John Doe", email: "user@raptorwebcraft.com", role: "user", active: true },
                  ].map((u, i) => (
                    <tr key={i}>
                      <td style={{ padding: ".75rem 1rem", color: "#fff", borderBottom: "1px solid rgba(91,44,159,.1)" }}>{u.name}</td>
                      <td style={{ padding: ".75rem 1rem", color: "#9ca3af", borderBottom: "1px solid rgba(91,44,159,.1)" }}>{u.email}</td>
                      <td style={{ padding: ".75rem 1rem", borderBottom: "1px solid rgba(91,44,159,.1)" }}>
                        <span style={{ padding: ".2rem .6rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 600,
                          background: u.role === "admin" ? "rgba(255,140,0,.2)" : "rgba(91,44,159,.2)",
                          color: u.role === "admin" ? "#FF8C00" : "#c084fc" }}>{u.role}</span>
                      </td>
                      <td style={{ padding: ".75rem 1rem", borderBottom: "1px solid rgba(91,44,159,.1)" }}>
                        <span style={{ padding: ".2rem .6rem", borderRadius: "2rem", fontSize: ".75rem",
                          background: "rgba(16,185,129,.2)", color: "#10b981" }}>Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "Notices" && (
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
            borderRadius: "1.25rem", padding: "1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 700 }}>Manage Notices</h3>
              <button onClick={() => toast.success("Notice creation coming soon!")}
                style={{ padding: ".5rem 1rem", borderRadius: ".75rem", cursor: "pointer",
                  background: "linear-gradient(to right,#FF8C00,#5B2C9F)", border: "none",
                  color: "#fff", fontWeight: 600, fontSize: ".875rem" }}>+ Add Notice</button>
            </div>
            <p style={{ color: "#9ca3af" }}>Notices management — connect to MongoDB to enable full CRUD.</p>
          </div>
        )}

        {tab === "Resources" && (
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
            borderRadius: "1.25rem", padding: "1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 700 }}>Manage Resources</h3>
              <button onClick={() => toast.success("Resource upload coming soon!")}
                style={{ padding: ".5rem 1rem", borderRadius: ".75rem", cursor: "pointer",
                  background: "linear-gradient(to right,#FF8C00,#5B2C9F)", border: "none",
                  color: "#fff", fontWeight: 600, fontSize: ".875rem" }}>+ Add Resource</button>
            </div>
            <p style={{ color: "#9ca3af" }}>Resources management — connect to MongoDB to enable full CRUD.</p>
          </div>
        )}
      </div>
    </div>
  );
}
