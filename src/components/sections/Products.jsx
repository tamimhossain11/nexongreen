import Link from "next/link";

const FEATURES = [
  "Employee onboarding and profile management",
  "Attendance tracking with real-time reporting",
  "Leave management with approval workflows",
  "Payroll processing and automated calculations",
  "Performance review cycles and KPI tracking",
  "Role-based access control and team hierarchy",
  "Document management and digital signatures",
  "Notifications, reminders, and audit logs",
  "Multi-department and multi-branch support",
  "Responsive interface — desktop and mobile ready",
];

const ProductsSection = () => (
  <section className="ng-products">
    <div className="ng-container">

      {/* Header */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-2)", fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 3, textTransform: "uppercase" }}>
            04 — Flagship Product
          </span>
        </div>
        <h2 className="ng-section-title" style={{ fontSize: "clamp(32px,5vw,52px)", marginBottom: 0 }}>
          Staffly — <span>HRMS SaaS Platform</span>
        </h2>
        <div style={{ width: 52, height: 3, background: "var(--accent)", borderRadius: 2, margin: "18px 0 0" }} />
      </div>

      {/* Badge */}
      <div style={{ marginBottom: 28 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(91,174,47,0.08)",
          border: "1px solid rgba(91,174,47,0.25)",
          borderRadius: 50, padding: "7px 18px",
          fontFamily: "var(--font-2)", fontSize: 11.5, fontWeight: 700,
          color: "var(--accent)", letterSpacing: 1.5, textTransform: "uppercase",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
          Nexon Green Product
        </span>
      </div>

      {/* Description */}
      <p style={{ fontFamily: "var(--font-2)", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.72)", maxWidth: 700, marginBottom: 56 }}>
        Staffly is Nexon Green's proprietary Human Resource Management SaaS platform, purpose-built for the operational complexity of modern businesses. It transforms how organizations manage people, processes, and performance.
      </p>

      {/* Main two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 48, alignItems: "start" }}>

        {/* Left: Features list */}
        <div>
          <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>
            Core Features
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "padding-left 0.2s ease",
              }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = "8px"}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = "0px"}
              >
                <span style={{ color: "var(--accent)", fontSize: 16, flexShrink: 0, lineHeight: 1 }}>→</span>
                <span style={{ fontFamily: "var(--font-2)", fontSize: 14.5, color: "rgba(255,255,255,0.80)", lineHeight: 1.5 }}>{f}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 14, marginTop: 44, flexWrap: "wrap" }}>
            <a href="https://staffly-zeta.vercel.app/login" target="_blank" rel="noopener noreferrer" className="ng-btn-primary" style={{ fontSize: 14 }}>
              Try Staffly
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link href="/contact" className="ng-btn-outline" style={{ fontSize: 14 }}>
              Request a Demo
            </Link>
          </div>
        </div>

        {/* Right: Info cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Staffly preview image */}
          <div style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(91,174,47,0.15)",
            marginBottom: 4,
          }}>
            <img
              src="/staffly.jpeg"
              alt="Staffly HRMS Platform"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Business Value card */}
          <div style={{
            background: "rgba(18,20,16,0.75)",
            border: "1px solid rgba(91,174,47,0.14)",
            borderRadius: 14,
            padding: "24px 26px",
            backdropFilter: "blur(16px)",
          }}>
            <h4 style={{ fontFamily: "var(--font-1)", fontSize: 17, fontWeight: 700, color: "var(--light)", marginBottom: 12 }}>
              Business Value
            </h4>
            <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, lineHeight: 1.7, color: "rgba(255,255,255,0.60)", marginBottom: 18 }}>
              Staffly eliminates the administrative bottleneck in HR operations, replacing fragmented spreadsheets and manual processes with a single, reliable system — reducing overhead and freeing leadership to focus on growth.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Scalable", "Cloud-Based", "Multi-Tenant", "Secure", "Role-Controlled"].map((t, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-2)", fontSize: 11.5, fontWeight: 600,
                  color: "var(--accent)", border: "1px solid rgba(91,174,47,0.30)",
                  borderRadius: 50, padding: "4px 12px",
                  background: "rgba(91,174,47,0.06)",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Ideal For card */}
          <div style={{
            background: "rgba(18,20,16,0.75)",
            border: "1px solid rgba(91,174,47,0.14)",
            borderRadius: 14,
            padding: "24px 26px",
            backdropFilter: "blur(16px)",
          }}>
            <h4 style={{ fontFamily: "var(--font-1)", fontSize: 17, fontWeight: 700, color: "var(--light)", marginBottom: 12 }}>
              Ideal For
            </h4>
            <p style={{ fontFamily: "var(--font-2)", fontSize: 13.5, lineHeight: 1.7, color: "rgba(255,255,255,0.60)", marginBottom: 18 }}>
              Businesses with 10–500+ employees seeking to formalize HR operations without enterprise-level complexity or cost. From fast-scaling startups to structured mid-size companies.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Startups", "SMEs", "Agencies", "Retail Chains"].map((t, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-2)", fontSize: 11.5, fontWeight: 600,
                  color: "var(--accent)", border: "1px solid rgba(91,174,47,0.30)",
                  borderRadius: 50, padding: "4px 12px",
                  background: "rgba(91,174,47,0.06)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default ProductsSection;
