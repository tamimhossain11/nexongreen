import Layouts from "../layouts/Layouts";
import Link from "next/link";

const team = [
  {
    name: "Alif Zahan Prachurja",
    role: "Chief Executive Officer",
    image: "/team/prachurja.jpg",
    bio: "Alif Zahan Prachurja is the Chairman of Nexon Green, providing strategic guidance and overseeing key business initiatives. Currently pursuing a degree in Marketing, he combines business knowledge with leadership and entrepreneurial vision to help Nexon Green grow as a globally recognized digital solutions company from Bangladesh.",
    skills: ["Strategic Leadership", "Business Development", "Marketing Strategy", "Team Management", "Entrepreneurship", "Client Relationship Management", "Strategic Planning", "Innovation & Problem Solving"],
  },
  {
    name: "Sikder Atif Abrar",
    role: "Chief operating Officer",
    image: "/team/atif.jpeg",
    bio: "Atif Abrar is the Chief Operating Officer of Nexon Green. Currently pursuing a BSc in Computer Science and Engineering, he combines technical knowledge with leadership and entrepreneurial vision. He leads the company's strategic direction, working closely with development and creative teams to deliver web development, software solutions, digital marketing, and multimedia production services.",
    skills: ["Strategic Leadership", "Java & Python", "HTML & CSS", "Web Development", "AI Tools Utilization", "Workflow Automation", "IT Consultancy", "Project Coordination"],
  },
  {
    name: "Tamim Hossain",
    role: "Chief Technology Officer",
    image: "/team/tamim.jpeg",
    bio: "Tamim Hossain is a Software Engineer and CTO at Nexon Green with a BSc in Software Engineering from the University of Roehampton. He is also CTO of Dreams of Bangladesh (robotics) and a Product Engineer at BIMS Philippines. He specializes in AI, IoT, backend systems, and automation engineering — building scalable, future-ready digital solutions.",
    skills: ["Full-Stack Web Development", "Python & JavaScript", "AI Integration", "IoT Development", "Backend System Architecture", "Robotics Programming", "Workflow Automation", "API Development & Integration"],
  },
  {
    name: "Tasfiqul Islam",
    role: "Chief Marketing Officer",
    image: "/team/Tasfiq.jpg",
    bio: "Tasfiqul Islam is the CMO at Nexon Green, leading the company's marketing vision, creative strategy, and brand growth. He specializes in motion graphics, SaaS promotional videos, and professional video editing — creating high-impact content that attracts audiences and converts viewers into customers. He blends creativity, technology, and marketing strategy to drive business growth.",
    skills: ["Digital Marketing Strategy", "Brand Development", "Motion Graphics Design", "SaaS Promo Videos", "Video Editing & Post-Production", "Visual Storytelling", "Social Media Marketing", "Campaign Planning"],
  },
];

const VALUES = [
  { n: "01", title: "Innovation", desc: "We constantly explore new technologies and creative ideas to build smarter solutions for our clients." },
  { n: "02", title: "Transparency", desc: "We communicate openly with clients and within our team, building trust at every step of a project." },
  { n: "03", title: "Excellence", desc: "Quality is non-negotiable. We deliver polished, high-impact results that make a real difference." },
  { n: "04", title: "Impact", desc: "We measure success by the real-world results our work creates for businesses and communities." },
];

const Team = () => (
  <Layouts>

    {/* ── Banner ── */}
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
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>Team</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          The Minds Behind <span style={{ color: "var(--accent)" }}>NexonGreen</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto" }}>
          Our leadership team brings together expertise in engineering, marketing, business strategy, and creative design.
        </p>
      </div>
    </div>

    {/* ── Team Members ── */}
    <section style={{ padding: "96px 0 48px" }}>
      <div className="ng-container">
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {team.map((member, i) => (
            <div key={i} className={`ng-team-member ${i % 2 === 0 ? "ng-team-member--even" : "ng-team-member--odd"}`}>

              {/* Photo */}
              <div className="ng-team-member__photo">
                <div style={{
                  borderRadius: 18, overflow: "hidden",
                  border: "1px solid rgba(91,174,47,0.15)",
                  aspectRatio: "3/4",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                }}>
                  <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </div>

              {/* Content */}
              <div className="ng-team-member__content">
                <span style={{
                  display: "inline-block",
                  fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700,
                  color: "var(--accent)", letterSpacing: 2.5, textTransform: "uppercase",
                  background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.2)",
                  borderRadius: 50, padding: "5px 14px", marginBottom: 18,
                }}>
                  {member.role}
                </span>
                <h2 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "var(--light)", marginBottom: 20, lineHeight: 1.15 }}>
                  {member.name}
                </h2>
                <div style={{ width: 40, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 24 }} />
                <p style={{ fontFamily: "var(--font-2)", fontSize: 15, color: "rgba(255,255,255,0.60)", lineHeight: 1.8, marginBottom: 32 }}>
                  {member.bio}
                </p>
                <div style={{ marginBottom: 8, fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 2, textTransform: "uppercase" }}>
                  Core Skills
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                  {member.skills.map((skill, j) => (
                    <span key={j} style={{
                      fontFamily: "var(--font-2)", fontSize: 12.5, fontWeight: 500,
                      color: "rgba(255,255,255,0.75)",
                      background: "rgba(91,174,47,0.07)",
                      border: "1px solid rgba(91,174,47,0.18)",
                      borderRadius: 6, padding: "6px 14px",
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Values ── */}
    <section style={{ padding: "80px 0 96px", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="ng-section-label" style={{ justifyContent: "center" }}>What Drives Us</div>
          <h2 className="ng-section-title">Values That <span>Lead Us</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{
              background: "rgba(18,20,16,0.7)",
              border: "1px solid rgba(91,174,47,0.10)",
              borderRadius: 14, padding: "32px 28px",
              textAlign: "center",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.30)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: "var(--font-1)", fontSize: 32, fontWeight: 800, color: "rgba(91,174,47,0.18)", marginBottom: 16, lineHeight: 1 }}>{v.n}</div>
              <h4 style={{ fontFamily: "var(--font-1)", fontSize: 17, fontWeight: 700, color: "var(--light)", marginBottom: 12 }}>{v.title}</h4>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, color: "rgba(255,255,255,0.50)", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section style={{ padding: "80px 0", textAlign: "center", background: "rgba(91,174,47,0.03)", borderTop: "1px solid rgba(91,174,47,0.08)" }}>
      <div className="ng-container">
        <h2 className="ng-section-title" style={{ maxWidth: 500, margin: "0 auto 16px" }}>
          Ready to Build Something <span>Remarkable?</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 440, margin: "0 auto 36px", textAlign: "center" }}>
          Our team is ready to turn your ideas into powerful digital solutions.
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

export default Team;
