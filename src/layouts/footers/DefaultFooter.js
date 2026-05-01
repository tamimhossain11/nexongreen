import Link from "next/link";

const SERVICES_LINKS = [
  { label: "IoT Solutions", href: "/service-1" },
  { label: "Mobile App Development", href: "/service-2" },
  { label: "Website Design & WordPress", href: "/service-3" },
  { label: "Digital Forensics", href: "/service-4" },
  { label: "Personal Portfolio", href: "/service-1" },
  { label: "Artificial Intelligence", href: "/service-1" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: "f", label: "Facebook", href: "#." },
  { icon: "in", label: "LinkedIn", href: "#." },
  { icon: "tw", label: "Twitter", href: "#." },
  { icon: "yt", label: "YouTube", href: "#." },
  { icon: "ig", label: "Instagram", href: "#." },
];

const DefaultFooter = () => {
  return (
    <footer className="ng-footer">
      <div className="ng-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.3fr", gap: 48 }}>

          {/* Brand column */}
          <div>
            <div className="ng-footer__logo">
              <img src="/logo-trans.png" alt="NexonGreen" style={{ width: 110, height: "auto" }} />
            </div>
            <p className="ng-footer__desc">
              NexonGreen is a next-generation IT solutions provider — delivering IoT, mobile apps, web design, AI systems, and digital forensics services to businesses and individuals worldwide.
            </p>
            <div className="ng-footer__socials">
              {SOCIAL_LINKS.map((s, i) => (
                <a key={i} href={s.href} className="ng-footer__social-btn" aria-label={s.label}
                   style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, letterSpacing: "0.5px" }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
              <span style={{ color: "var(--accent)", marginRight: 6 }}>●</span>
              Available for new projects
            </div>
          </div>

          {/* Services column */}
          <div>
            <div className="ng-footer__col-title">Services</div>
            <ul className="ng-footer__links">
              {SERVICES_LINKS.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="ng-footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <div className="ng-footer__col-title">Company</div>
            <ul className="ng-footer__links">
              {COMPANY_LINKS.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="ng-footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <div className="ng-footer__col-title">Stay Updated</div>
            <div className="ng-footer__newsletter">
              <div className="ng-footer__newsletter-title">
                Join the NexonGreen newsletter
              </div>
              <p className="ng-footer__newsletter-desc">
                Get the latest IT insights, project showcases, and service updates delivered to your inbox.
              </p>
              <div className="ng-footer__newsletter-form" style={{ flexDirection: "column", gap: 10 }}>
                <input
                  className="ng-footer__newsletter-input"
                  type="email"
                  placeholder="your@email.com"
                />
                <button className="ng-footer__newsletter-btn" style={{ width: "100%" }}>
                  Subscribe →
                </button>
              </div>
            </div>

            {/* Contact quick-info */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:nexongreenltd@gmail.com" style={{
                fontFamily: "var(--font-2)", fontSize: 13,
                color: "rgba(255,255,255,0.45)", textDecoration: "none",
                display: "flex", alignItems: "center", gap: 8,
                transition: "color 0.2s ease"
              }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
              >
                ✉ nexongreenltd@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="ng-footer__bottom">
          <p className="ng-footer__copyright">
            © {new Date().getFullYear()} NexonGreen. All Rights Reserved.
          </p>
          <div className="ng-footer__legal">
            <a href="#." className="ng-footer__legal-link">Terms & Conditions</a>
            <a href="#." className="ng-footer__legal-link">Privacy Policy</a>
            <a href="#." className="ng-footer__legal-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
