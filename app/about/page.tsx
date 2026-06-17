"use client";
import Image from "next/image";

const values = [
  { icon: "🚀", title: "Innovation",    desc: "Always pushing boundaries with the latest technology." },
  { icon: "✅", title: "Quality",       desc: "We never compromise on the quality of our deliverables." },
  { icon: "🤝", title: "Integrity",     desc: "Honest, transparent relationships with every client." },
  { icon: "💡", title: "Creativity",    desc: "Unique solutions tailored to each client's needs." },
  { icon: "👥", title: "Collaboration", desc: "Working hand-in-hand with clients to achieve their goals." },
  { icon: "🌱", title: "Growth",        desc: "We grow with our clients and the technology landscape." },
];

const timeline = [
  { year: "2019", event: "Raptor Webcraft Technologies founded in Kathmandu" },
  { year: "2020", event: "Expanded into IT Consulting and Advisory services" },
  { year: "2021", event: "Delivered 20+ projects across Nepal and South Asia" },
  { year: "2022", event: "Launched Cloud Solutions and Mobile App division" },
  { year: "2023", event: "Reached 30+ happy clients milestone" },
  { year: "2024", event: "Now serving clients internationally" },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <style>{`
        .vc { transition: transform .2s; }
        .vc:hover { transform: translateY(-4px); }
      `}</style>

      <section style={{ padding: "5rem 1.5rem 3rem", textAlign: "center",
        background: "radial-gradient(ellipse at top,#1a0a2e,#0d0618)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#FF8C00", fontWeight: 600, textTransform: "uppercase",
            letterSpacing: ".15em", marginBottom: "1rem" }}>About Us</p>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem" }}>
            Who is <span style={{ color: "#FF8C00" }}>Raptor Webcraft?</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Raptor Webcraft Technologies is a Kathmandu-based software and technology solutions company
            dedicated to building powerful digital experiences, providing expert IT consulting, and delivering
            strategic technology advisory services.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "75rem", margin: "0 auto", display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
            borderRadius: "1.25rem", padding: "2rem" }}>
            <h2 style={{ color: "#FF8C00", fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>🎯 Our Mission</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.7 }}>
              To empower businesses with innovative technology solutions, helping them thrive in the digital age through
              expert website development, IT consulting, and strategic advisory services.
            </p>
          </div>
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
            borderRadius: "1.25rem", padding: "2rem" }}>
            <h2 style={{ color: "#FF8C00", fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>👁 Our Vision</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.7 }}>
              To become the leading technology partner for businesses across South Asia, recognized for our commitment
              to quality, innovation, and delivering real business value through technology.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "rgba(91,44,159,.03)" }}>
        <div style={{ maxWidth: "75rem", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 900, color: "#fff",
            marginBottom: "2.5rem" }}>Our Core <span style={{ color: "#FF8C00" }}>Values</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem" }}>
            {values.map((v) => (
              <div key={v.title} className="vc"
                style={{ background: "rgba(26,10,46,.7)", border: "1px solid rgba(91,44,159,.25)",
                  borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>{v.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{v.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 900, color: "#fff",
            marginBottom: "2.5rem" }}>Our <span style={{ color: "#FF8C00" }}>Journey</span></h2>
          {timeline.map((t, i) => (
            <div key={t.year} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "50%",
                background: "linear-gradient(to bottom right,#FF8C00,#5B2C9F)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: ".875rem", color: "#fff" }}>{t.year}</div>
              <div style={{ background: "rgba(26,10,46,.7)", border: "1px solid rgba(91,44,159,.25)",
                borderRadius: "1rem", padding: "1rem 1.25rem", flex: 1 }}>
                <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", textAlign: "center",
        background: "rgba(91,44,159,.05)", borderTop: "1px solid rgba(91,44,159,.2)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            📍 Visit Us
          </h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.8, marginBottom: ".5rem" }}>
            Mandikhatar, Budhanilkantha-09, Kathmandu 44600, Bagmati, Nepal
          </p>
          <p style={{ color: "#9ca3af" }}>📞 +977-01-4375420</p>
          <a href="mailto:rwct.raptorwebcraft@gmail.com"
            style={{ color: "#FF8C00", textDecoration: "none", fontWeight: 600 }}>
            ✉ rwct.raptorwebcraft@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
