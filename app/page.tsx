"use client";
import Link from "next/link";
import Image from "next/image";

const services = [
  { icon: "🌐", title: "Website Development", desc: "Custom, responsive websites built with modern technologies like Next.js, React, and .NET." },
  { icon: "💼", title: "IT Consulting", desc: "Strategic IT guidance to align technology with your business goals and drive growth." },
  { icon: "🔒", title: "Cybersecurity Advisory", desc: "Protect your digital assets with our expert security assessments and solutions." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Scalable cloud infrastructure design and migration services for modern businesses." },
  { icon: "📱", title: "Mobile Development", desc: "Cross-platform mobile apps that deliver seamless user experiences." },
  { icon: "🛠️", title: "Software Solutions", desc: "Custom software tailored to your unique business processes and workflows." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const techStack = ["Next.js", "React", ".NET", "Node.js", "MongoDB", "TypeScript", "AWS", "Docker"];

export default function HomePage() {
  return (
    <main style={{ background: "#0d0618", color: "#fbfbff", paddingTop: "4rem" }}>

      {/* Hero */}
      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", background: "linear-gradient(135deg, #0d0618 0%, #1a0a2e 50%, #0d0618 100%)", padding: "4rem 1.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "10%", width: "300px", height: "300px", background: "rgba(91,44,159,0.15)", borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "10%", width: "250px", height: "250px", background: "rgba(255,140,0,0.1)", borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ maxWidth: "80rem", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "700px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "rgba(91,44,159,0.2)", border: "1px solid rgba(91,44,159,0.4)", borderRadius: "2rem", padding: ".375rem 1rem", marginBottom: "1.5rem" }}>
              <span style={{ color: "#FF8C00", fontSize: ".875rem", fontWeight: 600 }}>🦅 Raptor Webcraft Technologies</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
              <span style={{ color: "#fff" }}>Build.</span>{" "}
              <span style={{ background: "linear-gradient(to right, #FF8C00, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale.</span>{" "}
              <span style={{ color: "#fff" }}>Dominate.</span>
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "600px" }}>
              We are a Software &amp; Tech Solutions Company that builds powerful websites, provides expert IT consulting, and delivers strategic technology advisory to help your business thrive in the digital age.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/about" style={{ padding: ".875rem 2rem", background: "linear-gradient(to right, #FF8C00, #5B2C9F)", borderRadius: ".75rem", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
                Discover More
              </Link>
              <Link href="/login" style={{ padding: ".875rem 2rem", background: "transparent", border: "1px solid rgba(91,44,159,0.6)", borderRadius: ".75rem", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}>
                Get Started →
              </Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "4rem" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "rgba(26,10,46,0.6)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, background: "linear-gradient(to right, #FF8C00, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                <div style={{ color: "#9ca3af", fontSize: ".8rem", marginTop: ".25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0412" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: ".75rem" }}>
              Our <span style={{ color: "#FF8C00" }}>Services</span>
            </h2>
            <p style={{ color: "#9ca3af", maxWidth: "500px", margin: "0 auto" }}>Comprehensive tech solutions tailored for your business</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: "rgba(19,8,32,0.8)", border: "1px solid rgba(91,44,159,0.3)", borderRadius: "1rem", padding: "1.75rem", transition: "border-color .2s" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".9rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "2rem" }}>
            Our <span style={{ color: "#FF8C00" }}>Tech Stack</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {techStack.map((t) => (
              <span key={t} style={{ background: "rgba(26,10,46,0.8)", border: "1px solid rgba(91,44,159,0.4)", color: "#c084fc", padding: ".5rem 1.25rem", borderRadius: "2rem", fontSize: ".9rem", fontWeight: 600 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #1a0a2e, #0d0618)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1rem" }}>Ready to Get Started?</h2>
          <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>Let us help you build, scale, and dominate your digital presence.</p>
          <a href={"mailto:rwct.raptorwebcraft@gmail.com"}
            style={{ padding: ".875rem 2.5rem", background: "linear-gradient(to right, #FF8C00, #5B2C9F)", borderRadius: ".75rem", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}
