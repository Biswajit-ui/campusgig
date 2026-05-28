import { useState, useEffect, useRef } from "react";

// ── DESIGN TOKENS ──────────────────────────────────────────────
const C = {
  bg: "#F7F4EE",
  ink: "#111111",
  red: "#E8320A",
  blue: "#0038FF",
  green: "#00A86B",
  muted: "#888",
  border: "#E0DAD0",
  card: "#FFFFFF",
  dark: "#1A1A1A",
};

const gigs = [
  { id:1, title:"Design a Logo", category:"Design", budget:"₹800", deadline:"2 days", student:"Priya S.", rating:4.9, skills:["Canva","Illustrator"], badge:"🎨", college:"Jadavpur Univ." },
  { id:2, title:"Build a Landing Page", category:"Web Dev", budget:"₹2,500", deadline:"5 days", student:"Rohan M.", rating:4.8, skills:["React","CSS"], badge:"💻", college:"MAKAUT" },
  { id:3, title:"Write 5 Blog Posts", category:"Writing", budget:"₹1,200", deadline:"4 days", student:"Ananya B.", rating:5.0, skills:["SEO","Copywriting"], badge:"✍️", college:"Presidency" },
  { id:4, title:"Manage Instagram Page", category:"Marketing", budget:"₹3,000", deadline:"30 days", student:"Debjit R.", rating:4.7, skills:["Reels","Analytics"], badge:"📱", college:"St. Xavier's" },
  { id:5, title:"Edit Promo Video", category:"Video", budget:"₹1,800", deadline:"3 days", student:"Shreya P.", rating:4.9, skills:["Premiere","DaVinci"], badge:"🎬", college:"WBUT" },
  { id:6, title:"Data Entry & Excel", category:"Admin", budget:"₹600", deadline:"1 day", student:"Amit K.", rating:4.6, skills:["Excel","Google Sheets"], badge:"📊", college:"Calcutta Univ." },
];

const categories = ["All", "Design", "Web Dev", "Writing", "Marketing", "Video", "Admin"];

const steps = [
  { n:"01", icon:"📋", title:"Post a Project", desc:"Describe your task, set a budget and deadline. Takes 2 minutes.", color: C.blue },
  { n:"02", icon:"🎓", title:"Get Verified Bids", desc:"College-verified students with skill badges apply to your project.", color: C.red },
  { n:"03", icon:"💬", title:"Work Together", desc:"Communicate, share files, and track progress in-platform.", color: C.green },
  { n:"04", icon:"✅", title:"Pay Safely", desc:"Escrow holds your payment. Released only when you approve the work.", color: "#9333ea" },
];

const stats = [
  { val:"2,400+", label:"Verified Students", color: C.red },
  { val:"840+", label:"Projects Completed", color: C.blue },
  { val:"98%", label:"Satisfaction Rate", color: C.green },
  { val:"₹12L+", label:"Paid to Students", color: "#9333ea" },
];

