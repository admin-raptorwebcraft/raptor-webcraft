"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaDownload, FaBell, FaSignOutAlt, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import toast from "react-hot-toast";

export default function UserDashboard() {
  const [user, setUser] = useState<{name:string;email:string;role:string}|null>(null);
  const router = useRouter();

  useEffect(() => {
    const u = localStorage.getItem("rwt_user");
    if (!u) { router.push("/login"); return; }
    setUser(JSON.parse(u));
  }, [router]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("rwt_token");
    localStorage.removeItem("rwt_user");
    toast.success("Logged out successfully!");
    router.push("/login");
  };

  if (!user) return <div style={{ minHeight:"100vh",background:"#0d0618",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff" }}>Loading...</div>;

  return (
    <div style={{ minHeight:"100vh", background:"#0d0618", color:"#fbfbff", paddingTop:"4rem" }}>
      <div style={{ background:"rgba(26,10,46,0.8)", borderBottom:"1px solid rgba(91,44,159,0.3)", padding:"1.5rem" }}>
        <div style={{ maxWidth:"72rem", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <div>
            <h1 style={{ fontWeight:900, fontSize:"1.5rem" }}>My <span style={{ color:"#FF8C00" }}>Dashboard</span></h1>
            <p style={{ color:"#9ca3af", fontSize:".875rem" }}>Welcome back, {user.name}!</p>
          </div>
          <button onClick={logout} style={{ display:"flex", alignItems:"center", gap:".5rem", padding:".625rem 1.25rem", borderRadius:".75rem", border:"1px solid rgba(91,44,159,0.4)", background:"transparent", color:"#fff", cursor:"pointer" }}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
      <div style={{ maxWidth:"72rem", margin:"0 auto", padding:"2rem 1.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1.5rem", marginBottom:"2rem" }}>
          {[{icon:FaDownload,label:"Resources",value:"6",color:"#FF8C00"},{icon:FaBell,label:"Notices",value:"6",color:"#5B2C9F"},{icon:FaShieldAlt,label:"Account Type",value:"USER",color:"#2563EB"},{icon:FaUser,label:"Profile",value:"Active",color:"#10b981"}].map(s => (
            <div key={s.label} style={{ background:"rgba(26,10,46,0.6)", border:"1px solid rgba(91,44,159,0.3)", borderRadius:"1rem", padding:"1.5rem" }}>
              <s.icon style={{ fontSize:"1.5rem", color:s.color, marginBottom:".5rem" }} />
              <div style={{ fontSize:"1.5rem", fontWeight:900, color:"#fff" }}>{s.value}</div>
              <div style={{ color:"#9ca3af", fontSize:".875rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem" }}>
          <div style={{ background:"rgba(26,10,46,0.5)", border:"1px solid rgba(91,44,159,0.2)", borderRadius:"1rem", padding:"1.5rem" }}>
            <h3 style={{ color:"#fff", fontWeight:700, marginBottom:"1rem" }}>My Profile</h3>
            <p style={{ color:"#9ca3af", fontSize:".9375rem", marginBottom:".5rem" }}><FaUser style={{ display:"inline", marginRight:".5rem", color:"#FF8C00" }} />{user.name}</p>
            <p style={{ color:"#9ca3af", fontSize:".9375rem" }}><FaEnvelope style={{ display:"inline", marginRight:".5rem", color:"#FF8C00" }} />{user.email}</p>
          </div>
          <div style={{ background:"rgba(26,10,46,0.5)", border:"1px solid rgba(91,44,159,0.2)", borderRadius:"1rem", padding:"1.5rem" }}>
            <h3 style={{ color:"#fff", fontWeight:700, marginBottom:"1rem" }}>Contact Support</h3>
            <p style={{ color:"#9ca3af", fontSize:".875rem", lineHeight:1.7 }}>Need help? Contact Raptor Webcraft support team.</p>
            <a href="mailto:rwct.raptorwebcraft@gmail.com" style={{ display:"inline-block", marginTop:"1rem", padding:".5rem 1rem", borderRadius:".75rem", background:"linear-gradient(to right,#FF8C00,#5B2C9F)", color:"#fff", textDecoration:"none", fontSize:".875rem", fontWeight:600 }}>Send Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}
