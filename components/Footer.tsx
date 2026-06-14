import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ background:'#0a0414', borderTop:'1px solid rgba(91,44,159,0.3)' }} className="text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg"
              style={{ background:'linear-gradient(135deg,#5B2C9F,#2563EB)' }}>
              <span style={{ color:'#FF8C00' }}>R</span>
            </div>
            <div>
              <div className="font-black text-sm" style={{ color:'#FF8C00' }}>RAPTOR</div>
              <div className="font-bold text-xs text-white">WEBCRAFT TECHNOLOGIES</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Software & IT Solutions Company — We Develop Websites, Do IT Consulting and Advisory.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Navigation</h4>
          <div className="space-y-2 text-sm">
            {[['Home','/'],['About Us','/about'],['Resources','/resources'],['Notices','/notices']].map(([label,href])=>(
              <Link key={href} href={href} className="block hover:text-orange-400 transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Services</h4>
          <div className="space-y-2 text-sm">
            {['Web Development','IT Consulting','Tech Advisory','System Integration'].map(s=>(
              <div key={s}>{s}</div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><FaEnvelope className="text-orange-400"/><span>info@raptorwebcraft.com</span></div>
          </div>
          <div className="flex gap-4 mt-6">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background:'rgba(91,44,159,0.25)', border:'1px solid rgba(91,44,159,0.4)' }}>
                <Icon className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-12 border-t pt-8" style={{ borderColor:'rgba(91,44,159,0.2)' }}>
        © {new Date().getFullYear()} Raptor Webcraft Technologies. All rights reserved.
      </div>
    </footer>
  );
}
