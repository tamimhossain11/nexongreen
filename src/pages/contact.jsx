import { useState } from "react";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const INFO = [
  { icon: "✉", label: "Email", value: "nexongreenltd@gmail.com", href: "mailto:nexongreenltd@gmail.com" },
  { icon: "📍", label: "Location", value: "98 road no. 9A, Dhanmondi,Dhaka-1205", href: null },
  { icon: "💬", label: "Response Time", value: "Within 24 hours", href: null },
  { icon: "🕐", label: "Working Hours", value: "Sun – Thu, 9am – 6pm (BST)", href: null },
];

const SERVICES = [
  "IoT Solutions", "Mobile App Development", "Website Design & WordPress",
  "Personal Portfolio", "Digital Forensics (FTK)", "Artificial Intelligence & ML",
  "Staffly HRMS Demo", "Other / Consultation",
];

const Contact = () => {
  const [sent, setSent] = useState(false);

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
            <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>Contact</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
            Let's Build Something <span style={{ color: "var(--accent)" }}>Together</span>
          </h1>
          <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto" }}>
            Tell us about your project and our team will respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Info strip */}
      <div style={{ borderBottom: "1px solid rgba(91,174,47,0.08)", background: "rgba(91,174,47,0.02)" }}>
        <div className="ng-container">
          <div className="ng-contact-info-strip">
            {INFO.map((item, i) => (
              <div key={i} className="ng-contact-info-strip__item">
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-2)", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.80)", textDecoration: "none" }}>{item.value}</a>
                    : <div style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.80)" }}>{item.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <section style={{ padding: "96px 0 120px" }}>
        <div className="ng-container">
          <div className="ng-contact-layout">

            {/* Sidebar */}
            <div className="ng-contact-sidebar">
              <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 20 }}>
                Why Choose Us
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                {[
                  { t: "Free Consultation", d: "Every project starts with a free discovery call — no commitment required." },
                  { t: "Fast Response", d: "We answer every inquiry within 24 hours, usually much faster." },
                  { t: "Clear Pricing", d: "Transparent, itemized quotes with no hidden fees or surprise charges." },
                  { t: "You Own Everything", d: "All source code and assets are handed over at project completion." },
                ].map((item, i) => (
                  <div key={i} style={{ background: "rgba(18,20,16,0.6)", border: "1px solid rgba(91,174,47,0.10)", borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-1)", fontSize: 13.5, fontWeight: 700, color: "var(--light)" }}>{item.t}</span>
                    </div>
                    <p style={{ fontFamily: "var(--font-2)", fontSize: 12.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0, paddingLeft: 16 }}>{item.d}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(91,174,47,0.06)", border: "1px solid rgba(91,174,47,0.18)", borderRadius: 14, padding: "22px 20px" }}>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 15, fontWeight: 700, color: "var(--light)", marginBottom: 8 }}>Prefer Email?</div>
                <p style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: 16 }}>
                  Write to us directly and we'll reply within 24 hours.
                </p>
                <a href="mailto:nexongreenltd@gmail.com" className="ng-btn-primary" style={{ fontSize: 13, padding: "10px 18px", display: "inline-flex" }}>
                  Send Email
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="ng-contact-form-col">
              {sent ? (
                <div style={{ textAlign: "center", padding: "80px 40px", background: "rgba(91,174,47,0.05)", border: "1px solid rgba(91,174,47,0.20)", borderRadius: 16 }}>
                  <div style={{ fontSize: 48, marginBottom: 20, color: "var(--accent)" }}>✓</div>
                  <h3 style={{ fontFamily: "var(--font-1)", fontSize: 26, fontWeight: 800, color: "var(--light)", marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ fontFamily: "var(--font-2)", fontSize: 15, color: "rgba(255,255,255,0.55)" }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="ng-form">
                  <h2 style={{ fontFamily: "var(--font-1)", fontSize: 22, fontWeight: 800, color: "var(--light)", marginBottom: 28 }}>
                    Tell Us About Your Project
                  </h2>

                  <div className="ng-form-row">
                    <div className="ng-form-group">
                      <label className="ng-form-label">First Name <span style={{ color: "var(--accent)" }}>*</span></label>
                      <input className="ng-form-input" type="text" placeholder="John" />
                    </div>
                    <div className="ng-form-group">
                      <label className="ng-form-label">Last Name <span style={{ color: "var(--accent)" }}>*</span></label>
                      <input className="ng-form-input" type="text" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="ng-form-row">
                    <div className="ng-form-group">
                      <label className="ng-form-label">Email Address <span style={{ color: "var(--accent)" }}>*</span></label>
                      <input className="ng-form-input" type="email" placeholder="you@company.com" />
                    </div>
                    <div className="ng-form-group">
                      <label className="ng-form-label">Phone <span style={{ color: "rgba(255,255,255,0.25)" }}>(optional)</span></label>
                      <input className="ng-form-input" type="tel" placeholder="+880 ..." />
                    </div>
                  </div>

                  <div className="ng-form-row">
                    <div className="ng-form-group">
                      <label className="ng-form-label">Company / Organization</label>
                      <input className="ng-form-input" type="text" placeholder="Your company name" />
                    </div>
                    <div className="ng-form-group">
                      <label className="ng-form-label">Service Needed <span style={{ color: "var(--accent)" }}>*</span></label>
                      <select className="ng-form-input">
                        <option value="">Select a service…</option>
                        {SERVICES.map((s, i) => <option key={i}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="ng-form-group">
                    <label className="ng-form-label">Project Budget <span style={{ color: "rgba(255,255,255,0.25)" }}>(optional)</span></label>
                    <select className="ng-form-input">
                      <option value="">Select a range…</option>
                      <option>Under $500</option>
                      <option>$500 – $2,000</option>
                      <option>$2,000 – $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000+</option>
                      <option>Let's discuss</option>
                    </select>
                  </div>

                  <div className="ng-form-group">
                    <label className="ng-form-label">Project Description <span style={{ color: "var(--accent)" }}>*</span></label>
                    <textarea className="ng-form-textarea" rows={6}
                      placeholder="Describe your project, goals, timeline, and any specific requirements…" />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    <input type="checkbox" id="privacy" style={{ width: 15, height: 15, accentColor: "var(--accent)", cursor: "pointer" }} />
                    <label htmlFor="privacy" style={{ fontFamily: "var(--font-2)", fontSize: 12.5, color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>
                      I agree to the <a href="#." style={{ color: "var(--accent)", textDecoration: "none" }}>Privacy Policy</a> and consent to being contacted.
                    </label>
                  </div>

                  <button onClick={() => setSent(true)} className="ng-btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15 }}>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l10 0M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <div style={{ borderTop: "1px solid rgba(91,174,47,0.08)", height: 380, overflow: "hidden" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4!2d90.4987!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ed28eb7d95%3A0xf08b4a8e2e2b5f1b!2sPurbachal%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
          width="100%" height="380"
          style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </Layouts>
  );
};

export default Contact;
