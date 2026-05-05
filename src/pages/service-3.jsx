import Layouts from "../layouts/Layouts";
import Link from "next/link";

const FEATURES = [
  { n: "01", title: "Custom Website Design", desc: "Fully bespoke designs tailored to your brand identity — built with clean code and modern UI principles." },
  { n: "02", title: "WordPress Development", desc: "Custom WordPress themes, plugins, and full site builds. Easy for clients to manage without technical knowledge." },
  { n: "03", title: "E-Commerce Websites", desc: "WooCommerce and custom e-commerce stores with product management, payment gateways, and order tracking." },
  { n: "04", title: "Landing Pages", desc: "High-converting landing pages designed to capture leads and promote products or services effectively." },
  { n: "05", title: "Responsive & Mobile-First", desc: "Every website we build is fully responsive and optimized for mobile, tablet, and desktop screens." },
  { n: "06", title: "SEO & Performance Optimization", desc: "Speed optimization, on-page SEO best practices, and Core Web Vitals improvements built into every project." },
];

const PROCESS = [
  { n: "01", title: "Discovery & Briefing", desc: "We learn about your business, goals, target audience, and competitors before designing anything." },
  { n: "02", title: "Design Mockups", desc: "Detailed visual mockups in your brand style — reviewed and refined before development starts." },
  { n: "03", title: "Development", desc: "Clean, semantic code built on the right platform — custom or WordPress depending on your needs." },
  { n: "04", title: "Content Integration", desc: "We integrate your content, images, and media into the final design with care and attention." },
  { n: "05", title: "Testing & Launch", desc: "Cross-browser and device testing, performance checks, then a smooth and organized launch." },
  { n: "06", title: "Training & Handover", desc: "For WordPress sites, we train you to manage your content independently after launch." },
];

const Service3 = () => (
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
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Services</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>Website Design</span>
        </div>
        <span style={{ display: "inline-block", fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2.5, textTransform: "uppercase", background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.2)", borderRadius: 50, padding: "5px 16px", marginBottom: 20 }}>
          Web Design & Development
        </span>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          Websites That <span style={{ color: "var(--accent)" }}>Look Great & Convert</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto 36px" }}>
          NexonGreen creates stunning, responsive websites and WordPress solutions — from landing pages to full e-commerce stores — that are fast, beautiful, and easy to manage.
        </p>
        <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
          Get a Free Quote
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>
    </div>

    {/* Intro image */}
    <div style={{ borderTop: "1px solid rgba(91,174,47,0.08)", borderBottom: "1px solid rgba(91,174,47,0.08)" }}>
      <div className="ng-container" style={{ padding: "72px 28px" }}>
        <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(91,174,47,0.12)", maxHeight: 420 }}>
          <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80" alt="Website Design" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </div>

    {/* Features */}
    <section style={{ padding: "96px 0" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">What We Build</div>
          <h2 className="ng-section-title">Our Web Design <span>Services</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {FEATURES.map((item, i) => (
            <div key={i} style={{
              background: "rgba(18,20,16,0.7)", border: "1px solid rgba(91,174,47,0.10)",
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
            Tell Us About Your Website
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>

    {/* Process */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">Our Process</div>
          <h2 className="ng-section-title">How We Build <span>Your Website</span></h2>
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

    {/* CTA */}
    <section style={{ padding: "80px 0", textAlign: "center", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(91,174,47,0.08) 0%, transparent 70%), rgba(8,10,6,0.95)", borderTop: "1px solid rgba(91,174,47,0.10)" }}>
      <div className="ng-container">
        <h2 className="ng-section-title" style={{ maxWidth: 520, margin: "0 auto 16px" }}>
          Ready for a Website <span>That Works?</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 440, margin: "0 auto 36px", textAlign: "center" }}>
          Let NexonGreen build a site that represents your brand and actively grows your business.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Start Your Web Project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/about" className="ng-btn-outline" style={{ fontSize: 15 }}>Learn About Us</Link>
        </div>
      </div>
    </section>

  </Layouts>
);

export default Service3;
