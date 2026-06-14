'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { href:'/',          label:'Home' },
  { href:'/about',     label:'About Us' },
  { href:'/resources', label:'Resources' },
  { href:'/notices',   label:'Notices' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? 'rgba(13,6,24,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(91,44,159,0.3)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg"
            style={{ background:'linear-gradient(135deg,#5B2C9F,#2563EB)' }}>
            <span style={{ color:'#FF8C00' }}>R</span>
          </div>
          <div className="leading-tight">
            <div className="font-black text-sm" style={{ color:'#FF8C00' }}>RAPTOR</div>
            <div className="font-bold text-xs text-white opacity-80">WEBCRAFT</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-semibold transition-all hover:opacity-80"
              style={{ color: pathname===l.href ? '#FF8C00' : '#e2e8f0', borderBottom: pathname===l.href ? '2px solid #FF8C00' : '2px solid transparent', paddingBottom:'2px' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/login" className="px-5 py-2 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background:'linear-gradient(135deg,#5B2C9F,#2563EB)' }}>
            Login
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22}/> : <FaBars size={22}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3" style={{ background:'rgba(13,6,24,0.98)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm font-semibold py-2" style={{ color: pathname===l.href ? '#FF8C00' : '#e2e8f0' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)}
            className="block text-center px-5 py-2 rounded-xl text-sm font-bold text-white"
            style={{ background:'linear-gradient(135deg,#5B2C9F,#2563EB)' }}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
