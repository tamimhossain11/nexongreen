import Content from "../../data/sections/contact.json";

const CONTACT_INFO = [
  { icon: "✉️", label: "Email Us", value: "nexongreenltd@gmail.com" },
  { icon: "📍", label: "Location", value: "Bangladesh" },
  { icon: "💬", label: "Response Time", value: "Within 24 hours" },
];

const ContactSection = () => {
  return (
    <section className="ng-contact">
      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="ng-section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
          <h2 className="ng-section-title" style={{ maxWidth: 560, margin: "0 auto 16px" }}>
            {Content.title.first} <span>{Content.title.second}</span>
          </h2>
          <p className="ng-section-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Ready to build something great? Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="ng-row" style={{ alignItems: "flex-start", gap: 40 }}>

          {/* Left: contact info + quick links */}
          <div style={{ flex: "0 0 320px" }}>
            <div className="ng-contact-info">
              {CONTACT_INFO.map((item, i) => (
                <div className="ng-contact-info-item" key={i}>
                  <div className="ng-contact-info-item__icon">{item.icon}</div>
                  <div>
                    <div className="ng-contact-info-item__label">{item.label}</div>
                    <div className="ng-contact-info-item__value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div style={{
              marginTop: 24,
              background: "rgba(0,255,17,0.06)",
              border: "1px solid rgba(0,255,17,0.15)",
              borderRadius: 12,
              padding: 24,
            }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 700, color: "var(--light)", marginBottom: 8 }}>
                Need a Quick Quote?
              </div>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 16 }}>
                Describe your project and we'll send you a free estimate within 48 hours.
              </p>
              <a href="mailto:nexongreenltd@gmail.com" className="ng-btn-primary" style={{ fontSize: 13, padding: "12px 20px", display: "inline-flex" }}>
                Email Directly
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ flex: 1 }}>
            <div className="ng-form">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="ng-form-group">
                  <label className="ng-form-label">Full Name <span style={{ color: "var(--accent)" }}>*</span></label>
                  <input className="ng-form-input" type="text" placeholder="John Doe" />
                </div>
                <div className="ng-form-group">
                  <label className="ng-form-label">Email Address <span style={{ color: "var(--accent)" }}>*</span></label>
                  <input className="ng-form-input" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="ng-form-group">
                  <label className="ng-form-label">Phone <span style={{ color: "rgba(255,255,255,0.3)" }}>(optional)</span></label>
                  <input className="ng-form-input" type="tel" placeholder="+880..." />
                </div>
                <div className="ng-form-group">
                  <label className="ng-form-label">Service Needed</label>
                  <select className="ng-form-input" style={{ appearance: "none", cursor: "pointer" }}>
                    <option value="">Select a service</option>
                    <option>IoT Solutions</option>
                    <option>Mobile App Development</option>
                    <option>Website Design & WordPress</option>
                    <option>Personal Portfolio</option>
                    <option>Digital Forensics</option>
                    <option>Artificial Intelligence</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="ng-form-group">
                <label className="ng-form-label">Message <span style={{ color: "var(--accent)" }}>*</span></label>
                <textarea
                  className="ng-form-textarea"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <input
                  type="checkbox"
                  id="privacy"
                  style={{ width: 16, height: 16, accentColor: "var(--accent)", cursor: "pointer" }}
                />
                <label htmlFor="privacy" style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
                  I agree to the{" "}
                  <a href="#." style={{ color: "var(--accent)", textDecoration: "none" }}>Privacy Policy</a>{" "}
                  and consent to being contacted.
                </label>
              </div>

              <button className="ng-btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15 }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8l10 0M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
