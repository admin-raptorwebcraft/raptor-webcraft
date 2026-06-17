"use client";
import { useState } from "react";

const NOTICES = [
  { id: 1, title: "System Maintenance Scheduled", type: "Important", body: "Our servers will undergo scheduled maintenance on Sunday, 2 AM – 4 AM NST. Services may be briefly interrupted.", date: "2024-12-15", pinned: true },
  { id: 2, title: "New IT Consulting Services Available", type: "Update", body: "We have expanded our IT consulting services to include cybersecurity audits and cloud architecture reviews.", date: "2024-12-10", pinned: false },
  { id: 3, title: "Office Closed – Public Holiday", type: "General", body: "Our office will be closed on December 25, 2024 in observance of the public holiday. We will resume on December 26.", date: "2024-12-08", pinned: false },
  { id: 4, title: "Urgent Security Patch Required", type: "Urgent", body: "All clients using our managed hosting service must update their CMS immediately. Please contact us for assistance.", date: "2024-12-05", pinned: true },
  { id: 5, title: "New Resource Pack Released", type: "Update", body: "We have released a new pack of web development templates and IT assessment documents in the Resources section.", date: "2024-12-01", pinned: false },
  { id: 6, title: "Team Meeting – All Staff", type: "General", body: "Monthly all-hands meeting scheduled for December 20, 2024 at 10 AM NST via Google Meet.", date: "2024-11-28", pinned: false },
];

const TYPES = ["All", "General", "Important", "Urgent", "Update"];

const TYPE_COLORS: Record<string, string> = {
  General:   "#9ca3af",
  Important: "#FF8C00",
  Urgent:    "#f04438",
  Update:    "#17b26a",
};

export default function NoticesPage() {
  const [search, setSearch] = useState("");
  const [type,   setType]   = useState("All");

  const filtered = NOTICES.filter((n) => {
    const matchType   = type === "All" || n.type === type;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.body.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  }).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <main style={{ background: "#0d0618", color: "#fbfbff", paddingTop: "4rem", minHeight: "100vh" }}>
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg, #0d0618, #1a0a2e)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem" }}>
            <span style={{ color: "#FF8C00" }}>Notices</span> &amp; Announcements
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>Stay up to date with the latest company announcements and updates.</p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notices..."
              style={{ flex: 1, minWidth: "200px", background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.4)", color: "#fff", padding: ".75rem 1rem", borderRadius: ".75rem", outline: "none", fontSize: ".9rem" }} />
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              {TYPES.map((t) => (
                <button key={t} onClick={() => setType(t)}
                  style={{ padding: ".5rem 1rem", borderRadius: "2rem", border: "1px solid rgba(91,44,159,0.4)", background: type === t ? "linear-gradient(to right, #FF8C00, #5B2C9F)" : "rgba(26,10,46,0.6)", color: "#fff", cursor: "pointer", fontSize: ".8rem", fontWeight: type === t ? 700 : 400 }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {filtered.map((n) => (
              <div key={n.id} style={{ background: "rgba(19,8,32,0.8)", border: n.pinned ? "1px solid rgba(255,140,0,0.5)" : "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".75rem", flexWrap: "wrap" }}>
                  {n.pinned && <span style={{ background: "rgba(255,140,0,0.15)", color: "#FF8C00", padding: ".2rem .625rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 700 }}>📌 Pinned</span>}
                  <span style={{ background: "rgba(91,44,159,0.2)", color: TYPE_COLORS[n.type] || "#9ca3af", padding: ".2rem .625rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 600 }}>{n.type}</span>
                  <span style={{ color: "#6b7280", fontSize: ".8rem", marginLeft: "auto" }}>{n.date}</span>
                </div>
                <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem", fontSize: "1.05rem" }}>{n.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".9rem", lineHeight: 1.6 }}>{n.body}</p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem", color: "#9ca3af" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📭</div>
              <p>No notices found.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
