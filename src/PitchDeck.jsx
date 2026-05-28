import { useState, useEffect } from "react";

const slides = [
  { id: 1, type: "cover" },
  { id: 2, type: "hook" },
  { id: 3, type: "problem" },
  { id: 4, type: "solution" },
  { id: 5, type: "howItWorks" },
  { id: 6, type: "businessModel" },
  { id: 7, type: "market" },
  { id: 8, type: "goToMarket" },
  { id: 9, type: "financials" },
  { id: 10, type: "competition" },
  { id: 11, type: "closing" },
];

const slideLabels = [
  "Cover", "Hook", "Problem", "Solution", "How It Works",
  "Business Model", "Market Size", "Go-To-Market",
  "Financials", "Competition", "Vision"
];

const accent = "#FACC15";
const dark = "#0B0F1A";
const navy = "#111827";
const cardBg = "rgba(255,255,255,0.04)";
const border = "rgba(255,255,255,0.08)";

const Tag = ({ children, color = accent }) => (
  <span style={{
    background: `${color}22`, border: `1px solid ${color}44`,
    color, borderRadius: 6, padding: "3px 10px", fontSize: 11,
    fontFamily: "'DM Mono', monospace", fontWeight: 600, letterSpacing: 1
  }}>{children}</span>
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background: cardBg, border: `1px solid ${border}`,
    borderRadius: 16, padding: "20px 24px", ...style
  }}>{children}</div>
);

const Stat = ({ value, label, color = accent }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: 36, fontWeight: 800, color, fontFamily: "'Syne', sans-serif", lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4, fontFamily: "'DM Mono', monospace", letterSpacing: 1 }}>{label}</div>
  </div>
);

