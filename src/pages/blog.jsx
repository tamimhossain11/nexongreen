import Layouts from "../layouts/Layouts";
import Link from "next/link";

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "IoT & Automation",
    date: "12 Jan 2025",
    readTime: "5 min read",
    title: "How IoT is Transforming Small & Medium Businesses in 2025",
    excerpt: "Smart sensors, real-time dashboards, and automated alerts are no longer reserved for enterprise giants. Discover how SMBs in Bangladesh and beyond are cutting operational costs and boosting efficiency with affordable IoT solutions.",
  },
  {
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "Mobile Development",
    date: "28 Feb 2025",
    readTime: "7 min read",
    title: "React Native vs Flutter: Which Should You Choose in 2025?",
    excerpt: "Both frameworks promise cross-platform excellence — but they excel in different scenarios. We break down performance benchmarks, ecosystem maturity, and cost implications to help you make the right call for your next mobile project.",
  },
  {
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "Web Design",
    date: "05 Mar 2025",
    readTime: "4 min read",
    title: "5 Website Mistakes That Are Costing You Clients Right Now",
    excerpt: "A slow load time, broken mobile layout, or missing call-to-action can silently drain your revenue. We analyzed 50+ business websites and identified the most common — and most fixable — mistakes we see every week.",
  },
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    category: "Digital Forensics",
    date: "18 Apr 2025",
    readTime: "6 min read",
    title: "Digital Forensics: What FTK Can Reveal in a Cyber Investigation",
    excerpt: "Forensic Toolkit (FTK) is one of the most powerful tools in the digital investigator's arsenal. We break down how it's used to recover deleted files, trace user activity, and produce court-ready evidence.",
  },
];

