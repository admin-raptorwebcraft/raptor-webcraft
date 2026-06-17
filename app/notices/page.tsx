"use client";
import { useState } from "react";
import { FaBell, FaExclamationTriangle, FaInfoCircle, FaCheckCircle, FaThumbtack, FaSearch } from "react-icons/fa";

const SEED = [
  { id:1, type:"urgent",    title:"Scheduled Maintenance Notice",             date:"2024-06-15", pinned:true,  content:"Our servers will undergo scheduled maintenance on June 20, 2024 from 2:00 AM to 4:00 AM NST." },
  { id:2, type:"important", title:"New Services Launched",                    date:"2024-06-10", pinned:true,  content:"We are excited to announce the launch of our new IT Advisory and Cloud Migration services." },
  { id:3, type:"general",   title:"Office Hours Update",                     date:"2024-06-08", pinned:false, content:"Our office hours have been updated. We are now available Monday to Saturday, 9 AM to 6 PM NST." },
  { id:4, type:"update",    title:"Website Portfolio Updated",                date:"2024-06-05", pinned:false, content:"We have updated our portfolio with 10 new project case studies. Visit our resources section to view them." },
  { id:5, type:"general",   title:"Internship Opportunities Available",       date:"2024-06-01", pinned:false, content:"Raptor Webcraft is now accepting applications for summer internships in web development and IT consulting." },
  { id:6, type:"important", title:"Security Advisory — Update Your Systems", date:"2024-05-28", pinned:false, content:"We advise all clients to update their systems following the recent security advisories published by CERT." },
];

const TYPE_STYLE: Record<string,{color:string;bg:string;label:string}> = {
  urgent:    { color:"#ef4444", bg:"rgba(239,68,68,0.1)",    label:"URGENT" },
  important: { color:"#FF8C00", bg:"rgba(255,140,0,0.1)",   label:"IMPORTANT" },
  update:    { color:"#2563EB", bg:"rgba(37,99,235,0.1)",   label:"UPDATE" },
  general:   { color:"#10b981", bg:"rgba(16,185,129,0.1)",  label:"GENERAL" },
};

export default function NoticesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const filtered = SEED.filter(n =>
    (filter === "all" || n.type === filter) &&
    (n.title.toLowerCase().includes(search.toLowerCase()) || n.content.toLowerCase().includes(search.toLowerCase()))
  ).sort((a,b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  return (
    <div style={{ background: "#0d0618", color: "#fbfbff", minHeight: "100vh", paddingTop: "5rem" }}>
      <section style={{ padding: "3rem 1.5rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: "1rem" }}>Notices & <span style={{ color: "#FF8C00" }}>Announcements</span></h1>
        <p style={{ color: "#9ca3af", maxWidth: "36rem", margin: "0 auto 2rem" }}>Stay updated with the latest notices and announcements from Raptor Webcraft Technologies.</p>
        <div style={{ maxWidth: "36rem", margin: "0 auto", position: "relative" }}>
          <FaSearch style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#6b7280" }} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notices..." style={{ width: "100%", padding: ".75rem 1rem .75rem 2.75rem", background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.4)", borderRadius: ".875rem", color: "#fff", fontSize: ".9375rem", boxSizing: "border-box" }} />
        </div>
      </section>
      <section style={{ padding: "0 1.5rem 4rem", maxWidth: "64rem", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
          {["all","urgent","important","update","general"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: ".5rem 1.25rem", borderRadius: "999px", border: "1px solid", borderColor: filter === f ? "#FF8C00" : "rgba(91,44,159,0.4)", background: filter === f ? "rgba(255,140,0,0.15)" : "transparent", color: filter === f ? "#FF8C00" : "#9ca3af", cursor: "pointer", fontWeight: 600, fontSize: ".875rem", textTransform: "capitalize" }}>{f}</button>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filtered.map(n => {
            const ts = TYPE_STYLE[n.type];
            return (
              <div key={n.id} style={{ background: "rgba(26,10,46,0.6)", border: n.pinned ? "1px solid rgba(255,140,0,0.4)" : "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: ".75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                    {n.pinned && <FaThumbtack style={{ color: "#FF8C00" }} />}
                    <span style={{ fontSize: ".75rem", fontWeight: 700, color: ts.color, background: ts.bg, padding: ".25rem .625rem", borderRadius: "999px" }}>{ts.label}</span>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{n.title}</h3>
                  </div>
                  <span style={{ color: "#6b7280", fontSize: ".8125rem" }}>{n.date}</span>
                </div>
                <p style={{ color: "#9ca3af", lineHeight: 1.6, fontSize: ".9375rem" }}>{n.content}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
