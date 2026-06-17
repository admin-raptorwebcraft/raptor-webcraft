"use client";
import { useState } from "react";

const seedResources = [
  { id: 1, title: "Web Dev Best Practices Guide", desc: "Complete guide to modern web development.", category: "Guide", type: "guide", tags: ["Next.js","React","TypeScript"] },
  { id: 2, title: "IT Security Checklist", desc: "Comprehensive IT security assessment template.", category: "Template", type: "template", tags: ["Security","IT","Checklist"] },
  { id: 3, title: "Cloud Migration Playbook", desc: "Step-by-step guide to migrating to the cloud.", category: "Guide", type: "guide", tags: ["Cloud","AWS","DevOps"] },
  { id: 4, title: "React Component Library", desc: "A library of reusable React components.", category: "Document", type: "document", tags: ["React","Components","UI"] },
  { id: 5, title: "Database Design Patterns", desc: "Common database design patterns for scalable apps.", category: "Guide", type: "guide", tags: ["MongoDB","Database","Design"] },
  { id: 6, title: "API Design Template", desc: "RESTful API design template and documentation.", category: "Template", type: "template", tags: ["API","REST","Node.js"] },
];

const cats = ["All","Guide","Template","Document"];

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = seedResources.filter((r) => {
    const matchCat = cat === "All" || r.category === cat;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const inp: React.CSSProperties = {
    padding: ".75rem 1rem", borderRadius: ".75rem", fontSize: "1rem", width: "100%",
    background: "rgba(91,44,159,.1)", border: "1px solid rgba(91,44,159,.4)",
    color: "#fff", outline: "none"
  };

  return (
    <div style={{ paddingTop: "4rem", minHeight: "100vh", background: "#0d0618" }}>
      <section style={{ padding: "4rem 1.5rem 2rem", textAlign: "center",
        background: "radial-gradient(ellipse at top,#1a0a2e,#0d0618)" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
          Resources & <span style={{ color: "#FF8C00" }}>Downloads</span>
        </h1>
        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>Guides, templates, and tools for your projects</p>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..." style={inp} />
        </div>
      </section>

      <div style={{ maxWidth: "75rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", gap: ".75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: ".5rem 1.25rem", borderRadius: "2rem", cursor: "pointer",
              fontWeight: 600, fontSize: ".875rem", transition: "all .2s",
              background: cat === c ? "linear-gradient(to right,#FF8C00,#5B2C9F)" : "rgba(91,44,159,.15)",
              border: cat === c ? "none" : "1px solid rgba(91,44,159,.4)",
              color: cat === c ? "#fff" : "#9ca3af"
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
          {filtered.map((r) => (
            <div key={r.id} style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
              borderRadius: "1.25rem", padding: "1.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <span style={{ padding: ".25rem .75rem", borderRadius: "2rem", fontSize: ".75rem", fontWeight: 600,
                  background: "rgba(255,140,0,.15)", color: "#FF8C00", border: "1px solid rgba(255,140,0,.3)" }}>
                  {r.category}
                </span>
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{r.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6, marginBottom: "1rem" }}>{r.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "1.25rem" }}>
                {r.tags.map((t) => (
                  <span key={t} style={{ padding: ".2rem .6rem", borderRadius: "2rem", fontSize: ".75rem",
                    background: "rgba(91,44,159,.2)", color: "#c084fc", border: "1px solid rgba(91,44,159,.3)" }}>{t}</span>
                ))}
              </div>
              <button style={{ width: "100%", padding: ".625rem", borderRadius: ".75rem", cursor: "pointer",
                background: "linear-gradient(to right,#FF8C00,#5B2C9F)", border: "none", color: "#fff",
                fontWeight: 600, fontSize: ".875rem" }}>
                Download →
              </button>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#9ca3af" }}>
            No resources found for "{search}"
          </div>
        )}
      </div>
    </div>
  );
}
