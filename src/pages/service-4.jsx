import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const Service4 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Services"} pageTitle={"Digital Forensics"} />

      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Forensic Technology Services</span>
              <h2 className="mil-mb-30">Uncover the Truth with <span className="mil-accent">Digital Forensics</span></h2>
              <p className="mil-mb-30">
                NexonGreen provides professional digital forensics services using industry-standard tools including FTK (Forensic Toolkit). We help organizations, legal teams, and individuals investigate digital incidents, recover evidence, and produce court-ready forensic reports.
              </p>
              <Link href="/contact" className="mil-button mil-border"><span>Request a Consultation</span></Link>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Digital Forensics" style={{ width: "100%", height: 380, objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Investigate</span>
            <h2 className="mil-mb-30">Our Digital Forensics Services</h2>
            <p className="mil-dark">Professional investigations using FTK and certified forensic methodologies.</p>
          </div>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", s: "mil-circle", t: "Disk & Storage Forensics", d: "Deep analysis of hard drives, SSDs, USB devices, and storage media using FTK Imager and FTK Forensic Toolkit." },
              { n: "02", s: "mil-lines", t: "Email & Communication Analysis", d: "Recovery and analysis of email correspondence, chat logs, and communication records for legal or compliance use." },
              { n: "03", s: "", t: "Data Recovery", d: "Recovery of deleted, corrupted, or overwritten files from digital storage devices for evidence or business continuity." },
              { n: "04", s: "", t: "Incident Response", d: "Rapid response to cyberattacks, data breaches, and unauthorized access incidents — preserving evidence integrity." },
              { n: "05", s: "mil-circle", t: "Mobile Device Forensics", d: "Extraction and analysis of data from smartphones including deleted messages, call logs, and app data." },
              { n: "06", s: "mil-lines", t: "Forensic Reporting", d: "Detailed, court-admissible forensic reports documenting findings, methodology, and chain of custody." },
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
          <Link href="/contact" className="mil-button mil-border mil-mb-30"><span>Request Forensic Services</span></Link>
        </div>
      </section>

      <div className="container"><div className="mil-divider" /></div>

      <section className="mil-services mil-p-120-90">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Methodology</span>
          <h2 className="mil-mb-90">How We Conduct Forensic Investigations</h2>
          <div className="row mil-mb-30-adapt">
            {[
              { n: "01", icon: "img/icons/md/1.svg", t: "Case Intake & Scoping", d: "We understand the context, scope, and objectives of the investigation before any acquisition begins." },
              { n: "02", icon: "img/icons/md/2.svg", t: "Evidence Acquisition", d: "Forensically sound acquisition of digital evidence using write blockers and verified imaging tools." },
              { n: "03", icon: "img/icons/md/3.svg", t: "Analysis with FTK", d: "Comprehensive analysis using Forensic Toolkit (FTK) to index, search, and examine all digital artifacts." },
              { n: "04", icon: "img/icons/md/4.svg", t: "Timeline Reconstruction", d: "Rebuilding a chronological picture of events using file system metadata, logs, and digital footprints." },
              { n: "05", icon: "img/icons/md/5.svg", t: "Finding Verification", d: "All findings are independently verified to ensure accuracy and withstand legal scrutiny." },
              { n: "06", icon: "img/icons/md/6.svg", t: "Report & Testimony", d: "Clear written reports and expert consultation prepared for lawyers, auditors, or court proceedings." },
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
          <h2 className="mil-light mil-mb-30">Need a Digital Forensics Expert?</h2>
          <p className="mil-light-soft mil-mb-60">NexonGreen delivers professional, confidential forensic investigations backed by industry-standard tools.</p>
          <Link href="/contact" className="mil-button mil-border mil-light mil-mb-30"><span>Contact Our Forensics Team</span></Link>
        </div>
      </section>
    </Layouts>
  );
};
export default Service4;
