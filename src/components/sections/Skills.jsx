import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Content from "../../data/sections/skills.json";

const SkillBar = ({ label, value, animate }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setWidth(value), 100);
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
      {/* Decorative radial glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(0,255,17,0.05) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="ng-row" style={{ alignItems: "flex-start" }}>

          {/* Left: heading + description */}
          <div className="ng-row__half">
            <div className="ng-section-label">{Content.subtitle}</div>
            <h2 className="ng-section-title">
              {Content.title.first}{" "}
              <span>{Content.title.second}</span>{" "}
              <span dangerouslySetInnerHTML={{ __html: Content.title.third }} />
            </h2>
            <p className="ng-section-desc" style={{ marginTop: 16, marginBottom: 40 }}>
              {Content.description}
            </p>

            {/* Tech badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["React", "Node.js", "Python", "IoT", "AWS", "WordPress", "AI/ML", "Flutter"].map((tech, i) => (
                <span key={i} style={{
                  display: "inline-flex", alignItems: "center",
                  background: "rgba(0,255,17,0.06)",
                  border: "1px solid rgba(0,255,17,0.15)",
                  borderRadius: 6,
                  padding: "6px 14px",
                  fontFamily: "var(--font-2)", fontSize: 13, fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  transition: "all 0.3s ease",
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <Link href={Content.button.link} className="ng-btn-outline">
                {Content.button.label} About Us
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: progress bars */}
          <div className="ng-row__half">
            <div style={{
              background: "rgba(18,24,32,0.6)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: "36px 40px",
              backdropFilter: "blur(16px)",
            }}>
              <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 4 }}>
                  Technology Proficiency
                </div>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
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
