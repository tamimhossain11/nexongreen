import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const team = [
  {
    name: "Alif Zahan Prachurja",
    role: "Chairman",
    image: "/team/prachurja.jpg",
    bio: "Alif Zahan Prachurja is the Chairman of Nexon Green, providing strategic guidance and overseeing key business initiatives. Currently pursuing a degree in Marketing, he combines business knowledge with leadership and entrepreneurial vision to help Nexon Green grow as a globally recognized digital solutions company from Bangladesh.",
    skills: [
      "Strategic Leadership",
      "Business Development",
      "Marketing Strategy",
      "Team Management",
      "Entrepreneurship",
      "Client Relationship Management",
      "Strategic Planning",
      "Innovation & Problem Solving",
    ],
  },
  {
    name: "Sikder Atif Abrar",
    role: "CEO & Founder",
    image: "/team/atif.jpeg",
    bio: "Atif Abrar is the Founder and CEO of Nexon Green. Currently pursuing a BSc in Computer Science and Engineering, he combines technical knowledge with leadership and entrepreneurial vision. He leads the company's strategic direction, working closely with development and creative teams to deliver web development, software solutions, digital marketing, and multimedia production services.",
    skills: [
      "Strategic Leadership",
      "Java & Python",
      "HTML & CSS",
      "Web Development",
      "AI Tools Utilization",
      "Workflow Automation",
      "IT Consultancy",
      "Project Coordination",
    ],
  },
  {
    name: "Tamim Hossain",
    role: "CTO & Founder",
    image: "/team/tamim.jpeg",
    bio: "Tamim Hossain is a Software Engineer and CTO at Nexon Green with a BSc in Software Engineering from the University of Roehampton. He is also CTO of Dreams of Bangladesh (robotics) and a Product Engineer at BIMS Philippines. He specializes in AI, IoT, backend systems, and automation engineering — building scalable, future-ready digital solutions.",
    skills: [
      "Full-Stack Web Development",
      "Python & JavaScript",
      "AI Integration",
      "IoT Development",
      "Backend System Architecture",
      "Robotics Programming",
      "Workflow Automation",
      "API Development & Integration",
    ],
  },
  {
    name: "Tasfiqul Islam",
    role: "Chief Marketing Officer (CMO)",
    image: "/team/Tasfiq.jpg",
    bio: "Tasfiqul Islam is the CMO at Nexon Green, leading the company's marketing vision, creative strategy, and brand growth. He specializes in motion graphics, SaaS promotional videos, and professional video editing — creating high-impact content that attracts audiences and converts viewers into customers. He blends creativity, technology, and marketing strategy to drive business growth.",
    skills: [
      "Digital Marketing Strategy",
      "Brand Development",
      "Motion Graphics Design",
      "SaaS Promo Videos",
      "Video Editing & Post-Production",
      "Visual Storytelling",
      "Social Media Marketing",
      "Campaign Planning",
    ],
  },
];

const Team = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Team"} pageTitle={"Leadership Team"} />

      {/* intro */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center justify-content-between mil-mb-90">
            <div className="col-xl-5">
              <span className="mil-suptitle mil-accent mil-mb-30">Our People</span>
              <h2 className="mil-mb-30">
                The Minds Behind <span className="mil-accent">NexonGreen</span>
              </h2>
            </div>
            <div className="col-xl-6">
              <p className="mil-mb-0">
                Our leadership team brings together expertise in software engineering, marketing, business strategy, and creative design. Together, we are building a digital solutions company that delivers real impact for businesses across Bangladesh and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* team member cards */}
      {team.map((member, i) => (
        <section
          key={i}
          className={`mil-p-120-60 ${i % 2 !== 0 ? "mil-soft-bg" : ""}`}
        >
          <div className="container">
            <div className={`row align-items-center ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}>
              {/* photo */}
              <div className="col-lg-4 mil-mb-60">
                <div
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                    aspectRatio: "3/4",
                    maxWidth: 340,
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* content */}
              <div className={`col-lg-8 ${i % 2 !== 0 ? "pe-lg-5" : "ps-lg-5"} mil-mb-60`}>
                <span className="mil-suptitle mil-accent mil-mb-20">{member.role}</span>
                <h2 className="mil-mb-30">{member.name}</h2>
                <p className="mil-mb-40">{member.bio}</p>

                <h6 className="mil-mb-20">Core Skills</h6>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {member.skills.map((skill, j) => (
                    <span
                      key={j}
                      style={{
                        background: "var(--accent, #6fcf3a)",
                        color: "#fff",
                        padding: "6px 16px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* values */}
      <section className="mil-icon-boxes mil-p-120-60">
        <div className="container">
          <div className="row align-items-center justify-content-between mil-mb-90">
            <div className="col-xl-5">
              <h2>
                Values that <span className="mil-accent">Lead Us</span>
              </h2>
            </div>
            <div className="col-xl-6">
              <p>
                Every member of our team is united by a shared set of values that guide how we work, build, and grow together.
              </p>
            </div>
          </div>
          <div className="row">
            {[
              { n: "01", title: "Innovation", desc: "We constantly explore new technologies and creative ideas to build smarter solutions for our clients." },
              { n: "02", title: "Transparency", desc: "We communicate openly with clients and within our team, building trust at every step of a project." },
              { n: "03", title: "Excellence", desc: "Quality is non-negotiable. We deliver polished, high-impact results that make a real difference." },
              { n: "04", title: "Impact", desc: "We measure success by the real-world results our work creates for businesses and communities." },
            ].map((v, i) => (
              <div key={i} className="col-md-6 col-xl-3">
                <div className="mil-icon-box mil-center mil-mb-60">
                  <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/5.svg" alt="icon" />
                  </div>
                  <h5 className="mil-mb-20">
                    <span className="mil-accent">{v.n}.</span>&nbsp;{v.title}
                  </h5>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="call-to-action mil-gradient-bg mil-p-120-0">
        <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "15%" }} />
        <div className="container mil-text-center">
          <div className="mil-cta-frame">
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
              <img src="img/icons/md/6l.svg" alt="icon" />
            </div>
            <p className="mil-light mil-mb-30">Work With Us</p>
            <h2 className="mil-light mil-mb-30">
              Ready to Build Something <span className="mil-accent">Remarkable?</span>
            </h2>
            <p className="mil-light-soft mil-mb-60">
              Our team is ready to turn your ideas into powerful digital solutions. <br />
              Let's start a conversation today.
            </p>
            <Link href="/contact" className="mil-button mil-border mil-light">
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Team;
