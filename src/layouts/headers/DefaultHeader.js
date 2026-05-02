import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const DefaultHeader = ({ transparent, headerTop, extarClass }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`mil-top-position mil-fixed ${extarClass || ""}`}
      style={{ width: "100%", zIndex: 1000 }}
    >
      {headerTop && (
        <div className="mil-additional-panel">
          <div className="container-fluid">
            <ul className="mil-ap-list">
              <li>Phone: <span className="mil-accent">+880</span> 01XXXXXXXXX</li>
              <li>nexongreenltd@gmail.com</li>
            </ul>
          </div>
        </div>
      )}

      <div
        style={{
          transition: "all 0.4s cubic-bezier(0,0,0.3642,1)",
          background: scrolled ? "rgba(7,10,14,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(91,174,47,0.10)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.35)" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 72, maxWidth: 1320, margin: "0 auto" }}>

          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/logo-trans.png" alt="NexonGreen" style={{ width: 110, height: "auto", display: "block" }} />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="ng-desktop-nav">
            <NavItem label="Enterprise" href="/about">
              <DropdownItem href="/about" label="About Us" />
              <DropdownItem href="/team" label="Our Team" />
              <DropdownItem href="/faq" label="FAQ" />
            </NavItem>

            <NavItem label="Services" href="/service-1">
              <DropdownItem href="/service-1" label="IoT Solutions" />
              <DropdownItem href="/service-2" label="Mobile App Development" />
              <DropdownItem href="/service-3" label="Website Design & WordPress" />
              <DropdownItem href="/service-4" label="Digital Forensics" />
            </NavItem>

            <NavItem label="Products" href="/solution-1">
              <DropdownItem href="/solution-1" label="Staffly — HRMS SaaS" />
              <DropdownItem href="/solution-2" label="For Startups" />
              <DropdownItem href="/solution-3" label="For Individuals" />
            </NavItem>

            <NavLink href="/blog">Blog</NavLink>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/contact" className="ng-btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
              Contact Us
            </Link>

            <button
              onClick={() => setToggle(!toggle)}
              className="ng-hamburger"
              aria-label="Toggle menu"
              style={{ display: "none", flexDirection: "column", gap: 5, background: "transparent", border: "none", cursor: "pointer", padding: 4 }}
            >
              <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s ease", transform: toggle ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s ease", opacity: toggle ? 0 : 1 }} />
              <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s ease", transform: toggle ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          </div>
        </div>

        {toggle && (
          <div style={{ background: "rgba(7,10,14,0.97)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 24px 28px" }}>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Team", href: "/team" },
              { label: "Services", href: "/service-1" },
              { label: "Products", href: "/solution-1" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item, i) => (
              <Link key={i} href={item.href}
                style={{ display: "block", padding: "12px 0", fontFamily: "var(--font-1)", fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.8)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                onClick={() => setToggle(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .ng-desktop-nav { display: none !important; }
          .ng-hamburger { display: flex !important; }
        }
      `}</style>
    </div>
  );
};

const NavItem = ({ label, href, children }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div style={{ position: "relative" }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link href={href} style={{
        display: "flex", alignItems: "center", gap: 5,
        fontFamily: "var(--font-1)", fontSize: 14, fontWeight: 600,
        color: open ? "#5BAE2F" : "rgba(255,255,255,0.85)",
        textDecoration: "none", padding: "8px 14px", borderRadius: 6,
        transition: "color 0.2s ease", whiteSpace: "nowrap",
      }}>
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.5, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0,
          minWidth: 230,
          background: "rgba(10,14,20,0.98)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(91,174,47,0.15)",
          borderRadius: 10, overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          zIndex: 9999,
          paddingTop: 6, paddingBottom: 6,
        }}>
          {/* invisible bridge to prevent gap mouseLeave */}
          <div style={{ position: "absolute", top: -10, left: 0, right: 0, height: 12 }} />
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ href, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: hovered ? "11px 18px 11px 24px" : "11px 18px",
        fontFamily: "var(--font-2)", fontSize: 13.5, fontWeight: 500,
        color: hovered ? "#5BAE2F" : "rgba(255,255,255,0.70)",
        textDecoration: "none",
        transition: "all 0.18s ease",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: hovered ? "rgba(91,174,47,0.06)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: hovered ? "#5BAE2F" : "rgba(255,255,255,0.2)", flexShrink: 0, transition: "background 0.18s" }} />
      {label}
    </Link>
  );
};

const NavLink = ({ href, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}
      style={{ fontFamily: "var(--font-1)", fontSize: 14, fontWeight: 600, color: hovered ? "#5BAE2F" : "rgba(255,255,255,0.85)", textDecoration: "none", padding: "8px 14px", borderRadius: 6, transition: "color 0.2s ease" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
};

export default DefaultHeader;
