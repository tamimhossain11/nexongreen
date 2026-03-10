import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const Solution2 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solutions"} pageTitle={"For Startups"} />

      <section className="mil-p-120-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Startup Technology Partner</span>
              <h2 className="mil-mb-30">Launch Fast, <span className="mil-accent">Build Smart</span></h2>
              <p className="mil-mb-30">
                NexonGreen is the ideal technology partner for startups. We help early-stage companies build their MVP, establish their digital presence, and create systems that scale as they grow — all within startup-friendly budgets and timelines.
              </p>
              <Link href="/contact" className="mil-button mil-border"><span>Let us Help You Launch</span></Link>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Startup Solutions" style={{ width: "100%", height: 380, objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Startup Solutions</span>
            <h2 className="mil-mb-30">What We Offer for Startups</h2>
          </div>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", s: "mil-circle", t: "MVP Development", d: "We build your Minimum Viable Product quickly and efficiently so you can validate your idea with real users." },
              { n: "02", s: "mil-lines", t: "Landing Page & Branding", d: "A professional brand identity and high-converting landing page to attract your first customers and investors." },
              { n: "03", s: "", t: "Mobile App Development", d: "Cross-platform mobile apps built to launch fast and iterate based on user feedback and growth data." },
              { n: "04", s: "", t: "Digital Marketing", d: "Growth marketing strategies including social media, SEO, and performance ads to build your early user base." },
              { n: "05", s: "mil-circle", t: "SaaS Product Development", d: "From concept to cloud-hosted SaaS product — we architect, build, and deploy your software platform." },
              { n: "06", s: "mil-lines", t: "Tech Consulting", d: "Strategic technology guidance to help founders make the right architectural and stack decisions early on." },
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
          <Link href="/contact" className="mil-button mil-border mil-mb-30"><span>Talk to Us About Your Startup</span></Link>
        </div>
      </section>

      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "5%" }} />
        <div className="container mil-text-center">
          <h2 className="mil-light mil-mb-30">Have a Startup Idea? We Can Build It.</h2>
          <p className="mil-light-soft mil-mb-60">NexonGreen works with founders at every stage — from idea validation to product launch and growth.</p>
          <Link href="/contact" className="mil-button mil-border mil-light mil-mb-30"><span>Start the Conversation</span></Link>
        </div>
      </section>
    </Layouts>
  );
};
export default Solution2;
