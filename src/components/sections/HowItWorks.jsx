import Link from "next/link";
import dynamic from "next/dynamic";
import Content from "../../data/sections/how-it-works.json";

const LottiePlayer = dynamic(() => import("../LottiePlayer"), { ssr: false });

const STEP_ICONS = ["🔍", "🗺️", "⚙️", "🚀"];

const HowItWorksSection = () => {
  return (
    <section className="ng-hiw">
      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(91,174,47,0.12) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.3,
        pointerEvents: "none",
      }} />

      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="ng-row" style={{ alignItems: "flex-start" }}>

          {/* Left: Steps */}
          <div className="ng-row__half">
            <div className="ng-section-label">{Content.subtitle}</div>
            <h2 className="ng-section-title" style={{ marginBottom: 44 }}>
              {Content.title.first}{" "}
              <span>{Content.title.second}</span>{" "}
              {Content.title.third}
            </h2>

            <div className="ng-hiw-steps">
              {Content.items.map((item, i) => (
                <div className="ng-hiw-step" key={i}>
                  <div className="ng-hiw-step__num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ng-hiw-step__content">
                    <h4 className="ng-hiw-step__title">{item.name}</h4>
                    <p className="ng-hiw-step__text">{item.text}</p>
                  </div>
                  <span style={{ fontSize: 22, flexShrink: 0, opacity: 0.45 }}>{STEP_ICONS[i]}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
              <Link href={Content.button1.link} className="ng-btn-primary">
                {Content.button1.label}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href={Content.button2.link} className="ng-btn-outline">
                {Content.button2.label}
              </Link>
            </div>
          </div>

          {/* Right: Lottie + frame */}
          <div className="ng-row__half ng-hiw__lottie-wrap">
            <div style={{ position: "relative", width: "100%", maxWidth: 460 }}>

              {/* Card frame */}
              <div style={{
                background: "rgba(18,20,16,0.7)",
                border: "1px solid rgba(91,174,47,0.15)",
                borderRadius: 20,
                padding: "32px 32px 24px",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Corner glow */}
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 120, height: 120,
                  background: "radial-gradient(circle at top right, rgba(91,174,47,0.14), transparent 70%)",
                  pointerEvents: "none",
                }} />

                {/* Lottie animation */}
                <LottiePlayer
                  path="/animations/workflow.json"
                  loop
                  autoplay
                  style={{ width: "100%", height: "auto", aspectRatio: "1/1" }}
                />

                {/* Footer label */}
                <div style={{
                  textAlign: "center",
                  paddingTop: 18,
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700,
                    color: "var(--accent)", letterSpacing: 2.5, textTransform: "uppercase",
                  }}>
                    Our Process Flow
                  </div>
                  <div style={{ fontFamily: "var(--font-2)", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
                    4 steps · precision delivery
                  </div>
                </div>
              </div>

              {/* Floating metric chips */}
              <div style={{
                position: "absolute", top: -18, left: -18,
                background: "rgba(8,9,8,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(91,174,47,0.2)",
                borderRadius: 10,
                padding: "12px 16px",
                zIndex: 10,
              }}>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>
                  On-Time Rate
                </div>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 20, fontWeight: 800, color: "#5BAE2F" }}>
                  100%
                </div>
              </div>

              <div style={{
                position: "absolute", bottom: -18, right: -18,
                background: "rgba(8,9,8,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(91,174,47,0.2)",
                borderRadius: 10,
                padding: "12px 16px",
                zIndex: 10,
              }}>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>
                  Avg. Timeline
                </div>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 20, fontWeight: 800, color: "#5BAE2F" }}>
                  3–6 Weeks
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
