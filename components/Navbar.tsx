"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const LINKS = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About Us" },
  { href: "/resources", label: "Resources" },
  { href: "/notices",   label: "Notices" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user,     setUser]     = useState<{ name: string; role: string } | null>(null);
  const router   = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rwt_user");
      if (stored) setUser(JSON.parse(stored));
    } catch {}
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const logout = async () => {
    try { await fetch("/api/auth/logout", { method: "POST" }); } catch {}
    localStorage.removeItem("rwt_token");
    localStorage.removeItem("rwt_user");
    setUser(null);
    router.push("/login");
  };

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? "rgba(13,6,24,0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(91,44,159,0.4)" : "none",
    transition: "all 0.3s"
  };

  return (
    <nav style={navStyle}>
      <style>{`
        .nav-link { color: #d1d5db; text-decoration: none; font-size: .875rem; font-weight: 500; transition: color .2s; }
        .nav-link:hover { color: #FF8C00; }
        .nav-link-active { color: #FF8C00 !important; }
        .nav-btn { padding: .5rem 1.25rem; border-radius: .75rem; background: linear-gradient(to right,#FF8C00,#5B2C9F); color: #fff; font-weight: 600; text-decoration: none; font-size: .875rem; display: inline-block; }
        .logout-btn { display: flex; align-items: center; gap: .5rem; padding: .5rem 1rem; border-radius: .75rem; border: 1px solid rgba(91,44,159,.6); background: rgba(26,10,46,.6); color: #fff; cursor: pointer; font-size: .875rem; }
        .mobile-link { display: block; padding: .75rem 1rem; color: #d1d5db; text-decoration: none; font-size: .9375rem; border-radius: .5rem; }
        .mobile-link:hover { background: rgba(91,44,159,.2); color: #FF8C00; }
        @media(min-width:768px) { .desktop-nav { display: flex !important; } .hamburger-btn { display: none !important; } }
      `}</style>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: ".5rem", textDecoration: "none" }}>
            <Image src="/logo.jpeg" alt="Raptor Webcraft" width={44} height={44} style={{ borderRadius: ".75rem", objectFit: "contain" }} />
            <span style={{ fontWeight: 900, fontSize: "1.125rem" }}>
              <span style={{ color: "#FF8C00" }}>Raptor</span>
              <span style={{ color: "#fff" }}> Webcraft</span>
            </span>
          </Link>

          <div className="desktop-nav" style={{ display: "none", alignItems: "center", gap: "1.5rem" }}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={"nav-link" + (pathname === l.href ? " nav-link-active" : "")}>
                {l.label}
              </Link>
            ))}
            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                <Link href={user.role === "admin" ? "/dashboard/admin" : "/dashboard/user"} className="nav-link" style={{ color: "#c084fc" }}>
                  Dashboard
                </Link>
                <button onClick={logout} className="logout-btn">Logout</button>
              </div>
            ) : (
              <Link href="/login" className="nav-btn">Login</Link>
            )}
          </div>

          <button className="hamburger-btn" onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: ".5rem", fontSize: "1.5rem" }}>
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div style={{ padding: "1rem 0", borderTop: "1px solid rgba(91,44,159,.3)" }}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            {user ? (
              <button onClick={logout} style={{ width: "100%", marginTop: ".5rem", padding: ".75rem 1rem", background: "none", border: "1px solid rgba(91,44,159,.4)", borderRadius: ".5rem", color: "#fff", cursor: "pointer" }}>
                Logout
              </button>
            ) : (
              <Link href="/login" className="mobile-link" style={{ color: "#FF8C00", fontWeight: 600 }} onClick={() => setOpen(false)}>
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