// ── NAV ────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      background: scrolled ? "rgba(247,244,238,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      transition:"all 0.3s", padding:"0 40px",
      display:"flex", alignItems:"center", justifyContent:"space-between", height:64,
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }}
        onClick={() => setPage("home")}>
        <div style={{ width:34, height:34, background:C.red, borderRadius:10,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:18, fontWeight:900, color:"#fff", fontFamily:"'Syne', sans-serif" }}>C</div>
        <span style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, fontSize:18, color:C.ink }}>
          Campus<span style={{ color:C.red }}>Gig</span>
        </span>
      </div>

      <div style={{ display:"flex", gap:28, alignItems:"center" }}>
        {[["Browse Gigs","browse"],["How It Works","how"],["For Business","business"]].map(([label, p]) => (
          <span key={p} onClick={() => setPage(p)} style={{
            fontSize:13, fontFamily:"'DM Sans', sans-serif", fontWeight:500,
            color: page === p ? C.red : C.muted, cursor:"pointer",
            borderBottom: page === p ? `2px solid ${C.red}` : "2px solid transparent",
            paddingBottom:2, transition:"all 0.2s"
          }}>{label}</span>
        ))}
      </div>

      <div style={{ display:"flex", gap:10 }}>
        <button onClick={() => setPage("login")} style={{
          background:"transparent", border:`1.5px solid ${C.border}`,
          borderRadius:8, padding:"8px 18px", fontSize:13,
          fontFamily:"'DM Sans', sans-serif", color:C.ink, cursor:"pointer",
          fontWeight:600, transition:"all 0.2s"
        }}>Log In</button>
        <button onClick={() => setPage("signup")} style={{
          background:C.red, border:"none", borderRadius:8,
          padding:"8px 18px", fontSize:13, fontFamily:"'DM Sans', sans-serif",
          color:"#fff", cursor:"pointer", fontWeight:700,
          boxShadow:"0 4px 14px rgba(232,50,10,0.35)", transition:"all 0.2s"
        }}>Join Free</button>
      </div>
    </nav>
  );
}

