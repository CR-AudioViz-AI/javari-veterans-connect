// app/page.tsx - Javari Veterans Connect
// AI tools built for veterans, first responders, and military families
// CR AudioViz AI · EIN 39-3646201 · May 2026
"use client";
import { useState } from "react";

const RESOURCES = [
  { icon:"💼", label:"Business Plan Writer",    desc:"Start your veteran-owned business with AI",   href:"/business-plan" },
  { icon:"💚", label:"VA Benefits Assistant",   desc:"Navigate VA claims and benefits",             href:"/va-benefits" },
  { icon:"💵", label:"Grant Finder",            desc:"$250K+ in veteran business grants",           href:"https://craudiovizai.com/grants" },
  { icon:"📄", label:"Resume Builder",          desc:"Military to civilian translation",            href:"/resume" },
  { icon:"🎓", label:"GI Bill Navigator",       desc:"Maximize your education benefits",            href:"/gi-bill" },
  { icon:"🏠", label:"VA Home Loan Guide",      desc:"Zero down, no PMI — how it works",            href:"/va-loan" },
  { icon:"🤝", label:"Mentorship Network",      desc:"Connect with successful veteran entrepreneurs",href:"/mentorship" },
  { icon:"🚒", label:"First Responders",        desc:"Tools for fire, police, EMS personnel",       href:"/first-responders" },
];

const STATS = [
  { n:"2×",   l:"Free credits — veterans get double" },
  { n:"$250K",l:"Average veteran grant available" },
  { n:"18M",  l:"Veterans we serve" },
  { n:"$0",   l:"Cost to get started" },
];

