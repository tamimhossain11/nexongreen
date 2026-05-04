import Layouts from "../layouts/Layouts";
import Link from "next/link";

const STATS = [
  { value: "3+", label: "Years of Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Mobile Apps Built" },
  { value: "15+", label: "Websites Launched" },
];

const WHY_US = [
  { title: "Full-Stack Expertise", desc: "We cover the full technology stack — from hardware IoT integration to front-end web interfaces and mobile apps. One team that understands the complete picture." },
  { title: "Quality Without Compromise", desc: "Every project goes through thorough testing and quality review before it reaches you. We don't cut corners — because your reputation depends on what we build." },
  { title: "Flexible & Client-Centered", desc: "We adapt to your workflow, budget, and timeline. Whether you need a quick landing page or a long-term tech partner, we structure engagement around what works for you." },
  { title: "Fast Turnaround", desc: "Our agile approach means you see progress quickly, feedback is acted on immediately, and your product reaches completion on schedule — or ahead of it." },
  { title: "Innovation-Driven", desc: "We stay at the forefront of technology — from AI-integrated applications to autonomous robotics. Our team continuously learns to keep your solutions ahead of the curve." },
];

const VALUES = [
  { title: "We Are Passionate", desc: "Technology is not just our profession — it's our passion. We genuinely care about building things that work beautifully and solve real problems." },
  { title: "We Go Deep", desc: "We don't skim the surface. Whether understanding your business requirements or debugging a complex system, we dig deep until we find the best solution." },
  { title: "We Take Ownership", desc: "When we commit to a project, we treat it like it's our own. Your success is our success. We take full responsibility for everything we deliver." },
  { title: "We Value Transparency", desc: "We believe in open, honest communication at every step. You'll always know where your project stands — no surprises, no runarounds." },
  { title: "We Believe in Growth", desc: "We invest in our team's continuous learning. The technology landscape evolves fast — and so do we, ensuring clients always get the best available solutions." },
  { title: "We Say \"We\"", desc: "No individual egos — we operate as one team. Every project is a collective effort and every win belongs to all of us. That spirit makes NexonGreen exceptional." },
];

const About = () => (
  <Layouts>

    {/* ── Page Banner ── */}
    <div style={{
      position: "relative",
      paddingTop: 160, paddingBottom: 90,
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,174,47,0.08) 0%, transparent 65%), linear-gradient(160deg,#0b0c09 0%,#0d0e0b 100%)",
      overflow: "hidden",
      textAlign: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(91,174,47,0.14) 1px,transparent 1px)", backgroundSize: "36px 36px", opacity: 0.3, pointerEvents: "none" }} />
      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 18 }}>
          <Link href="/" style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>About Us</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          About <span style={{ color: "var(--accent)" }}>NexonGreen</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto" }}>
          A next-generation IT company built to power your digital future.
        </p>
      </div>
    </div>

    {/* ── Intro ── */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div className="ng-row" style={{ alignItems: "center", gap: 60 }}>
          <div className="ng-row__half">
            <div className="ng-section-label">Who We Are</div>
            <h2 className="ng-section-title">
              Specializing in <span>Transforming Your Vision</span> Into Real Digital Products
            </h2>
            <p className="ng-section-desc" style={{ marginTop: 16, marginBottom: 32 }}>
              NexonGreen is an IT solutions company based in Purbachal, Dhaka, Bangladesh. Founded with a single purpose: to help businesses and individuals harness the full power of modern technology. From startups needing their first website to established organizations seeking IoT integration or digital forensics support — we are the team that gets it done.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="ng-btn-primary">Talk To an Expert</Link>
              <Link href="/portfolio" className="ng-btn-outline">View Our Work</Link>
            </div>
          </div>
          <div className="ng-row__half">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["IoT system design and integration", "Mobile app development (Android & iOS)", "Website design & WordPress development", "Personal portfolio creation", "Digital forensics support with FTK", "Artificial Intelligence & ML solutions"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 16px", background: "rgba(91,174,47,0.04)", border: "1px solid rgba(91,174,47,0.10)", borderRadius: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Stats ── */}
    <section style={{ padding: "72px 0", background: "rgba(91,174,47,0.03)", borderTop: "1px solid rgba(91,174,47,0.08)", borderBottom: "1px solid rgba(91,174,47,0.08)" }}>
      <div className="ng-container">
        <div className="ng-stats-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "32px 20px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 46, fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: 10 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: 0.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Mission ── */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div className="ng-row" style={{ alignItems: "center", gap: 60 }}>
          <div className="ng-row__half" style={{ order: 2 }}>
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(91,174,47,0.12)", aspectRatio: "4/3" }}>
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&auto=format&fit=crop" alt="Our Mission" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="ng-row__half" style={{ order: 1 }}>
            <div className="ng-section-label">Our Purpose</div>
            <h2 className="ng-section-title">Our <span>Mission</span></h2>
            <p className="ng-section-desc" style={{ marginTop: 16, marginBottom: 28 }}>
              Our mission is to make powerful technology accessible to everyone — from individual professionals who need a standout portfolio, to companies that need complex IoT systems or forensic investigation support.
            </p>
            <p className="ng-section-desc" style={{ marginBottom: 32 }}>
              We believe that great technology, built thoughtfully, changes outcomes. We are committed to delivering solutions that are reliable, scalable, and truly impactful for every client we work with.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Deliver technology that creates measurable impact.", "Build with quality, integrity, and attention to detail.", "Support clients throughout every stage of their journey."].map((item, i) => (
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

    {/* ── Why Work With Us ── */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.6)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">Discover NexonGreen</div>
          <h2 className="ng-section-title">Why Work <span>With Us</span></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {WHY_US.map((item, i) => (
            <div key={i} className="ng-why-row"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "background 0.2s ease" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(91,174,47,0.03)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontFamily: "var(--font-1)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.2)", minWidth: 28 }}>
                  0{i + 1}
                </span>
                <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", margin: 0, lineHeight: 1.3 }}>
                  {item.title}
                </h4>
              </div>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.75 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Values ── */}
    <section style={{ padding: "96px 0 72px" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">Our Culture</div>
          <h2 className="ng-section-title">We Live by <span>Powerful Values</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{
              background: "rgba(18,20,16,0.7)",
              border: "1px solid rgba(91,174,47,0.10)",
              borderRadius: 14,
              padding: "28px 28px 32px",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.28)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 12 }}>
                {v.title}
              </h4>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section style={{ padding: "80px 0", background: "rgba(91,174,47,0.04)", borderTop: "1px solid rgba(91,174,47,0.10)", textAlign: "center" }}>
      <div className="ng-container">
        <div className="ng-section-label" style={{ justifyContent: "center" }}>Let's Build Together</div>
        <h2 className="ng-section-title" style={{ maxWidth: 520, margin: "0 auto 20px" }}>
          Ready to Start Your <span>Project?</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 460, margin: "0 auto 36px", textAlign: "center" }}>
          Our team is ready to turn your ideas into powerful digital solutions. Let's start a conversation today.
        </p>
        <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>

  </Layouts>
);

export default About;
