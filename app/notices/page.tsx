"use client";
import { useState } from "react";

const SEED = [
  { id: 1, title: "System Maintenance Notice",   content: "Scheduled maintenance on Saturday 2 AM–6 AM.",               type: "urgent",    pinned: true  },
  { id: 2, title: "New Services Launched",        content: "We have launched cloud hosting and DevOps services.",         type: "update",    pinned: true  },
  { id: 3, title: "Office Hours Update",          content: "Our office is now open Mon–Sat, 9 AM–6 PM.",                 type: "general",   pinned: false },
  { id: 4, title: "Security Policy Update",       content: "Please review the updated security guidelines.",             type: "important", pinned: false },
  { id: 5, title: "Holiday Notice",               content: "We will be closed on national public holidays.",             type: "general",   pinned: false },
];

const TYPE_COLORS: Record<string, string> = {
  urgent:    "#f04438",
  important: "#FF8C00",
  update:    "#34d399",
  general:   "#60a5fa",
};

export default function NoticesPage() {
  const [q,    setQ]    = useState("");
  const [type, setType] = useState("All");
  const types = ["All", "urgent", "important", "update", "general"];
  const filtered = SEED.filter((n) =>
    (type === "All" || n.type === type) &&
    n.title.toLowerCase().includes(q.toLowerCase())
  );
  const pinned = filtered.filter((n) => n.pinned);
  const rest   = filtered.filter((n) => !n.pinned);
  return (
    <div style={{ paddingTop: "4rem" }}>
      <section style={{ padding: "6rem 1.5rem 3rem", textAlign: "center",
        background: "linear-gradient(135deg,#0d0618,#1a0a2e)" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
          Notices &amp; <span style={{ color: "#FF8C00" }}>Announcements</span>
        </h1>
        <p style={{ color: "#9ca3af", maxWidth: "36rem", margin: "0 auto 2rem" }}>
          Stay updated with the latest announcements from Raptor Webcraft.
        </p>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search notices..."
          style={{ width: "100%", maxWidth: "32rem", padding: ".75rem 1.25rem",
            background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.4)",
            borderRadius: ".75rem", color: "#fff", fontSize: "1rem", outline: "none" }} />
      </section>
      <section style={{ padding: "3rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {types.map((t) => (
              <button key={t} onClick={() => setType(t)} style={{
                padding: ".5rem 1.25rem", borderRadius: "2rem", border: "none", cursor: "pointer",
                background: type === t ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "rgba(26,10,46,0.6)",
                color: type === t ? "#fff" : "#9ca3af", fontWeight: 600, fontSize: ".875rem" }}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          {[...pinned, ...rest].map((n) => (
            <div key={n.id} style={{ padding: "1.5rem", background: "rgba(26,10,46,0.6)",
              border: "1px solid " + (n.pinned ? "rgba(255,140,0,0.4)" : "rgba(91,44,159,0.3)"),
              borderRadius: "1rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: ".75rem", alignItems: "center", marginBottom: ".75rem" }}>
                {n.pinned && <span style={{ fontSize: ".75rem", color: "#FF8C00", fontWeight: 700 }}>📌 PINNED</span>}
                <span style={{ padding: ".25rem .75rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 700,
                  background: TYPE_COLORS[n.type] + "22", color: TYPE_COLORS[n.type] }}>
                  {n.type.toUpperCase()}
                </span>
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{n.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: ".9375rem", lineHeight: 1.6 }}>{n.content}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "#9ca3af", padding: "3rem" }}>No notices found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
