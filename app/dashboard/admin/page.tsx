"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [tab,    setTab]    = useState("overview");
  const [user,   setUser]   = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rwt_user");
      if (!stored) { router.push("/login"); return; }
      const u = JSON.parse(stored);
      if (u.role !== "admin") { router.push("/dashboard/user"); return; }
      setUser(u);
    } catch { router.push("/login"); }
  }, [router]);

  const logout = async () => {
    try { await fetch("/api/auth/logout", { method: "POST" }); } catch {}
    localStorage.clear();
    router.push("/login");
  };

  if (!user) return <div style={{ minHeight: "100vh", background: "#0d0618", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>Loading...</div>;

  const tabs = ["overview", "users", "notices", "resources"];
  const stats = [
    { label: "Total Users",     value: "24",  icon: "👥" },
    { label: "Active Projects", value: "12",  icon: "🚀" },
    { label: "Notices",         value: "8",   icon: "📢" },
    { label: "Resources",       value: "15",  icon: "📚" },
  ];

  return (
    <div style={{ background: "#0d0618", minHeight: "100vh", paddingTop: "5rem" }}>
      <style>{`
        .tab-btn { padding: .625rem 1.25rem; border-radius: .75rem; font-size: .875rem; font-weight: 600; cursor: pointer; transition: all .2s; border: 1px solid rgba(91,44,159,.3); }
        .tab-active { background: linear-gradient(to right,#FF8C00,#5B2C9F); color: #fff; border-color: transparent; }
        .tab-inactive { background: transparent; color: #9ca3af; }
        .stat-card { background: rgba(26,10,46,.6); border: 1px solid rgba(91,44,159,.25); border-radius: 1.25rem; padding: 1.5rem; text-align: center; }
        .action-btn { padding: .5rem 1rem; border-radius: .5rem; font-size: .8rem; font-weight: 600; cursor: pointer; border: none; }
      `}</style>

      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "1.75rem" }}>
              Admin <span style={{ color: "#FF8C00" }}>Dashboard</span>
            </h1>
            <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>Welcome back, {user.name}</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.4)", borderRadius: ".75rem", color: "#f87171", cursor: "pointer", fontWeight: 600 }}>
            Logout
          </button>
        </div>

        <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"tab-btn " + (tab === t ? "tab-active" : "tab-inactive")}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{s.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "#FF8C00" }}>{s.value}</div>
                  <div style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(26,10,46,.6)", border: "1px solid rgba(91,44,159,.25)", borderRadius: "1.25rem", padding: "1.75rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem" }}>Company Info</h3>
              <p style={{ color: "#9ca3af", fontSize: ".9rem", marginBottom: ".5rem" }}>📍 Mandikhatar, Budhanilkantha-09, Kathmandu 44600, Bagmati, Nepal</p>
              <p style={{ color: "#9ca3af", fontSize: ".9rem", marginBottom: ".5rem" }}>📞 +977-01-4375420</p>
              <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>✉️ rwct.raptorwebcraft@gmail.com</p>
            </div>
          </div>
        )}

        {tab === "users" && (
          <div style={{ background: "rgba(26,10,46,.6)", border: "1px solid rgba(91,44,159,.25)", borderRadius: "1.25rem", padding: "1.75rem" }}>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.25rem" }}>User Management</h3>
            {[
              { name: "Raptor Admin", email: "admin@raptorwebcraft.com", role: "admin",  status: "Active" },
              { name: "John Doe",     email: "user@raptorwebcraft.com",  role: "user",   status: "Active" },
            ].map((u, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderBottom: "1px solid rgba(91,44,159,.2)", flexWrap: "wrap", gap: ".5rem" }}>
                <div>
                  <p style={{ color: "#fff", fontWeight: 600 }}>{u.name}</p>
                  <p style={{ color: "#9ca3af", fontSize: ".8rem" }}>{u.email}</p>
                </div>
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                  <span style={{ fontSize: ".75rem", padding: ".2rem .65rem", background: u.role === "admin" ? "rgba(255,140,0,.15)" : "rgba(91,44,159,.15)", color: u.role === "admin" ? "#FF8C00" : "#c084fc", borderRadius: "9999px" }}>{u.role}</span>
                  <button className="action-btn" style={{ background: "rgba(239,68,68,.15)", color: "#f87171" }} onClick={() => toast("Feature coming soon")}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "notices" && (
          <div style={{ background: "rgba(26,10,46,.6)", border: "1px solid rgba(91,44,159,.25)", borderRadius: "1.25rem", padding: "1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 700 }}>Manage Notices</h3>
              <button className="action-btn" style={{ background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff", padding: ".625rem 1.25rem" }} onClick={() => toast("Create notice form — connect to API")}>
                + New Notice
              </button>
            </div>
            <p style={{ color: "#9ca3af" }}>Connect to MongoDB to manage notices. Notices are stored in the notices collection.</p>
          </div>
        )}

        {tab === "resources" && (
          <div style={{ background: "rgba(26,10,46,.6)", border: "1px solid rgba(91,44,159,.25)", borderRadius: "1.25rem", padding: "1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 700 }}>Manage Resources</h3>
              <button className="action-btn" style={{ background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff", padding: ".625rem 1.25rem" }} onClick={() => toast("Create resource form — connect to API")}>
                + Add Resource
              </button>
            </div>
            <p style={{ color: "#9ca3af" }}>Connect to MongoDB to manage resources. Resources are stored in the resources collection.</p>
          </div>
        )}
      </div>
    </div>
  );
}
