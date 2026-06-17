"use client";

const values = [
  { icon: "🎯", title: "Excellence", desc: "We deliver nothing short of exceptional quality in everything we do." },
  { icon: "💡", title: "Innovation", desc: "Constantly pushing boundaries with cutting-edge technology solutions." },
  { icon: "🤝", title: "Partnership", desc: "We treat every client as a long-term partner, not just a project." },
  { icon: "🔒", title: "Integrity", desc: "Honest, transparent, and ethical in all our business dealings." },
  { icon: "⚡", title: "Agility", desc: "Fast, flexible, and responsive to changing business needs." },
  { icon: "🌱", title: "Growth", desc: "We grow with our clients, evolving our services as you scale." },
];

const timeline = [
  { year: "2019", title: "Founded", desc: "Raptor Webcraft Technologies was established in Kathmandu, Nepal." },
  { year: "2020", title: "First 10 Clients", desc: "Delivered 10+ successful web development projects." },
  { year: "2021", title: "IT Consulting Launch", desc: "Expanded into IT consulting and advisory services." },
  { year: "2022", title: "Team Growth", desc: "Grew to a team of skilled developers and consultants." },
  { year: "2023", title: "Cloud Services", desc: "Added cloud solutions and cybersecurity advisory to our portfolio." },
  { year: "2024", title: "50+ Projects", desc: "Surpassed 50 successful project deliveries across Nepal and beyond." },
];

export default function AboutPage() {
  return (
    <main style={{ background: "#0d0618", color: "#fbfbff", paddingTop: "4rem" }}>

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0d0618, #1a0a2e)", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, marginBottom: "1rem" }}>
            About <span style={{ color: "#FF8C00" }}>Raptor Webcraft</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7 }}>
            A passionate Software &amp; Tech Solutions Company dedicated to transforming businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0412" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1rem" }}>Who We Are</h2>
              <p style={{ color: "#9ca3af", lineHeight: 1.8, marginBottom: "1rem" }}>
                Raptor Webcraft Technologies is a Kathmandu-based software and tech solutions company founded with a mission to empower businesses through technology. We specialize in website development, IT consulting, and strategic technology advisory.
              </p>
              <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>
                Our team of experienced developers, consultants, and strategists work closely with clients to understand their unique challenges and deliver tailored solutions that drive real business results.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "Mission", text: "To deliver world-class tech solutions that empower businesses to thrive in the digital era.", icon: "🎯" },
                { label: "Vision", text: "To become the most trusted technology partner for businesses across South Asia.", icon: "🔭" },
              ].map((item) => (
                <div key={item.label} style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.4)", borderRadius: "1rem", padding: "1.5rem" }}>
                  <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{item.icon}</div>
                  <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: ".5rem" }}>{item.label}</h3>
                  <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: ".75rem" }}>Our <span style={{ color: "#FF8C00" }}>Core Values</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: ".75rem" }}>{v.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{v.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0412" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: ".75rem" }}>Our <span style={{ color: "#FF8C00" }}>Journey</span></h2>
          </div>
          <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid rgba(91,44,159,0.4)" }}>
            {timeline.map((t) => (
              <div key={t.year} style={{ marginBottom: "2rem", position: "relative" }}>
                <div style={{ position: "absolute", left: "-2.6rem", top: 0, background: "#FF8C00", color: "#000", padding: ".25rem .5rem", borderRadius: ".375rem", fontSize: ".75rem", fontWeight: 700 }}>{t.year}</div>
                <div style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.25rem" }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".25rem" }}>{t.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg, #1a0a2e, #0d0618)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "1rem" }}>Get In Touch</h2>
          <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>📍 Mandikhatar, Budhanilkantha-09, Kathmandu 44600, Nepal</p>
          <p style={{ color: "#9ca3af", marginBottom: ".5rem" }}>📞 +977-01-4375420</p>
          <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ color: "#FF8C00", textDecoration: "none" }}>✉️ rwct.raptorwebcraft@gmail.com</a>
        </div>
      </section>
    </main>
  );
}
