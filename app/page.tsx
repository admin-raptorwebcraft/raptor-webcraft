"use client";
import Link from "next/link";
import Image from "next/image";

const services = [
  { icon: "🌐", title: "Website Development", desc: "Modern, responsive websites built with cutting-edge tech." },
  { icon: "💼", title: "IT Consulting",        desc: "Strategic IT guidance to optimize your business operations." },
  { icon: "🔒", title: "Tech Advisory",        desc: "Expert advice on technology decisions and digital strategy." },
  { icon: "🎨", title: "UI/UX Design",         desc: "Beautiful, intuitive interfaces that engage your users." },
  { icon: "☁️", title: "Cloud Solutions",      desc: "Scalable cloud infrastructure for modern businesses." },
  { icon: "📱", title: "Mobile Apps",           desc: "Cross-platform mobile applications for iOS and Android." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+",  label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const tech = ["Next.js","React","Node.js",".NET","MongoDB","TypeScript","Tailwind CSS","AWS"];

export default function HomePage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <style>{`
        .sc { transition: transform .2s, box-shadow .2s; }
        .sc:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(91,44,159,.3); }
        .cta-btn { display: inline-block; padding: .875rem 2rem; border-radius: .75rem; font-weight: 700;
          text-decoration: none; font-size: 1rem; transition: opacity .2s; }
        .cta-btn:hover { opacity: 0.85; }
      `}</style>

      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "radial-gradient(ellipse at top,#1a0a2e 0%,#0d0618 60%)", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", animation: "fadeInUp .8s ease forwards" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
            <Image src="/logo.jpeg" alt="Raptor Webcraft" width={80} height={80}
              style={{ borderRadius: "1.25rem", objectFit: "contain" }} />
          </div>
          <p style={{ color: "#FF8C00", fontWeight: 600, fontSize: "1rem", letterSpacing: ".15em",
            textTransform: "uppercase", marginBottom: "1.5rem" }}>Raptor Webcraft Technologies</p>
          <h1 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            <span style={{ color: "#fff" }}>Build. </span>
            <span style={{ background: "linear-gradient(to right,#FF8C00,#5B2C9F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale. </span>
            <span style={{ color: "#fff" }}>Dominate.</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "clamp(1rem,2vw,1.25rem)", marginBottom: "3rem", lineHeight: 1.7, maxWidth: "650px", margin: "0 auto 3rem" }}>
            We craft powerful digital solutions — from stunning websites to strategic IT consulting — that drive real business results.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" className="cta-btn"
              style={{ background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff" }}>
              Explore Our Work
            </Link>
            <Link href="/login" className="cta-btn"
              style={{ border: "2px solid rgba(91,44,159,.6)", color: "#fff", background: "rgba(91,44,159,.1)" }}>
              Get Started →
            </Link>
          </div>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginTop: "4rem" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, background: "linear-gradient(to right,#FF8C00,#5B2C9F)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                <div style={{ color: "#9ca3af", fontSize: ".85rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#0d0618" }}>
        <div style={{ maxWidth: "75rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
              Our <span style={{ color: "#FF8C00" }}>Services</span>
            </h2>
            <p style={{ color: "#9ca3af" }}>Everything you need to succeed in the digital world</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <div key={s.title} className="sc"
                style={{ background: "rgba(26,10,46,.8)", border: "1px solid rgba(91,44,159,.3)",
                  borderRadius: "1.25rem", padding: "2rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: ".75rem" }}>{s.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: ".9rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "rgba(91,44,159,.05)" }}>
        <div style={{ maxWidth: "75rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            Tech <span style={{ color: "#FF8C00" }}>Stack</span>
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: "2.5rem" }}>Technologies we use to build world-class solutions</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {tech.map((t) => (
              <span key={t} style={{ padding: ".5rem 1.25rem", borderRadius: "2rem",
                background: "rgba(91,44,159,.2)", border: "1px solid rgba(91,44,159,.4)",
                color: "#c084fc", fontWeight: 600, fontSize: ".9rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#0d0618", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>
            Ready to <span style={{ color: "#FF8C00" }}>Get Started?</span>
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: "2rem", lineHeight: 1.7 }}>
            Let us help you build something amazing. Contact us today!
          </p>
          <a href={"mailto:rwct.raptorwebcraft@gmail.com"} className="cta-btn"
            style={{ background: "linear-gradient(to right,#FF8C00,#5B2C9F)", color: "#fff" }}>
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
