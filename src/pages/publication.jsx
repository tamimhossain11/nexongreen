import Layouts from "../layouts/Layouts";
import Link from "next/link";
const Publication = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm-2 mil-deep-bg">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&auto=format&fit=crop"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          alt="Web Design Blog Cover"
        />
        <div className="mil-overlay" />
      </div>
      {/* banner end */}
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <span className="mil-suptitle mil-accent mil-mb-30">
                Web Design
              </span>
              <h3 className="mil-up-font mil-mb-30">
                How Good Web Design Directly Impacts Your Business Revenue
              </h3>
              <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                <li className="mil-post-author">
                  <img src="img/faces/1.jpg" alt="Author" />
                  <span>NexonGreen Team</span>
                </li>
                <li>10 Dec. 2024</li>
                <li>6 min read</li>
              </ul>
              <div className="mil-divider mil-mb-60" />
              <p className="mil-mb-30">
                Your website is your 24/7 salesperson. It never sleeps, never takes a day off, and is always the first thing a potential client sees before they ever speak to you. Yet most businesses treat their website as an afterthought — updating it once every few years and wondering why their conversion rates are flat.
              </p>
              <p className="mil-mb-60">
                Research shows that <strong>75% of people judge a company's credibility based on its website design</strong>, and first impressions are formed in just 0.05 seconds. That's faster than a blink. Bad design doesn't just look unprofessional — it actively costs you customers, leads, and revenue every single day.
              </p>
              <h3 className="mil-mb-50">The Numbers Behind Good Design</h3>
              <p className="mil-mb-30">
                The business case for investing in quality web design is backed by hard data. A <strong>1-second delay</strong> in page load time can reduce conversions by up to 7%. That doesn't sound like much until you calculate it against your monthly traffic. For a business generating $10,000/month online, that single second of delay could be costing $8,400 per year — just from slow load time alone.
              </p>
              <p className="mil-mb-60">
                Beyond speed, <strong>38% of users</strong> will stop engaging with a website if the content or layout is unattractive. And companies with strong UX design have been shown to see conversion rate improvements of up to 400%. The math is simple: better design equals more revenue.
              </p>

              <blockquote className="mil-mb-60">
                <p className="mil-text-lg mil-mb-20">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <span className="mil-h4 mil-font-3 mil-accent">
                  - &nbsp;Steve Jobs
                </span>
              </blockquote>

              <h3 className="mil-mb-50">What Good Web Design Actually Means</h3>
              <p className="mil-mb-30">
                Good design isn't just about picking nice colors and fonts. It's about making it effortless for visitors to find what they need, trust your brand, and take action. Every element on your page should serve a purpose.
              </p>
              <p className="mil-mb-60">
                <strong>Clear navigation</strong> means users should never have to think about where to click next. If someone lands on your homepage and can't find your services within three seconds, they're gone — and they're not coming back. <strong>Fast loading times</strong> are non-negotiable, especially for mobile users on slower networks. <strong>Consistent branding</strong> — colors, typography, tone — builds recognition and trust over time. And <strong>strategic calls-to-action</strong> guide visitors toward conversion at exactly the right moment in their journey.
              </p>

              <div className="row mil-mb-30">
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop"
                    alt="Web design process"
                    className="mil-post-image"
                  />
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop"
                    alt="Mobile responsive design"
                    className="mil-post-image"
                  />
                </div>
              </div>

              <h3 className="mil-mb-50">Mobile-First Is No Longer Optional</h3>
              <p className="mil-mb-30">
                Over 60% of all web traffic now comes from mobile devices. Google's ranking algorithm prioritizes mobile-responsive websites — meaning a site that looks broken on a phone isn't just frustrating users, it's also being penalized in search results. You're losing organic traffic before anyone even visits.
              </p>
              <p className="mil-mb-60">
                At NexonGreen, every website we build starts with a mobile-first approach. We design for the smallest screen first, then scale up — ensuring the experience is seamless whether your customer is browsing on a phone during their commute or on a desktop at the office.
              </p>

              <h3 className="mil-mb-50">How NexonGreen Approaches Web Design</h3>
              <p className="mil-mb-60">
                We don't use templates and call it a day. Every website we build at NexonGreen is crafted from a deep understanding of your business goals, your target audience, and the specific actions you want visitors to take. We combine clean aesthetics with performance engineering — because a beautiful website that loads slowly is just as damaging as an ugly one that's fast. Our process includes competitor research, UX wireframing, visual design, development, performance optimization, and post-launch support. We build websites that work for you around the clock.
              </p>

              <ul className="mil-tags mil-mb-60">
                <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
                <li>
                  <a href="#.">Web Design</a>
                </li>
                <li>
                  <a href="#.">Business</a>
                </li>
                <li>
                  <a href="#.">WordPress</a>
                </li>
                <li>
                  <a href="#.">Development</a>
                </li>
              </ul>
              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-mb-30">Was this article helpful?</h5>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-15"
              >
                <span>Yes, it was helpful!</span>
              </a>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-60"
              >
                <span>I have more questions</span>
              </a>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">
                Comments - <span className="mil-accent">02</span>
              </h3>
              <ul className="mil-comments-frame">
                <li className="mil-comment">
                  <div className="mil-comment-top-panel">
                    <div className="mil-left">
                      <img src="img/faces/1.jpg" alt="user avatar" />
                      <div>
                        <h5>Mahadir Islam Wafi</h5>
                        <p className="mil-text-sm">March 5, 2026</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="mil-comment-text">
                    This is a great breakdown of why web design matters. We saw a huge difference in how people responded to our team's website after NexonGreen redesigned it. The mobile experience especially made a massive impact. Highly recommend reading this if you're on the fence about investing in your site.
                  </p>
                  <ul className="mil-sub-comments">
                    <li className="mil-comment">
                      <div className="mil-comment-top-panel">
                        <div className="mil-left">
                          <img src="img/faces/2.jpg" alt="user avatar" />
                          <div>
                            <h5>NexonGreen Team</h5>
                            <p className="mil-text-sm">March 6, 2026</p>
                          </div>
                        </div>
                        <a
                          href="#reply"
                          className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                        >
                          <span>Reply</span>
                        </a>
                      </div>
                      <p className="mil-comment-text">
                        Thank you so much, Wafi! It was a pleasure working with the Dreams of Bangladesh team. Your feedback keeps us motivated to push the quality of every project we take on.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="mil-comment">
                  <div className="mil-comment-top-panel">
                    <div className="mil-left">
                      <img src="img/faces/3.jpg" alt="user avatar" />
                      <div>
                        <h5>Imam Hossain</h5>
                        <p className="mil-text-sm">March 8, 2026</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="mil-comment-text">
                    Very informative article. After NexonGreen built our business website for Irfan Enterprise, we noticed more inquiries coming in through the contact form than ever before. Good design really does make a difference. Looking forward to more articles like this.
                  </p>
                </li>
              </ul>
              <div className="mil-divider mil-mb-60" id="reply" />
              <h3 className="mil-mb-60">Leave a Reply</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Name</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="text" placeholder="Enter Your Name Here" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Message</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-60">
                      <label className="mil-h6">
                        <span>Website</span>
                        <span className="mil-dark-soft">Optional</span>
                      </label>
                      <input type="text" placeholder="yourwebsite.com" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mil-checbox-frame mil-dark-input mil-mb-60">
                      <input
                        className="mil-checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        defaultValue="value"
                      />
                      <label htmlFor="checkbox-1" className="mil-text-sm">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button className="mil-button mil-border mil-fw">
                      <span>Post Comment</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About NexonGreen</h5>
                <p className="mil-mb-30">
                  NexonGreen is a next-generation IT solutions provider based in Purbachal, Dhaka. We deliver IoT, mobile apps, web design, WordPress, portfolio creation, and digital forensics services.
                </p>
                <Link href="team-single" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">NexonGreen Team</h4>
                    <p className="mil-text-sm">IT Solutions Provider</p>
                  </div>
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop" alt="IoT blog" />
                  </div>
                  <div className="mil-description">
                    <h6>How IoT Is Transforming Businesses in 2025</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&auto=format&fit=crop" alt="Mobile app blog" />
                  </div>
                  <div className="mil-description">
                    <h6>Why Your Business Needs a Mobile App in 2025</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&auto=format&fit=crop" alt="Forensics blog" />
                  </div>
                  <div className="mil-description">
                    <h6>Digital Forensics: How FTK Helps Investigate Cyber Incidents</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=200&auto=format&fit=crop" alt="AI blog" />
                  </div>
                  <div className="mil-description">
                    <h6>AI in IT Services: How Artificial Intelligence Is Changing Everything</h6>
                  </div>
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Categories</h5>
                <ul className="mil-hover-link-list">
                  <li>
                    <a href="#.">Web Design</a>
                  </li>
                  <li>
                    <a href="#.">Mobile Development</a>
                  </li>
                  <li>
                    <a href="#.">IoT</a>
                  </li>
                  <li>
                    <a href="#.">Digital Forensics</a>
                  </li>
                  <li>
                    <a href="#.">Artificial Intelligence</a>
                  </li>
                  <li>
                    <a href="#.">Portfolio</a>
                  </li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Tags</h5>
                <ul className="mil-tags">
                  <li>
                    <a href="#.">IoT</a>
                  </li>
                  <li>
                    <a href="#.">Web Design</a>
                  </li>
                  <li>
                    <a href="#.">WordPress</a>
                  </li>
                  <li>
                    <a href="#.">Mobile App</a>
                  </li>
                  <li>
                    <a href="#.">Forensics</a>
                  </li>
                  <li>
                    <a href="#.">AI</a>
                  </li>
                  <li>
                    <a href="#.">Portfolio</a>
                  </li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                <p className="mil-mb-30">Get the latest IT insights and NexonGreen updates delivered to your inbox.</p>
                <form className="mil-sidebar-input-frame">
                  <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-list-title mil-mb-30">Contact Us</h5>
              <p className="mil-mb-30">
                Have a project in mind? We'd love to hear about it. Reach out and let's build something great together.
              </p>
              <Link href="contact" className="mil-link mil-link-sm">
                <span>Get in Touch</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Publication;
