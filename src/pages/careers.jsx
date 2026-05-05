import Layouts from "../layouts/Layouts";
import Link from "next/link";

const OPENINGS = [
  {
    title: "Full-Stack Web Developer",
    type: "Full Time",
    location: "Dhaka / Remote",
    desc: "We're looking for a skilled developer with experience in React, Next.js, and Node.js to join our core engineering team and build web platforms for our clients.",
    skills: ["React / Next.js", "Node.js", "REST APIs", "PostgreSQL or MongoDB"],
  },
  {
    title: "Flutter Mobile Developer",
    type: "Part Time",
    location: "Remote",
    desc: "Help us build cross-platform mobile applications for Android and iOS. You'll work closely with our design and backend teams to ship polished user experiences.",
    skills: ["Flutter / Dart", "Firebase", "REST APIs", "UI/UX Principles"],
  },
  {
    title: "IoT & Embedded Systems Engineer",
    type: "Full Time",
    location: "Dhaka",
    desc: "Design and develop IoT solutions involving Arduino, ESP32, Raspberry Pi, and cloud integration. Ideal for engineers who love working across both hardware and software.",
    skills: ["Arduino / ESP32", "C/C++", "MQTT / HTTP", "Cloud Integration"],
  },
  {
    title: "Digital Marketing Specialist",
    type: "Part Time",
    location: "Remote",
    desc: "Drive growth for NexonGreen and our clients through targeted digital marketing campaigns, SEO strategies, and social media management.",
    skills: ["SEO / SEM", "Meta & Google Ads", "Content Strategy", "Analytics"],
  },
  {
    title: "UI/UX Designer",
    type: "Internship",
    location: "Dhaka / Remote",
    desc: "Join our design team and create intuitive, visually compelling interfaces for web and mobile products. Portfolio required.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    title: "Business Development Executive",
    type: "Full Time",
    location: "Dhaka",
    desc: "Identify and develop new client relationships, manage proposals, and help expand NexonGreen's reach across Bangladesh and international markets.",
    skills: ["B2B Sales", "Proposal Writing", "CRM Tools", "Communication"],
  },
];

const PERKS = [
  { icon: "🚀", title: "Work on Real Products", desc: "Every team member contributes to live client projects and our own SaaS products from day one." },
  { icon: "🌍", title: "Remote-Friendly", desc: "Many of our roles support fully remote or hybrid work arrangements." },
  { icon: "📚", title: "Learning Culture", desc: "We invest in your growth — courses, mentorship, and access to the latest tools and technologies." },
  { icon: "🤝", title: "Collaborative Team", desc: "A small, high-trust team where your ideas are heard and your contribution makes a visible impact." },
  { icon: "💡", title: "Innovation First", desc: "We encourage experimentation. If you have an idea that can improve how we work or what we build, we want to hear it." },
  { icon: "📈", title: "Growth Opportunities", desc: "As we scale, team members who grow with us are first in line for leadership and senior roles." },
];

const TYPE_COLORS = {
  "Full Time": { bg: "rgba(91,174,47,0.10)", border: "rgba(91,174,47,0.25)", color: "var(--accent)" },
  "Part Time": { bg: "rgba(91,174,47,0.06)", border: "rgba(91,174,47,0.18)", color: "#7DC855" },
  "Internship": { bg: "rgba(255,200,60,0.08)", border: "rgba(255,200,60,0.22)", color: "#E8C840" },
};

const Careers = () => (
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
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>Careers</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          Build the Future <span style={{ color: "var(--accent)" }}>With Us</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 540, margin: "0 auto" }}>
          Join a team of engineers, designers, and strategists building next-generation technology solutions from Bangladesh.
        </p>
      </div>
    </div>

    {/* Open Roles */}
    <section style={{ padding: "96px 0" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">We're Hiring</div>
          <h2 className="ng-section-title">Open <span>Positions</span></h2>
          <p className="ng-section-desc" style={{ marginTop: 12, maxWidth: 520 }}>
            We're always looking for talented people. If you don't see a perfect fit, send us your CV anyway at{" "}
            <a href="mailto:nexongreenltd@gmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>nexongreenltd@gmail.com</a>.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {OPENINGS.map((job, i) => {
            const tc = TYPE_COLORS[job.type] || TYPE_COLORS["Full Time"];
            return (
              <div key={i} style={{
                background: "rgba(18,20,16,0.65)", border: "1px solid rgba(91,174,47,0.10)",
                borderRadius: 14, padding: "28px 32px",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(91,174,47,0.28)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 16 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", borderRadius: 50, padding: "4px 12px", background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color }}>
                        {job.type}
                      </span>
                      <span style={{ fontFamily: "var(--font-2)", fontSize: 12.5, color: "rgba(255,255,255,0.40)" }}>📍 {job.location}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-1)", fontSize: 20, fontWeight: 700, color: "var(--light)", margin: 0 }}>{job.title}</h3>
                  </div>
                  <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 13, padding: "10px 20px", whiteSpace: "nowrap", flexShrink: 0 }}>
                    Apply Now
                  </Link>
                </div>
                <p style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 18 }}>{job.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {job.skills.map((s, j) => (
                    <span key={j} style={{ fontFamily: "var(--font-2)", fontSize: 12, color: "rgba(255,255,255,0.60)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "4px 12px" }}>{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Perks */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">Life at NexonGreen</div>
          <h2 className="ng-section-title">Why Join <span>Our Team</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {PERKS.map((item, i) => (
            <div key={i} style={{
              background: "rgba(13,14,11,0.70)", border: "1px solid rgba(91,174,47,0.10)",
              borderRadius: 14, padding: "28px 26px",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.28)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
              <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 10 }}>{item.title}</h4>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section style={{ padding: "72px 0", background: "rgba(91,174,47,0.03)", borderTop: "1px solid rgba(91,174,47,0.08)", borderBottom: "1px solid rgba(91,174,47,0.08)" }}>
      <div className="ng-container">
        <div className="ng-stats-grid">
          {[
            { value: "3+", label: "Years Building Products" },
            { value: "4", label: "Core Team Members" },
            { value: "20+", label: "Projects Delivered" },
            { value: "100%", label: "Remote-Friendly Roles" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "32px 20px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 42, fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: "80px 0", textAlign: "center" }}>
      <div className="ng-container">
        <h2 className="ng-section-title" style={{ maxWidth: 520, margin: "0 auto 16px" }}>
          Don't See the Right Role? <span>Still Reach Out.</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 460, margin: "0 auto 36px", textAlign: "center" }}>
          We're always open to meeting talented people. Send us your portfolio or CV and we'll keep you in mind.
        </p>
        <a href="mailto:nexongreenltd@gmail.com" className="ng-btn-primary" style={{ fontSize: 15 }}>
          Send Your CV
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </div>
    </section>

  </Layouts>
);

export default Careers;
