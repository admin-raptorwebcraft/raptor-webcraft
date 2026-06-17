"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#0a0412", borderTop: "1px solid rgba(91,44,159,0.3)", marginTop: "auto" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
              <Image src="/logo.jpeg" alt="Raptor Webcraft" width={44} height={44} style={{ borderRadius: ".75rem" }} />
              <span style={{ fontWeight: 900, fontSize: "1rem" }}>
                <span style={{ color: "#FF8C00" }}>Raptor</span>
                <span style={{ color: "#fff" }}> Webcraft</span>
              </span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.7 }}>
              Software & Tech Solutions. We develop websites, provide IT consulting and advisory services.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Quick Links</h4>
            {["/", "/about", "/resources", "/notices", "/login"].map((href) => (
              <Link key={href} href={href} style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: ".5rem", fontSize: ".875rem" }}>
                {href === "/" ? "Home" : href.replace("/", "").replace(/^./, (s) => s.toUpperCase())}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Services</h4>
            {["Website Development", "IT Consulting", "Advisory Services", "Software Solutions", "UI/UX Design"].map((s) => (
              <p key={s} style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>{s}</p>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#FF8C00", fontWeight: 700, marginBottom: "1rem" }}>Contact Us</h4>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".75rem" }}>
              📍 Mandikhatar, Budhanilkantha-09<br />Kathmandu 44600, Bagmati, Nepal
            </p>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", marginBottom: ".5rem" }}>📞 +977-01-4375420</p>
            <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ color: "#c084fc", fontSize: ".875rem", wordBreak: "break-all" }}>
              ✉️ rwct.raptorwebcraft@gmail.com
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(91,44,159,.2)", marginTop: "2rem", paddingTop: "1.5rem", textAlign: "center", color: "#6b7280", fontSize: ".875rem" }}>
          © {year} Raptor Webcraft Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
