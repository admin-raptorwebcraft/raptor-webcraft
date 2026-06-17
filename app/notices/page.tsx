"use client";
import { useState } from "react";

const seedNotices = [
  { id: 1, title: "Website Maintenance Scheduled",    content: "Our website will undergo maintenance on Sunday from 2-4 AM NPT. Services may be temporarily unavailable.", type: "important", pinned: true,  date: "2024-06-10" },
  { id: 2, title: "New Service: Mobile App Dev",      content: "We are excited to announce the launch of our mobile application development service!",                    type: "update",    pinned: true,  date: "2024-06-08" },
  { id: 3, title: "Office Hours Reminder",            content: "Our office hours are Sunday-Friday, 9 AM to 6 PM NPT. Contact us at +977-01-4375420.",                   type: "general",   pinned: false, date: "2024-06-05" },
  { id: 4, title: "Security Advisory: Update NOW",    content: "Critical security patches released. All clients using our services should update their applications.",    type: "urgent",    pinned: false, date: "2024-06-03" },
  { id: 5, title: "New Team Members Joined",          content: "We welcome three new engineers to our growing team. We continue to expand to serve you better.",          type: "update",    pinned: false, date: "2024-06-01" },
];

const typeColors: Record<string, string> = {
  general:   "#6b7280",
  important: "#FF8C00",
  urgent:    "#ef4444",
  update:    "#22c55e",
};

export default function NoticesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = ["All", "General", "Important", "Urgent", "Update"];

  const filtered = seedNotices.filter((n) =>
    (filter === "All" || n.type === filter.toLowerCase()) &&
    (n.title.toLowerCase().includes(search.toLowerCase()) || n.content.toLowerCase().includes(search.toLowerCase()))
  );
  const pinned   = filtered.filter((n) => n.pinned);
  const unpinned = filtered.filter((n) => !n.pinned);

  return (
    <div style={{ background: "#0d0618", minHeight: "100vh", paddingTop: "5rem" }}>
      <style>{`
        .notice-card { background: rgba(26,10,46,.6); border-left: 4px solid; border-radius: 1rem; padding: 1.5rem; margin-bottom: 1rem; border-top: 1px solid rgba(91,44,159,.2); border-right: 1px solid rgba(91,44,159,.2); border-bottom: 1px solid rgba(91,44,159,.2); }
        .filter-btn { padding: .5rem 1.25rem; border-radius: 9999px; font-size: .875rem; font-weight: 600; cursor: pointer; transition: all .2s; border: 1px solid rgba(91,44,159,.3); }
        .filter-active { background: linear-gradient(to right,#FF8C00,#5B2C9F); color: #fff; border-color: transparent; }
        .filter-inactive { background: transparent; color: #9ca3af; }
      `}</style>

      <section style={{ padding: "4rem 1.5rem", textAlign: "center", background: "radial-gradient(ellipse at top,rgba(91,44,159,.2) 0%,transparent 60%)" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: ".75rem" }}>
          Notices & <span style={{ color: "#FF8C00" }}>Announcements</span>
        </h1>
        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>Stay up to date with the latest from Raptor Webcraft</p>
        <input
          type="text"
          placeholder="Search notices..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", maxWidth: "480px", padding: ".875rem 1.25rem", borderRadius: ".75rem", background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)", color: "#fff", fontSize: "1rem", outline: "none" }}
        />
      </section>

      <section style={{ padding: "2rem 1.5rem", maxWidth: "56rem", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={"filter-btn " + (filter === f ? "filter-active" : "filter-inactive")}>{f}</button>
          ))}
        </div>

        {pinned.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>📌 Pinned Notices</h3>
            {pinned.map((n) => (
              <div key={n.id} className="notice-card" style={{ borderLeftColor: typeColors[n.type] }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: ".5rem", marginBottom: ".5rem" }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{n.title}</h3>
                  <div style={{ display: "flex", gap: ".5rem" }}>
                    <span style={{ fontSize: ".75rem", padding: ".2rem .65rem", background: "rgba(255,140,0,.1)", color: "#FF8C00", borderRadius: "9999px" }}>📌 Pinned</span>
                    <span style={{ fontSize: ".75rem", padding: ".2rem .65rem", borderRadius: "9999px", background: `rgba(${n.type === "urgent" ? "239,68,68" : "34,197,94"},.1)`, color: typeColors[n.type] }}>{n.type.toUpperCase()}</span>
                  </div>
                </div>
                <p style={{ color: "#9ca3af", fontSize: ".9rem", lineHeight: 1.7 }}>{n.content}</p>
                <p style={{ color: "#6b7280", fontSize: ".75rem", marginTop: ".75rem" }}>{n.date}</p>
              </div>
            ))}
          </div>
        )}

        {unpinned.map((n) => (
          <div key={n.id} className="notice-card" style={{ borderLeftColor: typeColors[n.type] }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: ".5rem", marginBottom: ".5rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{n.title}</h3>
              <span style={{ fontSize: ".75rem", padding: ".2rem .65rem", borderRadius: "9999px", background: `rgba(107,114,128,.1)`, color: typeColors[n.type] }}>{n.type.toUpperCase()}</span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".9rem", lineHeight: 1.7 }}>{n.content}</p>
            <p style={{ color: "#6b7280", fontSize: ".75rem", marginTop: ".75rem" }}>{n.date}</p>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#6b7280" }}>No notices found.</div>
        )}
      </section>
    </div>
  );
}
