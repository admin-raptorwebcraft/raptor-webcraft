"use client";
import { useState } from "react";

const seedResources = [
  { id: 1, title: "Web Development Guide",    category: "Guide",    type: "📄", desc: "Complete guide to modern web development practices.",        tags: ["HTML", "CSS", "JS"] },
  { id: 2, title: "IT Consulting Checklist",  category: "Template", type: "📋", desc: "Essential checklist for IT consulting engagements.",         tags: ["Consulting", "IT"] },
  { id: 3, title: "Next.js Starter Template", category: "Template", type: "💾", desc: "Production-ready Next.js template with TypeScript.",         tags: ["Next.js", "React"] },
  { id: 4, title: "Cybersecurity Basics",     category: "Guide",    type: "🔒", desc: "Introduction to cybersecurity best practices for SMBs.",     tags: ["Security"] },
  { id: 5, title: "Digital Transformation",  category: "Document", type: "📊", desc: "Whitepaper on digital transformation strategies.",           tags: ["Strategy", "IT"] },
  { id: 6, title: "UI/UX Design System",      category: "Template", type: "🎨", desc: "Complete design system with components and guidelines.",     tags: ["Design", "UI/UX"] },
];

const cats = ["All", "Guide", "Template", "Document"];

export default function ResourcesPage() {
  const [search, setSearch]   = useState("");
  const [cat,    setCat]      = useState("All");

  const filtered = seedResources.filter((r) =>
    (cat === "All" || r.category === cat) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ background: "#0d0618", minHeight: "100vh", paddingTop: "5rem" }}>
      <style>{`
        .res-card { background: rgba(26,10,46,.6); border: 1px solid rgba(91,44,159,.25); border-radius: 1.25rem; padding: 1.75rem; transition: all .3s; }
        .res-card:hover { border-color: rgba(255,140,0,.5); transform: translateY(-4px); }
        .tag { display: inline-block; padding: .2rem .65rem; background: rgba(91,44,159,.2); border: 1px solid rgba(91,44,159,.3); border-radius: 9999px; color: #c084fc; font-size: .75rem; margin: .15rem; }
        .cat-btn { padding: .5rem 1.25rem; border-radius: 9999px; font-size: .875rem; font-weight: 600; cursor: pointer; transition: all .2s; border: 1px solid rgba(91,44,159,.3); }
        .cat-active { background: linear-gradient(to right,#FF8C00,#5B2C9F); color: #fff; border-color: transparent; }
        .cat-inactive { background: transparent; color: #9ca3af; }
      `}</style>

      <section style={{ padding: "4rem 1.5rem", textAlign: "center", background: "radial-gradient(ellipse at top,rgba(91,44,159,.2) 0%,transparent 60%)" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: ".75rem" }}>
          Resources & <span style={{ color: "#FF8C00" }}>Downloads</span>
        </h1>
        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>Guides, templates, and documents to help you succeed</p>
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", maxWidth: "480px", padding: ".875rem 1.25rem", borderRadius: ".75rem", background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)", color: "#fff", fontSize: "1rem", outline: "none" }}
        />
      </section>

      <section style={{ padding: "2rem 1.5rem", maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={"cat-btn " + (cat === c ? "cat-active" : "cat-inactive")}>{c}</button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "#6b7280" }}>No resources found. Try a different search or category.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
            {filtered.map((r) => (
              <div key={r.id} className="res-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{r.type}</div>
                <span style={{ fontSize: ".75rem", padding: ".2rem .65rem", background: "rgba(255,140,0,.1)", color: "#FF8C00", borderRadius: "9999px", border: "1px solid rgba(255,140,0,.3)" }}>{r.category}</span>
                <h3 style={{ color: "#fff", fontWeight: 700, margin: ".75rem 0 .5rem" }}>{r.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.7, marginBottom: "1rem" }}>{r.desc}</p>
                <div style={{ marginBottom: "1.25rem" }}>{r.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                <button style={{ width: "100%", padding: ".75rem", background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff", fontWeight: 600, borderRadius: ".75rem", border: "none", cursor: "pointer" }}>
                  Download / View
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
