"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const yr = new Date().getFullYear();
  const footerStyle: React.CSSProperties = {
    background: "#0a0412",
    borderTop: "1px solid rgba(91,44,159,0.3)",
    marginTop: "auto"
  };
  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
              <Image src="/logo.jpeg" alt="Raptor Webcraft Technologies" width={44} height={44} style={{ borderRadius: ".75rem", objectFit: "contain" }} />
              <span style={{ fontWeight: 900, fontSize: "1rem" }}>
                <span style={{ color: "#FF8C00" }}>Raptor</span>
                <span style={{ color: "#fff" }}> Webcraft</span>
              </span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>
              Software &amp; Tech Solutions Company that develops websites, does IT consulting and advisory.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
              {["/","About","/about","/resources","Resources","/notices","Notices","/login","Login"].reduce((acc: any[], _, i, arr) => {
                if (i % 3 === 0) acc.push({ href: arr[i] as string, label: arr[i+1] as string });
                return acc;
              }, [
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/resources", label: "Resources" },
                { href: "/notices", label: "Notices" },
                { href: "/login", label: "Login" },
              ]).map((l: any) => (
                <Link key={l.href} href={l.href} style={{ color: "#9ca3af", textDecoration: "none", fontSize: ".875rem" }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
              {["Website Development","IT Consulting","Advisory Services","Software Solutions","Digital Transformation"].map((s) => (
                <span key={s} style={{ color: "#9ca3af", fontSize: ".875rem" }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
              <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>📍 Mandikhatar, Budhanilkantha-09,<br />Kathmandu 44600, Bagmati, Nepal</p>
              <a href="tel:+97701-4375420" style={{ color: "#9ca3af", fontSize: ".875rem", textDecoration: "none" }}>📞 +977-01-4375420</a>
              <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ color: "#9ca3af", fontSize: ".875rem", textDecoration: "none" }}>✉️ rwct.raptorwebcraft@gmail.com</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(91,44,159,0.3)", paddingTop: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "#6b7280", fontSize: ".875rem" }}>
            © {yr} Raptor Webcraft Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