const RECENT = [
  { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80", title: "Why Every Startup Needs a Digital Strategy Before They Launch" },
  { img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&q=80", title: "The Real Cost of a Bad Website: A Bangladesh Business Perspective" },
  { img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&q=80", title: "Custom Software vs Off-the-Shelf: What Businesses Get Wrong" },
];

const CATEGORIES = [
  { label: "IoT & Automation", count: 8 },
  { label: "Mobile Development", count: 6 },
  { label: "Web Design", count: 11 },
  { label: "Digital Forensics", count: 4 },
  { label: "Business & Strategy", count: 9 },
  { label: "AI & Machine Learning", count: 5 },
];

const TAGS = ["IoT", "React Native", "WordPress", "FTK", "Startup", "Bangladesh", "Flutter", "AI", "SEO", "Cloud"];

const Blog = () => (
  <Layouts>

    {/* Banner */}
    <div style={{
      position: "relative", paddingTop: 160, paddingBottom: 90,
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,174,47,0.08) 0%, transparent 65%), linear-gradient(160deg,#0b0c09 0%,#0d0e0b 100%)",
      overflow: "hidden", textAlign: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(91,174,47,0.14) 1px,transparent 1px)", backgroundSize: "36px 36px", opacity: 0.3, pointerEvents: "none" }} />
      <div className="ng-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 18 }}>
          <Link href="/" style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
          <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "var(--accent)" }}>Blog</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-1)", fontSize: "clamp(36px,6vw,62px)", fontWeight: 800, color: "var(--light)", lineHeight: 1.1, marginBottom: 20 }}>
          Insights & <span style={{ color: "var(--accent)" }}>Updates</span>
        </h1>
        <p style={{ fontFamily: "var(--font-2)", fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto" }}>
          Tech guides, case studies, and industry perspectives from the NexonGreen team.
        </p>
      </div>
    </div>

    {/* Main */}
    <section style={{ padding: "96px 0 120px" }}>
      <div className="ng-container">
        <div className="ng-blog-layout">

          {/* Posts */}
          <div className="ng-blog-main">
            {POSTS.map((post, i) => (
              <Link key={i} href="/publication" style={{ textDecoration: "none", display: "block", marginBottom: 40 }}>
                <div style={{
                  background: "rgba(18,20,16,0.65)",
                  border: "1px solid rgba(91,174,47,0.10)",
                  borderRadius: 16, overflow: "hidden",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.30)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(91,174,47,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ height: 260, overflow: "hidden" }}>
                    <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </div>
                  <div style={{ padding: "28px 32px 32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <span style={{ fontFamily: "var(--font-2)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 1.5, textTransform: "uppercase", background: "rgba(91,174,47,0.08)", border: "1px solid rgba(91,174,47,0.20)", borderRadius: 50, padding: "4px 12px" }}>
                        {post.category}
                      </span>
                      <span style={{ fontFamily: "var(--font-2)", fontSize: 12, color: "rgba(255,255,255,0.30)" }}>{post.date}</span>
                      <span style={{ fontFamily: "var(--font-2)", fontSize: 12, color: "rgba(255,255,255,0.30)" }}>· {post.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-1)", fontSize: 20, fontWeight: 700, color: "var(--light)", lineHeight: 1.35, marginBottom: 14 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 20 }}>
                      {post.excerpt}
                    </p>
                    <span style={{ fontFamily: "var(--font-1)", fontSize: 13, fontWeight: 700, color: "var(--accent)", display: "flex", alignItems: "center", gap: 6 }}>
                      Read Article
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Pagination */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {[1, 2, 3].map(n => (
                <button key={n} style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: n === 1 ? "var(--accent)" : "rgba(255,255,255,0.04)",
                  border: n === 1 ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.08)",
                  color: n === 1 ? "#000" : "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-1)", fontSize: 13, fontWeight: 700,
                  cursor: "pointer",
                }}>{n}</button>
              ))}
              <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.30)", marginLeft: 4 }}>of 3 pages</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="ng-blog-sidebar">

            {/* Search */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16 }}>Search</div>
              <div style={{ display: "flex", gap: 0 }}>
                <input type="text" placeholder="Search articles…" style={{
                  flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRight: "none", borderRadius: "8px 0 0 8px", padding: "11px 16px",
                  fontFamily: "var(--font-2)", fontSize: 13.5, color: "var(--light)", outline: "none",
                }} />
                <button style={{
                  background: "var(--accent)", border: "1px solid var(--accent)", borderRadius: "0 8px 8px 0",
                  padding: "11px 16px", cursor: "pointer", color: "#000", fontSize: 14,
                }}>→</button>
              </div>
            </div>

            {/* Categories */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16 }}>Categories</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {CATEGORIES.map((cat, i) => (
                  <a key={i} href="#." style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 14px", borderRadius: 8, textDecoration: "none",
                    border: "1px solid transparent", transition: "all 0.18s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(91,174,47,0.06)"; e.currentTarget.style.borderColor = "rgba(91,174,47,0.20)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "transparent"; }}
                  >
                    <span style={{ fontFamily: "var(--font-2)", fontSize: 14, color: "rgba(255,255,255,0.70)" }}>{cat.label}</span>
                    <span style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "var(--accent)", background: "rgba(91,174,47,0.10)", borderRadius: 50, padding: "2px 8px" }}>{cat.count}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16 }}>Recent Posts</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {RECENT.map((rp, i) => (
                  <Link key={i} href="/publication" style={{ display: "flex", gap: 14, textDecoration: "none", alignItems: "center" }}>
                    <div style={{ width: 60, height: 52, borderRadius: 8, overflow: "hidden", flexShrink: 0, border: "1px solid rgba(91,174,47,0.12)" }}>
                      <img src={rp.img} alt="post" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.45 }}>{rp.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16 }}>Tags</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TAGS.map((tag, i) => (
                  <a key={i} href="#." style={{
                    fontFamily: "var(--font-2)", fontSize: 12.5, color: "rgba(255,255,255,0.55)",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 6, padding: "5px 12px", textDecoration: "none", transition: "all 0.18s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(91,174,47,0.30)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >{tag}</a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div style={{ background: "rgba(91,174,47,0.06)", border: "1px solid rgba(91,174,47,0.18)", borderRadius: 14, padding: "22px 20px" }}>
              <div style={{ fontFamily: "var(--font-1)", fontSize: 15, fontWeight: 700, color: "var(--light)", marginBottom: 8 }}>Stay Updated</div>
              <p style={{ fontFamily: "var(--font-2)", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 16 }}>
                Get the latest articles and insights delivered to your inbox.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input type="email" placeholder="your@email.com" style={{
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 8, padding: "11px 14px", fontFamily: "var(--font-2)", fontSize: 13.5,
                  color: "var(--light)", outline: "none", width: "100%",
                }} />
                <button className="ng-btn-primary" style={{ justifyContent: "center", fontSize: 13 }}>
                  Subscribe →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </Layouts>
);

export default Blog;
