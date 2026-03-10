import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "IoT & Automation",
    date: "12 Jan. 2025",
    title: "How IoT is Transforming Small & Medium Businesses in 2025",
    excerpt: "Smart sensors, real-time dashboards, and automated alerts are no longer reserved for enterprise giants. Discover how SMBs in Bangladesh and beyond are cutting operational costs and boosting efficiency with affordable IoT solutions.",
  },
  {
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "Mobile Development",
    date: "28 Feb. 2025",
    title: "React Native vs Flutter: Which Should You Choose in 2025?",
    excerpt: "Both frameworks promise cross-platform excellence — but they excel in different scenarios. We break down performance benchmarks, ecosystem maturity, and cost implications to help you make the right call for your next mobile project.",
  },
  {
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "Web Design",
    date: "05 Mar. 2025",
    title: "5 Website Mistakes That Are Costing You Clients Right Now",
    excerpt: "A slow load time, broken mobile layout, or missing call-to-action can silently drain your revenue. We analyzed 50+ business websites and identified the most common — and most fixable — mistakes we see every week.",
  },
];

const recentPosts = [
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80",
    title: "Digital Forensics: What FTK Can Reveal in a Cyber Investigation",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80",
    title: "Why Every Startup Needs a Digital Strategy Before They Launch",
  },
  {
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&q=80",
    title: "The Real Cost of a Bad Website: A Bangladesh Business Perspective",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&q=80",
    title: "Custom Software vs Off-the-Shelf: What Businesses Get Wrong",
  },
];

const Blog = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Blog"} pageTitle={"Our Blog"} />
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              {posts.map((post, i) => (
                <Link key={i} href="publication" className="mil-card mil-mb-60">
                  <div className="mil-cover-frame">
                    <img src={post.img} alt={post.title} style={{ width: "100%", height: 280, objectFit: "cover" }} />
                  </div>
                  <div className="mil-description">
                    <div className="mil-card-title">
                      <ul className="mil-dot-list mil-text-sm mil-mb-15">
                        <li>{post.category}</li>
                        <li>{post.date}</li>
                      </ul>
                      <h4>{post.title}</h4>
                    </div>
                    <div className="mil-card-text">
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="mil-divider mil-mb-60" />
              <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  <li className="mil-active"><a href="#.">1</a></li>
                  <li><a href="#.">2</a></li>
                  <li><a href="#.">3</a></li>
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About NexonGreen</h5>
                <p className="mil-mb-30">
                  NexonGreen is a Dhaka-based IT company delivering IoT, mobile apps, web design, and digital forensics services to businesses and individuals across Bangladesh and beyond.
                </p>
                <Link href="team" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="/team/tamim.jpeg" alt="Tamim Hossain" style={{ width: "100%", height: 60, objectFit: "cover" }} />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">Tamim Hossain</h4>
                    <p className="mil-text-sm">CTO &amp; Founder</p>
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
                {recentPosts.map((rp, i) => (
                  <Link key={i} href="publication" className="mil-post-sm mil-mb-15">
                    <div className="mil-cover-frame">
                      <img src={rp.img} alt="cover" style={{ width: "100%", height: 48, objectFit: "cover" }} />
                    </div>
                    <div className="mil-description">
                      <h6>{rp.title}</h6>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Categories</h5>
                <ul className="mil-hover-link-list">
                  <li><a href="#.">IoT &amp; Automation</a></li>
                  <li><a href="#.">Mobile Development</a></li>
                  <li><a href="#.">Web Design</a></li>
                  <li><a href="#.">Digital Forensics</a></li>
                  <li><a href="#.">Business &amp; Strategy</a></li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Tags</h5>
                <ul className="mil-tags">
                  <li><a href="#.">IoT</a></li>
                  <li><a href="#.">React Native</a></li>
                  <li><a href="#.">WordPress</a></li>
                  <li><a href="#.">Forensics</a></li>
                  <li><a href="#.">Startup</a></li>
                  <li><a href="#.">Bangladesh</a></li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
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
              <h5 className="mil-list-title mil-mb-30">Contact us</h5>
              <p className="mil-mb-30">
                Have a question or a project in mind? Our team is ready to help.
              </p>
              <Link href="contact" className="mil-link">
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
export default Blog;
