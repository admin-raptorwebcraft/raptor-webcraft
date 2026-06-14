'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBell, FaFolder, FaChartBar, FaTrash, FaPlus, FaThumbTack, FaSignOutAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const tabs = [
  { id:'overview',   label:'Overview',  icon: FaChartBar },
  { id:'users',      label:'Users',     icon: FaUsers },
  { id:'notices',    label:'Notices',   icon: FaBell },
  { id:'resources',  label:'Resources', icon: FaFolder },
];

const seedUsers = [
  { id:1, name:'Alice Johnson', email:'alice@example.com', role:'user',  status:'Active' },
  { id:2, name:'Bob Smith',     email:'bob@example.com',   role:'admin', status:'Active' },
  { id:3, name:'Carol White',   email:'carol@example.com', role:'user',  status:'Inactive' },
];

const seedNotices = [
  { id:1, title:'System Maintenance – 15 Jan 2025', type:'Important', pinned:true,  date:'2025-01-10' },
  { id:2, title:'New IT Advisory Service Launched', type:'Update',    pinned:true,  date:'2025-01-08' },
  { id:3, title:'Office Closed – Public Holiday',   type:'General',   pinned:false, date:'2025-01-06' },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState('overview');
  const router = useRouter();

  const stats = [
    { label:'Total Users',     value:'34',  color:'#FF8C00' },
    { label:'Active Notices',  value:'5',   color:'#5B2C9F' },
    { label:'Resources',       value:'12',  color:'#2563EB' },
    { label:'This Month Logins', value:'128', color:'#17b26a' },
  ];

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method:'POST' });
    toast.success('Logged out');
    router.push('/login');
  };

  return (
    <div style={{ background:'#0d0618' }} className="min-h-screen">
      {/* Header */}
      <div className="px-6 py-6 flex items-center justify-between" style={{ background:'linear-gradient(135deg,#1a0a2e,#3D1A5C)', borderBottom:'1px solid rgba(91,44,159,0.3)' }}>
        <div>
          <h1 className="text-2xl font-black text-white">Admin <span style={{ color:'#FF8C00' }}>Dashboard</span></h1>
          <p className="text-gray-400 text-sm">Raptor Webcraft Technologies</p>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
          style={{ background:'rgba(240,68,56,0.15)', color:'#f04438', border:'1px solid rgba(240,68,56,0.3)' }}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ background: tab===t.id ? '#FF8C00' : 'rgba(91,44,159,0.2)', color: tab===t.id ? '#fff' : '#999', border:'1px solid rgba(91,44,159,0.3)' }}>
              <t.icon /> {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === 'overview' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="p-6 rounded-2xl text-center" style={{ background:'linear-gradient(135deg,#1e0a3c,#2d1257)', border:`1px solid ${s.color}30` }}>
                <div className="text-3xl font-black" style={{ color: s.color }}>{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Users */}
        {tab === 'users' && (
          <div className="rounded-2xl overflow-hidden" style={{ border:'1px solid rgba(91,44,159,0.3)' }}>
            <table className="w-full text-sm">
              <thead style={{ background:'rgba(91,44,159,0.3)' }}>
                <tr>
                  {['Name','Email','Role','Status','Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-gray-300 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seedUsers.map((u,i) => (
                  <tr key={u.id} style={{ background: i%2===0 ? 'rgba(30,10,60,0.6)' : 'rgba(45,18,87,0.4)' }}>
                    <td className="px-4 py-3 text-white font-medium">{u.name}</td>
                    <td className="px-4 py-3 text-gray-400">{u.email}</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full text-xs" style={{ background: u.role==='admin'?'rgba(255,140,0,0.2)':'rgba(91,44,159,0.2)', color: u.role==='admin'?'#FF8C00':'#a78bfa' }}>{u.role}</span></td>
                    <td className="px-4 py-3"><span style={{ color: u.status==='Active'?'#17b26a':'#f04438' }}>{u.status}</span></td>
                    <td className="px-4 py-3"><button className="text-red-400 hover:text-red-300"><FaTrash /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Notices */}
        {tab === 'notices' && (
          <div className="space-y-3">
            {seedNotices.map(n => (
              <div key={n.id} className="p-4 rounded-2xl flex items-center justify-between"
                style={{ background:'linear-gradient(135deg,#1e0a3c,#2d1257)', border:'1px solid rgba(91,44,159,0.3)' }}>
                <div className="flex items-center gap-3">
                  {n.pinned && <FaThumbTack style={{ color:'#FF8C00' }} />}
                  <div>
                    <p className="text-white font-medium">{n.title}</p>
                    <p className="text-gray-500 text-xs">{n.date} · {n.type}</p>
                  </div>
                </div>
                <button className="text-red-400 hover:text-red-300"><FaTrash /></button>
              </div>
            ))}
            <button className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{ background:'rgba(255,140,0,0.15)', color:'#FF8C00', border:'1px solid rgba(255,140,0,0.3)' }}>
              <FaPlus /> Add Notice
            </button>
          </div>
        )}

        {/* Resources */}
        {tab === 'resources' && (
          <div className="text-center py-16 text-gray-500">
            <FaFolder className="text-4xl mx-auto mb-4 opacity-40" />
            <p>Connect to your MongoDB API to manage resources here.</p>
            <p className="text-sm mt-1">Replace seed data with <code className="text-purple-400">/api/resources</code> calls.</p>
          </div>
        )}
      </div>
    </div>
  );
}
