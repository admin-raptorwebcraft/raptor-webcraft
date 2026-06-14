'use client';
import { motion } from 'framer-motion';
import { FaBell, FaFolder, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function UserDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method:'POST' });
    toast.success('Logged out');
    router.push('/login');
  };

  const stats = [
    { label:'Resources Available', value:'12', icon: FaFolder,  color:'#5B2C9F' },
    { label:'New Notices',         value:'3',  icon: FaBell,    color:'#FF8C00' },
    { label:'My Profile',          value:'1',  icon: FaUser,    color:'#2563EB' },
  ];

  return (
    <div style={{ background:'#0d0618' }} className="min-h-screen">
      <div className="px-6 py-6 flex items-center justify-between" style={{ background:'linear-gradient(135deg,#1a0a2e,#3D1A5C)', borderBottom:'1px solid rgba(91,44,159,0.3)' }}>
        <div>
          <h1 className="text-2xl font-black text-white">My <span style={{ color:'#FF8C00' }}>Dashboard</span></h1>
          <p className="text-gray-400 text-sm">Welcome to Raptor Webcraft</p>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
          style={{ background:'rgba(240,68,56,0.15)', color:'#f04438', border:'1px solid rgba(240,68,56,0.3)' }}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.1 }}
              className="p-6 rounded-2xl text-center" style={{ background:'linear-gradient(135deg,#1e0a3c,#2d1257)', border:`1px solid ${s.color}30` }}>
              <s.icon className="text-3xl mx-auto mb-3" style={{ color: s.color }} />
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="p-6 rounded-2xl" style={{ background:'linear-gradient(135deg,#1e0a3c,#2d1257)', border:'1px solid rgba(91,44,159,0.3)' }}>
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            {[['Resources','/resources','#5B2C9F'],['Notices','/notices','#FF8C00']].map(([label,href,color])=>(
              <a key={label} href={href} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-80"
                style={{ background: color }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
