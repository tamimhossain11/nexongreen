import Link from "next/link";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import techOrbitAnimation from "../../../public/animations/tech-orbit.json";

const HeroSection = () => {
  return (
    <section className="ng-hero">
      <div className="ng-hero__bg-grid" />
      <div className="ng-hero__orb-1" />
      <div className="ng-hero__orb-2" />

      <div className="ng-container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="ng-row" style={{ minHeight: "80vh", alignItems: "center" }}>

          {/* Left Content */}
          <div className="ng-row__half" style={{ maxWidth: 640 }}>
            <div className="ng-hero__badge">
              <span className="ng-hero__badge-dot" />
              Next-Generation IT Solutions
            </div>

            <h1 className="ng-hero__title">
              Powering Your
              <span className="ng-hero__title-accent">Digital Future</span>
            </h1>

            <p className="ng-hero__subtitle">
              NexonGreen delivers cutting-edge technology — from IoT systems and mobile apps
              to AI-driven platforms, web design, and digital forensics. Built for the modern world.
            </p>

            <div className="ng-hero__actions">
              <Link href="/contact" className="ng-btn-primary">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/service-1" className="ng-btn-outline">
                Explore Services
              </Link>
            </div>

            <div className="ng-hero__stats">
              <div className="ng-hero__stat-item">
                <span className="ng-hero__stat-number">200+</span>
                <span className="ng-hero__stat-label">Projects Done</span>
              </div>
              <div className="ng-hero__stat-item">
                <span className="ng-hero__stat-number">50+</span>
                <span className="ng-hero__stat-label">Happy Clients</span>
              </div>
              <div className="ng-hero__stat-item">
                <span className="ng-hero__stat-number">98%</span>
                <span className="ng-hero__stat-label">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Visual — Lottie Animation */}
          <div className="ng-row__half ng-hero__visual">
            <div style={{ position: "relative", width: "100%", maxWidth: 520, aspectRatio: "1 / 1" }}>
              {/* Glow behind lottie */}
              <div style={{
                position: "absolute",
                inset: "10%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,255,17,0.08) 0%, transparent 70%)",
                filter: "blur(30px)",
                pointerEvents: "none",
              }} />
              <Lottie
                animationData={techOrbitAnimation}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />

              {/* Floating stat cards */}
              <div style={{
                position: "absolute",
                top: "8%",
                left: "0%",
                background: "rgba(18,24,32,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,255,17,0.2)",
                borderRadius: "10px",
                padding: "14px 18px",
                minWidth: 140,
              }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-2)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "1px" }}>Active Projects</div>
                <div style={{ fontSize: 22, fontFamily: "var(--font-1)", fontWeight: 800, color: "#00ff11" }}>24 Live</div>
              </div>

              <div style={{
                position: "absolute",
                bottom: "12%",
                right: "0%",
                background: "rgba(18,24,32,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,255,17,0.2)",
                borderRadius: "10px",
                padding: "14px 18px",
                minWidth: 140,
              }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-2)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "1px" }}>Client Rated</div>
                <div style={{ fontSize: 22, fontFamily: "var(--font-1)", fontWeight: 800, color: "#00ff11" }}>★ 4.9 / 5</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
