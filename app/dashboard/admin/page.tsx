"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUsers, FaBell, FaFolder, FaSignOutAlt, FaTachometerAlt, FaPlus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [tab,  setTab]  = useState("overview");
  const [user, setUser] = useState<{name:string;email:string;role:string}|null>(null);
  const router = useRouter();

  useEffect(() => {
    const u = localStorage.getItem("rwt_user");
    if (!u) { router.push("/login"); return; }
    const parsed = JSON.parse(u);
    if (parsed.role !== "admin") { router.push("/dashboard/user"); return; }
    setUser(parsed);
  }, [router]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("rwt_token");
    localStorage.removeItem("rwt_user");
    toast.success("Logged out");
    router.push("/login");
  };

  const TABS = [{id:"overview",label:"Overview",icon:FaTachometerAlt},{id:"users",label:"Users",icon:FaUsers},{id:"notices",label:"Notices",icon:FaBell},{id:"resources",label:"Resources",icon:FaFolder}];

  if (!user) return <div style={{ minHeight:"100vh",background:"#0d0618",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff" }}>Loading...</div>;

  return (
    <div style={{ minHeight:"100vh", background:"#0d0618", color:"#fbfbff", paddingTop:"4rem" }}>
      <div style={{ background:"rgba(26,10,46,0.8)", borderBottom:"1px solid rgba(91,44,159,0.3)", padding:"1.5rem" }}>
        <div style={{ maxWidth:"80rem", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <div>
            <h1 style={{ fontWeight:900, fontSize:"1.5rem", color:"#fff" }}>Admin <span style={{ color:"#FF8C00" }}>Dashboard</span></h1>
            <p style={{ color:"#9ca3af", fontSize:".875rem" }}>Welcome back, {user.name}</p>
          </div>
          <button onClick={logout} style={{ display:"flex", alignItems:"center", gap:".5rem", padding:".625rem 1.25rem", borderRadius:".75rem", border:"1px solid rgba(91,44,159,0.4)", background:"transparent", color:"#fff", cursor:"pointer" }}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
      <div style={{ maxWidth:"80rem", margin:"0 auto", padding:"2rem 1.5rem" }}>
        <div style={{ display:"flex", gap:".5rem", flexWrap:"wrap", marginBottom:"2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ display:"flex", alignItems:"center", gap:".5rem", padding:".625rem 1.25rem", borderRadius:".75rem", border:"1px solid", borderColor: tab===t.id?"#FF8C00":"rgba(91,44,159,0.3)", background: tab===t.id?"rgba(255,140,0,0.15)":"transparent", color: tab===t.id?"#FF8C00":"#9ca3af", cursor:"pointer", fontWeight:600, fontSize:".875rem" }}>
              <t.icon /> {t.label}
            </button>
          ))}
        </div>
        {tab === "overview" && (
          <div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1.5rem", marginBottom:"2rem" }}>
              {[{label:"Total Users",value:"2",icon:FaUsers,color:"#FF8C00"},{label:"Active Notices",value:"6",icon:FaBell,color:"#5B2C9F"},{label:"Resources",value:"6",icon:FaFolder,color:"#2563EB"},{label:"Logins Today",value:"1",icon:FaTachometerAlt,color:"#10b981"}].map(s => (
                <div key={s.label} style={{ background:"rgba(26,10,46,0.6)", border:"1px solid rgba(91,44,159,0.3)", borderRadius:"1rem", padding:"1.5rem" }}>
                  <s.icon style={{ fontSize:"1.5rem", color:s.color, marginBottom:".5rem" }} />
                  <div style={{ fontSize:"2rem", fontWeight:900, color:"#fff" }}>{s.value}</div>
                  <div style={{ color:"#9ca3af", fontSize:".875rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background:"rgba(26,10,46,0.5)", border:"1px solid rgba(91,44,159,0.2)", borderRadius:"1rem", padding:"1.5rem" }}>
              <h3 style={{ color:"#fff", fontWeight:700, marginBottom:"1rem" }}>Company Info</h3>
              <p style={{ color:"#9ca3af", fontSize:".9375rem", lineHeight:1.8 }}>Mandikhatar, Budhanilkantha-09, Kathmandu 44600<br/>+977-01-4375420 | rwct.raptorwebcraft@gmail.com</p>
            </div>
          </div>
        )}
        {tab === "users" && (
          <div style={{ background:"rgba(26,10,46,0.5)", border:"1px solid rgba(91,44,159,0.2)", borderRadius:"1rem", padding:"1.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
              <h3 style={{ color:"#fff", fontWeight:700 }}>Manage Users</h3>
              <button style={{ display:"flex", alignItems:"center", gap:".5rem", padding:".5rem 1rem", borderRadius:".75rem", border:"none", background:"linear-gradient(to right,#FF8C00,#5B2C9F)", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:".875rem" }}>
                <FaPlus /> Add User
              </button>
            </div>
            {[{name:"Raptor Admin",email:"admin@raptorwebcraft.com",role:"admin",status:"Active"},{name:"John Doe",email:"user@raptorwebcraft.com",role:"user",status:"Active"}].map(u => (
              <div key={u.email} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem", marginBottom:".75rem", background:"rgba(13,6,24,0.4)", border:"1px solid rgba(91,44,159,0.15)", borderRadius:".75rem", flexWrap:"wrap", gap:"1rem" }}>
                <div>
                  <p style={{ color:"#fff", fontWeight:600 }}>{u.name}</p>
                  <p style={{ color:"#9ca3af", fontSize:".8125rem" }}>{u.email}</p>
                </div>
                <div style={{ display:"flex", gap:".75rem", alignItems:"center" }}>
                  <span style={{ padding:".25rem .75rem", borderRadius:"999px", fontSize:".75rem", fontWeight:700, color: u.role==="admin"?"#c084fc":"#60a5fa", background: u.role==="admin"?"rgba(192,132,252,0.1)":"rgba(96,165,250,0.1)" }}>{u.role.toUpperCase()}</span>
                  <span style={{ padding:".25rem .75rem", borderRadius:"999px", fontSize:".75rem", color:"#10b981", background:"rgba(16,185,129,0.1)" }}>Active</span>
                  <button style={{ background:"none", border:"1px solid rgba(239,68,68,0.3)", padding:".375rem .625rem", borderRadius:".5rem", color:"#f87171", cursor:"pointer" }}><FaTrash /></button>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "notices" && (
          <div style={{ background:"rgba(26,10,46,0.5)", border:"1px solid rgba(91,44,159,0.2)", borderRadius:"1rem", padding:"1.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
              <h3 style={{ color:"#fff", fontWeight:700 }}>Manage Notices</h3>
              <button style={{ display:"flex", alignItems:"center", gap:".5rem", padding:".5rem 1rem", borderRadius:".75rem", border:"none", background:"linear-gradient(to right,#FF8C00,#5B2C9F)", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:".875rem" }}>
                <FaPlus /> Add Notice
              </button>
            </div>
            <p style={{ color:"#9ca3af" }}>6 notices active. Connect to MongoDB to manage live notices from the database.</p>
          </div>
        )}
        {tab === "resources" && (
          <div style={{ background:"rgba(26,10,46,0.5)", border:"1px solid rgba(91,44,159,0.2)", borderRadius:"1rem", padding:"1.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem" }}>
              <h3 style={{ color:"#fff", fontWeight:700 }}>Manage Resources</h3>
              <button style={{ display:"flex", alignItems:"center", gap:".5rem", padding:".5rem 1rem", borderRadius:".75rem", border:"none", background:"linear-gradient(to right,#FF8C00,#5B2C9F)", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:".875rem" }}>
                <FaPlus /> Add Resource
              </button>
            </div>
            <p style={{ color:"#9ca3af" }}>6 resources available. Connect to MongoDB to manage live resources from the database.</p>
          </div>
        )}
      </div>
    </div>
  );
}
