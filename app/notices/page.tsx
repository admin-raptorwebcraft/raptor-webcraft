"use client";
import { useState } from "react";

const seedNotices = [
  { id: 1, title: "System Maintenance", content: "Scheduled maintenance on Sunday 2-4 AM.", type: "important", pinned: true,  date: "2024-06-01" },
  { id: 2, title: "New Services Launch", content: "We are launching our new Cloud Solutions package!", type: "update",    pinned: false, date: "2024-05-28" },
  { id: 3, title: "Office Holiday",      content: "Our office will be closed on Dashain holidays.", type: "general",   pinned: false, date: "2024-05-20" },
  { id: 4, title: "Security Alert",      content: "Please update your passwords immediately.", type: "urgent",    pinned: true,  date: "2024-05-15" },
  { id: 5, title: "Q2 Newsletter",       content: "Check out our Q2 2024 newsletter with updates.", type: "general",   pinned: false, date: "2024-05-10" },
];

const types = ["All","general","important","urgent","update"];
const typeColors: Record<string, string> = {
  general: "#3b82f6", important: "#f59e0b", urgent: "#ef4444", update: "#10b981"
};

export default function NoticesPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filtered = seedNotices.filter((n) => {
    const matchType = type === "All" || n.type === type;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div style={{ paddingTop: "4rem", minHeight: "100vh", background: "#0d0618" }}>
      <section style={{ padding: "4rem 1.5rem 2rem", textAlign: "center",
        background: "radial-gradient(ellipse at top,#1a0a2e,#0d0618)" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
          Notices & <span style={{ color: "#FF8C00" }}>Announcements</span>
        </h1>
        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>Stay up to date with company news</p>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notices..." style={{
              padding: ".75rem 1rem", borderRadius: ".75rem", fontSize: "1rem", width: "100%",
              background: "rgba(91,44,159,.1)", border: "1px solid rgba(91,44,159,.4)",
              color: "#fff", outline: "none"
            }} />
        </div>
      </section>

      <div style={{ maxWidth: "55rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", gap: ".75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {types.map((t) => (
            <button key={t} onClick={() => setType(t)} style={{
              padding: ".5rem 1.25rem", borderRadius: "2rem", cursor: "pointer",
              fontWeight: 600, fontSize: ".875rem", transition: "all .2s", textTransform: "capitalize",
              background: type === t ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "rgba(91,44,159,.15)",
              border: type === t ? "none" : "1px solid rgba(91,44,159,.4)",
              color: type === t ? "#fff" : "#9ca3af"
            }}>{t === "All" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filtered.map((n) => (
            <div key={n.id} style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
              borderRadius: "1.25rem", padding: "1.5rem",
              borderLeft: "4px solid " + (typeColors[n.type] || "#5B2C9F") }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: ".5rem", marginBottom: ".75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                  {n.pinned && (
                    <span style={{ padding: ".2rem .6rem", borderRadius: "2rem", fontSize: ".7rem",
                      background: "rgba(255,140,0,.2)", color: "#FF8C00", fontWeight: 700 }}>📌 PINNED</span>
                  )}
                  <span style={{ padding: ".2rem .6rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 600,
                    background: typeColors[n.type] + "25", color: typeColors[n.type], border: "1px solid " + typeColors[n.type] + "50",
                    textTransform: "capitalize" }}>{n.type}</span>
                </div>
                <span style={{ color: "#6b7280", fontSize: ".8rem" }}>{n.date}</span>
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: ".5rem" }}>{n.title}</h3>
              <p style={{ color: "#9ca3af", lineHeight: 1.6, fontSize: ".9rem" }}>{n.content}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: "#9ca3af" }}>
              No notices found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
