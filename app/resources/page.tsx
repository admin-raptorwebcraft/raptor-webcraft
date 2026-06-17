"use client";
import { useState } from "react";

const RESOURCES = [
  { id: 1, title: "Web Development Best Practices Guide", category: "Guide", desc: "A comprehensive guide to modern web development standards and best practices.", tags: ["Web Dev", "Best Practices"], icon: "📖" },
  { id: 2, title: "IT Infrastructure Assessment Template", category: "Template", desc: "Use this template to assess and document your current IT infrastructure.", tags: ["IT", "Template"], icon: "📋" },
  { id: 3, title: "Cybersecurity Checklist 2024", category: "Document", desc: "Essential cybersecurity checklist to protect your business from common threats.", tags: ["Security", "Checklist"], icon: "🔒" },
  { id: 4, title: "Cloud Migration Strategy Guide", category: "Guide", desc: "Step-by-step guide to planning and executing a successful cloud migration.", tags: ["Cloud", "Migration"], icon: "☁️" },
  { id: 5, title: "React & Next.js Starter Template", category: "Template", desc: "Production-ready starter template with authentication, database, and deployment configs.", tags: ["React", "Next.js"], icon: "⚛️" },
  { id: 6, title: "Business Digital Transformation Roadmap", category: "Document", desc: "A strategic roadmap to guide your organization through digital transformation.", tags: ["Strategy", "Digital"], icon: "🗺️" },
];

const CATS = ["All", "Guide", "Template", "Document"];

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [cat,    setCat]    = useState("All");

  const filtered = RESOURCES.filter((r) => {
    const matchCat  = cat === "All" || r.category === cat;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main style={{ background: "#0d0618", color: "#fbfbff", paddingTop: "4rem", minHeight: "100vh" }}>
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg, #0d0618, #1a0a2e)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem" }}>
            <span style={{ color: "#FF8C00" }}>Resources</span> &amp; Downloads
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>Guides, templates, and documents to help your business grow.</p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              style={{ flex: 1, minWidth: "200px", background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.4)", color: "#fff", padding: ".75rem 1rem", borderRadius: ".75rem", outline: "none", fontSize: ".9rem" }} />
            <div style={{ display: "flex", gap: ".5rem" }}>
              {CATS.map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  style={{ padding: ".5rem 1rem", borderRadius: "2rem", border: "1px solid rgba(91,44,159,0.4)", background: cat === c ? "linear-gradient(to right, #FF8C00, #5B2C9F)" : "rgba(26,10,46,0.6)", color: "#fff", cursor: "pointer", fontSize: ".875rem", fontWeight: cat === c ? 700 : 400 }}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {filtered.map((r) => (
              <div key={r.id} style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{r.icon}</div>
                <span style={{ background: "rgba(255,140,0,0.15)", color: "#FF8C00", padding: ".25rem .625rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 600 }}>{r.category}</span>
                <h3 style={{ color: "#fff", fontWeight: 700, margin: ".75rem 0 .5rem", fontSize: "1.05rem" }}>{r.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6, marginBottom: "1rem" }}>{r.desc}</p>
                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {r.tags.map((t) => (
                    <span key={t} style={{ background: "rgba(91,44,159,0.2)", color: "#c084fc", padding: ".2rem .625rem", borderRadius: "2rem", fontSize: ".75rem" }}>{t}</span>
                  ))}
                </div>
                <button style={{ background: "linear-gradient(to right, #FF8C00, #5B2C9F)", border: "none", color: "#fff", padding: ".5rem 1.25rem", borderRadius: ".5rem", cursor: "pointer", fontSize: ".875rem", fontWeight: 600 }}>
                  Download / View
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem", color: "#9ca3af" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <p>No resources found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
