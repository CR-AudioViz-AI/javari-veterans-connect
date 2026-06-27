"use client";
// app/page.tsx — Javari Veterans Connect
// AI tools for veterans, military families, and veteran service organizations
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { useState, useCallback } from "react";

const TOOLS = [
  { id:"resume",    icon:"📄", label:"Military-to-Civilian Resume",   desc:"Translate your service into civilian language that gets interviews",   color:"#3B82F6" },
  { id:"business",  icon:"🏢", label:"Veteran Business Plan",         desc:"Complete business plan for veteran entrepreneurs (SBA-ready)",         color:"#10B981" },
  { id:"benefits",  icon:"⚕️",  label:"VA Benefits Navigator",        desc:"Understand your benefits, claims process, and next steps",             color:"#F59E0B" },
  { id:"cover",     icon:"✉️",  label:"Cover Letter Writer",          desc:"Compelling cover letters that explain your military experience",        color:"#8B5CF6" },
  { id:"grant",     icon:"💰", label:"VSO Grant Application",         desc:"Apply for veteran service organization grants and funding",             color:"#EC4899" },
  { id:"press",     icon:"📰", label:"Press Release Writer",          desc:"Announce veteran events, programs, and milestones to media",            color:"#06B6D4" },
  { id:"linkedin",  icon:"💼", label:"LinkedIn Profile",              desc:"Optimize your profile to attract civilian recruiters and opportunities", color:"#0EA5E9" },
  { id:"housing",   icon:"🏠", label:"Housing Assistance Letter",     desc:"Support letters for VA housing programs and emergency assistance",      color:"#84CC16" },
];

const FIELDS: Record<string, {label:string; placeholder:string}[]> = {
  resume: [
    {label:"Branch & Years of Service", placeholder:"US Army, 8 years, E-7 Sergeant First Class"},
    {label:"Primary MOS/Rating",        placeholder:"68W Combat Medic / 11B Infantryman"},
    {label:"Key accomplishments",       placeholder:"Led 12-person team, managed $2M equipment..."},
    {label:"Target civilian job",       placeholder:"Healthcare coordinator, Operations Manager"},
    {label:"Education/certifications",  placeholder:"Associate degree, Combat Lifesaver cert"},
  ],
  business: [
    {label:"Business idea",     placeholder:"Veteran-owned HVAC company serving Fort Myers area"},
    {label:"Your background",   placeholder:"10 years Army logistics, multiple deployments"},
    {label:"Funding needed",    placeholder:"$50,000 SBA loan"},
    {label:"Target customers",  placeholder:"Residential homeowners in Lee County"},
    {label:"Competitive edge",  placeholder:"Veteran discount, 24/7 service, military precision"},
  ],
  benefits: [
    {label:"Branch & years served",     placeholder:"Navy, 6 years active duty"},
    {label:"Service-connected conditions",placeholder:"Knee injury, PTSD, hearing loss"},
    {label:"Current rating",            placeholder:"30% or not yet rated"},
    {label:"Specific questions",        placeholder:"How to appeal? What is Individual Unemployability?"},
  ],
  cover: [
    {label:"Your rank/role",         placeholder:"Staff Sergeant, Squad Leader"},
    {label:"Key skills from service",placeholder:"Leadership, logistics, team training, crisis management"},
    {label:"Job you are applying to",placeholder:"Operations Manager at Amazon Logistics"},
    {label:"Why this company",       placeholder:"Values align with military culture, growth opportunity"},
  ],
  grant: [
    {label:"VSO name",           placeholder:"Fort Myers Veterans Coalition"},
    {label:"Grant amount",       placeholder:"$25,000"},
    {label:"Program purpose",    placeholder:"Job training for veterans transitioning from service"},
    {label:"Veterans served/yr", placeholder:"150"},
    {label:"Mission",            placeholder:"Connect veterans to employment and community resources"},
  ],
  press: [
    {label:"Event/announcement", placeholder:"Annual Veterans Day Job Fair"},
    {label:"Organization",       placeholder:"Lee County Veterans Services"},
    {label:"Date & location",    placeholder:"November 11, 2026 · Harborside Event Center, Fort Myers"},
    {label:"Key details",        placeholder:"50 employers, 200 veterans expected, free resume help"},
    {label:"Contact info",       placeholder:"John Smith, (239) 555-0100"},
  ],
  linkedin: [
    {label:"Branch & rank",   placeholder:"Marine Corps, Captain"},
    {label:"Career field",    placeholder:"Intelligence analysis, strategic planning"},
    {label:"Target industry", placeholder:"Cybersecurity, consulting, government contracting"},
    {label:"Accomplishments", placeholder:"Led 40-person intelligence team, NATO deployment"},
  ],
  housing: [
    {label:"Situation",          placeholder:"Recently discharged, need 60-day emergency housing"},
    {label:"Family status",      placeholder:"Veteran, spouse, 2 children"},
    {label:"Service details",    placeholder:"8 years, honorable discharge, OEF veteran"},
    {label:"Program applying to",placeholder:"HUD-VASH, VA Supportive Housing, local emergency fund"},
    {label:"Special circumstances",placeholder:"PTSD treatment ongoing, seeking stable environment for recovery"},
  ],
};

const C = { bg:"#0a0f1a", card:"rgba(16,28,52,0.9)", blue:"#3B82F6", text:"#F0F8FF", text2:"#607090" };

