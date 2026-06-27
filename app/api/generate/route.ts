// app/api/generate/route.ts — javari-veterans-connect
// 8 AI tools for veterans, military families, and VSOs
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

async function callGroq(system: string, user: string): Promise<string> {
  if (process.env.GROQ_API_KEY) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.GROQ_API_KEY}`},
      body: JSON.stringify({model:'llama-3.3-70b-versatile',
        messages:[{role:'system',content:system},{role:'user',content:user}],
        max_tokens:1500, temperature:0.7})
    })
    const d = await res.json() as {choices?:{message:{content:string}}[]}
    if (d.choices?.[0]?.message?.content) return d.choices[0].message.content
  }
  if (process.env.OPENROUTER_API_KEY) {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.OPENROUTER_API_KEY}`,'HTTP-Referer':'https://craudiovizai.com'},
      body: JSON.stringify({model:'meta-llama/llama-3.3-70b-instruct:free',
        messages:[{role:'system',content:system},{role:'user',content:user}],max_tokens:1500})
    })
    const d = await res.json() as {choices?:{message:{content:string}}[]}
    if (d.choices?.[0]?.message?.content) return d.choices[0].message.content
  }
  throw new Error('No AI provider')
}

const SYSTEM = `You are Javari, an expert AI assistant dedicated to helping veterans, military families, and Veteran Service Organizations (VSOs). You understand military culture, jargon, VA systems, and the challenges of military-to-civilian transition. You produce ready-to-use, professional documents and content. No placeholders — produce complete, real content every time.`

function prompt(action: string, f: Record<string,string>): string {
  const g = (k: string) => f[k] ?? ''
  const p: Record<string,string> = {
    resume: `Create a complete military-to-civilian resume for a ${g('Branch & Years of Service')} veteran with MOS/rating: ${g('Primary MOS/Rating')}. Key accomplishments: ${g('Key accomplishments')}. Target job: ${g('Target civilian job')}. Education: ${g('Education/certifications')}. Translate ALL military terminology to civilian equivalents. Format professionally with clear sections. Make quantifiable achievements prominent. Show leadership and transferable skills. Ready to submit.`,
    business: `Write a complete SBA-ready business plan for a veteran entrepreneur: Business: ${g('Business idea')}. Founder background: ${g('Your background')}. Funding needed: ${g('Funding needed')}. Target market: ${g('Target customers')}. Competitive advantage: ${g('Competitive edge')}. Sections: Executive Summary, Company Description, Market Analysis, Organization & Management, Products/Services, Marketing Strategy, Financial Projections, Funding Request. Mention veteran-specific advantages and SBA VBOC resources.`,
    benefits: `Explain VA benefits for: ${g('Branch & years served')} veteran. Conditions: ${g('Service-connected conditions')}. Current rating: ${g('Current rating')}. Answer specifically: ${g('Specific questions')}. Include: What they qualify for, How to file/appeal, Timeline expectations, VSO assistance, key VA programs (healthcare, disability, education, housing). Use plain language. Be specific and actionable.`,
    cover: `Write a powerful cover letter for a ${g('Your rank/role')} veteran applying to: ${g('Job you are applying to')}. Military skills: ${g('Key skills from service')}. Why this company: ${g('Why this company')}. Translate military experience powerfully. Show leadership, accountability, and mission focus. 3-4 paragraphs. No jargon. Confident but not arrogant. Include subject line.`,
    grant: `Write a complete grant application for ${g('VSO name')} requesting ${g('Grant amount')} for: ${g('Program purpose')}. They serve ${g('Veterans served/yr')} veterans annually. Mission: ${g('Mission')}. Include: Executive Summary, Needs Statement, Program Goals, Outcomes & Metrics, Budget Narrative, Organizational Qualifications. 500-700 words. Professional, compelling, data-driven.`,
    press: `Write a professional press release for: ${g('Event/announcement')} by ${g('Organization')}. Date/location: ${g('Date & location')}. Key details: ${g('Key details')}. Contact: ${g('Contact info')}. AP style. Include: Headline (3 options), dateline, lead paragraph, 2-3 body paragraphs, quote from organization leader, boilerplate, contact info. Ready to distribute.`,
    linkedin: `Optimize a LinkedIn profile for a ${g('Branch & rank')} veteran in ${g('Career field')} targeting ${g('Target industry')}. Accomplishments: ${g('Accomplishments')}. Create: Headline (3 variations), About section (250 words), Top 10 skills to add, Summary of how to position experience. Civilian-friendly language throughout. Keyword-optimized for ATS and recruiter searches.`,
    housing: `Write a compelling housing assistance letter for a veteran: Situation: ${g('Situation')}. Family: ${g('Family status')}. Service: ${g('Service details')}. Program: ${g('Program applying to')}. Circumstances: ${g('Special circumstances')}. Include: Formal letter format, service summary, current housing crisis, specific need, how assistance enables stability/recovery, gratitude, follow-up offer. Dignified but urgent tone.`,
  }
  return p[action] ?? `Generate professional veteran content for: action=${action}, details=${JSON.stringify(f)}`
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const {action, fields} = await req.json() as {action:string; fields:Record<string,string>}
    if (!action) return NextResponse.json({error:'action required'},{status:400})
    const result = await callGroq(SYSTEM, prompt(action, fields))
    return NextResponse.json({result, action})
  } catch(e) {
    return NextResponse.json({error:'Generation failed'},{status:500})
  }
}
