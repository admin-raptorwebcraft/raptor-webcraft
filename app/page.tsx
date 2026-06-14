'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaServer, FaLightbulb, FaShieldAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const services = [
  { icon: FaCode,      title: 'Web Development',   desc: 'Custom websites & web apps using the latest technologies — Next.js, React, .NET and more.' },
  { icon: FaServer,    title: 'IT Consulting',      desc: 'Strategic IT guidance to align technology with your business goals and growth roadmap.' },
  { icon: FaLightbulb, title: 'Tech Advisory',      desc: 'Expert advice on digital transformation, architecture decisions, and tech stack selection.' },
  { icon: FaShieldAlt, title: 'System Integration', desc: 'Seamless integration of enterprise systems, APIs, and third-party platforms.' },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+',  label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

const techStack = ['Next.js', 'React', '.NET', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Azure'];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative px-6"
        style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #3D1A5C 35%, #5B2C9F 65%, #2563EB 100%)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FF8C00 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="text-center z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid #FF8C00', color: '#FF8C00' }}>
              🦅 Software & IT Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span style={{ color: '#FF8C00' }}>Build.</span>{' '}
              <span className="text-white">Scale.</span>{' '}
              <span style={{ background: 'linear-gradient(90deg,#5B2C9F,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Dominate.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Raptor Webcraft Technologies delivers world-class web solutions, IT consulting, and strategic tech advisory to power your digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #FF8C00, #ff6b00)' }}>
                Discover Us <FaArrowRight className="inline ml-2" />
              </Link>
              <Link href="/login" className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 glass">
                Get Started
              </Link>
            </div>
          </motion.div>
          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-black" style={{ color: '#FF8C00' }}>{s.value}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" style={{ background: '#0d0618' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Our <span style={{ color: '#FF8C00' }}>Services</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">End-to-end digital solutions designed to accelerate your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl hover:scale-105 transition-all cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #1e0a3c, #2d1257)', border: '1px solid rgba(91,44,159,0.4)' }}>
                <svc.icon className="text-3xl mb-4" style={{ color: '#FF8C00' }} />
                <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6" style={{ background: '#0d0618' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-10">Tech <span style={{ color: '#5B2C9F' }}>Stack</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ background: 'rgba(91,44,159,0.25)', border: '1px solid #5B2C9F' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #3D1A5C, #2563EB)' }}>
        <h2 className="text-4xl font-black text-white mb-6">Ready to <span style={{ color: '#FF8C00' }}>Launch?</span></h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">Partner with Raptor Webcraft and transform your digital presence today.</p>
        <Link href="/login" className="px-10 py-4 rounded-xl font-bold text-white inline-block hover:scale-105 transition-all"
          style={{ background: 'linear-gradient(135deg, #FF8C00, #ff6b00)' }}>
          Get Started <FaArrowRight className="inline ml-2" />
        </Link>
      </section>
    </div>
  );
}
