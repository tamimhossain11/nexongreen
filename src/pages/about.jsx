import ContactForm from "../components/ContactForm";
import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About Us"} pageTitle={"About NexonGreen"} />

      {/* intro statement */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                We are a next-generation IT company{" "}
                <span className="mil-accent">built to power your digital future</span>{" "}
                — from IoT and mobile apps to web design, portfolio creation, and digital forensics.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="mil-adaptive-right">
                <Link
                  href="/contact"
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Talk To an Expert</span>
                </Link>
                <Link href="/portfolio" className="mil-button mil-border mil-mb-30">
                  <span>View Our Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* intro statement end */}

      {/* who we are */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "35%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop"
                    alt="NexonGreen Team"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Who We Are
              </span>
              <h2 className="mil-mb-50">
                We Specialize in <br />
                <span className="mil-accent">Transforming Your Vision</span> Into
                Real Digital Products
              </h2>
              <p className="mil-mb-50">
                NexonGreen is an IT solutions company based in Purbachal, Dhaka, Bangladesh. We were founded with a single purpose: to help businesses and individuals harness the full power of modern technology. From startups that need their first website to established organizations seeking IoT integration or digital forensics support — we are the team that gets it done.
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">IoT system design and integration</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Mobile app development (Android & iOS)</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Website design & WordPress development</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Personal portfolio creation</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Digital forensics support with FTK</span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5">
                  <Link href="team" className="mil-post-sm mil-mb-60">
                    <div className="mil-cover-frame">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop"
                        alt="NexonGreen Team"
                      />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">NexonGreen Team</h4>
                      <p className="mil-text-sm">Purbachal, Dhaka, Bangladesh</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* who we are end */}

      {/* counters */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "25%" }} />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mil-h1">
                3<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Years of Experience</h6>
              <h2 className="mil-mb-60">
                We Deliver IT Services That Drive Real Results
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Powering businesses with{" "}
                <span className="mil-accent">next-generation technology</span> — built by a passionate team committed to{" "}
                <span className="mil-accent">quality and innovation</span>
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">20+</span>&nbsp; Projects Delivered
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">3+</span>&nbsp; Years Client Engagement
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">10+</span>&nbsp; Mobile Apps Built
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">15+</span>&nbsp; Websites Launched
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}

      <div className="container">
        <div className="mil-divider" />
      </div>

      {/* clients strip */}
      <div className="mil-partners mil-p-120-90">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#."><img src="img/partners/1.png" alt="partner" /></a>
            <a href="#."><img src="img/partners/2.png" alt="partner" /></a>
            <a href="#."><img src="img/partners/3.png" alt="partner" /></a>
            <a href="#."><img src="img/partners/4.png" alt="partner" /></a>
            <a href="#."><img src="img/partners/5.png" alt="partner" /></a>
            <a href="#."><img src="img/partners/6.png" alt="partner" /></a>
          </div>
        </div>
      </div>
      {/* clients strip end */}

      {/* mission */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop"
                    alt="Our Mission"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Our Purpose
              </span>
              <h2 className="mil-mb-50">Our Mission</h2>
              <p className="mil-mb-50">
                Our mission is to make powerful technology accessible to everyone — from individual professionals who need a standout portfolio, to companies that need complex IoT systems or forensic investigation support. We believe that great technology, built thoughtfully, changes outcomes. We are committed to delivering solutions that are reliable, scalable, and truly impactful for every client we work with.
              </p>
              <ul className="mil-simple-list">
                <li>Deliver technology that creates measurable impact.</li>
                <li>Build with quality, integrity, and attention to detail.</li>
                <li>Support clients throughout every stage of their journey.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* mission end */}

      {/* why work with us */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover NexonGreen
          </span>
          <h2 className="mil-mb-120">Why Work With Us</h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Full-Stack Expertise</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  We cover the full technology stack — from hardware IoT integration and embedded systems to front-end web interfaces and mobile applications. You get a single team that understands the complete picture, not just one piece of it.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Quality Without Compromise</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Every project we deliver goes through thorough testing, performance checks, and quality review before it reaches you. We don't cut corners — because your reputation depends on what we build, and so does ours.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Flexible & Client-Centered</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  We adapt to your workflow, your budget, and your timeline. Whether you need a quick landing page or a long-term technology partner, we structure our engagement around what works best for you — not for us.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Fast Turnaround</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  We move fast without sacrificing quality. Our agile approach means you see progress quickly, feedback is acted on immediately, and your product reaches completion on schedule — or ahead of it.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Innovation-Driven</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  We stay at the forefront of technology — from AI-integrated applications to autonomous robotics support. Our team continuously learns and evolves so that what we build for you is always ahead of the curve, not behind it.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      {/* why work with us end */}

      {/* values */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Our Culture
          </span>
          <h2 className="mil-mb-120">
            We Live by <span className="mil-accent">Powerful</span> Values
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Are Passionate</h4>
                  <p className="mil-box-text">
                    Technology is not just our profession — it's our passion. We genuinely care about building things that work beautifully and solve real problems for the people who use them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Go Deep</h4>
                  <p className="mil-box-text">
                    We don't skim the surface. Whether it's understanding your business requirements or debugging a complex system, we dig deep until we fully understand the problem and the best way to solve it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/3.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Take Ownership</h4>
                  <p className="mil-box-text">
                    When we commit to a project, we treat it like it's our own. Your success is our success. We take full responsibility for what we deliver and stand behind every line of code we write.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Value Transparency</h4>
                  <p className="mil-box-text">
                    We believe in open, honest communication at every step. You'll always know where your project stands, what we're working on, and what to expect — no surprises, no runarounds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Believe in Growth</h4>
                  <p className="mil-box-text">
                    We invest in our team's continuous learning and push ourselves to grow with every project. The technology landscape evolves fast — and so do we, ensuring our clients always get the best available solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Say "We"</h4>
                  <p className="mil-box-text">
                    No individual egos — we operate as one team. Every project is a collective effort, and every win belongs to all of us. That collaborative spirit is what makes NexonGreen's culture and output exceptional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* values end */}

      <ContactForm />
    </Layouts>
  );
};
export default About;
