import { useState } from "react";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const FAQS = {
  general: [
    { q: "What services does NexonGreen offer?", a: "NexonGreen offers a comprehensive range of IT services including IoT system design and integration, Android & iOS mobile app development, website design & WordPress development, personal portfolio creation, digital forensics with FTK, and AI/ML solutions. We also develop proprietary SaaS products like Staffly — our HRMS platform." },
    { q: "Where is NexonGreen based?", a: "NexonGreen is headquartered in Purbachal, Dhaka, Bangladesh. While we are based in Bangladesh, we work with clients across the globe and deliver projects remotely with no quality compromise." },
    { q: "How long has NexonGreen been in operation?", a: "NexonGreen has been operating for 3+ years. In that time we've delivered 20+ projects, built 10+ mobile apps, and launched 15+ websites for clients ranging from individuals to established businesses." },
    { q: "Can NexonGreen handle both small and large-scale projects?", a: "Absolutely. We work with individual freelancers who need a portfolio site right through to businesses requiring full IoT infrastructure or enterprise SaaS deployment. Our team scales engagement to fit your project's scope and budget." },
    { q: "Do you offer ongoing support after project delivery?", a: "Yes. We provide post-delivery support, maintenance, and iterative improvements. We don't just hand over and leave — we treat your product as an ongoing partnership and help it scale as your business grows." },
  ],
  services: [
    { q: "What does your IoT development service include?", a: "Our IoT service covers the full stack: hardware selection and integration, embedded programming, cloud connectivity, real-time dashboards, and mobile app interfaces. We build smart systems for homes, businesses, and industrial environments." },
    { q: "What platforms do you develop mobile apps for?", a: "We develop for both Android and iOS using native and cross-platform (Flutter) approaches. We handle everything from UI/UX design to backend APIs and app store deployment." },
    { q: "What is included in your website design service?", a: "Our website service includes custom design, responsive development, WordPress/CMS integration, SEO optimization, performance tuning, and hosting setup. We deliver websites that look great and rank well." },
    { q: "What is Digital Forensics and how does NexonGreen help?", a: "Digital forensics involves the recovery and investigation of digital evidence. We use industry-standard tools like FTK (Forensic Tool Kit) to assist organizations in evidence collection, analysis, and incident response investigations." },
    { q: "Do you build AI or machine learning solutions?", a: "Yes. We integrate AI into applications — from intelligent chatbots and recommendation engines to computer vision and automation pipelines. We work with Python-based ML frameworks and modern AI APIs." },
  ],
  staffly: [
    { q: "What is Staffly?", a: "Staffly is NexonGreen's proprietary HRMS (Human Resource Management System) SaaS platform. It's purpose-built for businesses with 10–500+ employees and handles everything from onboarding and attendance tracking to payroll processing and performance reviews." },
    { q: "Who is Staffly designed for?", a: "Staffly is ideal for startups, SMEs, agencies, and retail chains that want to formalize their HR operations without the complexity or cost of enterprise systems. It's cloud-based, multi-tenant, and role-controlled." },
    { q: "Can I try Staffly before committing?", a: "Yes. You can access the Staffly platform at staffly-zeta.vercel.app. For a guided demo tailored to your organization's needs, reach out to us via the contact form and we'll schedule a session." },
    { q: "What core features does Staffly include?", a: "Staffly includes employee onboarding and profile management, attendance tracking with real-time reporting, leave management with approval workflows, payroll processing, performance review cycles, role-based access control, document management, and multi-department/branch support." },
    { q: "Is Staffly secure and scalable?", a: "Yes. Staffly is built with security and scalability at its core — featuring role-based access control, cloud infrastructure, and a multi-tenant architecture that can grow alongside your organization." },
  ],
  pricing: [
    { q: "How is NexonGreen's pricing structured?", a: "We offer flexible pricing depending on project type and scope. Most projects are quoted on a fixed-price basis after a discovery call. We also offer retainer arrangements for ongoing development or monthly support packages." },
    { q: "Do you offer free consultations?", a: "Yes. We offer a free initial consultation to understand your project requirements and provide a rough estimate. Contact us through the form below or email us directly at nexongreenltd@gmail.com." },
    { q: "Can I get a custom quote for my project?", a: "Absolutely. Every project is unique. Reach out with your requirements and we'll provide a detailed, itemized quote with a clear scope of work, timeline, and pricing breakdown." },
    { q: "What payment methods do you accept?", a: "We accept bank transfers, mobile banking (bKash, Nagad), and international payment options. Payment terms are discussed and agreed upon before project commencement." },
  ],
};

