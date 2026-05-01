import Link from "next/link";
import dynamic from "next/dynamic";
import Content from "../../data/sections/how-it-works.json";
import workflowAnimation from "../../../public/animations/workflow.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const STEP_ICONS = ["🔍", "🗺️", "⚙️", "🚀"];

const HowItWorksSection = () => {
  return (
    <section className="ng-hiw">
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(0,255,17,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,17,1) 1px, transparent 1px)",
        backgroundSize: "40px 40px", pointerEvents: "none"
      }} />

      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="ng-row">

          {/* Left: Steps */}
          <div className="ng-row__half">
            <div className="ng-section-label">{Content.subtitle}</div>
            <h2 className="ng-section-title" style={{ marginBottom: 48 }}>
              {Content.title.first}{" "}
              <span>{Content.title.second}</span>{" "}
              {Content.title.third}
            </h2>

            <div className="ng-hiw-steps">
              {Content.items.map((item, i) => (
                <div className="ng-hiw-step" key={i}>
                  <div className="ng-hiw-step__num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="ng-hiw-step__content">
                    <h4 className="ng-hiw-step__title">{item.name}</h4>
                    <p className="ng-hiw-step__text">{item.text}</p>
                  </div>
                  <div className="ng-hiw-step__icon" style={{ fontSize: 26 }}>
                    {STEP_ICONS[i]}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
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

          {/* Right: Lottie + decorative elements */}
          <div className="ng-row__half ng-hiw__lottie-wrap">
            <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>

              {/* Outer card frame */}
              <div style={{
                background: "rgba(18,24,32,0.6)",
                border: "1px solid rgba(0,255,17,0.12)",
                borderRadius: 20,
                padding: 32,
                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Corner accent */}
                <div style={{
                  position: "absolute", top: 0, right: 0, width: 100, height: 100,
                  background: "radial-gradient(circle at top right, rgba(0,255,17,0.12), transparent 70%)",
                  pointerEvents: "none"
                }} />

                {/* Lottie animation */}
                <Lottie
                  animationData={workflowAnimation}
                  loop
                  autoplay
                  style={{ width: "100%", height: "auto" }}
                />

                {/* Process label */}
                <div style={{
                  textAlign: "center",
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.06)"
                }}>
                  <div style={{ fontFamily: "var(--font-1)", fontSize: 13, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase" }}>
                    Our Process Flow
                  </div>
                  <div style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                    4 steps to deliver excellence
                  </div>
                </div>
              </div>

              {/* Floating metric cards */}
              <div style={{
                position: "absolute", top: -20, left: -20,
                background: "rgba(0,0,0,0.8)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,255,17,0.2)",
                borderRadius: 10,
                padding: "12px 16px",
              }}>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>On-Time Delivery</div>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 20, fontWeight: 800, color: "#00ff11" }}>100%</div>
              </div>

              <div style={{
                position: "absolute", bottom: -20, right: -20,
                background: "rgba(0,0,0,0.8)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,255,17,0.2)",
                borderRadius: 10,
                padding: "12px 16px",
              }}>
                <div style={{ fontFamily: "var(--font-2)", fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>Avg. Project Time</div>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 20, fontWeight: 800, color: "#00ff11" }}>3–6 wks</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
