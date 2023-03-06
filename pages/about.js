/* eslint-disable */ 
import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const About = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Layouts footer="default">
      <PageBanner title={"About"} />
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="circle-image-gallery mb-md-50">
                <div className="row">
                  <div className="col-6 gallery-left">
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/01.jpg"
                        alt="Gallery"
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/04.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 gallery-right">
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <img
                        className="animate-float-bob-y"
                        src="assets/img/circle-image-gallery/03.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="about-text">
                <div className="section-heading mb-35">
                  <span className="tagline">About MerryCare</span>
                  <h2 className="title">Committed to Excellence in Care</h2>

                  <p>10+ Years Of Experience in Disability Services</p>
                </div>
                <p>
                  Merry Care Disability Services is a dedicated organization
                  that focuses on empowering people with disabilities to live
                  independently through quality care and personalized support.
                  Their main objective is to provide a superior service to their
                  participants with an individual-centered approach. The team at
                  Merry Care Disability Services takes pride in empowering their
                  participants with the necessary skills and capabilities to
                  achieve their life goals. We believe in offering a holistic
                  approach to care, ensuring that their participants' emotional,
                  social, and physical needs are met. Our mission is to enable
                  our participants to live their lives to the fullest by
                  providing them with personalized care that is tailored to
                  their unique needs. Merry Care Disability Services' dedication
                  to quality care and personalized support is what sets us apart
                  from other disability service providers. Overall, Merry Care
                  Disability Services is an organization that is committed to
                  empowering people with disabilities, enabling them to live
                  life to the fullest and achieve their life goals. With our
                  individual-centered approach, We provide personalized care
                  that is tailored to meet the unique needs of each participant.
                </p>
                {/* <Link href="/about">
                  <a className="template-btn mt-40">
                    Learn More <i className="far fa-plus"></i>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== About Section End ======--> */}

      <div className="wcu-with-doctors">
        {/* <!--====== Why Choose Section Start ======--> */}
        <section className="wcu-section section-gap-top mb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Why Choose Our Services</span>
                  <h2 className="title">
                   Empowering abilities, not disabilities.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              
            </div>
          </div>
        </section>
        {/* <!--====== Why Choose Section End ======--> */}

        {/* <!--====== Doctor Section Start ======--> */}
       
        {/* <!--====== Doctor Section End ======--> */}
      </div>

      {/* <!--====== FAQ Section Start ======--> */}
      
    </Layouts>
  );
};
export default About;