const TABS = [
  { key: "general", label: "General" },
  { key: "services", label: "Services" },
  { key: "staffly", label: "Staffly" },
  { key: "pricing", label: "Pricing" },
];

const AccordionItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 0", background: "transparent", border: "none", cursor: "pointer",
          textAlign: "left", gap: 20,
        }}
      >
        <span style={{ fontFamily: "var(--font-1)", fontSize: 15, fontWeight: 600, color: open ? "#5BAE2F" : "rgba(255,255,255,0.88)", transition: "color 0.2s", lineHeight: 1.4 }}>
          {q}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          background: open ? "rgba(91,174,47,0.15)" : "rgba(255,255,255,0.05)",
          border: open ? "1px solid rgba(91,174,47,0.30)" : "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s ease",
          color: open ? "#5BAE2F" : "rgba(255,255,255,0.4)",
          fontSize: 18, lineHeight: 1,
        }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: 20, paddingRight: 48 }}>
          <p style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.58)", lineHeight: 1.8, margin: 0 }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Layouts>

      {/* ── Banner ── */}
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
            <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>FAQs</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
            Frequently Asked <span style={{ color: "var(--accent)" }}>Questions</span>
          </h1>
          <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto" }}>
            Everything you need to know about NexonGreen, our services, Staffly, and how we work.
          </p>
        </div>
      </div>

      {/* ── FAQ Body ── */}
      <section style={{ padding: "96px 0 120px" }}>
        <div className="ng-container">
          <div className="ng-faq-layout">

            {/* Sidebar tabs */}
            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 20 }}>
                Categories
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {TABS.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      textAlign: "left", background: activeTab === tab.key ? "rgba(91,174,47,0.10)" : "transparent",
                      border: activeTab === tab.key ? "1px solid rgba(91,174,47,0.25)" : "1px solid transparent",
                      borderRadius: 8, padding: "11px 16px", cursor: "pointer",
                      fontFamily: "var(--font-1)", fontSize: 14, fontWeight: 600,
                      color: activeTab === tab.key ? "#5BAE2F" : "rgba(255,255,255,0.55)",
                      transition: "all 0.18s ease",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Contact nudge */}
              <div style={{ marginTop: 40, background: "rgba(91,174,47,0.05)", border: "1px solid rgba(91,174,47,0.14)", borderRadius: 12, padding: "20px 18px" }}>
                <div style={{ fontFamily: "var(--font-1)", fontSize: 13.5, fontWeight: 700, color: "var(--light)", marginBottom: 8 }}>
                  Still have questions?
                </div>
                <p style={{ fontFamily: "var(--font-2)", fontSize: 12.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 14 }}>
                  We're happy to help with any query you have.
                </p>
                <Link href="/contact" className="ng-btn-primary" style={{ fontSize: 12.5, padding: "9px 16px", display: "inline-flex" }}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Accordion */}
            <div>
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: "var(--font-1)", fontSize: 26, fontWeight: 800, color: "var(--light)", marginBottom: 8 }}>
                  {TABS.find(t => t.key === activeTab)?.label}
                </h2>
                <p style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.40)" }}>
                  {FAQS[activeTab].length} questions
                </p>
              </div>
              <div>
                {FAQS[activeTab].map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "72px 0", background: "rgba(91,174,47,0.03)", borderTop: "1px solid rgba(91,174,47,0.08)", textAlign: "center" }}>
        <div className="ng-container">
          <h3 style={{ fontFamily: "var(--font-1)", fontSize: 26, fontWeight: 800, color: "var(--light)", marginBottom: 12 }}>
            Didn't find your answer?
          </h3>
          <p style={{ fontFamily: "var(--font-2)", fontSize: 15, color: "rgba(255,255,255,0.50)", marginBottom: 32, maxWidth: 420, margin: "0 auto 32px" }}>
            Send us a message and our team will get back to you within 24 hours.
          </p>
          <a href="mailto:nexongreenltd@gmail.com" className="ng-btn-primary" style={{ fontSize: 14 }}>
            Email Us Directly
          </a>
        </div>
      </section>

    </Layouts>
  );
};

export default Faq;