export default function VeteransPage() {
  const [active, setActive]   = useState<string|null>(null);
  const [fields, setFields]   = useState<Record<string,string>>({});
  const [result, setResult]   = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied]   = useState(false);
  const tool = TOOLS.find(t => t.id === active);

  const generate = useCallback(async () => {
    if (!active) return;
    setLoading(true); setResult("");
    try {
      const res = await fetch("/api/generate", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ action: active, fields }),
      });
      const d = await res.json() as {result?:string};
      setResult(d.result ?? "Error generating content");
    } catch { setResult("Network error — please try again"); }
    setLoading(false);
  }, [active, fields]);

  return (
    <div style={{minHeight:"100vh", background:C.bg, color:C.text, fontFamily:"system-ui"}}>
      <div style={{background:"linear-gradient(135deg,rgba(59,130,246,0.1),rgba(16,28,52,0.9))",
        borderBottom:"1px solid rgba(59,130,246,0.2)", padding:"20px 24px",
        display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <h1 style={{margin:0, fontSize:22, fontWeight:900,
            background:"linear-gradient(135deg,#3B82F6,#00D4FF)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>
            🎖️ Javari Veterans Connect
          </h1>
          <p style={{margin:"4px 0 0", color:C.text2, fontSize:12}}>
            AI tools for veterans, military families & VSOs · Free. Always. · CR AudioViz AI
          </p>
        </div>
        <a href="https://craudiovizai.com" target="_blank" rel="noopener noreferrer"
          style={{padding:"8px 16px", borderRadius:8,
            background:"linear-gradient(135deg,#3B82F6,#00D4FF)",
            color:"#fff", fontWeight:800, fontSize:11, textDecoration:"none"}}>
          Full Platform →
        </a>
      </div>

      <div style={{maxWidth:900, margin:"0 auto", padding:"28px 20px"}}>
        <div style={{marginBottom:24, padding:"14px 18px",
          background:"rgba(59,130,246,0.08)", border:"1px solid rgba(59,130,246,0.2)",
          borderRadius:10, textAlign:"center"}}>
          <span style={{fontSize:13, color:C.blue, fontWeight:700}}>
            🆓 Free for all veterans and military families
          </span>
          <span style={{color:C.text2, fontSize:11, marginLeft:12}}>
            No account needed · Powered by Javari AI · Built with honor for those who served
          </span>
        </div>

        {!active && (
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:12}}>
            {TOOLS.map(t => (
              <button key={t.id} onClick={() => { setActive(t.id); setFields({}); setResult(""); }}
                style={{padding:"16px", borderRadius:12, textAlign:"left",
                  background:C.card, border:`1px solid ${t.color}30`,
                  cursor:"pointer", fontFamily:"system-ui", color:C.text}}>
                <div style={{fontSize:24, marginBottom:8}}>{t.icon}</div>
                <div style={{fontWeight:800, fontSize:13, marginBottom:4}}>{t.label}</div>
                <div style={{fontSize:11, color:C.text2}}>{t.desc}</div>
              </button>
            ))}
          </div>
        )}

        {active && tool && (
          <div>
            <button onClick={() => { setActive(null); setResult(""); }}
              style={{marginBottom:16, background:"none", border:"none", color:C.blue,
                cursor:"pointer", fontSize:13, fontFamily:"system-ui"}}>← Back</button>
            <div style={{padding:"20px", background:C.card, border:`1px solid ${tool.color}30`, borderRadius:14, marginBottom:16}}>
              <h2 style={{margin:"0 0 4px", fontSize:18, fontWeight:900}}>{tool.icon} {tool.label}</h2>
              <p style={{margin:"0 0 20px", color:C.text2, fontSize:12}}>{tool.desc}</p>
              {(FIELDS[active] ?? []).map((f, i) => (
                <div key={i} style={{marginBottom:12}}>
                  <label style={{display:"block", fontSize:11, fontWeight:700, color:C.text2,
                    marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em"}}>{f.label}</label>
                  <textarea value={fields[f.label]??""} rows={2} placeholder={f.placeholder}
                    onChange={e => setFields(p => ({...p, [f.label]: e.target.value}))}
                    style={{width:"100%", padding:"10px 12px", borderRadius:8, fontSize:13,
                      border:"1px solid rgba(255,255,255,0.1)", background:"rgba(0,0,0,0.3)",
                      color:C.text, fontFamily:"system-ui", outline:"none",
                      resize:"vertical", boxSizing:"border-box"}}/>
                </div>
              ))}
              <button onClick={() => void generate()} disabled={loading}
                style={{width:"100%", padding:"12px", borderRadius:10, fontWeight:800,
                  fontSize:14, border:"none", cursor:loading?"not-allowed":"pointer",
                  fontFamily:"system-ui", color:loading?"#607090":"#fff",
                  background:loading?"rgba(255,255,255,0.06)":
                    `linear-gradient(135deg,${tool.color},${tool.color}aa)`}}>
                {loading ? "⏳ Generating..." : `✨ Generate ${tool.label}`}
              </button>
            </div>
            {result && (
              <div style={{padding:"20px", background:"rgba(0,0,0,0.4)",
                border:"1px solid rgba(255,255,255,0.08)", borderRadius:14}}>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:12}}>
                  <span style={{fontSize:13, fontWeight:700, color:"#10B981"}}>✅ Generated</span>
                  <button onClick={async() => {await navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000);}}
                    style={{padding:"6px 14px", borderRadius:7, fontSize:11, fontWeight:700,
                      background:copied?"rgba(16,185,129,0.15)":"rgba(255,255,255,0.08)",
                      color:copied?"#10B981":"#607090",
                      border:"1px solid "+(copied?"rgba(16,185,129,0.3)":"rgba(255,255,255,0.1)"),
                      cursor:"pointer", fontFamily:"system-ui"}}>
                    {copied?"✓ Copied!":"📋 Copy"}
                  </button>
                </div>
                <pre style={{margin:0, whiteSpace:"pre-wrap", fontSize:13, lineHeight:1.6, color:C.text, fontFamily:"system-ui"}}>{result}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
