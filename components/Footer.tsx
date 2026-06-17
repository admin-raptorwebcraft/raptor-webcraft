"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer style={{ background: "#0a0412", borderTop: "1px solid rgba(91,44,159,0.3)", marginTop: "auto" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
              <Image src="/logo.jpeg" alt="Raptor Webcraft" width={40} height={40}
                style={{ borderRadius: ".75rem", objectFit: "contain" }} />
              <span style={{ fontWeight: 900 }}>
                <span style={{ color: "#FF8C00" }}>Raptor</span>
                <span style={{ color: "#fff" }}> Webcraft</span>
              </span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6 }}>
              Software &amp; Tech Solutions. Website Development, IT Consulting &amp; Advisory.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Quick Links</h4>
            {["/", "/about", "/resources", "/notices", "/login"].map((href) => (
              <Link key={href} href={href}
                style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: ".5rem", fontSize: ".875rem" }}>
                {href === "/" ? "Home" : href.replace("/", "").charAt(0).toUpperCase() + href.replace("/", "").slice(1)}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Contact Us</h4>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>📍 Mandikhatar, Budhanilkantha-09</p>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>Kathmandu 44600, Bagmati, Nepal</p>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>📞 +977-01-4375420</p>
            <p style={{ color: "#9ca3af", fontSize: ".875rem" }}>✉️ rwct.raptorwebcraft@gmail.com</p>
          </div>

          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Services</h4>
            {["Website Development", "IT Consulting", "Advisory Services", "Tech Solutions"].map((s) => (
              <p key={s} style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>{s}</p>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(91,44,159,0.2)", paddingTop: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "#6b7280", fontSize: ".875rem" }}>
            © {yr} Raptor Webcraft Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
