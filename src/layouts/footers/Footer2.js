import Link from "next/link";

const Footer2 = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row align-items-center mil-p-120-60">
            <div className="col-xl-6 mil-mb-60">
              <h3 className="mil-light mil-mb-15">
                Join The <span className="mil-accent">NexonGreen</span> Experience
              </h3>
              <p className="mil-light-soft">
                Stay updated with our latest IT insights, projects, and service updates. Subscribe to the NexonGreen newsletter.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <form className="mil-subscribe-form">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="mil-button mil-accent-bg">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
          <div className="mil-divider mil-light" />
          <div className="row justify-content-between mil-p-120-60">
            <div className="col-md-3 col-lg-3 col-xl-3 mil-mb-30">
              <img
                src="/logo-trans.png"
                alt="logo"
                className="mil-logo mil-mb-60"
                style={{ width: 110 }}
              />
              <p
                className="mil-light mil-light-soft"
                style={{ marginBottom: 45 }}
              >
                Purbachal, Dhaka, <br />
                Bangladesh.
              </p>
              <ul className="mil-simple-list mil-mb-15">
                <li className="mil-light">
                  <span className="mil-accent">Email:</span>&nbsp;
                  <span className="mil-light-soft">info@nexongreen.com</span>
                </li>
                <li>
                  <span className="mil-accent">Web:</span>
                  <span className="mil-light mil-light-soft">
                    &nbsp;nexongreen.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-7">
              <div className="row justify-content-end">
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Social</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><a href="#.">Facebook</a></li>
                    <li><a href="#.">Instagram</a></li>
                    <li><a href="#.">LinkedIn</a></li>
                    <li><a href="#.">Twitter</a></li>
                    <li><a href="#.">YouTube</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">
                    Support
                  </h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/faq">FAQs</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Links</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/team">Our Team</Link></li>
                    <li><Link href="/contact">Get a Quote</Link></li>
                    <li><a href="#.">Terms &amp; Conditions</a></li>
                    <li><a href="#.">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© NexonGreen 2026.</p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
