import React from "react";

const FooterDefault = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer template-footer-white ${
        noNewsletters ? "" : "have-cta-boxes-two"
      }`}
    >
      
      <div className="footer-inner bg-color-primary">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo-transparent.png" alt="Merrycare" />
                  </div>
                  <p>
                  Our focus is to empower people with disability through quality care.
                  </p>
                  <ul className="contact-list">
                    <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <i className="far fa-map-marker-alt" />
                        22 Chivers Ave, Glen Waverley VIC-3150
                      </a>
                    </li>
                    <li>
                      <a href="mailto:merrycareservices@gmail.com">
                        <i className="far fa-envelope" />
                        merrycareservices@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:01267899">
                        <i className="far fa-phone" />
                        +012 (345) 678 99
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Popular Links</h4>
                        <ul className="nav-links">
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Programs</a>
                          </li>
                          <li>
                            <a href="/about">About us</a>
                          </li>
                          <li>
                            <a href="/contact">Contact us</a>
                          </li>
                          <li>
                            <a href="/">Home</a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Newsletters</h4>
                  <p>
                   Please enter your email below <br /> to get our newsletters
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="newsletters-form"
                  >
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </form>
                  <div className="opening-notice mt-30">
                    <h6>
                      <i className="far fa-clock" /> Opening Hours
                    </h6>
                    <p>Mon - Sat, 08:00 am - 07:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2023 <a href="#">MerryCare</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterDefault;
