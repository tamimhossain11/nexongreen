import Layouts from "../layouts/Layouts";
import Link from "next/link";

const SOLUTIONS = [
  { n: "01", title: "Business Website & E-Commerce", desc: "Professional websites and online stores that represent your brand and generate revenue around the clock." },
  { n: "02", title: "Custom Software Development", desc: "Tailored software built around your specific workflows — replacing manual processes with efficient, scalable systems." },
  { n: "03", title: "IoT & Automation", desc: "Smart systems that automate repetitive tasks, monitor operations in real time, and reduce human error." },
  { n: "04", title: "Digital Marketing & SEO", desc: "Targeted campaigns, social media management, and SEO strategies that bring in qualified leads consistently." },
  { n: "05", title: "IT Consultancy", desc: "Strategic technology advice to help you choose the right tools, platforms, and systems for your business goals." },
  { n: "06", title: "Brand & Video Production", desc: "Motion graphics, promotional videos, and brand content that communicate your value proposition powerfully." },
];

const STATS = [
  { value: "3+", label: "Years Serving Businesses" },
  { value: "20+", label: "Enterprise Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24h", label: "Average Response Time" },
];

const WHY = [
  { title: "End-to-End Delivery", desc: "From strategy to execution, we handle every phase — so you deal with one partner, not multiple vendors." },
  { title: "Industry Agnostic", desc: "We've delivered solutions across retail, healthcare, logistics, education, and fintech — we understand diverse business needs." },
  { title: "Scalable Architecture", desc: "Every system we build is designed to grow with your business — no costly rewrites as you scale." },
  { title: "Transparent Reporting", desc: "Weekly updates, milestone reviews, and open communication throughout every engagement." },
];

const Solution1 = () => (
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
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>Enterprise Solutions</span>
        </div>
        <span style={{ display: "inline-block", fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2.5, textTransform: "uppercase", background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.2)", borderRadius: 50, padding: "5px 16px", marginBottom: 20 }}>
          Enterprise Digital Solutions
        </span>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          Grow Your Business with <span style={{ color: "var(--accent)" }}>Smart Technology</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto 36px" }}>
          NexonGreen helps established businesses modernize operations, improve customer experience, and scale faster — from custom web platforms to IoT-powered automation systems.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Talk to Our Team
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/about" className="ng-btn-outline" style={{ fontSize: 15 }}>About NexonGreen</Link>
        </div>
      </div>
    </div>

    {/* Stats strip */}
    <div style={{ borderBottom: "1px solid rgba(91,174,47,0.08)", background: "rgba(91,174,47,0.02)" }}>
      <div className="ng-container">
        <div className="ng-stats-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "32px 20px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 42, fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Intro */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div className="ng-row" style={{ alignItems: "center", gap: 60 }}>
          <div className="ng-row__half">
            <div className="ng-section-label">Who We Serve</div>
            <h2 className="ng-section-title">Powering <span>Modern Businesses</span></h2>
            <p className="ng-section-desc" style={{ marginTop: 16, marginBottom: 28 }}>
              Whether you're a growing startup or an established organization, NexonGreen delivers technology that solves real business problems — increasing efficiency, reducing costs, and opening new revenue streams.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Custom digital tools built around your workflows.", "Integrated systems that scale as your team grows.", "Technology that gives you a measurable competitive edge."].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: "var(--accent)", fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ng-row__half">
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(91,174,47,0.12)", aspectRatio: "4/3" }}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Enterprise Solutions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Solutions grid */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">What We Deliver</div>
          <h2 className="ng-section-title">Enterprise <span>Service Portfolio</span></h2>
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
            Discuss Your Business Needs
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>

    {/* Why NexonGreen */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">Why Partner With Us</div>
          <h2 className="ng-section-title">What Makes <span>NexonGreen Different</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {WHY.map((item, i) => (
            <div key={i} style={{
              padding: "28px 26px", background: "rgba(18,20,16,0.6)",
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
          Ready to Take Your <span>Business Digital?</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 460, margin: "0 auto 36px", textAlign: "center" }}>
          NexonGreen delivers end-to-end digital solutions tailored to your business size, industry, and goals.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/team" className="ng-btn-outline" style={{ fontSize: 15 }}>Meet Our Team</Link>
        </div>
      </div>
    </section>

  </Layouts>
);

export default Solution1;
