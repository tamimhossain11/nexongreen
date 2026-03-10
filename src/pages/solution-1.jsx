import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const Solution1 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solutions"} pageTitle={"For Businesses"} />

      <section className="mil-p-120-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Enterprise Digital Solutions</span>
              <h2 className="mil-mb-30">Grow Your Business with <span className="mil-accent">Smart Technology</span></h2>
              <p className="mil-mb-30">
                NexonGreen helps established businesses modernize their operations, improve customer experience, and scale faster through targeted digital solutions — from custom web platforms to IoT-powered automation systems.
              </p>
              <Link href="/contact" className="mil-button mil-border"><span>Talk to Our Team</span></Link>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Business Solutions" style={{ width: "100%", height: 380, objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Business Solutions</span>
            <h2 className="mil-mb-30">What We Offer for Businesses</h2>
          </div>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", s: "mil-circle", t: "Business Website & E-Commerce", d: "Professional websites and online stores that represent your brand and generate revenue around the clock." },
              { n: "02", s: "mil-lines", t: "Custom Software Development", d: "Tailored software solutions built around your specific workflows, replacing manual processes with efficient systems." },
              { n: "03", s: "", t: "IoT & Automation", d: "Smart systems that automate repetitive tasks, monitor operations in real time, and reduce human error." },
              { n: "04", s: "", t: "Digital Marketing & SEO", d: "Targeted campaigns, social media management, and SEO strategies that bring in qualified leads consistently." },
              { n: "05", s: "mil-circle", t: "IT Consultancy", d: "Strategic technology advice to help you choose the right tools, platforms, and systems for your business goals." },
              { n: "06", s: "mil-lines", t: "Brand & Video Production", d: "Motion graphics, promotional videos, and brand content that communicate your value proposition powerfully." },
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
          <Link href="/contact" className="mil-button mil-border mil-mb-30"><span>Discuss Your Business Needs</span></Link>
        </div>
      </section>

      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "5%" }} />
        <div className="container mil-text-center">
          <h2 className="mil-light mil-mb-30">Ready to Take Your Business Digital?</h2>
          <p className="mil-light-soft mil-mb-60">NexonGreen delivers end-to-end digital solutions tailored to your business size, industry, and goals.</p>
          <Link href="/contact" className="mil-button mil-border mil-light mil-mb-30"><span>Get Started Today</span></Link>
        </div>
      </section>
    </Layouts>
  );
};
export default Solution1;
