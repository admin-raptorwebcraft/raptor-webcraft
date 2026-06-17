"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer style={{ background: "#0a0412", borderTop: "1px solid rgba(91,44,159,0.3)", marginTop: "auto" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
              <Image src="/logo.jpeg" alt="Raptor Webcraft Technologies" width={44} height={44} style={{ borderRadius: ".75rem", objectFit: "contain" }} />
              <span style={{ fontWeight: 900, fontSize: "1rem" }}>
                <span style={{ color: "#FF8C00" }}>Raptor</span>
                <span style={{ color: "#fff" }}> Webcraft</span>
              </span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".875rem", lineHeight: 1.6, marginBottom: "1rem" }}>Software & Tech Solutions — Website Development, IT Consulting & Advisory services in Nepal.</p>
            <div style={{ display: "flex", gap: ".75rem" }}>
              {[{Icon:FaFacebook,href:"#"},{Icon:FaTwitter,href:"#"},{Icon:FaLinkedin,href:"#"},{Icon:FaGithub,href:"#"}].map(({Icon,href},i) => (
                <a key={i} href={href} style={{ color: "#9ca3af", fontSize: "1.125rem", transition: "color .2s" }}
                   onFocus={(e)=>{ (e.currentTarget as HTMLAnchorElement).style.color="#FF8C00"; }}
                   onBlur={(e)=>{ (e.currentTarget as HTMLAnchorElement).style.color="#9ca3af"; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: ".9375rem" }}>Quick Links</h3>
            {[{href:"/",label:"Home"},{href:"/about",label:"About Us"},{href:"/resources",label:"Resources"},{href:"/notices",label:"Notices"},{href:"/login",label:"Login"}].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#9ca3af", textDecoration: "none", marginBottom: ".5rem", fontSize: ".875rem" }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: ".9375rem" }}>Services</h3>
            {["Website Development","IT Consulting","Tech Advisory","Digital Solutions","Software Development"].map(s => (
              <p key={s} style={{ color: "#9ca3af", marginBottom: ".5rem", fontSize: ".875rem" }}>{s}</p>
            ))}
          </div>
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: ".9375rem" }}>Contact Us</h3>
            <div style={{ display: "flex", alignItems: "flex-start", gap: ".5rem", marginBottom: ".75rem" }}>
              <FaMapMarkerAlt style={{ color: "#FF8C00", marginTop: "3px", flexShrink: 0 }} />
              <span style={{ color: "#9ca3af", fontSize: ".875rem" }}>Mandikhatar, Budhanilkantha-09,<br/>Kathmandu 44600, Bagmati, Nepal</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".75rem" }}>
              <FaPhone style={{ color: "#FF8C00", flexShrink: 0 }} />
              <a href="tel:+97701-4375420" style={{ color: "#9ca3af", textDecoration: "none", fontSize: ".875rem" }}>+977-01-4375420</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
              <FaEnvelope style={{ color: "#FF8C00", flexShrink: 0 }} />
              <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ color: "#9ca3af", textDecoration: "none", fontSize: ".875rem" }}>rwct.raptorwebcraft@gmail.com</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(91,44,159,0.2)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ color: "#6b7280", fontSize: ".8125rem" }}>© {yr} Raptor Webcraft Technologies. All rights reserved.</p>
          <p style={{ color: "#6b7280", fontSize: ".8125rem" }}>Mandikhatar, Budhanilkantha-09, Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
