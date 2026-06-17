"use client";
import { useState } from "react";
import { FaSearch, FaDownload, FaExternalLinkAlt, FaFileAlt, FaVideo, FaBook, FaTools } from "react-icons/fa";

const SEED = [
  { id:1, title:"Web Development Best Practices Guide",   category:"Guide",    type:"PDF",  desc:"Comprehensive guide covering modern web development standards and best practices.", tags:["web","guide","best-practices"] },
  { id:2, title:"IT Security Checklist Template",          category:"Template", type:"DOC",  desc:"A complete IT security checklist for businesses of all sizes.",                   tags:["security","template","IT"] },
  { id:3, title:"Introduction to Cloud Computing",         category:"Video",    type:"MP4",  desc:"Video tutorial series introducing cloud computing concepts and AWS basics.",        tags:["cloud","aws","tutorial"] },
  { id:4, title:"React & Next.js Starter Boilerplate",     category:"Template", type:"ZIP",  desc:"Production-ready Next.js boilerplate with TypeScript, Tailwind, and auth.",        tags:["react","nextjs","template"] },
  { id:5, title:"Digital Transformation Roadmap",          category:"Guide",    type:"PDF",  desc:"Step-by-step roadmap for businesses embarking on digital transformation.",          tags:["digital","strategy","guide"] },
  { id:6, title:"MongoDB Atlas Setup Tutorial",            category:"Document", type:"PDF",  desc:"Step-by-step tutorial for setting up MongoDB Atlas for production applications.",   tags:["mongodb","database","tutorial"] },
];

const CATS = ["All","Guide","Template","Video","Document"];
const ICONS: Record<string,React.ElementType> = { PDF:FaFileAlt, DOC:FaBook, MP4:FaVideo, ZIP:FaTools };

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [cat,    setCat]    = useState("All");
  const filtered = SEED.filter(r =>
    (cat === "All" || r.category === cat) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div style={{ background: "#0d0618", color: "#fbfbff", minHeight: "100vh", paddingTop: "5rem" }}>
      <section style={{ padding: "3rem 1.5rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: "1rem" }}>Resources & <span style={{ color: "#FF8C00" }}>Downloads</span></h1>
        <p style={{ color: "#9ca3af", maxWidth: "36rem", margin: "0 auto 2rem" }}>Access guides, templates, and tutorials from Raptor Webcraft Technologies.</p>
        <div style={{ maxWidth: "36rem", margin: "0 auto", position: "relative" }}>
          <FaSearch style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#6b7280" }} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search resources..." style={{ width: "100%", padding: ".75rem 1rem .75rem 2.75rem", background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.4)", borderRadius: ".875rem", color: "#fff", fontSize: ".9375rem", boxSizing: "border-box" }} />
        </div>
      </section>
      <section style={{ padding: "0 1.5rem 1.5rem", maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{ padding: ".5rem 1.25rem", borderRadius: "999px", border: "1px solid", borderColor: cat === c ? "#FF8C00" : "rgba(91,44,159,0.4)", background: cat === c ? "rgba(255,140,0,0.15)" : "transparent", color: cat === c ? "#FF8C00" : "#9ca3af", cursor: "pointer", fontWeight: 600, fontSize: ".875rem" }}>{c}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
          {filtered.map(r => {
            const Icon = ICONS[r.type] || FaFileAlt;
            return (
              <div key={r.id} style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1.25rem", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ padding: ".75rem", borderRadius: ".75rem", background: "rgba(255,140,0,0.15)", flexShrink: 0 }}>
                    <Icon style={{ color: "#FF8C00", fontSize: "1.25rem" }} />
                  </div>
                  <div>
                    <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".25rem", fontSize: ".9375rem" }}>{r.title}</h3>
                    <span style={{ fontSize: ".75rem", color: "#c084fc", background: "rgba(91,44,159,0.2)", padding: ".125rem .5rem", borderRadius: "999px" }}>{r.type}</span>
                  </div>
                </div>
                <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6, marginBottom: "1rem" }}>{r.desc}</p>
                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {r.tags.map(t => <span key={t} style={{ fontSize: ".75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: ".125rem .5rem", borderRadius: "999px" }}>#{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: ".5rem" }}>
                  <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem", padding: ".5rem", borderRadius: ".625rem", border: "none", background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff", cursor: "pointer", fontSize: ".875rem", fontWeight: 600 }}>
                    <FaDownload /> Download
                  </button>
                  <button style={{ padding: ".5rem .875rem", borderRadius: ".625rem", border: "1px solid rgba(91,44,159,0.4)", background: "transparent", color: "#9ca3af", cursor: "pointer" }}>
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
