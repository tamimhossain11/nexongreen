import Layouts from "../layouts/Layouts";
import Link from "next/link";

const SOLUTIONS = [
  { n: "01", title: "MVP Development", desc: "We build your Minimum Viable Product quickly and efficiently so you can validate your idea with real users." },
  { n: "02", title: "Landing Page & Branding", desc: "A professional brand identity and high-converting landing page to attract your first customers and investors." },
  { n: "03", title: "Mobile App Development", desc: "Cross-platform mobile apps built to launch fast and iterate based on user feedback and growth data." },
  { n: "04", title: "Digital Marketing", desc: "Growth marketing strategies including social media, SEO, and performance ads to build your early user base." },
  { n: "05", title: "SaaS Product Development", desc: "From concept to cloud-hosted SaaS platform — we architect, build, and deploy your software product." },
  { n: "06", title: "Tech Consulting", desc: "Strategic technology guidance to help founders make the right architectural and stack decisions early on." },
];

const PROCESS = [
  { n: "01", title: "Idea Validation", desc: "We help you map out your concept, identify your target user, and define the core features that matter most." },
  { n: "02", title: "Rapid Prototyping", desc: "Clickable prototypes built quickly so you can test your concept with real users before writing production code." },
  { n: "03", title: "MVP Build", desc: "Fast, focused development of your core product — prioritizing value delivery over feature bloat." },
  { n: "04", title: "Launch & Feedback", desc: "We get your product in front of real users and help you gather structured feedback to guide iteration." },
  { n: "05", title: "Scale & Grow", desc: "Once validated, we help you scale the product, expand features, and build the team infrastructure around it." },
];

const PERKS = [
  { title: "Startup-Friendly Pricing", desc: "Flexible payment structures and phased delivery to match your runway and fundraising milestones." },
  { title: "Fast Time-to-Market", desc: "We prioritize speed without sacrificing quality — getting you to market in weeks, not months." },
  { title: "Founder-First Communication", desc: "Direct access to our team. No account managers, no overhead — just fast, honest collaboration." },
  { title: "Equity-Friendly Options", desc: "We occasionally offer equity-for-service arrangements for exceptional early-stage concepts. Ask us." },
];

const Solution2 = () => (
  <Layouts>

    {/* Banner */}
    <div style={{
      position: "relative", paddingTop: 160, paddingBottom: 90,
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,174,47,0.08) 0%, transparent 65%), linear-gradient(160deg,#0b0c09 0%,#0d0e0b 100%)",
      overflow: "hidden", textAlign: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(91,174,47,0.14) 1px,transparent 1px)", backgroundSize: "36px 36px", opacity: 0.3, pointerEvents: "none" }} />
      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 18 }}>
          <Link href="/" style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Solutions</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>For Startups</span>
        </div>
        <span style={{ display: "inline-block", fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2.5, textTransform: "uppercase", background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.2)", borderRadius: 50, padding: "5px 16px", marginBottom: 20 }}>
          Startup Technology Partner
        </span>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          Launch Fast, <span style={{ color: "var(--accent)" }}>Build Smart</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto 36px" }}>
          NexonGreen is the ideal technology partner for startups — helping early-stage companies build their MVP, establish their digital presence, and create systems that scale, all within startup-friendly budgets.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Let Us Help You Launch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/about" className="ng-btn-outline" style={{ fontSize: 15 }}>About NexonGreen</Link>
        </div>
      </div>
    </div>

    {/* Intro */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div className="ng-row" style={{ alignItems: "center", gap: 60 }}>
          <div className="ng-row__half">
            <div className="ng-section-label">Who We Help</div>
            <h2 className="ng-section-title">Your Idea Deserves <span>Expert Execution</span></h2>
            <p className="ng-section-desc" style={{ marginTop: 16, marginBottom: 28 }}>
              Most startups fail not because of bad ideas — but because of poor execution and slow time-to-market. NexonGreen bridges that gap with a team that moves fast, communicates clearly, and builds things that actually work.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "MVP-first approach — ship early, learn faster.",
                "Flexible timelines and payment structures.",
                "From idea to live product in weeks.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: "var(--accent)", fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ng-row__half">
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(91,174,47,0.12)", aspectRatio: "4/3" }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Startup Solutions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Solutions grid */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">What We Offer</div>
          <h2 className="ng-section-title">Startup <span>Service Portfolio</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {SOLUTIONS.map((item, i) => (
            <div key={i} style={{
              background: "rgba(13,14,11,0.80)", border: "1px solid rgba(91,174,47,0.10)",
              borderRadius: 14, padding: "28px 28px 32px",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.30)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: "var(--font-1)", fontSize: 28, fontWeight: 800, color: "rgba(91,174,47,0.18)", marginBottom: 16, lineHeight: 1 }}>{item.n}</div>
              <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 12 }}>{item.title}</h4>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 14 }}>
            Talk to Us About Your Startup
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>

    {/* Process */}
    <section style={{ padding: "96px 0" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">How We Work</div>
          <h2 className="ng-section-title">From Idea to <span>Live Product</span></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {PROCESS.map((item, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "80px 1fr",
              padding: "24px 0", gap: 28,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(91,174,47,0.03)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ fontFamily: "var(--font-1)", fontSize: 28, fontWeight: 800, color: "rgba(91,174,47,0.25)", paddingTop: 2, lineHeight: 1 }}>{item.n}</div>
              <div>
                <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Perks */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">Why Choose Us</div>
          <h2 className="ng-section-title">Built for <span>Founders</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {PERKS.map((item, i) => (
            <div key={i} style={{
              padding: "28px 26px", background: "rgba(13,14,11,0.70)",
              border: "1px solid rgba(91,174,47,0.10)", borderRadius: 14,
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(91,174,47,0.28)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"}
            >
              <div style={{ width: 36, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 18 }} />
              <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 12 }}>{item.title}</h4>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: "80px 0", textAlign: "center", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(91,174,47,0.08) 0%, transparent 70%), rgba(8,10,6,0.95)", borderTop: "1px solid rgba(91,174,47,0.10)" }}>
      <div className="ng-container">
        <h2 className="ng-section-title" style={{ maxWidth: 520, margin: "0 auto 16px" }}>
          Have a Startup Idea? <span>We Can Build It.</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 460, margin: "0 auto 36px", textAlign: "center" }}>
          NexonGreen works with founders at every stage — from idea validation to product launch and growth.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Start the Conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/team" className="ng-btn-outline" style={{ fontSize: 15 }}>Meet Our Team</Link>
        </div>
      </div>
    </section>

  </Layouts>
);

export default Solution2;
