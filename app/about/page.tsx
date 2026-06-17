"use client";
import { FaBullseye, FaEye, FaHeart, FaCode, FaLightbulb, FaHandshake } from "react-icons/fa";

const VALUES = [
  { icon: FaCode,       title: "Innovation",  desc: "We embrace cutting-edge technologies to deliver forward-thinking solutions." },
  { icon: FaHeart,      title: "Integrity",   desc: "Honest, transparent relationships with every client and partner." },
  { icon: FaBullseye,   title: "Excellence",  desc: "We hold ourselves to the highest standards in every project we deliver." },
  { icon: FaHandshake,  title: "Partnership", desc: "We treat our clients as long-term partners, not just customers." },
  { icon: FaLightbulb,  title: "Creativity",  desc: "Unique, creative approaches to every challenge we face." },
  { icon: FaEye,        title: "Vision",      desc: "We see beyond today, building solutions ready for tomorrow." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#0d0618", color: "#fbfbff", paddingTop: "5rem" }}>
      <section style={{ padding: "4rem 1.5rem 3rem", textAlign: "center", background: "radial-gradient(ellipse at top,rgba(91,44,159,0.25) 0%,transparent 70%)" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, marginBottom: "1rem" }}>About <span style={{ color: "#FF8C00" }}>Raptor Webcraft</span></h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7 }}>A Software & Tech Solutions company based in Kathmandu, Nepal — developing websites, delivering IT consulting, and providing technology advisory services since 2019.</p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem" }}>
          <div style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1.25rem", padding: "2rem" }}>
            <FaBullseye style={{ fontSize: "2rem", color: "#FF8C00", marginBottom: "1rem" }} />
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".75rem", fontSize: "1.25rem" }}>Our Mission</h3>
            <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>To empower businesses in Nepal and beyond with innovative, reliable, and cutting-edge technology solutions that drive growth, efficiency, and digital transformation.</p>
          </div>
          <div style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1.25rem", padding: "2rem" }}>
            <FaEye style={{ fontSize: "2rem", color: "#5B2C9F", marginBottom: "1rem" }} />
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".75rem", fontSize: "1.25rem" }}>Our Vision</h3>
            <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>To be the most trusted technology partner in South Asia, recognized for delivering world-class digital solutions with a client-first approach and unwavering commitment to excellence.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem,4vw,2.25rem)", fontWeight: 800, marginBottom: "2.5rem" }}>Our <span style={{ color: "#FF8C00" }}>Core Values</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
          {VALUES.map((v) => (
            <div key={v.title} style={{ background: "rgba(26,10,46,0.5)", border: "1px solid rgba(91,44,159,0.25)", borderRadius: "1rem", padding: "1.5rem" }}>
              <v.icon style={{ fontSize: "1.5rem", color: "#FF8C00", marginBottom: ".75rem" }} />
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{v.title}</h4>
              <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem,4vw,2.25rem)", fontWeight: 800, marginBottom: "2.5rem" }}>Company <span style={{ color: "#FF8C00" }}>Timeline</span></h2>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          {[
            { year: "2019", event: "Raptor Webcraft Technologies founded in Kathmandu" },
            { year: "2020", event: "First major enterprise website project delivered" },
            { year: "2021", event: "Expanded into IT Consulting & Advisory services" },
            { year: "2022", event: "Reached 25+ satisfied clients milestone" },
            { year: "2023", event: "Launched full-stack software development division" },
            { year: "2024", event: "50+ projects delivered, growing team & services" },
          ].map((item) => (
            <div key={item.year} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ background: "linear-gradient(to bottom,#FF8C00,#5B2C9F)", color: "#fff", fontWeight: 800, fontSize: ".875rem", padding: ".375rem .875rem", borderRadius: "999px", flexShrink: 0 }}>{item.year}</div>
              <p style={{ color: "#d1d5db", lineHeight: 1.6, paddingTop: ".25rem" }}>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "rgba(91,44,159,0.08)", borderTop: "1px solid rgba(91,44,159,0.2)", textAlign: "center" }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>📍 Visit Us</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>
            Mandikhatar, Budhanilkantha-09<br/>Kathmandu 44600, Bagmati, Nepal<br/>
            <a href="tel:+977014375420" style={{ color: "#FF8C00", textDecoration: "none" }}>+977-01-4375420</a><br/>
            <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ color: "#FF8C00", textDecoration: "none" }}>rwct.raptorwebcraft@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
