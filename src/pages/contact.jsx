import PageBanner from "../components/PageBanner";
import Layouts from "../layouts/Layouts";
import Link from "next/link";
const Contact = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={"Let’s discuss your opportunity"}
      />
      {/* contact */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">01.</span> Tell Us About Yourself
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>First Name</span>
                      </label>
                      <input type="text" placeholder="John" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Last Name</span>
                      </label>
                      <input type="text" placeholder="Jones" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                      </label>
                      <input type="email" placeholder="doe@mydomain.com" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Phone</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Company</span>
                      </label>
                      <input type="text" placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Role</span>
                      </label>
                      <input type="text" placeholder="Your role" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">02.</span> What Can We Help You
                  With?
                </h4>
                <div className="row">
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Product Design</span>
                      </label>
                      <input type="text" placeholder="Web Designer" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">03.</span> Tell Us About Your
                  Project
                </h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Project Description</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-attach-frame mil-dark mil-mb-30">
                      <i className="fas fa-paperclip" />
                      <label className="mil-custom-file-input">
                        <span>Attach your file</span>
                        <input type="file" id="mil-file-input" />
                      </label>
                      <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Project Budget</span>
                      </label>
                      <input type="number" placeholder={123} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="mil-button mil-border mil-fw">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                <p className="mil-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <Link href="contact" className="mil-link mil-link-sm">
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/8.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/9.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-divider mil-mb-60" />
              <Link href="contact" className="mil-link mil-link-sm mil-mb-15">
                <span>Legality Guide</span>
                <i className="fas fa-arrow-right" />
              </Link>
              <br />
              <Link href="contact" className="mil-link mil-link-sm">
                <span>Security Center</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
      {/* map */}
      <div>
        <div className="mil-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2761193910905!2d90.37200197610664!3d23.74629158941338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4f16a50c99%3A0x8fa563e3c8a56b56!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container" />
      </div>
      {/* map end */}
      {/* contact info */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">Bangladesh</h4>
                <h5 className="mil-list-title mil-mb-15">Dhaka — Dhanmondi</h5>
                <p className="mil-mb-30">
                  House 12, Road 4, Dhanmondi, Dhaka-1205, Bangladesh
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+880</span> 1700-000000
                </h6>
                <h6>
                  <span className="mil-accent">nexongreenltd</span>@gmail.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
