import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const Service3 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Services"} pageTitle={"Website Design & WordPress"} />

      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Web Design & Development</span>
              <h2 className="mil-mb-30">Websites That <span className="mil-accent">Look Great & Convert</span></h2>
              <p className="mil-mb-30">
                NexonGreen creates stunning, responsive websites and WordPress solutions that represent your brand and drive results. From landing pages to full e-commerce stores, we build websites that are fast, beautiful, and easy to manage.
              </p>
              <Link href="/contact" className="mil-button mil-border"><span>Get a Free Quote</span></Link>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80" alt="Website Design" style={{ width: "100%", height: 380, objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Build</span>
            <h2 className="mil-mb-30">Our Web Design Services</h2>
            <p className="mil-dark">Custom websites and WordPress solutions built for speed, aesthetics, and performance.</p>
          </div>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", s: "mil-circle", t: "Custom Website Design", d: "Fully bespoke website designs tailored to your brand identity, built with clean code and modern UI principles." },
              { n: "02", s: "mil-lines", t: "WordPress Development", d: "Custom WordPress themes, plugins, and full site builds. Easy for clients to manage without technical knowledge." },
              { n: "03", s: "", t: "E-Commerce Websites", d: "WooCommerce and custom e-commerce stores with product management, payment gateways, and order tracking." },
              { n: "04", s: "", t: "Landing Pages", d: "High-converting landing pages designed to capture leads and promote products or services effectively." },
              { n: "05", s: "mil-circle", t: "Responsive & Mobile-First", d: "Every website we build is fully responsive and optimized for mobile, tablet, and desktop screens." },
              { n: "06", s: "mil-lines", t: "SEO & Performance Optimization", d: "Speed optimization, on-page SEO best practices, and Core Web Vitals improvements built into every project." },
            ].map((item, i) => (
              <div key={i} className="col-xl-4">
                <div className="mil-mb-60">
                  <div className={`mil-number-icon ${item.s} mil-mb-30`}><span>{item.n}</span></div>
                  <h4 className="mil-mb-15">{item.t}</h4>
                  <p>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="mil-button mil-border mil-mb-30"><span>Tell Us About Your Website</span></Link>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-services mil-p-120-90">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Process</span>
          <h2 className="mil-mb-90">How We Build Your Website</h2>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", icon: "img/icons/md/1.svg", t: "Discovery & Briefing", d: "We learn about your business, goals, target audience, and competitors before designing anything." },
              { n: "02", icon: "img/icons/md/2.svg", t: "Design Mockups", d: "Detailed visual mockups in your brand style — reviewed and refined before development starts." },
              { n: "03", icon: "img/icons/md/3.svg", t: "Development", d: "Clean, semantic code built on the right platform — custom code or WordPress depending on your needs." },
              { n: "04", icon: "img/icons/md/4.svg", t: "Content Integration", d: "We integrate your content, images, and media into the final design with care and attention to detail." },
              { n: "05", icon: "img/icons/md/5.svg", t: "Testing & Launch", d: "Cross-browser and device testing, performance checks, then a smooth and organized launch." },
              { n: "06", icon: "img/icons/md/6.svg", t: "Training & Handover", d: "For WordPress sites, we train you to manage your content independently after launch." },
            ].map((item, i) => (
              <div key={i} className="col-lg-6">
                <div className="mil-service-item mil-without-lines mil-mb-60">
                  <div className="mil-service-icon"><div className="mil-icon-frame mil-icon-frame-md"><img src={item.icon} alt="icon" /></div></div>
                  <div className="mil-service-text">
                    <h5 className="mil-mb-30"><span className="mil-accent">{item.n}</span> {item.t}</h5>
                    <p>{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "5%" }} />
        <div className="container mil-text-center">
          <h2 className="mil-light mil-mb-30">Ready for a Website That Works?</h2>
          <p className="mil-light-soft mil-mb-60">Let NexonGreen build a site that represents your brand and grows your business.</p>
          <Link href="/contact" className="mil-button mil-border mil-light mil-mb-30"><span>Start Your Web Project</span></Link>
        </div>
      </section>
    </Layouts>
  );
};
export default Service3;