// ── HOME PAGE ──────────────────────────────────────────────────
function HomePage({ setPage }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = gigs.filter(g =>
    (activeCategory === "All" || g.category === activeCategory) &&
    (g.title.toLowerCase().includes(search.toLowerCase()) || g.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ background:C.bg, minHeight:"100vh", paddingTop:64 }}>
      {/* HERO */}
      <section style={{
        padding:"80px 40px 60px", maxWidth:1100, margin:"0 auto",
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center"
      }}>
        <div>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(232,50,10,0.08)", border:"1px solid rgba(232,50,10,0.2)",
            borderRadius:100, padding:"5px 14px", marginBottom:20
          }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:C.red, animation:"pulse 2s infinite" }} />
            <span style={{ fontSize:11, fontFamily:"'DM Mono', monospace", color:C.red, letterSpacing:1 }}>
              LIVE · 2,400+ VERIFIED STUDENTS
            </span>
          </div>

          <h1 style={{
            fontSize:54, fontWeight:900, fontFamily:"'Syne', sans-serif",
            color:C.ink, lineHeight:1.05, letterSpacing:-2, margin:0
          }}>
            Hire Skilled<br />
            College Students.<br />
            <span style={{ color:C.red }}>Pay Fairly.</span>
          </h1>

          <p style={{
            fontSize:16, color:C.muted, fontFamily:"'DM Sans', sans-serif",
            lineHeight:1.7, marginTop:20, maxWidth:440
          }}>
            CampusGig connects local businesses with college-verified student freelancers. Escrow-protected payments. Real skills. Real results.
          </p>

          <div style={{ marginTop:28, display:"flex", gap:12 }}>
            <button onClick={() => setPage("signup")} style={{
              background:C.red, border:"none", borderRadius:10, padding:"14px 28px",
              fontSize:15, fontFamily:"'DM Sans', sans-serif", color:"#fff",
              cursor:"pointer", fontWeight:700, boxShadow:"0 6px 20px rgba(232,50,10,0.3)"
            }}>Post a Project →</button>
            <button onClick={() => setPage("signup")} style={{
              background:C.card, border:`1.5px solid ${C.border}`, borderRadius:10,
              padding:"14px 28px", fontSize:15, fontFamily:"'DM Sans', sans-serif",
              color:C.ink, cursor:"pointer", fontWeight:600
            }}>Become a Freelancer</button>
          </div>

          <div style={{ marginTop:32, display:"flex", gap:24 }}>
            {[["₹500+","Avg. project value"],["4.9★","Avg. rating"],["24hr","Avg. first response"]].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontSize:18, fontWeight:800, color:C.ink, fontFamily:"'Syne', sans-serif" }}>{v}</div>
                <div style={{ fontSize:11, color:C.muted, fontFamily:"'DM Mono', monospace", letterSpacing:0.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Gig Card Preview */}
        <div style={{ position:"relative", height:400 }}>
          {/* Main card */}
          <div style={{
            position:"absolute", top:30, left:20, right:0,
            background:C.card, borderRadius:20, padding:"24px",
            boxShadow:"0 20px 60px rgba(0,0,0,0.1)", border:`1px solid ${C.border}`
          }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
              <div>
                <div style={{ fontSize:11, color:C.red, fontFamily:"'DM Mono', monospace", letterSpacing:1, marginBottom:4 }}>DESIGN · OPEN</div>
                <div style={{ fontSize:18, fontWeight:800, color:C.ink, fontFamily:"'Syne', sans-serif" }}>Design a Brand Identity</div>
              </div>
              <div style={{ fontSize:22, background:C.bg, borderRadius:10, padding:10 }}>🎨</div>
            </div>
            <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
              {["Canva","Illustrator","Branding"].map(s => (
                <span key={s} style={{ background:"rgba(0,56,255,0.07)", border:"1px solid rgba(0,56,255,0.15)",
                  borderRadius:6, padding:"3px 10px", fontSize:11, color:C.blue, fontFamily:"'DM Mono', monospace" }}>{s}</span>
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"12px 0", borderTop:`1px solid ${C.border}` }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:36, height:36, borderRadius:"50%", background:`linear-gradient(135deg, ${C.red}, ${C.blue})`,
                  display:"flex", alignItems:"center", justifyContent:"center", color:"#fff",
                  fontWeight:800, fontSize:14, fontFamily:"'Syne', sans-serif" }}>P</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:C.ink, fontFamily:"'Syne', sans-serif" }}>Priya Sharma</div>
                  <div style={{ fontSize:10, color:C.muted, fontFamily:"'DM Mono', monospace" }}>Jadavpur University · ⭐ 4.9</div>
                </div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:18, fontWeight:800, color:C.ink, fontFamily:"'Syne', sans-serif" }}>₹1,200</div>
                <div style={{ fontSize:10, color:C.muted, fontFamily:"'DM Mono', monospace" }}>3 day delivery</div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div style={{ position:"absolute", bottom:40, left:0,
            background:C.card, borderRadius:12, padding:"10px 16px",
            boxShadow:"0 8px 24px rgba(0,0,0,0.1)", border:`1px solid ${C.border}`,
            display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:32, height:32, background:"rgba(0,168,107,0.1)", borderRadius:8,
              display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>🔒</div>
            <div>
              <div style={{ fontSize:12, fontWeight:700, color:C.ink, fontFamily:"'Syne', sans-serif" }}>Escrow Protected</div>
              <div style={{ fontSize:10, color:C.muted, fontFamily:"'DM Mono', monospace" }}>Pay only when satisfied</div>
            </div>
          </div>

          <div style={{ position:"absolute", top:0, right:20,
            background:C.red, borderRadius:12, padding:"10px 16px",
            boxShadow:"0 8px 24px rgba(232,50,10,0.3)",
            display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontSize:14 }}>🎓</span>
            <div style={{ fontSize:11, fontWeight:700, color:"#fff", fontFamily:"'Syne', sans-serif" }}>College Verified</div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background:C.ink, padding:"28px 40px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid",
          gridTemplateColumns:"repeat(4, 1fr)", gap:0 }}>
          {stats.map(({ val, label, color }, i) => (
            <div key={label} style={{
              textAlign:"center", padding:"8px 0",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none"
            }}>
              <div style={{ fontSize:32, fontWeight:900, color, fontFamily:"'Syne', sans-serif" }}>{val}</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", fontFamily:"'DM Mono', monospace",
                letterSpacing:1, marginTop:2 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BROWSE GIGS */}
      <section style={{ padding:"60px 40px", maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:28 }}>
          <div>
            <div style={{ fontSize:11, color:C.red, fontFamily:"'DM Mono', monospace",
              letterSpacing:1.5, marginBottom:6 }}>BROWSE GIGS</div>
            <h2 style={{ fontSize:36, fontWeight:900, fontFamily:"'Syne', sans-serif",
              color:C.ink, margin:0, letterSpacing:-1 }}>Find the Right Talent</h2>
          </div>
          <div style={{ position:"relative" }}>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search gigs..."
              style={{ border:`1.5px solid ${C.border}`, borderRadius:10, padding:"10px 16px 10px 36px",
                fontSize:13, fontFamily:"'DM Sans', sans-serif", background:C.card,
                outline:"none", width:220, color:C.ink }} />
            <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)",
              fontSize:14, color:C.muted }}>🔍</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              background: activeCategory === cat ? C.ink : C.card,
              border: activeCategory === cat ? `1.5px solid ${C.ink}` : `1.5px solid ${C.border}`,
              borderRadius:100, padding:"7px 18px", fontSize:12,
              fontFamily:"'DM Sans', sans-serif", fontWeight:600,
              color: activeCategory === cat ? "#fff" : C.muted,
              cursor:"pointer", transition:"all 0.2s"
            }}>{cat}</button>
          ))}
        </div>

        {/* Gig Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16 }}>
          {filtered.map(gig => (
            <div key={gig.id} onClick={() => {}} style={{
              background:C.card, borderRadius:16, padding:"20px",
              border:`1px solid ${C.border}`, cursor:"pointer",
              transition:"all 0.2s", boxShadow:"0 2px 8px rgba(0,0,0,0.04)"
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.transform="translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)"; e.currentTarget.style.transform="translateY(0)"; }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
                <div style={{ fontSize:11, color:C.blue, fontFamily:"'DM Mono', monospace",
                  letterSpacing:1, background:"rgba(0,56,255,0.07)", borderRadius:6,
                  padding:"3px 10px", border:"1px solid rgba(0,56,255,0.15)" }}>{gig.category}</div>
                <div style={{ fontSize:22 }}>{gig.badge}</div>
              </div>

              <div style={{ fontSize:16, fontWeight:800, color:C.ink,
                fontFamily:"'Syne', sans-serif", marginBottom:8, lineHeight:1.3 }}>{gig.title}</div>

              <div style={{ display:"flex", gap:6, marginBottom:14, flexWrap:"wrap" }}>
                {gig.skills.map(s => (
                  <span key={s} style={{ background:C.bg, borderRadius:6, padding:"2px 8px",
                    fontSize:10, color:C.muted, fontFamily:"'DM Mono', monospace",
                    border:`1px solid ${C.border}` }}>{s}</span>
                ))}
              </div>

              <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:12,
                display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:C.ink,
                    fontFamily:"'Syne', sans-serif" }}>{gig.student}</div>
                  <div style={{ fontSize:10, color:C.muted, fontFamily:"'DM Mono', monospace" }}>
                    {gig.college} · ⭐{gig.rating}
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontSize:18, fontWeight:900, color:C.ink,
                    fontFamily:"'Syne', sans-serif" }}>{gig.budget}</div>
                  <div style={{ fontSize:10, color:C.muted, fontFamily:"'DM Mono', monospace" }}>
                    {gig.deadline} delivery
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign:"center", padding:"40px", color:C.muted,
            fontFamily:"'DM Sans', sans-serif", fontSize:14 }}>
            No gigs found for "{search}". Try a different search!
          </div>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding:"60px 40px", background:C.ink }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div style={{ fontSize:11, color:C.red, fontFamily:"'DM Mono', monospace",
              letterSpacing:1.5, marginBottom:8 }}>HOW IT WORKS</div>
            <h2 style={{ fontSize:36, fontWeight:900, fontFamily:"'Syne', sans-serif",
              color:"#fff", margin:0, letterSpacing:-1 }}>4 Steps. Zero Friction.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16 }}>
            {steps.map(({ n, icon, title, desc, color }, i) => (
              <div key={n} style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.07)",
                borderRadius:16, padding:"24px 20px",
                border:"1px solid rgba(255,255,255,0.08)"
              }}>
                <div style={{ fontSize:32, fontWeight:900, color, fontFamily:"'Syne', sans-serif",
                  lineHeight:1, marginBottom:12 }}>{n}</div>
                <div style={{ fontSize:28, marginBottom:12 }}>{icon}</div>
                <div style={{ fontSize:16, fontWeight:800, color:"#fff",
                  fontFamily:"'Syne', sans-serif", marginBottom:8 }}>{title}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)",
                  fontFamily:"'DM Sans', sans-serif", lineHeight:1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding:"60px 40px", maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
        <div style={{ background:C.red, borderRadius:24, padding:"50px 40px",
          boxShadow:"0 20px 60px rgba(232,50,10,0.25)" }}>
          <div style={{ fontSize:40, fontWeight:900, fontFamily:"'Syne', sans-serif",
            color:"#fff", letterSpacing:-1, lineHeight:1.1, marginBottom:14 }}>
            Ready to Start?
          </div>
          <div style={{ fontSize:15, color:"rgba(255,255,255,0.75)",
            fontFamily:"'DM Sans', sans-serif", marginBottom:28, maxWidth:500, margin:"0 auto 28px" }}>
            Join thousands of students and businesses already using CampusGig.
          </div>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <button style={{ background:"#fff", border:"none", borderRadius:10,
              padding:"14px 32px", fontSize:15, fontFamily:"'DM Sans', sans-serif",
              color:C.red, cursor:"pointer", fontWeight:800 }}>Post a Project</button>
            <button style={{ background:"transparent", border:"2px solid rgba(255,255,255,0.5)",
              borderRadius:10, padding:"14px 32px", fontSize:15,
              fontFamily:"'DM Sans', sans-serif", color:"#fff", cursor:"pointer", fontWeight:600 }}>
              Become a Freelancer
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"28px 40px",
        display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:28, height:28, background:C.red, borderRadius:7,
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:14, fontWeight:900, color:"#fff", fontFamily:"'Syne', sans-serif" }}>C</div>
          <span style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, fontSize:15, color:C.ink }}>
            Campus<span style={{ color:C.red }}>Gig</span>
          </span>
        </div>
        <div style={{ fontSize:11, color:C.muted, fontFamily:"'DM Mono', monospace" }}>
          © 2024 CampusGig · BCA Department · Made with ❤️ in Siliguri
        </div>
        <div style={{ display:"flex", gap:16 }}>
          {["Privacy","Terms","Contact"].map(l => (
            <span key={l} style={{ fontSize:12, color:C.muted,
              fontFamily:"'DM Sans', sans-serif", cursor:"pointer" }}>{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

// ── SIGN UP PAGE ───────────────────────────────────────────────
function SignupPage({ setPage }) {
  const [role, setRole] = useState("student");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name:"", email:"", college:"", password:"" });

  return (
    <div style={{ minHeight:"100vh", background:C.bg, display:"flex",
      alignItems:"center", justifyContent:"center", padding:"80px 20px" }}>
      <div style={{ width:"100%", maxWidth:460 }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, justifyContent:"center", marginBottom:16 }}>
            <div style={{ width:36, height:36, background:C.red, borderRadius:10,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:18, fontWeight:900, color:"#fff", fontFamily:"'Syne', sans-serif" }}>C</div>
            <span style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, fontSize:20, color:C.ink }}>
              Campus<span style={{ color:C.red }}>Gig</span>
            </span>
          </div>
          <h2 style={{ fontSize:28, fontWeight:900, fontFamily:"'Syne', sans-serif",
            color:C.ink, margin:0, letterSpacing:-0.5 }}>Create Your Account</h2>
          <p style={{ fontSize:13, color:C.muted, fontFamily:"'DM Sans', sans-serif", marginTop:6 }}>
            Join 2,400+ students and businesses
          </p>
        </div>

        <div style={{ background:C.card, borderRadius:20, padding:"32px",
          boxShadow:"0 8px 32px rgba(0,0,0,0.08)", border:`1px solid ${C.border}` }}>

          {/* Role Toggle */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:24,
            background:C.bg, borderRadius:12, padding:4 }}>
            {[["student","🎓 I'm a Student"],["business","🏪 I'm a Business"]].map(([r,l]) => (
              <button key={r} onClick={() => setRole(r)} style={{
                background: role === r ? C.card : "transparent",
                border:"none", borderRadius:9, padding:"10px",
                fontSize:13, fontFamily:"'DM Sans', sans-serif", fontWeight:700,
                color: role === r ? C.ink : C.muted, cursor:"pointer",
                boxShadow: role === r ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                transition:"all 0.2s"
              }}>{l}</button>
            ))}
          </div>

          {/* Form Fields */}
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {[
              ["Full Name", "name", "text", "👤"],
              ["Email Address", "email", "email", "📧"],
              ...(role === "student" ? [["College Name", "college", "text", "🎓"]] : [["Business Name", "college", "text", "🏪"]]),
              ["Password", "password", "password", "🔒"],
            ].map(([label, key, type, icon]) => (
              <div key={key}>
                <label style={{ fontSize:12, fontFamily:"'DM Mono', monospace",
                  color:C.muted, letterSpacing:0.5, display:"block", marginBottom:6 }}>{label}</label>
                <div style={{ position:"relative" }}>
                  <span style={{ position:"absolute", left:12, top:"50%",
                    transform:"translateY(-50%)", fontSize:14 }}>{icon}</span>
                  <input type={type} value={form[key]}
                    onChange={e => setForm({...form, [key]: e.target.value})}
                    style={{ width:"100%", border:`1.5px solid ${C.border}`, borderRadius:10,
                      padding:"11px 12px 11px 36px", fontSize:13, fontFamily:"'DM Sans', sans-serif",
                      background:"#fff", outline:"none", color:C.ink, boxSizing:"border-box",
                      transition:"border 0.2s" }}
                    onFocus={e => e.target.style.borderColor = C.red}
                    onBlur={e => e.target.style.borderColor = C.border}
                    placeholder={`Enter your ${label.toLowerCase()}`} />
                </div>
              </div>
            ))}
          </div>

          <button style={{ width:"100%", background:C.red, border:"none", borderRadius:10,
            padding:"13px", fontSize:15, fontFamily:"'DM Sans', sans-serif",
            color:"#fff", cursor:"pointer", fontWeight:700, marginTop:20,
            boxShadow:"0 6px 20px rgba(232,50,10,0.3)" }}>
            {role === "student" ? "Create Student Account →" : "Create Business Account →"}
          </button>

          <p style={{ textAlign:"center", fontSize:12, color:C.muted,
            fontFamily:"'DM Sans', sans-serif", marginTop:16 }}>
            Already have an account?{" "}
            <span onClick={() => setPage("login")} style={{ color:C.red, fontWeight:700, cursor:"pointer" }}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── LOGIN PAGE ─────────────────────────────────────────────────
