'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaShieldAlt, FaUserCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'user'|'admin'>('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      toast.success(`Welcome back!`);
      router.push(role === 'admin' ? '/dashboard/admin' : '/dashboard/user');
    } catch (err: any) {
      toast.error(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background:'linear-gradient(135deg,#1a0a2e,#3D1A5C,#2563EB)' }}>
      <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
        className="w-full max-w-md p-8 rounded-3xl" style={{ background:'rgba(255,255,255,0.05)', backdropFilter:'blur(20px)', border:'1px solid rgba(91,44,159,0.5)' }}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background:'linear-gradient(135deg,#5B2C9F,#2563EB)' }}>
            <span className="text-2xl font-black text-white">R</span>
          </div>
          <h1 className="text-2xl font-black text-white">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to Raptor Webcraft</p>
        </div>

        {/* Role toggle */}
        <div className="flex rounded-xl p-1 mb-6" style={{ background:'rgba(0,0,0,0.3)' }}>
          {(['user','admin'] as const).map(r => (
            <button key={r} onClick={() => setRole(r)}
              className="flex-1 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all"
              style={{ background: role===r ? (r==='admin'?'#FF8C00':'#5B2C9F') : 'transparent', color: role===r?'#fff':'#888' }}>
              {r==='admin' ? <FaShieldAlt/> : <FaUserCircle/>} {r.charAt(0).toUpperCase()+r.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" required
              className="w-full pl-12 pr-4 py-3 rounded-xl text-white outline-none"
              style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(91,44,159,0.5)' }} />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type={showPwd?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" required
              className="w-full pl-12 pr-12 py-3 rounded-xl text-white outline-none"
              style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(91,44,159,0.5)' }} />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {showPwd ? <FaEyeSlash/> : <FaEye/>}
            </button>
          </div>
          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
            style={{ background: role==='admin' ? 'linear-gradient(135deg,#FF8C00,#ff6b00)' : 'linear-gradient(135deg,#5B2C9F,#2563EB)' }}>
            {loading ? 'Signing in...' : `Sign in as ${role.charAt(0).toUpperCase()+role.slice(1)}`}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
