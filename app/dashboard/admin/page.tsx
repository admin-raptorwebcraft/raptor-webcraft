"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const TABS = ["Overview", "Users", "Notices", "Resources"];

export default function AdminDashboard() {
  const [tab,  setTab]  = useState("Overview");
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
  }, [router]);

  const logout = async () => {
    try { await fetch("/api/auth/logout", { method: "POST" }); } catch {}
    localStorage.removeItem("rwt_token");
    localStorage.removeItem("rwt_user");
    router.push("/login");
  };

  if (!user) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0d0618" }}>
      <div style={{ color: "#FF8C00", fontSize: "1.25rem" }}>Loading...</div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#0d0618", paddingTop: "4rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#fff" }}>Admin Dashboard</h1>
            <p style={{ color: "#9ca3af" }}>Welcome back, {user.name}</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", background: "rgba(240,68,56,0.15)",
            border: "1px solid rgba(240,68,56,0.3)", borderRadius: ".75rem", color: "#f04438",
            cursor: "pointer", fontWeight: 600 }}>Logout</button>
        </div>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: ".625rem 1.5rem", borderRadius: ".75rem", border: "none", cursor: "pointer",
              background: tab === t ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "rgba(26,10,46,0.6)",
              color: tab === t ? "#fff" : "#9ca3af", fontWeight: 600 }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "Overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
              {[
                { label: "Total Users",     value: "2",  icon: "👥", color: "#FF8C00" },
                { label: "Active Notices",  value: "5",  icon: "📢", color: "#c084fc" },
                { label: "Resources",       value: "6",  icon: "📚", color: "#60a5fa" },
                { label: "System Status",   value: "✅", icon: "🛡️", color: "#34d399" },
              ].map((s) => (
                <div key={s.label} style={{ padding: "1.5rem", background: "rgba(26,10,46,0.6)",
                  border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem" }}>
                  <div style={{ fontSize: "1.875rem", marginBottom: ".5rem" }}>{s.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem" }}>
              <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>📍 Company Info</h3>
              <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>
                <strong style={{ color: "#fff" }}>Raptor Webcraft Technologies</strong><br />
                Mandikhatar, Budhanilkantha-09, Kathmandu 44600, Bagmati, Nepal<br />
                📞 +977-01-4375420 &nbsp; ✉️ rwct.raptorwebcraft@gmail.com
              </p>
            </div>
          </div>
        )}

        {tab === "Users" && (
          <div style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1.5rem" }}>User Management</h3>
            {[
              { name: "Raptor Admin", email: "admin@raptorwebcraft.com", role: "admin", active: true },
              { name: "John Doe",     email: "user@raptorwebcraft.com",  role: "user",  active: true },
            ].map((u) => (
              <div key={u.email} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1rem", borderBottom: "1px solid rgba(91,44,159,0.2)" }}>
                <div>
                  <p style={{ color: "#fff", fontWeight: 600 }}>{u.name}</p>
                  <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>{u.email}</p>
                </div>
                <span style={{ padding: ".25rem .75rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 700,
                  background: u.role === "admin" ? "rgba(255,140,0,0.15)" : "rgba(96,165,250,0.15)",
                  color:      u.role === "admin" ? "#FF8C00"              : "#60a5fa" }}>
                  {u.role}
                </span>
              </div>
            ))}
          </div>
        )}

        {tab === "Notices" && (
          <div style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Manage Notices</h3>
            <p style={{ color: "#9ca3af" }}>Connect to MongoDB to manage notices dynamically. Use the Notices page to view current announcements.</p>
          </div>
        )}

        {tab === "Resources" && (
          <div style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Manage Resources</h3>
            <p style={{ color: "#9ca3af" }}>Connect to MongoDB to manage resources dynamically. Use the Resources page to view current items.</p>
          </div>
        )}
      </div>
    </div>
  );
}
