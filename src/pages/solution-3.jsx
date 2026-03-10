import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const Solution3 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solutions"} pageTitle={"For Individuals"} />

      <section className="mil-p-120-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Personal Digital Services</span>
              <h2 className="mil-mb-30">Stand Out with a <span className="mil-accent">Professional Digital Presence</span></h2>
              <p className="mil-mb-30">
                Whether you are a freelancer, creative professional, researcher, or student, NexonGreen helps individuals build impressive digital identities — from personal portfolio websites to professional tools and forensic investigation support.
              </p>
              <Link href="/contact" className="mil-button mil-border"><span>Get a Personalized Quote</span></Link>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" alt="Individual Solutions" style={{ width: "100%", height: 380, objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Individual Solutions</span>
            <h2 className="mil-mb-30">What We Offer for Individuals</h2>
          </div>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", s: "mil-circle", t: "Personal Portfolio Website", d: "A stunning personal website that showcases your work, skills, and achievements to employers or clients." },
              { n: "02", s: "mil-lines", t: "CV & Resume Website", d: "Turn your CV into an interactive online resume that leaves a lasting impression in job applications." },
              { n: "03", s: "", t: "Freelancer Platform Setup", d: "Full setup of your freelance presence — website, branding, and profile pages on key platforms." },
              { n: "04", s: "", t: "Personal Branding & Design", d: "Logo, color palette, and brand guidelines tailored for individuals building their personal brand online." },
              { n: "05", s: "mil-circle", t: "Digital Forensics Support", d: "Personal digital forensics — data recovery, device investigation, and evidence analysis for personal or legal needs." },
              { n: "06", s: "mil-lines", t: "IT Consultancy", d: "One-on-one technology consulting to help you choose the right tools, apps, and systems for your goals." },
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
          <Link href="/contact" className="mil-button mil-border mil-mb-30"><span>Tell Us What You Need</span></Link>
        </div>
      </section>

      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "5%" }} />
        <div className="container mil-text-center">
          <h2 className="mil-light mil-mb-30">Ready to Build Your Digital Identity?</h2>
          <p className="mil-light-soft mil-mb-60">NexonGreen helps individuals create a powerful online presence that opens doors to new opportunities.</p>
          <Link href="/contact" className="mil-button mil-border mil-light mil-mb-30"><span>Get Started</span></Link>
        </div>
      </section>
    </Layouts>
  );
};
export default Solution3;
