'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaSearch, FaBook, FaVideo, FaFileAlt } from 'react-icons/fa';

const seedResources = [
  { id:1, title:'Next.js 14 Starter Guide',       category:'Guide',    type:'PDF',   tags:['Next.js','React'],     desc:'Complete guide to setting up Next.js 14 with App Router and TypeScript.' },
  { id:2, title:'IT Consulting Checklist',         category:'Template', type:'DOCX',  tags:['Consulting','Strategy'],desc:'Comprehensive checklist for IT consulting engagements.' },
  { id:3, title:'Web App Architecture Overview',   category:'Video',    type:'MP4',   tags:['Architecture','Design'],desc:'Video walkthrough of modern web application architecture patterns.' },
  { id:4, title:'MongoDB Schema Design Patterns',  category:'Guide',    type:'PDF',   tags:['MongoDB','Database'],   desc:'Best practices for designing MongoDB schemas at scale.' },
  { id:5, title:'Project Proposal Template',       category:'Template', type:'DOCX',  tags:['Business','Proposal'],  desc:'Professional project proposal template for client engagements.' },
  { id:6, title:'React Performance Optimization',  category:'Guide',    type:'PDF',   tags:['React','Performance'],  desc:'Techniques to optimize React app performance and reduce bundle size.' },
];

const categories = ['All', 'Guide', 'Template', 'Video'];
const iconMap: Record<string, React.ElementType> = { Guide: FaBook, Template: FaFileAlt, Video: FaVideo };

export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = seedResources.filter(r =>
    (category === 'All' || r.category === category) &&
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: '#0d0618' }} className="min-h-screen pb-20">
      <section className="py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg,#1a0a2e,#3D1A5C,#2563EB)' }}>
        <h1 className="text-5xl font-black text-white mb-4">Resources & <span style={{ color: '#FF8C00' }}>Downloads</span></h1>
        <p className="text-gray-300 max-w-xl mx-auto">Guides, templates, and video resources from the Raptor Webcraft team.</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent text-white border outline-none focus:border-orange-500"
              style={{ background:'rgba(255,255,255,0.05)', borderColor:'rgba(91,44,159,0.5)' }} />
          </div>
          <div className="flex gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{ background: category===c ? '#FF8C00' : 'rgba(91,44,159,0.2)', color: category===c ? '#fff' : '#ccc', border:'1px solid rgba(91,44,159,0.4)' }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => {
            const Icon = iconMap[r.category] || FaFileAlt;
            return (
              <motion.div key={r.id} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.05 }}
                className="p-6 rounded-2xl flex flex-col gap-3"
                style={{ background:'linear-gradient(135deg,#1e0a3c,#2d1257)', border:'1px solid rgba(91,44,159,0.35)' }}>
                <div className="flex items-center gap-3">
                  <Icon className="text-2xl" style={{ color:'#FF8C00' }} />
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background:'rgba(91,44,159,0.3)', color:'#a78bfa' }}>{r.category}</span>
                  <span className="text-xs text-gray-500 ml-auto">{r.type}</span>
                </div>
                <h3 className="font-bold text-white">{r.title}</h3>
                <p className="text-gray-400 text-sm">{r.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {r.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background:'rgba(37,99,235,0.2)', color:'#60A5FA' }}>{t}</span>)}
                </div>
                <div className="flex gap-2 mt-auto pt-2">
                  <button className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80 flex items-center justify-center gap-2"
                    style={{ background:'rgba(255,140,0,0.15)', color:'#FF8C00', border:'1px solid rgba(255,140,0,0.3)' }}>
                    <FaDownload /> Download
                  </button>
                  <button className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80 flex items-center justify-center gap-2"
                    style={{ background:'rgba(91,44,159,0.2)', color:'#a78bfa', border:'1px solid rgba(91,44,159,0.4)' }}>
                    <FaEye /> View
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-20">No resources found. Try a different search or category.</p>
        )}
      </section>
    </div>
  );
}
