"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UserDashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const u = localStorage.getItem("rwt_user");
      if (!u) { router.push("/login"); return; }
      setUser(JSON.parse(u));
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
      <div style={{ color: "#FF8C00" }}>Loading...</div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#0d0618", paddingTop: "4rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#fff" }}>My Dashboard</h1>
            <p style={{ color: "#9ca3af" }}>Welcome back, {user.name}</p>
          </div>
          <button onClick={logout} style={{ padding: ".625rem 1.25rem", background: "rgba(240,68,56,0.15)",
            border: "1px solid rgba(240,68,56,0.3)", borderRadius: ".75rem", color: "#f04438",
            cursor: "pointer", fontWeight: 600 }}>Logout</button>
        </div>

        <div style={{ padding: "1.5rem", background: "linear-gradient(135deg,rgba(255,140,0,0.15),rgba(91,44,159,0.15))",
          border: "1px solid rgba(255,140,0,0.3)", borderRadius: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "4rem", height: "4rem", borderRadius: "50%",
              background: "linear-gradient(to bottom right,#FF8C00,#5B2C9F)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 style={{ color: "#fff", fontWeight: 700 }}>{user.name}</h2>
              <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>{user.email}</p>
              <span style={{ padding: ".25rem .75rem", background: "rgba(96,165,250,0.15)",
                borderRadius: "2rem", color: "#60a5fa", fontSize: ".75rem", fontWeight: 700 }}>
                {user.role}
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          {[
            { label: "Resources Available", value: "6",  icon: "📚", link: "/resources" },
            { label: "Active Notices",       value: "5",  icon: "📢", link: "/notices"   },
            { label: "Company Email",        value: "✉️", icon: "📧", link: null         },
            { label: "Support Phone",        value: "📞", icon: "📱", link: null         },
          ].map((s) => (
            <div key={s.label} style={{ padding: "1.5rem", background: "rgba(26,10,46,0.6)",
              border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem" }}>
              <div style={{ fontSize: "1.875rem", marginBottom: ".5rem" }}>{s.icon}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FF8C00" }}>{s.value}</div>
              <div style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s.label}</div>
              {s.link && (
                <Link href={s.link} style={{ display: "inline-block", marginTop: ".5rem",
                  color: "#c084fc", fontSize: ".8125rem", textDecoration: "none" }}>View →</Link>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: "1.5rem", background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem" }}>
          <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Quick Links</h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { href: "/resources", label: "Browse Resources", color: "#FF8C00" },
              { href: "/notices",   label: "View Notices",     color: "#c084fc" },
              { href: "/about",     label: "About Us",         color: "#60a5fa" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{
                padding: ".625rem 1.25rem", background: "rgba(13,6,24,0.6)",
                border: "1px solid rgba(91,44,159,0.3)", borderRadius: ".75rem",
                color: l.color, textDecoration: "none", fontWeight: 600, fontSize: ".875rem" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
