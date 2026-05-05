import Layouts from "../layouts/Layouts";
import Link from "next/link";

const SOLUTIONS = [
  { n: "01", title: "Personal Portfolio Website", desc: "A stunning personal website that showcases your work, skills, and achievements to employers or clients." },
  { n: "02", title: "CV & Resume Website", desc: "Turn your CV into an interactive online resume that leaves a lasting impression in job applications." },
  { n: "03", title: "Freelancer Platform Setup", desc: "Full setup of your freelance presence — website, branding, and profile pages on key platforms." },
  { n: "04", title: "Personal Branding & Design", desc: "Logo, color palette, and brand guidelines tailored for individuals building their personal brand online." },
  { n: "05", title: "Digital Forensics Support", desc: "Personal digital forensics — data recovery, device investigation, and evidence analysis for personal or legal needs." },
  { n: "06", title: "IT Consultancy", desc: "One-on-one technology consulting to help you choose the right tools, apps, and systems for your goals." },
];

const IDEAL = [
  { icon: "💼", title: "Freelancers", desc: "Build a professional online presence that attracts clients and commands premium rates." },
  { icon: "🎓", title: "Students & Graduates", desc: "Stand out from the crowd with a portfolio site that showcases your projects and potential." },
  { icon: "🎨", title: "Creatives & Designers", desc: "Display your work beautifully with a portfolio that does justice to your creative output." },
  { icon: "🔬", title: "Researchers & Academics", desc: "Publish your work, credentials, and publications in a structured, professional web presence." },
];

const EXAMPLES = [
  { title: "Portfolio in 7 Days", desc: "We regularly deliver personal portfolio websites in under a week — ready for job applications or client pitching." },
  { title: "Mobile-First Design", desc: "Every personal site we build looks perfect on phones, tablets, and desktops — where your audience actually views it." },
  { title: "SEO Optimized", desc: "Your name and skills get found on Google. We build personal sites with structured data and on-page SEO baked in." },
  { title: "Easy to Update", desc: "Whether WordPress or a simple CMS, we hand over tools you can update yourself without technical knowledge." },
];

const Solution3 = () => (
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
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>For Individuals</span>
        </div>
        <span style={{ display: "inline-block", fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2.5, textTransform: "uppercase", background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.2)", borderRadius: 50, padding: "5px 16px", marginBottom: 20 }}>
          Personal Digital Services
        </span>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          Stand Out with a <span style={{ color: "var(--accent)" }}>Professional Digital Presence</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto 36px" }}>
          Whether you're a freelancer, creative professional, researcher, or student — NexonGreen helps individuals build impressive digital identities that open doors to new opportunities.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Get a Personalized Quote
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/about" className="ng-btn-outline" style={{ fontSize: 15 }}>About NexonGreen</Link>
        </div>
      </div>
    </div>

    {/* Ideal for */}
    <div style={{ borderBottom: "1px solid rgba(91,174,47,0.08)", background: "rgba(91,174,47,0.02)" }}>
      <div className="ng-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0 }}>
          {IDEAL.map((item, i) => (
            <div key={i} style={{ padding: "32px 28px", borderRight: i < IDEAL.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 15, fontWeight: 700, color: "var(--light)", marginBottom: 8 }}>{item.title}</div>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Intro */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div className="ng-row" style={{ alignItems: "center", gap: 60 }}>
          <div className="ng-row__half" style={{ order: 2 }}>
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(91,174,47,0.12)", aspectRatio: "4/3" }}>
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" alt="Individual Solutions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="ng-row__half" style={{ order: 1 }}>
            <div className="ng-section-label">Your Digital Identity</div>
            <h2 className="ng-section-title">Why Your Online Presence <span>Matters More Than Ever</span></h2>
            <p className="ng-section-desc" style={{ marginTop: 16, marginBottom: 28 }}>
              In today's competitive world, your digital presence is your first impression — often before anyone meets you. A professional personal website signals credibility, showcases your expertise, and keeps you discoverable 24/7.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Impress employers, clients, and collaborators instantly.",
                "Control your online narrative with a site you own.",
                "Affordable packages designed for individual budgets.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: "var(--accent)", fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services grid */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">What We Offer</div>
          <h2 className="ng-section-title">Services for <span>Individuals</span></h2>
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
            Tell Us What You Need
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>

    {/* What to expect */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">What to Expect</div>
          <h2 className="ng-section-title">Our Commitment <span>to You</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {EXAMPLES.map((item, i) => (
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
          Ready to Build Your <span>Digital Identity?</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 460, margin: "0 auto 36px", textAlign: "center" }}>
          NexonGreen helps individuals create a powerful online presence that opens doors to new opportunities.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/faq" className="ng-btn-outline" style={{ fontSize: 15 }}>View FAQs</Link>
        </div>
      </div>
    </section>

  </Layouts>
);

export default Solution3;
