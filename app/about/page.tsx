"use client";
import Link from "next/link";

const values = [
  { icon: "💡", title: "Innovation",    desc: "Constantly pushing boundaries with cutting-edge solutions." },
  { icon: "🤝", title: "Integrity",     desc: "Honest, transparent partnerships with every client." },
  { icon: "⭐", title: "Excellence",    desc: "Delivering nothing less than the best in every project." },
  { icon: "👥", title: "Collaboration", desc: "Working together to achieve extraordinary results." },
  { icon: "🚀", title: "Growth",        desc: "Continuously evolving and improving our craft." },
  { icon: "🔒", title: "Security",      desc: "Protecting your digital assets at every level." },
];

const timeline = [
  { year: "2019", title: "Founded",          desc: "Raptor Webcraft Technologies established in Kathmandu." },
  { year: "2020", title: "First 20 Clients", desc: "Rapidly grew client base across Nepal." },
  { year: "2021", title: "Team Expansion",   desc: "Expanded development and consulting team." },
  { year: "2022", title: "Regional Reach",   desc: "Extended services to clients beyond Nepal." },
  { year: "2023", title: "100+ Projects",    desc: "Milestone of 100+ successful project deliveries." },
  { year: "2024", title: "Innovation Hub",   desc: "Launched R&D division for next-gen solutions." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#0d0618", minHeight: "100vh", paddingTop: "5rem" }}>
      <style>{`
        .value-card { background: rgba(26,10,46,.6); border: 1px solid rgba(91,44,159,.25); border-radius: 1.25rem; padding: 1.75rem; transition: all .3s; }
        .value-card:hover { border-color: rgba(255,140,0,.5); transform: translateY(-4px); }
        .timeline-item { display: flex; gap: 1.5rem; padding-bottom: 2rem; position: relative; }
        .timeline-dot { width: 3rem; height: 3rem; background: linear-gradient(to bottom right,#FF8C00,#5B2C9F); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: .75rem; flex-shrink: 0; color: #fff; }
      `}</style>

      {/* Hero */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center", background: "radial-gradient(ellipse at top,rgba(91,44,159,.25) 0%,transparent 60%)" }}>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
          About <span style={{ color: "#FF8C00" }}>Raptor Webcraft</span>
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "1.125rem", maxWidth: "42rem", margin: "0 auto" }}>
          Nepal&apos;s premier software and technology solutions company, headquartered in Kathmandu.
        </p>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: "64rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>Who We <span style={{ color: "#FF8C00" }}>Are</span></h2>
            <p style={{ color: "#9ca3af", lineHeight: 1.8, marginBottom: "1rem" }}>
              Raptor Webcraft Technologies is a Software & Tech Solutions company that develops websites, provides IT consulting, and offers technology advisory services. We are passionate about helping businesses succeed in the digital age.
            </p>
            <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>
              Based in Mandikhatar, Budhanilkantha-09, Kathmandu, Nepal, we serve clients locally and globally with cutting-edge solutions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[{ n: "150+", l: "Projects" }, { n: "50+", l: "Clients" }, { n: "5+", l: "Years" }, { n: "24/7", l: "Support" }].map((s) => (
              <div key={s.l} style={{ background: "rgba(255,140,0,.08)", border: "1px solid rgba(255,140,0,.2)", borderRadius: "1rem", padding: "1.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.875rem", fontWeight: 900, color: "#FF8C00" }}>{s.n}</div>
                <div style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "4rem 1.5rem", background: "rgba(91,44,159,.05)" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem" }}>
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(255,140,0,.3)", borderRadius: "1.5rem", padding: "2rem" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎯</div>
            <h3 style={{ color: "#FF8C00", fontWeight: 800, fontSize: "1.25rem", marginBottom: ".75rem" }}>Our Mission</h3>
            <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.</p>
          </div>
          <div style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.4)", borderRadius: "1.5rem", padding: "2rem" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👁️</div>
            <h3 style={{ color: "#c084fc", fontWeight: 800, fontSize: "1.25rem", marginBottom: ".75rem" }}>Our Vision</h3>
            <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>To be Nepal&apos;s most trusted technology partner, known for excellence, innovation, and delivering measurable business value.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: "80rem", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "2.5rem" }}>
          Our Core <span style={{ color: "#FF8C00" }}>Values</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1.5rem" }}>
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>{v.icon}</div>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{v.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: ".9rem", lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "4rem 1.5rem", background: "rgba(91,44,159,.05)" }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "2.5rem" }}>
            Our <span style={{ color: "#FF8C00" }}>Journey</span>
          </h2>
          {timeline.map((t) => (
            <div key={t.year} className="timeline-item">
              <div className="timeline-dot">{t.year}</div>
              <div>
                <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".25rem" }}>{t.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
