'use client';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaCode, FaLightbulb, FaHandshake, FaStar, FaUsers, FaHeart } from 'react-icons/fa';

const values = [
  { icon: FaCode,        title: 'Innovation',   desc: 'We embrace cutting-edge technologies to craft future-ready solutions.' },
  { icon: FaHeart,       title: 'Integrity',    desc: 'Transparency and honesty guide every client engagement.' },
  { icon: FaStar,        title: 'Excellence',   desc: 'We set high standards and consistently exceed expectations.' },
  { icon: FaUsers,       title: 'Collaboration',desc: 'We work closely with clients as trusted partners, not just vendors.' },
  { icon: FaHandshake,   title: 'Reliability',  desc: 'On-time, on-budget delivery you can count on every time.' },
  { icon: FaLightbulb,   title: 'Agility',      desc: 'We adapt quickly to change and deliver in fast-paced environments.' },
];

const timeline = [
  { year: '2019', event: 'Raptor Webcraft Technologies founded.' },
  { year: '2020', event: 'First enterprise web platform launched for a regional client.' },
  { year: '2021', event: 'Expanded into IT consulting & advisory services.' },
  { year: '2022', event: 'Reached 30+ satisfied clients across multiple industries.' },
  { year: '2023', event: 'Launched cloud integration & .NET backend solutions.' },
  { year: '2024', event: 'Full MERN + .NET stack offering with dedicated support team.' },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#0d0618' }} className="min-h-screen">
      {/* Hero */}
      <section className="py-32 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0a2e, #3D1A5C, #2563EB)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black text-white mb-4">About <span style={{ color: '#FF8C00' }}>Raptor Webcraft</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A software & tech solutions company that develops websites, delivers IT consulting, and provides strategic technology advisory.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-white mb-4">Who <span style={{ color: '#FF8C00' }}>We Are</span></h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Raptor Webcraft Technologies is a forward-thinking software and IT solutions company dedicated to helping businesses
              thrive in the digital era. We combine technical expertise with strategic insight to deliver solutions that truly matter.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you need a stunning website, a robust enterprise platform, or expert IT guidance, our team brings
              the skills, dedication, and experience to exceed your expectations every time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['50+','Projects'],['30+','Clients'],['5+','Years'],['24/7','Support']].map(([v,l])=>(
              <div key={l} className="p-6 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg,#1e0a3c,#2d1257)', border:'1px solid rgba(91,44,159,0.4)' }}>
                <div className="text-3xl font-black" style={{ color:'#FF8C00' }}>{v}</div>
                <div className="text-gray-400 text-sm mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { icon: FaBullseye, title: 'Our Mission', color: '#FF8C00', text: 'To empower businesses with innovative, scalable, and reliable technology solutions that drive growth, efficiency, and competitive advantage in the digital landscape.' },
          { icon: FaEye,      title: 'Our Vision',  color: '#5B2C9F', text: 'To be the most trusted technology partner in the region — recognized for excellence, integrity, and the transformative impact we create for our clients.' },
        ].map(({ icon: Icon, title, color, text }) => (
          <div key={title} className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg,#1e0a3c,#2d1257)', border: `1px solid ${color}40` }}>
            <Icon className="text-4xl mb-4" style={{ color }} />
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">Core <span style={{ color: '#FF8C00' }}>Values</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg,#1e0a3c,#2d1257)', border:'1px solid rgba(91,44,159,0.3)' }}>
              <v.icon className="text-2xl mb-3" style={{ color: '#FF8C00' }} />
              <h3 className="text-lg font-bold text-white mb-1">{v.title}</h3>
              <p className="text-gray-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">Our <span style={{ color: '#FF8C00' }}>Journey</span></h2>
        <div className="relative border-l-2 pl-8 space-y-8" style={{ borderColor: '#5B2C9F' }}>
          {timeline.map((t) => (
            <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="absolute -left-10 w-4 h-4 rounded-full mt-1" style={{ background: '#FF8C00' }} />
              <span className="text-sm font-bold" style={{ color: '#FF8C00' }}>{t.year}</span>
              <p className="text-gray-300 mt-1">{t.event}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
