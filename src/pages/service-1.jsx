import Layouts from "../layouts/Layouts";
import Link from "next/link";

const FEATURES = [
  { n: "01", title: "Device & Sensor Integration", desc: "We connect physical sensors and devices to software platforms, enabling real-time data collection from any environment." },
  { n: "02", title: "IoT Dashboard Development", desc: "Custom web dashboards that visualize live sensor data, analytics, and system status for smarter decision-making." },
  { n: "03", title: "Automation & Control Systems", desc: "Automated workflows triggered by sensor events — reducing manual work and improving operational efficiency." },
  { n: "04", title: "Arduino & Microcontroller Programming", desc: "Firmware development for Arduino, ESP32, Raspberry Pi, and other microcontrollers for specialized hardware use cases." },
  { n: "05", title: "Cloud & API Integration", desc: "Connect IoT devices to cloud platforms like AWS IoT, Firebase, or custom APIs to store and process data at scale." },
  { n: "06", title: "Robotics & Embedded Systems", desc: "Advanced embedded solutions for robotics, smart machines, and industrial automation built with precision." },
];

const PROCESS = [
  { n: "01", title: "Requirement Analysis", desc: "We understand your environment, goals, and constraints before designing any system." },
  { n: "02", title: "Hardware Selection", desc: "We choose the right sensors, controllers, and communication protocols for your use case." },
  { n: "03", title: "Firmware Development", desc: "Custom code is written and tested on hardware to ensure reliable operation." },
  { n: "04", title: "Cloud & Backend Setup", desc: "We set up the data pipeline — from device to cloud — with secure, scalable infrastructure." },
  { n: "05", title: "Dashboard & Interface", desc: "A user-friendly interface is built so you can monitor, control, and analyze your system." },
  { n: "06", title: "Deployment & Support", desc: "Full deployment and ongoing technical support to keep your IoT system running smoothly." },
];

const Service1 = () => (
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
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Services</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>IoT Solutions</span>
        </div>
        <span style={{ display: "inline-block", fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2.5, textTransform: "uppercase", background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.2)", borderRadius: 50, padding: "5px 16px", marginBottom: 20 }}>
          Smart Connected Technology
        </span>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          Build Smarter Systems <span style={{ color: "var(--accent)" }}>with IoT</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto 36px" }}>
          NexonGreen designs and develops end-to-end IoT solutions — from hardware integration to cloud dashboards — that connect devices, automate processes, and deliver real-time insights.
        </p>
        <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
          Get a Free Consultation
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>
    </div>

    {/* Intro image */}
    <div style={{ borderTop: "1px solid rgba(91,174,47,0.08)", borderBottom: "1px solid rgba(91,174,47,0.08)" }}>
      <div className="ng-container" style={{ padding: "72px 28px" }}>
        <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(91,174,47,0.12)", maxHeight: 420 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="IoT Solutions" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </div>

    {/* Features */}
    <section style={{ padding: "96px 0" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">What We Build</div>
          <h2 className="ng-section-title">Our IoT Development <span>Services</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {FEATURES.map((item, i) => (
            <div key={i} style={{
              background: "rgba(18,20,16,0.7)", border: "1px solid rgba(91,174,47,0.10)",
              borderRadius: 14, padding: "28px 28px 32px",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.30)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontFamily: "var(--font-1)", fontSize: 28, fontWeight: 800, color: "rgba(91,174,47,0.18)", marginBottom: 16, lineHeight: 1 }}>{item.n}</div>
              <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 12 }}>{item.title}</h4>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 14 }}>
            Tell Us About Your Project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>

    {/* Process */}
    <section style={{ padding: "96px 0", background: "rgba(18,20,16,0.5)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="ng-container">
        <div style={{ marginBottom: 60 }}>
          <div className="ng-section-label">Our Process</div>
          <h2 className="ng-section-title">How We Deliver <span>IoT Solutions</span></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {PROCESS.map((item, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "80px 1fr",
              padding: "24px 0", gap: 28,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(91,174,47,0.03)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ fontFamily: "var(--font-1)", fontSize: 28, fontWeight: 800, color: "rgba(91,174,47,0.25)", paddingTop: 2, lineHeight: 1 }}>{item.n}</div>
              <div>
                <h4 style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: "80px 0", textAlign: "center", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(91,174,47,0.08) 0%, transparent 70%), rgba(8,10,6,0.95)", borderTop: "1px solid rgba(91,174,47,0.10)" }}>
      <div className="ng-container">
        <h2 className="ng-section-title" style={{ maxWidth: 520, margin: "0 auto 16px" }}>
          Ready to Connect <span>Your World?</span>
        </h2>
        <p className="ng-section-desc" style={{ maxWidth: 440, margin: "0 auto 36px", textAlign: "center" }}>
          Let NexonGreen design a smart IoT system tailored to your specific needs and environment.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 15 }}>
            Start Your IoT Project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/about" className="ng-btn-outline" style={{ fontSize: 15 }}>Learn About Us</Link>
        </div>
      </div>
    </section>

  </Layouts>
);

export default Service1;
