import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layouts from "../src/layouts/Layouts";
import { testimonialOne } from "../src/sliderProps";

const Index = () => {
  return (
    <Layouts position={"absolute"}>
      <>
        {/*====== Hero Area Start ======*/}
        <section className="hero-area-one">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="hero-content">
                  <h1 className="title wow fadeInDown" data-wow-delay="0.3s">
                    Merry Care Disability Services
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.4s">
                    Our focus is to empower people with disability through
                    quality care and personal centered approach to live
                    independently.
                  </p>
                  <Link href="/contact">
                    <a
                      className="template-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Contact Us <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img wow fadeInUp" data-wow-delay="0.3s">
                  <img src="assets/img/hero-img/hero-img.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Hero Area End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline large-font">
                    Why Merry Care Services
                  </span>
                  <h2 className="title small-font">
                    At Merry Care Disability Services, we always see your
                    capabilities and we love to support you to develop the
                    skills for living independently. We provide a supportive
                    environment to enhance your capabilities, support career,
                    day to day tasks, mental and physical health and lot more.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Our Mission</a>
                    </Link>
                    <p className="font-14">
                      Develop the skills and capabilities that gain independence
                      and help become a contributing member of society{" "}
                    </p>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/01.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Our Focus</a>
                    </Link>
                    <p className="font-14">We pride ourselves on offering a superior service to participants via our individual centered approach. We empower participants with skills</p>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/02.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="image-title-box mt-30">
                  <h4 className="title">
                    <Link href="/service">
                      <a>Registered NDIS Provider</a>
                    </Link>
                    <p className="font-14">We are a registered NDIS provider. Enquire with us for NDIS support services.</p>
                  </h4>
                  <div className="image">
                    <img src="assets/img/img-title-box/03.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Why Choose Section End ======*/}
        {/*====== About Section Start ======*/}
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
                          alt=""
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
                        className="single-img wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <img
                          className="animate-float-bob-y"
                          src="assets/img/circle-image-gallery/03.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="single-img wow fadeInRight"
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
                    <span className="tagline">
                      About Merry Care Disability Services
                    </span>
                    <h2 className="title">
                      Creating Opportunities for Growth and Independence
                    </h2>
                    <p>10 Years+ Of Experience in Disability Services</p>
                  </div>
                  <p>
                    Merry Care Disability Services is a support services
                    Provider for people with disabilities in Glen Waverley,
                    Victoria, Australia. We offer services such as individual
                    support, respite care, group activities, and community
                    access to help individuals with disabilities live as
                    independently as possible and participate in their
                    communities. Our goal is to help individuals with
                    disabilities achieve their goals and aspirations, and to
                    live fulfilling lives.
                  </p>
                  <Link href="/about">
                    <a className="template-btn mt-40">
                      Learn More <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== About Section End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="service-section bg-color-grey section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-heading text-center mb-40">
                  <span className="tagline large-font">About NDIS</span>
                  <h2 className="title small-font">
                    The National Disability Insurance Scheme (NDIS) is a new way
                    of assisting people with a disability to get the support
                    they need, achieve their human rights, and participate in
                    the social and economic life of the nation. The NDIS’
                    central objective is for people with disability to achieve
                    their life goals.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Big Tagline Start ======*/}
        <section className="big-tagline">
          <div className="container-fluid">
            <h2 className="tagline">
              We Cannot Stop the Wave, But We Can Learn To Swim (Jon Kabat)
            </h2>
          </div>
        </section>
        {/*====== Big Tagline End ======*/}
        {/*====== Doctor Section Start ======*/}

        {/*====== Doctor Section End ======*/}
        {/*====== Appointment Section Start ======*/}

        {/*====== Appointment Section End ======*/}
        {/*====== Testimonials Section Start ======*/}
        <section className="testimonial-section bg-color-grey section-have-half-bg">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="testimonial-one-wrap">
                  <div className="section-heading mb-50">
                    <span className="tagline">Our Testimonials</span>
                    <h2 className="title">
                      What Our Participants or their loved one's says
                    </h2>
                  </div>
                  <Slider
                    {...testimonialOne}
                    className="testimonial-slider-one"
                  >
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        {/*  <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>  */}
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            I know Simar for Over 3 years as a carer for my son.
                            He is modest and very reliable carer with lots of
                            skills and qualifications.He always says 'slowly',
                            but surely he is always moving forward to improve
                            his life(work, family, and hobbies etc). While he
                            looks after my son like his own nephew, he also has
                            an insight to find my son's potentials. His wife,
                            Sukhan is also a lovely lady and I can't stop
                            chatting with her for a while if I have a chance to
                            see her.
                          </p>
                          <div className="author-info">
                            <h5 className="name">Setsuko Nakazawa</h5>
                            <span className="title">01/02/2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        {/* <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div> */}
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                          I have been receiving services from Merry Care for over a year,
                          and I can confidently say that the staff is exceptional. They are 
                          unfailingly kind, patient, and reliable. Sukhan, the manager, goes 
                          above and beyond to ensure that my daughter receives uninterrupted 
                          care and is always comfortable and happy. What's more, she is always 
                          ready to step in as backup staff whenever needed, which is truly extraordinary. 
                          Additionally, she is an attentive listener and takes the time to understand the 
                          unique needs of our family. I am grateful for her expertise and unwavering support 
                          in helping my daughter reach her full potential.
                          </p>
                          <div className="author-info">
                            <h5 className="name">Anna Christina</h5>
                            <span className="title">19/02/2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>*/}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-half-bg"
            style={{
              backgroundImage: "url(assets/img/section-bg/half-bg-img-01.jpg)",
            }}
          />
        </section>
        {/*====== Testimonials Section End ======*/}
        {/*====== Counter Section Start ======*/}
        {/* <section className="counter-section section-gap">
          <div className="container">
            <div className="counter-inner">
              <div className="row justify-content-between">
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      {/* <span className="counter">359</span> }
                      <Counter end={359} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Professional Doctors</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={85} />
                      {/* <span className="counter">85</span> }
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">Saticfied Our Clients</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={863} />
                      {/* <span className="counter">863</span> }
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Win International Awards</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={86} />
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">4.9 Star Reviews</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> /*}
        {/*====== Counter Section End ======*/}
        {/*====== Help Section Start ======*/}

        {/*====== Help Section End ======*/}
        {/*====== Partners Section Start ======*/}

        {/*====== Partners Section End ======*/}
        {/*====== Latest Blog Start ======*/}

        {/*====== Latest Blog End ======*/}
      </>
    </Layouts>
  );
};
export default Index;
