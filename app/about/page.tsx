"use client";
import Image from "next/image";

const VALUES = [
  { icon: "🎯", title: "Excellence", desc: "We deliver nothing short of the best in every project." },
  { icon: "💡", title: "Innovation", desc: "Constantly pushing boundaries with cutting-edge solutions." },
  { icon: "🤝", title: "Integrity",  desc: "Honest, transparent relationships with every client." },
  { icon: "⚡", title: "Speed",      desc: "Fast delivery without compromising on quality." },
  { icon: "🔒", title: "Security",   desc: "Your data and systems are always protected." },
  { icon: "🌍", title: "Impact",     desc: "Building tech that makes a real difference." },
];

const TIMELINE = [
  { year: "2019", event: "Raptor Webcraft Technologies founded in Kathmandu, Nepal." },
  { year: "2020", event: "Launched first enterprise website development projects." },
  { year: "2021", event: "Expanded into IT Consulting & Advisory Services." },
  { year: "2022", event: "Reached 30+ satisfied clients across Nepal." },
  { year: "2023", event: "Launched dedicated tech solutions division." },
  { year: "2024", event: "Continued growth — 50+ projects delivered." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <section style={{ padding: "6rem 1.5rem 4rem", textAlign: "center",
        background: "linear-gradient(135deg,#0d0618,#1a0a2e,#0d0618)" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <Image src="/logo.jpeg" alt="Raptor Webcraft" width={100} height={100}
            style={{ borderRadius: "1.5rem", objectFit: "contain", marginBottom: "1.5rem" }} />
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            About <span style={{ color: "#FF8C00" }}>Raptor Webcraft</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7 }}>
            A Software & Tech Solutions company based in Kathmandu, Nepal — developing websites, providing IT consulting, and delivering advisory services since 2019.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ padding: "2rem", background: "rgba(255,140,0,0.1)", border: "1px solid rgba(255,140,0,0.3)", borderRadius: "1.25rem" }}>
              <h3 style={{ color: "#FF8C00", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>🎯 Our Mission</h3>
              <p style={{ color: "#d1d5db", lineHeight: 1.7 }}>To empower businesses in Nepal and beyond with innovative, reliable, and affordable technology solutions that drive growth and transformation.</p>
            </div>
            <div style={{ padding: "2rem", background: "rgba(91,44,159,0.1)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1.25rem" }}>
              <h3 style={{ color: "#c084fc", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>👁️ Our Vision</h3>
              <p style={{ color: "#d1d5db", lineHeight: 1.7 }}>To become Nepal's most trusted technology partner, known for excellence, innovation, and meaningful impact in the digital landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "rgba(26,10,46,0.4)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "2.5rem" }}>
            Our <span style={{ color: "#FF8C00" }}>Core Values</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ padding: "1.5rem", background: "rgba(26,10,46,0.6)",
                border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>{v.icon}</div>
                <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: ".5rem" }}>{v.title}</h4>
                <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "2.5rem" }}>
            Our <span style={{ color: "#FF8C00" }}>Journey</span>
          </h2>
          {TIMELINE.map((t, i) => (
            <div key={t.year} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ minWidth: "4rem", textAlign: "center" }}>
                <div style={{ padding: ".5rem", background: "rgba(255,140,0,0.2)",
                  border: "1px solid rgba(255,140,0,0.4)", borderRadius: ".5rem",
                  color: "#FF8C00", fontWeight: 700, fontSize: ".875rem" }}>{t.year}</div>
                {i < TIMELINE.length - 1 && (
                  <div style={{ width: "2px", height: "2rem", background: "rgba(91,44,159,0.4)", margin: ".5rem auto 0" }} />
                )}
              </div>
              <div style={{ padding: "1rem", background: "rgba(26,10,46,0.6)",
                border: "1px solid rgba(91,44,159,0.2)", borderRadius: ".75rem", flex: 1 }}>
                <p style={{ color: "#d1d5db", fontSize: ".9375rem", lineHeight: 1.6 }}>{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "rgba(26,10,46,0.4)", textAlign: "center" }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            📍 Find Us
          </h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>
            Mandikhatar, Budhanilkantha-09<br />
            Kathmandu 44600, Bagmati, Nepal<br />
            📞 +977-01-4375420<br />
            ✉️ rwct.raptorwebcraft@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
