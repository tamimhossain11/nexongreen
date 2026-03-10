import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const Service2 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Services"} pageTitle={"Mobile App Development"} />

      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Cross-Platform Development</span>
              <h2 className="mil-mb-30">Apps Built to <span className="mil-accent">Perform & Scale</span></h2>
              <p className="mil-mb-30">
                NexonGreen builds high-performance mobile applications for Android and iOS. Whether you need a business app, a customer-facing platform, or a custom tool, we deliver polished, fast, and scalable mobile experiences that users love.
              </p>
              <Link href="/contact" className="mil-button mil-border"><span>Discuss Your App Idea</span></Link>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" alt="Mobile App Development" style={{ width: "100%", height: 380, objectFit: "cover" }} />
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
            <h2 className="mil-mb-30">Our Mobile Development Services</h2>
            <p className="mil-dark">From idea to app store — we handle every stage of your mobile product.</p>
          </div>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", s: "mil-circle", t: "Android App Development", d: "Native Android applications built for smooth performance across all Android devices and versions." },
              { n: "02", s: "mil-lines", t: "iOS App Development", d: "Elegant and performant iOS apps optimized for iPhone and iPad with great user experience." },
              { n: "03", s: "", t: "Cross-Platform Apps", d: "Build once, run everywhere using React Native or Flutter — cost-effective and high quality." },
              { n: "04", s: "", t: "UI/UX Design for Mobile", d: "Intuitive, user-centered interfaces designed with modern principles to keep users engaged." },
              { n: "05", s: "mil-circle", t: "API & Backend Integration", d: "We connect your app to REST APIs, Firebase, databases, and third-party services seamlessly." },
              { n: "06", s: "mil-lines", t: "App Maintenance & Updates", d: "Ongoing support, bug fixes, and feature updates to keep your app current and performing well." },
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
          <Link href="/contact" className="mil-button mil-border mil-mb-30"><span>Tell Us About Your App</span></Link>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-services mil-p-120-90">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Process</span>
          <h2 className="mil-mb-90">How We Build Your App</h2>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", icon: "img/icons/md/1.svg", t: "Discovery & Planning", d: "We map out your app goals, target users, and core features before writing a single line of code." },
              { n: "02", icon: "img/icons/md/2.svg", t: "UI/UX Prototyping", d: "Interactive wireframes and design mockups reviewed and approved before development begins." },
              { n: "03", icon: "img/icons/md/3.svg", t: "Development Sprints", d: "Agile cycles with regular demos so you see progress and provide feedback throughout." },
              { n: "04", icon: "img/icons/md/4.svg", t: "Testing & QA", d: "Thorough testing across devices and OS versions to ensure stability, performance, and security." },
              { n: "05", icon: "img/icons/md/5.svg", t: "App Store Launch", d: "We handle submission to Google Play and Apple App Store, including all compliance requirements." },
              { n: "06", icon: "img/icons/md/6.svg", t: "Post-Launch Support", d: "Ongoing monitoring, performance optimization, and feature additions as your user base grows." },
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
          <h2 className="mil-light mil-mb-30">Have an App Idea? Let us Build It.</h2>
          <p className="mil-light-soft mil-mb-60">NexonGreen takes your concept from sketch to a fully functioning product on the app stores.</p>
          <Link href="/contact" className="mil-button mil-border mil-light mil-mb-30"><span>Start Your Mobile Project</span></Link>
        </div>
      </section>
    </Layouts>
  );
};
export default Service2;