function LoginPage({ setPage }) {
  const [form, setForm] = useState({ email:"", password:"" });
  return (
    <div style={{ minHeight:"100vh", background:C.bg, display:"flex",
      alignItems:"center", justifyContent:"center", padding:"80px 20px" }}>
      <div style={{ width:"100%", maxWidth:420 }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, justifyContent:"center", marginBottom:16 }}>
            <div style={{ width:36, height:36, background:C.red, borderRadius:10,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:18, fontWeight:900, color:"#fff", fontFamily:"'Syne', sans-serif" }}>C</div>
            <span style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, fontSize:20, color:C.ink }}>
              Campus<span style={{ color:C.red }}>Gig</span>
            </span>
          </div>
          <h2 style={{ fontSize:28, fontWeight:900, fontFamily:"'Syne', sans-serif",
            color:C.ink, margin:0 }}>Welcome Back</h2>
          <p style={{ fontSize:13, color:C.muted, fontFamily:"'DM Sans', sans-serif", marginTop:6 }}>
            Log in to your CampusGig account
          </p>
        </div>

        <div style={{ background:C.card, borderRadius:20, padding:"32px",
          boxShadow:"0 8px 32px rgba(0,0,0,0.08)", border:`1px solid ${C.border}` }}>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {[["Email Address","email","email","📧"],["Password","password","password","🔒"]].map(([label,key,type,icon]) => (
              <div key={key}>
                <label style={{ fontSize:12, fontFamily:"'DM Mono', monospace",
                  color:C.muted, letterSpacing:0.5, display:"block", marginBottom:6 }}>{label}</label>
                <div style={{ position:"relative" }}>
                  <span style={{ position:"absolute", left:12, top:"50%",
                    transform:"translateY(-50%)", fontSize:14 }}>{icon}</span>
                  <input type={type} value={form[key]}
                    onChange={e => setForm({...form,[key]:e.target.value})}
                    style={{ width:"100%", border:`1.5px solid ${C.border}`, borderRadius:10,
                      padding:"11px 12px 11px 36px", fontSize:13, fontFamily:"'DM Sans', sans-serif",
                      background:"#fff", outline:"none", color:C.ink, boxSizing:"border-box" }}
                    onFocus={e => e.target.style.borderColor = C.red}
                    onBlur={e => e.target.style.borderColor = C.border}
                    placeholder={`Enter your ${label.toLowerCase()}`} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"right", marginTop:8, marginBottom:4 }}>
            <span style={{ fontSize:12, color:C.red, fontFamily:"'DM Sans', sans-serif",
              cursor:"pointer", fontWeight:600 }}>Forgot password?</span>
          </div>

          <button style={{ width:"100%", background:C.ink, border:"none", borderRadius:10,
            padding:"13px", fontSize:15, fontFamily:"'DM Sans', sans-serif",
            color:"#fff", cursor:"pointer", fontWeight:700, marginTop:12,
            boxShadow:"0 6px 20px rgba(0,0,0,0.15)" }}>Log In →</button>

          <div style={{ display:"flex", alignItems:"center", gap:10, margin:"20px 0" }}>
            <div style={{ flex:1, height:1, background:C.border }} />
            <span style={{ fontSize:11, color:C.muted, fontFamily:"'DM Mono', monospace" }}>OR</span>
            <div style={{ flex:1, height:1, background:C.border }} />
          </div>

          <button style={{ width:"100%", background:C.bg, border:`1.5px solid ${C.border}`,
            borderRadius:10, padding:"12px", fontSize:13, fontFamily:"'DM Sans', sans-serif",
            color:C.ink, cursor:"pointer", fontWeight:600, display:"flex",
            alignItems:"center", justifyContent:"center", gap:8 }}>
            <span>🎓</span> Continue with College Email
          </button>

          <p style={{ textAlign:"center", fontSize:12, color:C.muted,
            fontFamily:"'DM Sans', sans-serif", marginTop:16 }}>
            Don't have an account?{" "}
            <span onClick={() => setPage("signup")} style={{ color:C.red, fontWeight:700, cursor:"pointer" }}>
              Sign up free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── APP ────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo(0,0); }, [page]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F7F4EE; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F7F4EE; }
        ::-webkit-scrollbar-thumb { background: #E0DAD0; border-radius: 3px; }
      `}</style>
      <Nav page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "signup" && <SignupPage setPage={setPage} />}
      {page === "login" && <LoginPage setPage={setPage} />}
      {["browse","how","business"].includes(page) && <HomePage setPage={setPage} />}
    </>
  );
}