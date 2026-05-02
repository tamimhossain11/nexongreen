import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Content from "../../data/sections/skills.json";

const TECH_BADGES = ["React", "Node.js", "Python", "IoT", "AWS", "WordPress", "AI / ML", "Flutter"];

const SkillBar = ({ label, value, animate }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setWidth(value), 120);
    return () => clearTimeout(t);
  }, [animate, value]);

  return (
    <div className="ng-skill-item">
      <div className="ng-skill-header">
        <span className="ng-skill-name">{label}</span>
        <span className="ng-skill-pct">{value}%</span>
      </div>
      <div className="ng-skill-track">
        <div className="ng-skill-bar" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ng-skills" ref={ref}>
      {/* Radial accent */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(91,174,47,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="ng-row" style={{ alignItems: "flex-start" }}>

          {/* Left: heading */}
          <div className="ng-row__half">
            <div className="ng-section-label">{Content.subtitle}</div>
            <h2 className="ng-section-title">
              {Content.title.first} <span>{Content.title.second}</span>{" "}
              <span dangerouslySetInnerHTML={{ __html: Content.title.third }} />
            </h2>
            <p className="ng-section-desc" style={{ marginTop: 14, marginBottom: 36 }}>
              {Content.description}
            </p>

            {/* Tech badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
              {TECH_BADGES.map((tech, i) => (
                <span key={i} style={{
                  display: "inline-flex", alignItems: "center",
                  background: "rgba(91,174,47,0.06)",
                  border: "1px solid rgba(91,174,47,0.18)",
                  borderRadius: 6,
                  padding: "6px 14px",
                  fontFamily: "var(--font-2)", fontSize: 12.5, fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <Link href={Content.button.link} className="ng-btn-outline">
              {Content.button.label} About Us
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right: progress bars */}
          <div className="ng-row__half">
            <div style={{
              background: "rgba(18,20,16,0.7)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: "32px 36px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}>
              <div style={{ marginBottom: 24, paddingBottom: 18, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 15, fontWeight: 700, color: "var(--light)", marginBottom: 3 }}>
                  Technology Proficiency
                </div>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                  Our team expertise across platforms
                </div>
              </div>

              {Content.items.map((item, i) => (
                <SkillBar key={i} label={item.label} value={Number(item.value)} animate={animate} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
