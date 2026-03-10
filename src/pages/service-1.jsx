import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const Service1 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Services"} pageTitle={"IoT Solutions"} />

      {/* intro */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Smart Connected Technology</span>
              <h2 className="mil-mb-30">
                Build Smarter Systems with <span className="mil-accent">IoT</span>
              </h2>
              <p className="mil-mb-30">
                NexonGreen designs and develops Internet of Things (IoT) solutions that connect devices, automate processes, and deliver real-time data insights. From smart sensors to full-scale automation systems, we help businesses harness the power of connected technology.
              </p>
              <Link href="/contact" className="mil-button mil-border">
                <span>Get a Free Consultation</span>
              </Link>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="IoT Solutions"
                  style={{ width: "100%", height: 380, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      {/* what we offer */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Build</span>
            <h2 className="mil-mb-30">Our IoT Development Services</h2>
            <p className="mil-dark">End-to-end IoT solutions from hardware integration to cloud dashboards.</p>
          </div>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", style: "mil-circle", title: "Device & Sensor Integration", desc: "We connect physical sensors and devices to software platforms, enabling real-time data collection from any environment." },
              { n: "02", style: "mil-lines", title: "IoT Dashboard Development", desc: "Custom web-based dashboards that visualize live sensor data, analytics, and system status for smarter decision-making." },
              { n: "03", style: "", title: "Automation & Control Systems", desc: "Build automated workflows triggered by sensor events — reducing manual work and improving operational efficiency." },
              { n: "04", style: "", title: "Arduino & Microcontroller Programming", desc: "We develop firmware for Arduino, ESP32, Raspberry Pi, and other microcontrollers for specialized hardware use cases." },
              { n: "05", style: "mil-circle", title: "Cloud & API Integration", desc: "Connect your IoT devices to cloud platforms like AWS IoT, Firebase, or custom APIs to store and process data at scale." },
              { n: "06", style: "mil-lines", title: "Robotics & Embedded Systems", desc: "Advanced embedded solutions for robotics, smart machines, and industrial automation built with precision and reliability." },
            ].map((item, i) => (
              <div key={i} className="col-xl-4">
                <div className="mil-mb-60">
                  <div className={`mil-number-icon ${item.style} mil-mb-30`}><span>{item.n}</span></div>
                  <h4 className="mil-mb-15">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Link href="/contact" className="mil-button mil-border mil-mb-30">
                <span>Tell Us About Your Project</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      {/* approach */}
      <section className="mil-services mil-p-120-90">
        <div className="mil-deco" style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Process</span>
          <h2 className="mil-mb-90">How We Deliver IoT Solutions</h2>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", icon: "img/icons/md/1.svg", title: "Requirement Analysis", desc: "We understand your environment, goals, and constraints before designing any system." },
              { n: "02", icon: "img/icons/md/2.svg", title: "Hardware Selection", desc: "We choose the right sensors, controllers, and communication protocols for your use case." },
              { n: "03", icon: "img/icons/md/3.svg", title: "Firmware Development", desc: "Custom code is written and tested on hardware to ensure reliable operation." },
              { n: "04", icon: "img/icons/md/4.svg", title: "Cloud & Backend Setup", desc: "We set up the data pipeline — from device to cloud — with secure, scalable infrastructure." },
              { n: "05", icon: "img/icons/md/5.svg", title: "Dashboard & Interface", desc: "A user-friendly interface is built so you can monitor, control, and analyze your system." },
              { n: "06", icon: "img/icons/md/6.svg", title: "Deployment & Support", desc: "Full deployment and ongoing technical support to keep your IoT system running smoothly." },
            ].map((item, i) => (
              <div key={i} className="col-lg-6 col-xl-6">
                <div className="mil-service-item mil-without-lines mil-mb-60">
                  <div className="mil-service-icon">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src={item.icon} alt="icon" />
                    </div>
                  </div>
                  <div className="mil-service-text">
                    <h5 className="mil-mb-30"><span className="mil-accent">{item.n}</span> {item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "5%" }} />
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <h2 className="mil-light mil-mb-30">Ready to Connect Your World?</h2>
            <p className="mil-light-soft">Let NexonGreen design a smart IoT system tailored to your needs.</p>
          </div>
          <div className="mil-text-center">
            <Link href="/contact" className="mil-button mil-border mil-light mil-mb-30">
              <span>Start Your IoT Project</span>
            </Link>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Service1;
