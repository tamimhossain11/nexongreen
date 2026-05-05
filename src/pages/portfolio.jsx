import { useState } from "react";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const PROJECTS = [
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    category: "IoT",
    title: "Smart Factory Monitoring System",
    desc: "A real-time IoT dashboard for monitoring production-line sensors across 12 machines. Built with ESP32, MQTT, and a custom React dashboard — reducing downtime by 34%.",
    tags: ["IoT", "ESP32", "React", "MQTT"],
    year: "2024",
  },
  {
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
    category: "Mobile App",
    title: "Retail Management App (Android & iOS)",
    desc: "A cross-platform Flutter app for a retail chain — managing inventory, staff attendance, and daily sales reports with offline-first capability and Firebase sync.",
    tags: ["Flutter", "Firebase", "Android", "iOS"],
    year: "2024",
  },
  {
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    category: "Web Design",
    title: "Corporate Website & Brand Redesign",
    desc: "A complete website redesign for a Dhaka-based logistics firm — new brand identity, responsive Next.js site, SEO optimization, and a 60% improvement in page load speed.",
    tags: ["Next.js", "WordPress", "SEO", "Brand"],
    year: "2025",
  },
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
    category: "Digital Forensics",
    title: "Corporate Data Breach Investigation",
    desc: "Assisted a legal team with a corporate data breach investigation using FTK. Recovered deleted emails, reconstructed a timeline of events, and produced a court-ready forensic report.",
    tags: ["FTK", "Digital Forensics", "Evidence Recovery"],
    year: "2024",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    category: "SaaS",
    title: "Staffly — HRMS SaaS Platform",
    desc: "Our flagship product — a cloud-based HR Management System built for businesses with 10–500+ employees. Includes payroll, attendance, leave management, and role-based access control.",
    tags: ["SaaS", "Next.js", "Supabase", "Multi-tenant"],
    year: "2024",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
    category: "AI & Automation",
    title: "AI-Powered Invoice Processing Tool",
    desc: "An automation tool that uses OCR and AI to extract, categorize, and process invoice data from scanned PDFs — cutting manual data entry time by over 80% for an accounting firm.",
    tags: ["Python", "AI", "OCR", "Automation"],
    year: "2025",
  },
];

const CATEGORIES = ["All", "IoT", "Mobile App", "Web Design", "Digital Forensics", "SaaS", "AI & Automation"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
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
            <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>Portfolio</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
            Our Work & <span style={{ color: "var(--accent)" }}>Case Studies</span>
          </h1>
          <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto" }}>
            A selection of projects we've built for clients and developed in-house — across IoT, mobile, web, forensics, and SaaS.
          </p>
        </div>
      </div>

      {/* Filter */}
      <section style={{ padding: "64px 0 0" }}>
        <div className="ng-container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                fontFamily: "var(--font-1)", fontSize: 13, fontWeight: 600,
                padding: "9px 20px", borderRadius: 8, cursor: "pointer",
                background: active === cat ? "var(--accent)" : "rgba(255,255,255,0.04)",
                border: active === cat ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.08)",
                color: active === cat ? "#000" : "rgba(255,255,255,0.60)",
                transition: "all 0.18s",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24, paddingBottom: 96 }}>
            {filtered.map((project, i) => (
              <div key={i} style={{
                background: "rgba(18,20,16,0.65)",
                border: project.featured ? "1px solid rgba(91,174,47,0.35)" : "1px solid rgba(91,174,47,0.10)",
                borderRadius: 16, overflow: "hidden",
                transition: "border-color 0.2s, transform 0.2s",
                position: "relative",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.40)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = project.featured ? "rgba(91,174,47,0.35)" : "rgba(91,174,47,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {project.featured && (
                  <div style={{ position: "absolute", top: 16, right: 16, zIndex: 5, fontFamily: "var(--font-2)", fontSize: 10, fontWeight: 700, color: "#000", background: "var(--accent)", borderRadius: 50, padding: "4px 10px", letterSpacing: 1, textTransform: "uppercase" }}>
                    Flagship
                  </div>
                )}
                <div style={{ height: 220, overflow: "hidden" }}>
                  <img src={project.img} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 1.5, textTransform: "uppercase", background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.20)", borderRadius: 50, padding: "3px 10px" }}>
                      {project.category}
                    </span>
                    <span style={{ fontFamily: "var(--font-2)", fontSize: 12, color: "rgba(255,255,255,0.30)" }}>{project.year}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-1)", fontSize: 18, fontWeight: 700, color: "var(--light)", lineHeight: 1.35, marginBottom: 12 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 18 }}>
                    {project.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tags.map((tag, j) => (
                      <span key={j} style={{ fontFamily: "var(--font-2)", fontSize: 11.5, color: "rgba(255,255,255,0.50)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "3px 10px" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center", background: "rgba(91,174,47,0.03)", borderTop: "1px solid rgba(91,174,47,0.08)" }}>
        <div className="ng-container">
          <h2 className="ng-section-title" style={{ maxWidth: 500, margin: "0 auto 16px" }}>
            Ready to Build Something <span>Remarkable?</span>
          </h2>
          <p className="ng-section-desc" style={{ maxWidth: 440, margin: "0 auto 36px", textAlign: "center" }}>
            Let's discuss your project and create something that makes the list.
          </p>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Start a Project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

    </Layouts>
  );
};

export default Portfolio;
