import Link from "next/link";
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(() => import("../LottiePlayer"), { ssr: false });

const HeroSection = () => {
  return (
    <section className="ng-hero">
      <div className="ng-hero__orb-1" />
      <div className="ng-hero__orb-2" />

      {/* Full-canvas background Lottie */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <LottiePlayer
          path="/animations/hero-bg.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%", opacity: 0.22 }}
        />
      </div>

      <div className="ng-container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div className="ng-row" style={{ alignItems: "center", minHeight: "80vh" }}>

          {/* ── Left: copy ── */}
          <div className="ng-row__half" style={{ maxWidth: 620 }}>

            <div className="ng-hero__badge">
              <span className="ng-hero__badge-dot" />
              Next-Generation IT Solutions
            </div>

            <h1 className="ng-hero__title">
              Building the
              <span className="ng-hero__title-line2">Digital Future</span>
              <span className="ng-hero__title-line3">IoT · AI · Web · Mobile · Forensics</span>
            </h1>

            <p className="ng-hero__subtitle">
              NexonGreen crafts smart, scalable technology — from connected IoT systems and
              AI-driven platforms to mobile apps, web design, and digital forensics expertise.
            </p>

            <div className="ng-hero__actions">
              <Link href="/contact" className="ng-btn-primary">
                Start a Project
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/about" className="ng-btn-outline">
                Learn About Us
              </Link>
            </div>

            <div className="ng-hero__stats">
              {[
                { n: "200+", l: "Projects Delivered" },
                { n: "50+",  l: "Happy Clients" },
                { n: "5+",   l: "Years Experience" },
                { n: "98%",  l: "Satisfaction Rate" },
              ].map((s, i) => (
                <div className="ng-hero__stat-item" key={i}>
                  <span className="ng-hero__stat-number">{s.n}</span>
                  <span className="ng-hero__stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual ── */}
          <div className="ng-row__half ng-hero__visual">
            <div style={{ position: "relative", width: "100%", maxWidth: 520, aspectRatio: "1/1" }}>

              {/* Background glow behind lottie */}
              <div style={{
                position: "absolute", inset: "5%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(91,174,47,0.12) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
                zIndex: 0,
              }} />

              {/* Lottie animation — loaded from public/animations/ via client-side lottie-web */}
              <LottiePlayer
                path="/animations/tech-orbit.json"
                loop
                autoplay
                style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
              />

              {/* Floating info card — top-left */}
              <div className="ng-hero__float-card" style={{
                position: "absolute", top: "6%", left: "-8%",
                background: "rgba(13,14,11,0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(91,174,47,0.2)",
                borderRadius: 12,
                padding: "14px 20px",
                zIndex: 10,
                minWidth: 148,
              }}>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "1.2px" }}>
                  Active Projects
                </div>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 22, fontWeight: 800, color: "#5BAE2F" }}>
                  24 Live
                </div>
              </div>

              {/* Floating info card — bottom-right */}
              <div className="ng-hero__float-card" style={{
                position: "absolute", bottom: "8%", right: "-8%",
                background: "rgba(13,14,11,0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(91,174,47,0.2)",
                borderRadius: 12,
                padding: "14px 20px",
                zIndex: 10,
                minWidth: 148,
              }}>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "1.2px" }}>
                  Client Rating
                </div>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 22, fontWeight: 800, color: "#5BAE2F" }}>
                  ★ 4.9 / 5
                </div>
              </div>

              {/* Floating pill — top-right */}
              <div className="ng-hero__float-card" style={{
                position: "absolute", top: "28%", right: "-14%",
                background: "rgba(91,174,47,0.12)",
                border: "1px solid rgba(91,174,47,0.25)",
                borderRadius: 50,
                padding: "8px 16px",
                zIndex: 10,
                fontFamily: "var(--font-1)",
                fontSize: 12,
                fontWeight: 700,
                color: "#7DC855",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}>
                🌿 Eco-Tech
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
