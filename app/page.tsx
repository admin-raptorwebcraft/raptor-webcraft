"use client";
import Link from "next/link";
import { FaCode, FaLaptopCode, FaChartLine, FaShieldAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const SERVICES = [
  { icon: FaLaptopCode, title: "Website Development", desc: "Custom, responsive websites built with modern technologies tailored to your business needs.", color: "#FF8C00" },
  { icon: FaCode,       title: "Software Development", desc: "Full-stack software solutions from concept to deployment, scalable and maintainable.", color: "#5B2C9F" },
  { icon: FaChartLine,  title: "IT Consulting",         desc: "Strategic IT advisory services to help your business leverage technology effectively.", color: "#2563EB" },
  { icon: FaShieldAlt,  title: "Tech Advisory",         desc: "Expert guidance on technology decisions, architecture, and digital transformation.", color: "#FF8C00" },
];

const STATS = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients",      value: "40+" },
  { label: "Years Experience",   value: "5+" },
  { label: "Team Members",       value: "10+" },
];

export default function HomePage() {
  return (
    <div style={{ background: "#0d0618", color: "#fbfbff" }}>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem 4rem", textAlign: "center", background: "radial-gradient(ellipse at top,rgba(91,44,159,0.3) 0%,transparent 70%)" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: ".375rem 1rem", borderRadius: "999px", background: "rgba(91,44,159,0.2)", border: "1px solid rgba(91,44,159,0.4)", color: "#c084fc", fontSize: ".875rem", marginBottom: "1.5rem" }}>🦅 Welcome to Raptor Webcraft Technologies</div>
          <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            <span style={{ color: "#FF8C00" }}>Build.</span>
            <span style={{ color: "#fff" }}> Scale.</span>
            <span style={{ background: "linear-gradient(to right,#5B2C9F,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> Dominate.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,2.5vw,1.25rem)", color: "#9ca3af", maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>Nepal's premier software & IT solutions company. We build websites, deliver IT consulting, and provide tech advisory services that transform businesses.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/about" style={{ padding: ".875rem 2rem", borderRadius: ".875rem", background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>Get Started</Link>
            <Link href="/resources" style={{ padding: ".875rem 2rem", borderRadius: ".875rem", border: "1px solid rgba(91,44,159,0.6)", color: "#fff", fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}>View Resources</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: "1.5rem", maxWidth: "48rem", margin: "0 auto" }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.25rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#FF8C00" }}>{s.value}</div>
                <div style={{ fontSize: ".8125rem", color: "#9ca3af", marginTop: ".25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 800, color: "#fff", marginBottom: ".75rem" }}>Our <span style={{ color: "#FF8C00" }}>Services</span></h2>
          <p style={{ color: "#9ca3af", maxWidth: "36rem", margin: "0 auto" }}>Comprehensive tech solutions designed to accelerate your digital growth.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1.25rem", padding: "2rem" }}>
              <s.icon style={{ fontSize: "2rem", color: s.color, marginBottom: "1rem" }} />
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{s.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "rgba(91,44,159,0.05)", borderTop: "1px solid rgba(91,44,159,0.15)", borderBottom: "1px solid rgba(91,44,159,0.15)" }}>
        <div style={{ maxWidth: "60rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>Why Choose <span style={{ color: "#FF8C00" }}>Raptor Webcraft?</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "2.5rem" }}>
            {["Expert Team","Modern Tech Stack","Client-First Approach","On-Time Delivery","24/7 Support","Competitive Pricing"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: ".75rem", background: "rgba(26,10,46,0.4)", border: "1px solid rgba(91,44,159,0.2)", borderRadius: ".875rem", padding: "1rem 1.25rem" }}>
                <FaCheckCircle style={{ color: "#FF8C00", flexShrink: 0 }} />
                <span style={{ color: "#d1d5db", fontSize: ".9375rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>Ready to <span style={{ color: "#FF8C00" }}>Get Started?</span></h2>
          <p style={{ color: "#9ca3af", marginBottom: "2rem", lineHeight: 1.7 }}>Let's build something amazing together. Contact us today and take your business to the next level.</p>
          <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: "1rem 2.5rem", borderRadius: ".875rem", background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: "1.0625rem" }}>
            Contact Us <FaArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
