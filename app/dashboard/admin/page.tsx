"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const router = useRouter();
  const [tab,  setTab]  = useState("overview");
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

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

  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#0d0618", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#9ca3af" }}>Loading...</div>
    </div>
  );

  const stats = [
    { label: "Total Users",    value: "2",  icon: "👥", color: "#5B2C9F" },
    { label: "Total Notices",  value: "6",  icon: "📢", color: "#FF8C00" },
    { label: "Resources",      value: "6",  icon: "📁", color: "#17b26a" },
    { label: "Active Sessions",value: "1",  icon: "🟢", color: "#2563EB" },
  ];

  const TABS = ["overview","users","notices","resources"];

  return (
    <div style={{ background: "#0d0618", minHeight: "100vh", paddingTop: "4rem", color: "#fbfbff" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1.5rem" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 900 }}>Admin Dashboard</h1>
            <p style={{ color: "#9ca3af", marginTop: ".25rem" }}>Welcome back, {user.name}!</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", background: "rgba(240,68,56,0.15)", border: "1px solid rgba(240,68,56,0.4)", color: "#f04438", borderRadius: ".75rem", cursor: "pointer", fontWeight: 600 }}>
            Logout
          </button>
        </div>

        <div style={{ display: "flex", gap: ".5rem", marginBottom: "2rem", borderBottom: "1px solid rgba(91,44,159,0.3)", paddingBottom: "1rem", flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: ".625rem 1.25rem", borderRadius: ".75rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: ".875rem", textTransform: "capitalize",
                background: tab === t ? "linear-gradient(to right, #FF8C00, #5B2C9F)" : "transparent",
                color: tab === t ? "#fff" : "#9ca3af" }}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                  <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{s.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: s.color }}>{s.value}</div>
                  <div style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Company Details</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>📍 Mandikhatar, Budhanilkantha-09, Kathmandu 44600, Bagmati, Nepal</p>
                <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>📞 +977-01-4375420</p>
                <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>✉️ rwct.raptorwebcraft@gmail.com</p>
              </div>
            </div>
          </div>
        )}

        {tab === "users" && (
          <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>User Management</h3>
            <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>Connect your MongoDB database to manage users in real-time. Users inserted via Atlas UI will appear here once the API is connected.</p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { name: "Raptor Admin", email: "admin@raptorwebcraft.com", role: "admin" },
                { name: "John Doe",     email: "user@raptorwebcraft.com",  role: "user"  },
              ].map((u) => (
                <div key={u.email} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(26,10,46,0.6)", borderRadius: ".75rem", padding: "1rem", flexWrap: "wrap", gap: ".5rem" }}>
                  <div>
                    <p style={{ fontWeight: 600 }}>{u.name}</p>
                    <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>{u.email}</p>
                  </div>
                  <span style={{ background: u.role === "admin" ? "rgba(255,140,0,0.2)" : "rgba(91,44,159,0.2)", color: u.role === "admin" ? "#FF8C00" : "#c084fc", padding: ".25rem .75rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 700, textTransform: "capitalize" }}>
                    {u.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "notices" && (
          <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700 }}>Notices Management</h3>
              <button onClick={() => toast.success("Notice creation form coming soon!")}
                style={{ background: "linear-gradient(to right, #FF8C00, #5B2C9F)", border: "none", color: "#fff", padding: ".5rem 1rem", borderRadius: ".5rem", cursor: "pointer", fontWeight: 600 }}>
                + Add Notice
              </button>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>Manage all company notices and announcements from here. Connect the API to enable full CRUD operations.</p>
          </div>
        )}

        {tab === "resources" && (
          <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700 }}>Resources Management</h3>
              <button onClick={() => toast.success("Resource upload form coming soon!")}
                style={{ background: "linear-gradient(to right, #FF8C00, #5B2C9F)", border: "none", color: "#fff", padding: ".5rem 1rem", borderRadius: ".5rem", cursor: "pointer", fontWeight: 600 }}>
                + Add Resource
              </button>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>Upload and manage downloadable resources for your clients. Connect the API to enable file uploads and management.</p>
          </div>
        )}

      </div>
    </div>
  );
}