function CoverSlide({ active }) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(250,204,21,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(250,204,21,0.08) 0%, transparent 70%)" }} />

      <div style={{ position: "relative", textAlign: "center" }}>
        <div style={{ marginBottom: 16 }}>
          <Tag>BCA DEPARTMENT · INTER-COLLEGE COMPETITION 2026</Tag>
        </div>
        <div style={{
          fontSize: 80, fontWeight: 900, fontFamily: "'Syne', sans-serif",
          background: `linear-gradient(135deg, #fff 40%, ${accent})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          lineHeight: 1, letterSpacing: -2
        }}>Campus<span style={{ color: accent, WebkitTextFillColor: accent }}>Gig</span></div>
        <div style={{ fontSize: 18, color: "#94a3b8", marginTop: 12, fontFamily: "'DM Sans', sans-serif", letterSpacing: 2 }}>
          YOUR SKILLS. REAL MONEY. REAL EXPERIENCE.
        </div>
        <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center" }}>
          {["Hyperlocal", "College-Verified", "Escrow-Safe"].map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 32, display: "flex", gap: 32 }}>
        {[["₹20K", "Startup Cost"], ["Month 4", "Break-even"], ["₹1.1Cr", "Year 3 Revenue"]].map(([v, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ color: accent, fontWeight: 700, fontFamily: "'Syne', sans-serif", fontSize: 18 }}>{v}</div>
            <div style={{ color: "#64748b", fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: 1 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HookSlide() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag>THE STORY</Tag>
      <div style={{ marginTop: 20, fontSize: 42, fontWeight: 800, fontFamily: "'Syne', sans-serif", lineHeight: 1.15, maxWidth: 560 }}>
        Meet <span style={{ color: accent }}>Rahul.</span><br />
        He knows Photoshop.<br />
        He earns <span style={{ color: "#ef4444" }}>₹0.</span>
      </div>
      <div style={{ marginTop: 24, color: "#94a3b8", fontSize: 15, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, maxWidth: 480 }}>
        Rahul is a 2nd year BCA student with real skills — but no platform that trusts him, no portfolio, and no way to find local clients who'll pay fairly.
      </div>
      <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
        {[
          { icon: "🎓", text: "40M+ skilled college students in India" },
          { icon: "🏪", text: "Millions of SMBs needing affordable freelancers" },
          { icon: "💔", text: "Zero platform connecting them locally" },
        ].map(({ icon, text }) => (
          <Card key={text} style={{ flex: 1 }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
            <div style={{ fontSize: 12, color: "#cbd5e1", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{text}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProblemSlide() {
  const problems = [
    { who: "Students", pain: "Skills go unused — no credible way to find paid work", icon: "😤" },
    { who: "Small Businesses", pain: "Can't trust random freelancers on global platforms", icon: "😰" },
    { who: "Both", pain: "No escrow, no protection on WhatsApp/Instagram hiring", icon: "😱" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag color="#ef4444">PROBLEM</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        The Gap Nobody's <span style={{ color: "#ef4444" }}>Bridging</span>
      </div>
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
        {problems.map(({ who, pain, icon }) => (
          <div key={who} style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontSize: 28 }}>{icon}</div>
            <div>
              <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#ef4444", letterSpacing: 1, marginBottom: 4 }}>{who.toUpperCase()}</div>
              <div style={{ fontSize: 14, color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif" }}>{pain}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, display: "flex", gap: 24 }}>
        <Stat value="85%" label="STUDENTS UNDEREMPLOYED" color="#ef4444" />
        <Stat value="₹0" label="MEDIAN GIG INCOME IN COLLEGE" color="#ef4444" />
        <Stat value="3x" label="SMB DEMAND GROWTH POST-COVID" color={accent} />
      </div>
    </div>
  );
}

function SolutionSlide() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag color="#22c55e">SOLUTION</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        Introducing <span style={{ color: accent }}>CampusGig</span>
      </div>
      <div style={{ marginTop: 8, color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}>
        A hyperlocal, college-verified freelance marketplace
      </div>
      <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          { icon: "🎓", title: "College Verified", desc: "Login via college email — instant trust layer" },
          { icon: "🏅", title: "Skill Badges", desc: "Earned through real task challenges" },
          { icon: "🔒", title: "Escrow Wallet", desc: "Payment held until client approves work" },
          { icon: "📁", title: "Portfolio Builder", desc: "Auto-grows with every completed gig" },
          { icon: "🤖", title: "AI Matcher", desc: "Suggests best-fit students for each project" },
          { icon: "🌐", title: "Vernacular", desc: "Hindi + regional language support" },
        ].map(({ icon, title, desc }) => (
          <Card key={title} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 16px" }}>
            <div style={{ fontSize: 20 }}>{icon}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", fontFamily: "'Syne', sans-serif" }}>{title}</div>
              <div style={{ fontSize: 11, color: "#64748b", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSlide() {
  const steps = [
    { n: "01", who: "Business", action: "Posts a micro-project", detail: "Fixed scope · Fixed budget · Short deadline", color: "#60a5fa" },
    { n: "02", who: "Student", action: "Applies with profile", detail: "College ID verified · Skill badges shown", color: accent },
    { n: "03", who: "Both", action: "Work & Communicate", detail: "In-platform messaging · File sharing", color: "#c084fc" },
    { n: "04", who: "Platform", action: "Escrow releases", detail: "Client approves → Student gets paid", color: "#22c55e" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag>HOW IT WORKS</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        4 Steps. <span style={{ color: accent }}>Zero Friction.</span>
      </div>
      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 0 }}>
        {steps.map(({ n, who, action, detail, color }, i) => (
          <div key={n} style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${color}22`, border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color, fontFamily: "'DM Mono', monospace" }}>{n}</div>
              {i < steps.length - 1 && <div style={{ width: 2, flex: 1, background: `linear-gradient(${color}44, ${steps[i+1].color}44)`, margin: "4px 0" }} />}
            </div>
            <div style={{ paddingBottom: i < steps.length - 1 ? 20 : 0, paddingTop: 8 }}>
              <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color, letterSpacing: 1 }}>{who.toUpperCase()}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", fontFamily: "'Syne', sans-serif" }}>{action}</div>
              <div style={{ fontSize: 12, color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>{detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BusinessModelSlide() {
  const streams = [
    { label: "Platform Commission", pct: 52, value: "12% per txn", color: accent },
    { label: "Premium Profiles", pct: 22, value: "₹99–199/mo", color: "#60a5fa" },
    { label: "Featured Listings", pct: 14, value: "₹500/boost", color: "#c084fc" },
    { label: "Campus Placement Data", pct: 12, value: "₹B2B sub", color: "#22c55e" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag>BUSINESS MODEL</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        Revenue <span style={{ color: accent }}>Streams</span>
      </div>
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
        {streams.map(({ label, pct, value, color }) => (
          <div key={label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
              <span style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color }}>{value}</span>
            </div>
            <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}88)`, borderRadius: 99, transition: "width 1s" }} />
            </div>
          </div>
        ))}
      </div>
      <Card style={{ marginTop: 24 }}>
        <div style={{ fontSize: 12, color: "#64748b", fontFamily: "'DM Mono', monospace", marginBottom: 8, letterSpacing: 1 }}>UNIT ECONOMICS PER ₹1,000 TRANSACTION</div>
        <div style={{ display: "flex", gap: 24 }}>
          <div><div style={{ color: "#22c55e", fontWeight: 700, fontSize: 20, fontFamily: "'Syne', sans-serif" }}>₹880</div><div style={{ fontSize: 11, color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>Student earns</div></div>
          <div><div style={{ color: accent, fontWeight: 700, fontSize: 20, fontFamily: "'Syne', sans-serif" }}>₹100</div><div style={{ fontSize: 11, color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>Net profit</div></div>
          <div><div style={{ color: "#94a3b8", fontWeight: 700, fontSize: 20, fontFamily: "'Syne', sans-serif" }}>₹20</div><div style={{ fontSize: 11, color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>Razorpay fee</div></div>
        </div>
      </Card>
    </div>
  );
}

function MarketSlide() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag>MARKET SIZE</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        A <span style={{ color: accent }}>Massive</span> Opportunity
      </div>
      <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 32, justifyContent: "center" }}>
        {[
          { label: "TAM", size: 260, val: "₹4,200 Cr", desc: "Indian freelance market total", color: "#334155" },
          { label: "SAM", size: 180, val: "₹800 Cr", desc: "College student segment", color: "#1e3a5f" },
          { label: "SOM", size: 100, val: "₹45 Cr", desc: "3-year reachable market", color: accent },
        ].map(({ label, size, val, desc, color }) => (
          <div key={label} style={{ textAlign: "center", position: "relative" }}>
            <div style={{ width: size, height: size, borderRadius: "50%", background: color, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: `2px solid ${color === accent ? accent : "rgba(255,255,255,0.1)"}` }}>
              <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: color === accent ? dark : "#94a3b8", letterSpacing: 1 }}>{label}</div>
              <div style={{ fontSize: color === accent ? 18 : 14, fontWeight: 800, color: color === accent ? dark : "#f1f5f9", fontFamily: "'Syne', sans-serif" }}>{val}</div>
            </div>
            <div style={{ fontSize: 10, color: "#64748b", fontFamily: "'DM Sans', sans-serif", marginTop: 8, maxWidth: size }}>{desc}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, display: "flex", gap: 16 }}>
        {[
          { v: "40M+", l: "College students in India" },
          { v: "1,000+", l: "Colleges in West Bengal" },
          { v: "₹50K/mo", l: "SMB freelance spend avg." },
        ].map(({ v, l }) => <Card key={l} style={{ flex: 1, textAlign: "center", padding: "16px 12px" }}><Stat value={v} label={l} /></Card>)}
      </div>
    </div>
  );
}

function GoToMarketSlide() {
  const phases = [
    { phase: "Phase 1", title: "Campus Launch", timeline: "Month 1–3", items: ["50 student signups", "10 pilot businesses", "Zero commission"], color: "#60a5fa" },
    { phase: "Phase 2", title: "City Expansion", timeline: "Month 4–8", items: ["Campus ambassadors", "College fest demos", "Referral rewards"], color: accent },
    { phase: "Phase 3", title: "Scale Up", timeline: "Month 9–18", items: ["5 cities", "Paid social ads", "B2B outreach"], color: "#22c55e" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag>GO-TO-MARKET</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        Launch. <span style={{ color: accent }}>Grow.</span> Scale.
      </div>
      <div style={{ marginTop: 28, display: "flex", gap: 14 }}>
        {phases.map(({ phase, title, timeline, items, color }) => (
          <Card key={phase} style={{ flex: 1, borderTop: `3px solid ${color}` }}>
            <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color, letterSpacing: 1 }}>{phase.toUpperCase()}</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#f1f5f9", fontFamily: "'Syne', sans-serif", marginTop: 4 }}>{title}</div>
            <div style={{ fontSize: 10, color: "#64748b", fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>{timeline}</div>
            {items.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: color }} />
                <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
              </div>
            ))}
          </Card>
        ))}
      </div>
      <Card style={{ marginTop: 14 }}>
        <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#64748b", marginBottom: 10, letterSpacing: 1 }}>GROWTH FUNNEL</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {["AWARENESS", "INTEREST", "SIGNUP", "FIRST GIG", "RETENTION", "REFERRAL ♻️"].map((step, i, arr) => (
            <>
              <div key={step} style={{ background: `rgba(250,204,21,${0.08 + i * 0.04})`, border: `1px solid rgba(250,204,21,${0.15 + i * 0.05})`, borderRadius: 6, padding: "6px 8px", fontSize: 9, fontFamily: "'DM Mono', monospace", color: accent, whiteSpace: "nowrap" }}>{step}</div>
              {i < arr.length - 1 && <div style={{ color: "#334155", fontSize: 12 }}>→</div>}
            </>
          ))}
        </div>
      </Card>
    </div>
  );
}

function FinancialsSlide() {
  const years = [
    { year: "Year 1", rev: "₹2.3L", txns: "200/mo", margin: "22%", h: 40 },
    { year: "Year 2", rev: "₹25L", txns: "1,500/mo", margin: "38%", h: 140 },
    { year: "Year 3", rev: "₹1.1Cr", txns: "6,000/mo", margin: "51%", h: 220 },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag>FINANCIALS</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        Profitable by <span style={{ color: accent }}>Month 4</span>
      </div>
      <div style={{ marginTop: 28, display: "flex", gap: 20, alignItems: "flex-end", height: 260 }}>
        {years.map(({ year, rev, txns, margin, h }, i) => (
          <div key={year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: 6, textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: i === 2 ? accent : "#f1f5f9", fontFamily: "'Syne', sans-serif" }}>{rev}</div>
              <div style={{ fontSize: 10, color: "#64748b", fontFamily: "'DM Mono', monospace" }}>{txns}</div>
            </div>
            <div style={{ width: "100%", height: h, background: i === 2 ? `linear-gradient(180deg, ${accent}, ${accent}88)` : `linear-gradient(180deg, #334155, #1e293b)`, borderRadius: "8px 8px 0 0", position: "relative", transition: "height 1s" }}>
              <div style={{ position: "absolute", top: 8, left: 0, right: 0, textAlign: "center", fontSize: 10, fontFamily: "'DM Mono', monospace", color: i === 2 ? dark : "#64748b" }}>margin {margin}</div>
            </div>
            <div style={{ width: "100%", height: 2, background: "rgba(255,255,255,0.1)" }} />
            <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", fontFamily: "'Syne', sans-serif", marginTop: 8 }}>{year}</div>
          </div>
        ))}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          <Card style={{ padding: "12px 16px" }}>
            <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "#64748b", letterSpacing: 1 }}>STARTUP COST</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#22c55e", fontFamily: "'Syne', sans-serif" }}>₹20,000</div>
          </Card>
          <Card style={{ padding: "12px 16px" }}>
            <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "#64748b", letterSpacing: 1 }}>BREAK-EVEN</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: accent, fontFamily: "'Syne', sans-serif" }}>Month 4</div>
          </Card>
          <Card style={{ padding: "12px 16px" }}>
            <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "#64748b", letterSpacing: 1 }}>YR3 VALUATION</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#c084fc", fontFamily: "'Syne', sans-serif" }}>₹5.5Cr</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CompetitionSlide() {
  const rows = [
    { feature: "College Verified", us: true, fiverr: false, linkedin: false, insta: false },
    { feature: "Hyperlocal", us: true, fiverr: false, linkedin: false, insta: false },
    { feature: "Escrow Payments", us: true, fiverr: true, linkedin: false, insta: false },
    { feature: "INR Pricing", us: true, fiverr: false, linkedin: false, insta: true },
    { feature: "AI Matcher", us: true, fiverr: false, linkedin: true, insta: false },
    { feature: "Portfolio Builder", us: true, fiverr: true, linkedin: true, insta: false },
    { feature: "Entry-Level Friendly", us: true, fiverr: false, linkedin: false, insta: true },
  ];
  const cols = ["Feature", "CampusGig", "Fiverr", "LinkedIn", "Instagram"];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <Tag>COMPETITION</Tag>
      <div style={{ marginTop: 16, fontSize: 38, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
        We're <span style={{ color: accent }}>Built Different</span>
      </div>
      <div style={{ marginTop: 24, overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {cols.map((c, i) => (
                <th key={c} style={{ padding: "10px 16px", textAlign: i === 0 ? "left" : "center", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: 1, color: i === 1 ? accent : "#64748b", borderBottom: `1px solid ${i === 1 ? accent + "44" : border}`, background: i === 1 ? `${accent}0a` : "transparent" }}>{c.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ feature, us, fiverr, linkedin, insta }) => (
              <tr key={feature}>
                <td style={{ padding: "10px 16px", fontSize: 13, color: "#cbd5e1", fontFamily: "'DM Sans', sans-serif", borderBottom: `1px solid ${border}` }}>{feature}</td>
                {[us, fiverr, linkedin, insta].map((val, i) => (
                  <td key={i} style={{ padding: "10px 16px", textAlign: "center", borderBottom: `1px solid ${border}`, background: i === 0 ? `${accent}0a` : "transparent" }}>
                    <span style={{ fontSize: 16 }}>{val ? "✅" : "❌"}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ClosingSlide() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden", textAlign: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(250,204,21,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)" }} />
      <div style={{ position: "relative" }}>
        <Tag>THE VISION</Tag>
        <div style={{ marginTop: 20, fontSize: 52, fontWeight: 900, fontFamily: "'Syne', sans-serif", lineHeight: 1.1 }}>
          Every student's <br /><span style={{ color: accent }}>first rupee</span><br /> starts here.
        </div>
        <div style={{ marginTop: 20, color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", fontSize: 15, maxWidth: 400, margin: "20px auto 0" }}>
          CampusGig isn't just a platform. It's the professional identity every Indian college student deserves.
        </div>
        <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {[["₹20K", "To Start"], ["Month 4", "Break-even"], ["₹1.1Cr", "Year 3"], ["₹5.5Cr", "Valuation"]].map(([v, l]) => (
            <Card key={l} style={{ padding: "16px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: accent, fontFamily: "'Syne', sans-serif" }}>{v}</div>
              <div style={{ fontSize: 10, color: "#64748b", fontFamily: "'DM Mono', monospace", letterSpacing: 1 }}>{l}</div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 32, fontSize: 13, color: "#334155", fontFamily: "'DM Mono', monospace", letterSpacing: 2 }}>
          THANK YOU · QUESTIONS WELCOME
        </div>
      </div>
    </div>
  );
}

const slideComponents = {
  cover: CoverSlide, hook: HookSlide, problem: ProblemSlide,
  solution: SolutionSlide, howItWorks: HowItWorksSlide,
  businessModel: BusinessModelSlide, market: MarketSlide,
  goToMarket: GoToMarketSlide, financials: FinancialsSlide,
  competition: CompetitionSlide, closing: ClosingSlide,
};

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (i) => {
    if (i === current || animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 200);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" && current < slides.length - 1) goTo(current + 1);
      if (e.key === "ArrowLeft" && current > 0) goTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const SlideContent = slideComponents[slides[current].type];

  return (
    <div style={{ background: "#060912", minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;600&display=swap" rel="stylesheet" />

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", borderBottom: `1px solid ${border}`, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 900, color: dark, fontFamily: "'Syne', sans-serif" }}>C</span>
          </div>
          <span style={{ color: "#f1f5f9", fontWeight: 700, fontFamily: "'Syne', sans-serif", fontSize: 14 }}>CampusGig</span>
          <span style={{ color: "#334155", fontSize: 12 }}>/ Pitch Deck</span>
        </div>
        <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#64748b" }}>
          {current + 1} / {slides.length} — {slideLabels[current].toUpperCase()}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => goTo(current - 1)} disabled={current === 0} style={{ background: cardBg, border: `1px solid ${border}`, color: current === 0 ? "#334155" : "#94a3b8", borderRadius: 6, padding: "4px 12px", cursor: current === 0 ? "not-allowed" : "pointer", fontSize: 14 }}>←</button>
          <button onClick={() => goTo(current + 1)} disabled={current === slides.length - 1} style={{ background: current === slides.length - 1 ? cardBg : `${accent}22`, border: `1px solid ${current === slides.length - 1 ? border : accent + "44"}`, color: current === slides.length - 1 ? "#334155" : accent, borderRadius: 6, padding: "4px 12px", cursor: current === slides.length - 1 ? "not-allowed" : "pointer", fontSize: 14 }}>→</button>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left thumbnails */}
        <div style={{ width: 180, borderRight: `1px solid ${border}`, overflowY: "auto", background: "rgba(0,0,0,0.2)", flexShrink: 0, padding: "8px 0" }}>
          {slides.map((s, i) => (
            <div key={s.id} onClick={() => goTo(i)} style={{ padding: "6px 10px", cursor: "pointer" }}>
              <div style={{ borderRadius: 8, overflow: "hidden", border: `2px solid ${i === current ? accent : "transparent"}`, background: i === current ? `${accent}10` : navy, aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                <span style={{ fontSize: 9, fontFamily: "'DM Mono', monospace", color: i === current ? accent : "#334155", letterSpacing: 1 }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div style={{ fontSize: 9, color: i === current ? accent : "#475569", fontFamily: "'DM Mono', monospace", marginTop: 4, textAlign: "center", letterSpacing: 0.5 }}>{slideLabels[i]}</div>
            </div>
          ))}
        </div>

        {/* Main slide */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minHeight: 0 }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 24px 0" }}>
            <div style={{ width: "100%", maxWidth: 860, height: "100%", maxHeight: "calc(100vh - 160px)", minHeight: 420, background: navy, borderRadius: 20, border: `1px solid ${border}`, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.6)", opacity: animating ? 0 : 1, transform: animating ? "scale(0.98)" : "scale(1)", transition: "opacity 0.2s, transform 0.2s", position: "relative" }}>
              <SlideContent active={!animating} />
            </div>
          </div>

          {/* Bottom progress */}
          <div style={{ padding: "8px 24px 16px", display: "flex", gap: 4 }}>
            {slides.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} style={{ flex: 1, height: 3, borderRadius: 99, background: i <= current ? accent : "rgba(255,255,255,0.08)", cursor: "pointer", transition: "background 0.3s" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
