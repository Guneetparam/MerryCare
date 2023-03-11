import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const ServiceTwo = () => {
  return (
    <Layouts footer="Default">
      <PageBanner title={"Breaking Barriers"} pageName="Programs" />
      <section className="services-area section-gap-top-less bg-color-grey">
        <div className="container">
          <div className="row justify-content-center service-loop">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/heart.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">
                    <a>Outdoor Adventure</a>
                  </Link>
                </h4>
                <p>This program involves organised trips to local parks, nature reserves, or hiking trails. Participants could learn about different plants and animals, as well as explore new environments and participate in physical activities.</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                  {/* <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/lungs.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">
                    <a>Cooking & Baking Classes</a>
                  </Link>
                </h4>
                <p>Participants will learn how to cook and bake a variety of dishes, from simple meals to more elaborate recipes. Classes could be held in a community kitchen with a focus on healthy and nutritious food choices.</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                  {/* <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/brain.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">
                    <a>Workshops in Art and Craft</a>
                  </Link>
                </h4>
                <p>Participants can participate in a variety of creative activities such as painting, sketching, drawing, sculpting, etc</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                  {/* <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/stomach.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="#">
                    <a>Music and Dance Therapy</a>
                  </Link>
                </h4>
                <p>Music therapy can have a positive impact on physical function for individuals with disabilities. This can be seen through activities such as dancing to music, which can enhance balance and coordination. Additionally, participating in musical activities can help alleviate stress and anxiety. Classes may involve singing, recording one's voice, or dancing.</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                 {/*  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/virus.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="#">
                    <a>Community Service</a>
                  </Link>
                </h4>
                <p>Participants volunteer at local schools, hospitals, community centre or non-profit organizations. This would provide an opportunity for participants to give back to the community and develop new skills.</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                 {/*  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/bronchus.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="#">
                    <a>Excursion program/Social outing program</a>
                  </Link>
                </h4>
                <p>In this program we organise trips to local attractions, such as museums, parks, Zoo and cultural events. The goal would be to provide individuals with disabilities the opportunity to experience new things and engage with their community. This program could bring individuals with disabilities together for social events, such as picnics, movie nights, and sporting events. The focus would be on creating a supportive community where individuals can have fun, make new friends, and build relationships.</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                  {/* <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/eye.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="#">
                    <a>Gardening</a>
                  </Link>
                </h4>
                <p>Gardening is the fantastic activity for people with disabilities because it provides numerous physical and mental benefits.</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                 {/*  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/teeth.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="#">
                    <a>Academic Learning</a>
                  </Link>
                </h4>
                <p>This is a growing trend where parents choose to home schooling their child with special needs. We offer tuition-based programs that can be used to supplement a home schooling or School program.</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                 {/*  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="iconic-box mt-30">
                <div className="icon">
                  <img src="assets/img/icon/heart-4.png" alt="Icon" />
                </div>
                <h4 className="title">
                  <Link href="#">
                    <a>My First Dollar Program</a>
                  </Link>
                </h4>
                <p>Launching Soon</p>

                <div className="box-link-wrap">
                  <span className="link-icon">
                    <i className="far fa-plus"></i>
                  </span>
                 {/*  <Link href="/service-details">
                    <a className="box-link">
                      Read More <i className="far fa-plus"></i>
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Service Area End ======--> */}

      {/* <!--====== Big Tagline Start ======--> */}
     
      {/* <!--====== Big Tagline End ======--> */}

      {/* <!--====== Appointment Section Start ======--> */}
     
    </Layouts>
  );
};
export default ServiceTwo;
