"use client";
import { useState } from "react";

const SEED = [
  { id: 1, title: "Website Development Guide", type: "guide",    desc: "Complete guide to modern web development practices.", tag: "Development" },
  { id: 2, title: "IT Strategy Template",      type: "template", desc: "Plan your IT infrastructure with this template.",     tag: "Strategy" },
  { id: 3, title: "SEO Best Practices",        type: "guide",    desc: "Optimize your website for search engines.",           tag: "SEO" },
  { id: 4, title: "Security Checklist",        type: "document", desc: "Essential security measures for your business.",      tag: "Security" },
  { id: 5, title: "Project Proposal Template", type: "template", desc: "Professional project proposal template.",             tag: "Business" },
  { id: 6, title: "Tech Stack Overview",       type: "document", desc: "Overview of modern tech stacks for web apps.",        tag: "Technology" },
];

const CATS = ["All", "guide", "template", "document"];
const TAG_COLORS: Record<string, string> = {
  guide:    "#FF8C00",
  template: "#c084fc",
  document: "#60a5fa",
  video:    "#34d399",
};

export default function ResourcesPage() {
  const [q,   setQ]   = useState("");
  const [cat, setCat] = useState("All");
  const filtered = SEED.filter((r) =>
    (cat === "All" || r.type === cat) &&
    (r.title.toLowerCase().includes(q.toLowerCase()) || r.desc.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div style={{ paddingTop: "4rem" }}>
      <section style={{ padding: "6rem 1.5rem 3rem", textAlign: "center",
        background: "linear-gradient(135deg,#0d0618,#1a0a2e)" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
          Resources &amp; <span style={{ color: "#FF8C00" }}>Downloads</span>
        </h1>
        <p style={{ color: "#9ca3af", maxWidth: "36rem", margin: "0 auto 2rem" }}>
          Guides, templates, and documents to help your business grow.
        </p>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search resources..."
          style={{ width: "100%", maxWidth: "32rem", padding: ".75rem 1.25rem",
            background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.4)",
            borderRadius: ".75rem", color: "#fff", fontSize: "1rem", outline: "none" }} />
      </section>
      <section style={{ padding: "3rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: ".5rem 1.25rem", borderRadius: "2rem", border: "none", cursor: "pointer",
                background: cat === c ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "rgba(26,10,46,0.6)",
                color: cat === c ? "#fff" : "#9ca3af", fontWeight: 600, fontSize: ".875rem" }}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {filtered.map((r) => (
              <div key={r.id} style={{ padding: "1.5rem", background: "rgba(26,10,46,0.6)",
                border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ padding: ".25rem .75rem", background: "rgba(255,140,0,0.15)",
                    borderRadius: "2rem", color: TAG_COLORS[r.type] || "#FF8C00", fontSize: ".75rem", fontWeight: 600 }}>
                    {r.type}
                  </span>
                  <span style={{ fontSize: ".75rem", color: "#6b7280" }}>{r.tag}</span>
                </div>
                <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{r.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6, marginBottom: "1rem" }}>{r.desc}</p>
                <button style={{ width: "100%", padding: ".625rem",
                  background: "linear-gradient(to right,#FF8C00,#5B2C9F)",
                  color: "#fff", border: "none", borderRadius: ".5rem", cursor: "pointer", fontWeight: 600 }}>
                  Download
                </button>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "#9ca3af", padding: "3rem" }}>No resources found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
