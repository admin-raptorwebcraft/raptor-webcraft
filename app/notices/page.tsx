'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaSearch, FaThumbTack, FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const seedNotices = [
  { id:1, title:'System Maintenance – 15 Jan 2025',       type:'Important', pinned:true,  date:'2025-01-10', body:'Scheduled maintenance from 2 AM–4 AM UTC. Services may be temporarily unavailable.' },
  { id:2, title:'New IT Advisory Service Launched',       type:'Update',    pinned:true,  date:'2025-01-08', body:'Raptor Webcraft has launched dedicated IT advisory packages for SMEs. Contact us to learn more.' },
  { id:3, title:'Office Closed – Public Holiday',         type:'General',   pinned:false, date:'2025-01-06', body:'Our offices will be closed on the upcoming public holiday. Support is available via email.' },
  { id:4, title:'Security Update: Please Reset Password', type:'Urgent',    pinned:false, date:'2025-01-04', body:'A proactive security update requires all users to reset their passwords before next login.' },
  { id:5, title:'Q1 2025 Newsletter',                     type:'General',   pinned:false, date:'2025-01-02', body:'Read our Q1 newsletter covering new projects, team updates, and upcoming events.' },
];

const typeStyle: Record<string, { color:string; bg:string; icon:React.ElementType }> = {
  General:   { color:'#60A5FA', bg:'rgba(37,99,235,0.15)',   icon: FaInfoCircle },
  Important: { color:'#FF8C00', bg:'rgba(255,140,0,0.15)',   icon: FaExclamationTriangle },
  Urgent:    { color:'#f04438', bg:'rgba(240,68,56,0.15)',   icon: FaExclamationTriangle },
  Update:    { color:'#17b26a', bg:'rgba(23,178,106,0.15)',  icon: FaCheckCircle },
};

const types = ['All', 'General', 'Important', 'Urgent', 'Update'];

export default function NoticesPage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');

  const pinned = seedNotices.filter(n => n.pinned);
  const filtered = seedNotices.filter(n =>
    !n.pinned &&
    (type === 'All' || n.type === type) &&
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background:'#0d0618' }} className="min-h-screen pb-20">
      <section className="py-24 px-6 text-center" style={{ background:'linear-gradient(135deg,#1a0a2e,#3D1A5C,#2563EB)' }}>
        <h1 className="text-5xl font-black text-white mb-4"><span style={{ color:'#FF8C00' }}>Notices</span> & Announcements</h1>
        <p className="text-gray-300 max-w-xl mx-auto">Stay up to date with the latest company news, updates, and alerts.</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-12">
        {/* Pinned */}
        {pinned.map(n => {
          const s = typeStyle[n.type];
          const Icon = s.icon;
          return (
            <div key={n.id} className="p-5 rounded-2xl mb-4 flex gap-4 items-start"
              style={{ background: s.bg, border:`1px solid ${s.color}40` }}>
              <FaThumbTack style={{ color: s.color }} className="mt-1 shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white">{n.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: s.bg, color: s.color }}>{n.type}</span>
                </div>
                <p className="text-gray-400 text-sm">{n.body}</p>
                <p className="text-xs text-gray-600 mt-1">{n.date}</p>
              </div>
            </div>
          );
        })}

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 my-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search notices..."
              className="w-full pl-12 pr-4 py-3 rounded-xl text-white outline-none"
              style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(91,44,159,0.5)' }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map(t => (
              <button key={t} onClick={() => setType(t)}
                className="px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{ background: type===t ? '#FF8C00' : 'rgba(91,44,159,0.2)', color: type===t ? '#fff' : '#ccc', border:'1px solid rgba(91,44,159,0.4)' }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filtered.map((n, i) => {
            const s = typeStyle[n.type];
            const Icon = s.icon;
            return (
              <motion.div key={n.id} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.05 }}
                className="p-5 rounded-2xl" style={{ background:'linear-gradient(135deg,#1e0a3c,#2d1257)', border:'1px solid rgba(91,44,159,0.35)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon style={{ color: s.color }} />
                  <span className="font-bold text-white flex-1">{n.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: s.bg, color: s.color }}>{n.type}</span>
                </div>
                <p className="text-gray-400 text-sm">{n.body}</p>
                <p className="text-xs text-gray-600 mt-2">{n.date}</p>
              </motion.div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-16">No notices found.</p>
        )}
      </section>
    </div>
  );
}
