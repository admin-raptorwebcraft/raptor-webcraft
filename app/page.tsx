"use client";
import Link from "next/link";

const services = [
  { icon: "🌐", title: "Website Development", desc: "Modern, fast, and responsive websites built with the latest technologies." },
  { icon: "💡", title: "IT Consulting",        desc: "Strategic technology advice to drive your business forward." },
  { icon: "📊", title: "Advisory Services",    desc: "Expert guidance on digital transformation and IT strategy." },
  { icon: "🚀", title: "Software Solutions",   desc: "Custom software tailored to your unique business needs." },
  { icon: "🎨", title: "UI/UX Design",         desc: "Beautiful, intuitive interfaces that users love." },
  { icon: "🔒", title: "Cyber Security",       desc: "Protect your digital assets with enterprise-grade security." },
];

const stats = [
  { n: "150+", label: "Projects Delivered" },
  { n: "50+",  label: "Happy Clients" },
  { n: "5+",   label: "Years Experience" },
  { n: "24/7", label: "Support" },
];

const tech = ["Next.js", "React", "Node.js", ".NET", "MongoDB", "TypeScript", "Tailwind CSS", "Docker"];

export default function HomePage() {
  return (
    <div style={{ background: "#0d0618", minHeight: "100vh" }}>
      <style>{`
        .hero-card { background: rgba(255,140,0,.08); border: 1px solid rgba(255,140,0,.2); border-radius: 1rem; padding: 1.5rem; text-align: center; }
        .service-card { background: rgba(26,10,46,.6); border: 1px solid rgba(91,44,159,.25); border-radius: 1.25rem; padding: 1.75rem; transition: all .3s; }
        .service-card:hover { border-color: rgba(255,140,0,.5); transform: translateY(-4px); background: rgba(91,44,159,.15); }
        .tech-badge { display: inline-block; padding: .5rem 1.25rem; background: rgba(91,44,159,.15); border: 1px solid rgba(91,44,159,.3); border-radius: 9999px; color: #c084fc; font-size: .875rem; margin: .25rem; }
        .cta-primary { display: inline-block; padding: .875rem 2rem; background: linear-gradient(to right,#FF8C00,#5B2C9F); color: #fff; font-weight: 700; border-radius: .75rem; text-decoration: none; font-size: 1rem; }
        .cta-secondary { display: inline-block; padding: .875rem 2rem; background: transparent; border: 1px solid rgba(255,140,0,.5); color: #FF8C00; font-weight: 700; border-radius: .75rem; text-decoration: none; font-size: 1rem; }
      `}</style>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "8rem 1.5rem 4rem", background: "radial-gradient(ellipse at top,rgba(91,44,159,.3) 0%,transparent 60%)" }}>
        <div style={{ maxWidth: "56rem", width: "100%", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: ".375rem 1rem", background: "rgba(255,140,0,.1)", border: "1px solid rgba(255,140,0,.3)", borderRadius: "9999px", color: "#FF8C00", fontSize: ".875rem", marginBottom: "1.5rem" }}>
            🦅 Nepal&apos;s Premier Tech Solutions Company
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            <span style={{ color: "#fff" }}>Build. </span>
            <span style={{ background: "linear-gradient(to right,#FF8C00,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale. </span>
            <span style={{ color: "#fff" }}>Dominate.</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "42rem", margin: "0 auto 2.5rem" }}>
            Raptor Webcraft Technologies delivers cutting-edge software solutions, website development, and IT consulting services from Kathmandu, Nepal.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/about" className="cta-primary">Get Started</Link>
            <Link href="/resources" className="cta-secondary">Our Resources</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "1rem" }}>
            {stats.map((s) => (
              <div key={s.label} className="hero-card">
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#FF8C00" }}>{s.n}</div>
                <div style={{ color: "#9ca3af", fontSize: ".875rem", marginTop: ".25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", marginBottom: ".75rem" }}>
            Our <span style={{ color: "#FF8C00" }}>Services</span>
          </h2>
          <p style={{ color: "#9ca3af" }}>Everything you need to succeed in the digital world</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: ".5rem" }}>{s.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: ".9rem", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(91,44,159,.05)" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: ".75rem" }}>
            Technologies We <span style={{ color: "#FF8C00" }}>Master</span>
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>Built with the best tools in the industry</p>
          <div>{tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Ready to <span style={{ color: "#FF8C00" }}>Transform</span> Your Business?
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>Let&apos;s build something amazing together.</p>
          <a href={"mailto:rwct.raptorwebcraft@gmail.com"} className="cta-primary">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}
