"use client";
import Link from "next/link";

const SERVICES = [
  { icon: "🌐", title: "Website Development", desc: "Modern, responsive websites built with cutting-edge technologies." },
  { icon: "💡", title: "IT Consulting", desc: "Strategic IT advice to drive business growth and efficiency." },
  { icon: "📋", title: "Advisory Services", desc: "Expert guidance on digital transformation and tech adoption." },
  { icon: "⚙️", title: "Tech Solutions", desc: "Custom software solutions tailored to your business needs." },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+",  label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #0d0618 0%, #1a0a2e 40%, #2d1060 70%, #0d0618 100%)",
        padding: "6rem 1.5rem 4rem", textAlign: "center" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: ".5rem 1.25rem",
            background: "rgba(255,140,0,0.15)", border: "1px solid rgba(255,140,0,0.3)",
            borderRadius: "2rem", color: "#FF8C00", fontSize: ".875rem", fontWeight: 600, marginBottom: "1.5rem" }}>
            🦅 Software & Tech Solutions
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            <span style={{ color: "#FF8C00" }}>Build.</span>{" "}
            <span style={{ color: "#fff" }}>Scale.</span>{" "}
            <span style={{ background: "linear-gradient(to right,#c084fc,#818cf8)", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent" }}>Dominate.</span>
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#9ca3af", maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Raptor Webcraft Technologies delivers world-class website development, IT consulting, and advisory services to help your business thrive in the digital age.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" style={{ padding: ".875rem 2rem", background: "linear-gradient(to right,#FF8C00,#5B2C9F)",
              color: "#fff", textDecoration: "none", borderRadius: ".75rem", fontWeight: 700, fontSize: "1rem" }}>
              Get Started
            </Link>
            <Link href="/resources" style={{ padding: ".875rem 2rem",
              border: "1px solid rgba(91,44,159,0.6)", color: "#c084fc",
              textDecoration: "none", borderRadius: ".75rem", fontWeight: 600, fontSize: "1rem" }}>
              View Resources
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginTop: "4rem" }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ padding: "1.5rem", background: "rgba(91,44,159,0.1)",
                border: "1px solid rgba(91,44,159,0.2)", borderRadius: "1rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#FF8C00" }}>{s.value}</div>
                <div style={{ color: "#9ca3af", fontSize: ".875rem", marginTop: ".25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.25rem", fontWeight: 800, color: "#fff", marginBottom: ".75rem" }}>
            Our <span style={{ color: "#FF8C00" }}>Services</span>
          </h2>
          <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: "3rem" }}>
            Comprehensive tech solutions for modern businesses
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{ padding: "2rem", background: "rgba(26,10,46,0.6)",
                border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1.25rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: ".75rem" }}>{s.title}</h3>
                <p style={{ color: "#9ca3af", lineHeight: 1.6, fontSize: ".9375rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg,#1a0a2e,#0d0618)" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Ready to <span style={{ color: "#FF8C00" }}>Transform</span> Your Business?
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: "2rem", lineHeight: 1.7 }}>
            Contact Raptor Webcraft Technologies today and let us build something extraordinary together.
          </p>
          <a href="mailto:rwct.raptorwebcraft@gmail.com"
            style={{ display: "inline-block", padding: ".875rem 2.5rem",
              background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff",
              textDecoration: "none", borderRadius: ".75rem", fontWeight: 700, fontSize: "1.0625rem" }}>
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