export default function VeteransHome() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askVA() {
    if (!question.trim()) return;
    setLoading(true); setAnswer("");
    try {
      const res = await fetch("/api/chat", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          messages:[{ role:"user", content: question }],
          stream: false,
          systemOverride: "You are Javari, a knowledgeable assistant specializing in veteran benefits, VA services, military transition, and resources for veterans and first responders. Provide accurate, compassionate, and actionable information. Always encourage veterans to contact the VA or a VSO for official guidance on specific claims."
        }),
      });
      const data = await res.json();
      setAnswer(data?.choices?.[0]?.message?.content || data?.content || "Error.");
    } catch { setAnswer("Connection error."); }
    setLoading(false);
  }

  return (
    <div style={{ minHeight:"100vh", background:"#040912", color:"#e2e8f0", fontFamily:"system-ui" }}>
      <nav style={{ background:"#1E3A5F", padding:"0 20px", height:52, display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:20 }}>🎖️</span>
          <span style={{ fontWeight:800, color:"#00B4D8", fontSize:15 }}>Veterans Connect</span>
          <span style={{ color:"#374151", fontSize:11 }}>· Built for those who served</span>
        </div>
        <a href="https://craudiovizai.com/auth/signup" style={{ background:"#FF0800", color:"#fff", borderRadius:7, padding:"5px 14px", fontSize:12, fontWeight:700, textDecoration:"none" }}>Get 2× Free Credits</a>
      </nav>

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#1E3A5F 0%,#040912 100%)", padding:"72px 24px 60px", textAlign:"center" }}>
        <div style={{ maxWidth:660, margin:"0 auto" }}>
          <div style={{ display:"inline-block", background:"rgba(255,8,0,0.12)", border:"1px solid rgba(255,8,0,0.25)", borderRadius:20, padding:"4px 16px", marginBottom:18, fontSize:12, fontWeight:700, color:"#FF0800", letterSpacing:"0.06em" }}>
            🎖️ Veterans & First Responders Get 2× Free Credits
          </div>
          <h1 style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:900, color:"#fff", margin:"0 0 16px", lineHeight:1.05 }}>
            You Served.<br /><span style={{ color:"#00B4D8" }}>We Have Your Back.</span>
          </h1>
          <p style={{ fontSize:16, color:"rgba(255,255,255,0.7)", lineHeight:1.65, margin:"0 0 32px", maxWidth:500, marginLeft:"auto", marginRight:"auto" }}>
            AI tools built specifically for veterans, first responders, and military families.
            Navigate benefits, launch businesses, and connect with your community.
          </p>
        </div>
      </section>

      {/* Ask Javari */}
      <section style={{ maxWidth:680, margin:"40px auto 0", padding:"0 20px" }}>
        <div style={{ background:"#0F1F32", border:"1px solid rgba(0,180,216,0.15)", borderRadius:16, padding:24 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:"#fff", margin:"0 0 14px" }}>Ask Javari about your VA benefits</h2>
          <div style={{ display:"flex", gap:8 }}>
            <input value={question} onChange={e=>setQuestion(e.target.value)}
              onKeyDown={e=>e.key==="Enter"&&askVA()}
              placeholder="What VA benefits am I eligible for? How do I start a business as a vet?"
              style={{ flex:1, background:"#172D48", border:"1px solid rgba(0,180,216,0.2)", borderRadius:8, padding:"11px 14px", color:"#e2e8f0", fontSize:13, outline:"none", fontFamily:"system-ui" }} />
            <button onClick={askVA} disabled={loading||!question.trim()}
              style={{ background: loading||!question.trim()?"#0F1F32":"#1E3A5F", color: loading||!question.trim()?"#374151":"#00B4D8", border:"1px solid rgba(0,180,216,0.2)", borderRadius:8, padding:"11px 18px", fontSize:13, fontWeight:700, cursor: loading||!question.trim()?"not-allowed":"pointer", fontFamily:"system-ui", whiteSpace:"nowrap" }}>
              {loading?"...":"Ask"}
            </button>
          </div>
          {answer && (
            <div style={{ marginTop:16, padding:"14px 16px", background:"rgba(0,180,216,0.06)", border:"1px solid rgba(0,180,216,0.12)", borderRadius:10, fontSize:13, lineHeight:1.65, color:"#e2e8f0", whiteSpace:"pre-wrap" }}>
              {answer}
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth:800, margin:"40px auto 0", padding:"0 20px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))", gap:14 }}>
          {STATS.map(s=>(
            <div key={s.n} style={{ background:"#0F1F32", border:"1px solid rgba(0,180,216,0.08)", borderRadius:12, padding:"18px 16px", textAlign:"center" }}>
              <div style={{ fontSize:24, fontWeight:900, color:"#FF0800" }}>{s.n}</div>
              <div style={{ fontSize:11, color:"#6B7280", marginTop:4, lineHeight:1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section style={{ maxWidth:960, margin:"0 auto", padding:"48px 20px 72px" }}>
        <h2 style={{ textAlign:"center", fontSize:"clamp(18px,3vw,28px)", fontWeight:800, color:"#fff", margin:"0 0 32px" }}>Tools built for veterans</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:12 }}>
          {RESOURCES.map(r=>(
            <a key={r.href} href={r.href} style={{ background:"#0F1F32", border:"1px solid rgba(0,180,216,0.08)", borderRadius:14, padding:"20px 18px", textDecoration:"none", display:"block" }}>
              <span style={{ fontSize:28, display:"block", marginBottom:8 }}>{r.icon}</span>
              <div style={{ fontWeight:700, fontSize:13, color:"#e2e8f0", marginBottom:5 }}>{r.label}</div>
              <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.4 }}>{r.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <footer style={{ borderTop:"1px solid rgba(0,180,216,0.08)", padding:"14px 24px", textAlign:"center" }}>
        <p style={{ color:"#374151", fontSize:11, margin:0 }}>
          © 2026 CR AudioViz AI, LLC — EIN: 39-3646201 · Built with honor for those who served ·
          <a href="https://craudiovizai.com/auth/signup" style={{ color:"#FF0800", textDecoration:"none", fontWeight:600, marginLeft:4 }}>Get 2× Free Credits</a>
        </p>
      </footer>
    </div>
  );
}