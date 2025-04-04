import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Contact = () => {
  const [success, setSuccess] = React.useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    emailjs.send('service_0eg6e6w','template_yobu3tq', data, 'ZyAxqRwRquhWQC8JU')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setSuccess(true);
    }, (err) => {
       console.log('FAILED...', err);
    });
  };
  
 

  return (
    <Layouts footer="default">
      <PageBanner title={"Contact Us"} />
      {/*====== Page Title End ======*/}
      {/*====== Contact Info Section Start ======*/}
      <section className="section-gap contact-top-wrappper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="contact-info-wrapper">
                <div className="single-contact-info">
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-map-marker-alt" /> Address
                    </h3>
                    <p>
                      21 Nottingham Street, <br />
                      Glen Waverley,3150
                    </p>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-coffee" /> Get In Touch
                    </h3>
                    <ul>
                      <li>
                        <span>Phone Number</span>
                        <a href="tel:+012020200">0430383697</a>
                      </li>
                      <li>
                        <span>Email</span>
                        <a href="mailto:support@gmail.com">merrycareservices@gmail.com</a>
                      </li>
                      <li>
                        <span>After Hours</span>
                        <a href="tel:+12345678">0433 393 697</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-comments" /> Follow Us
                    </h3>
                    <p>
                      Stay tuned with our Social Media Platform
                    </p>
                    <p className="social-icon">
                      <a href="https://www.facebook.com/people/Merry-Care-Services/100083051844990/" target={"_blank"} rel="noreferrer">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter-square" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube-square" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="working-hour-chart">
                <h2 className="chart-title">Working Hour</h2>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Monday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Tuesday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Wednesday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Thursday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Friday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Saturday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Sunday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info Section End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-form-area">
        <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5323113521504!2d145.149040515255!3d-37.894618779737726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63fe28723b081%3A0x7388de10a5482e8f!2s22%20Chivers%20Ave%2C%20Glen%20Waverley%20VIC%203150!5e0!3m2!1sen!2sau!4v1677930371374!5m2!1sen!2sau" loading="lazy" />
        </div>
        <div className="section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-heading mb-60 text-center">
                  <span className="tagline">{`We're Ready To Help You`}</span>
                  <h2 className="title">Leave a Message</h2>
                </div>
                <form
                 onSubmit={handleSubmit(onSubmit)}
                  
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="name">Your Full Name</label>
                        <input
                          type="text"
                          placeholder="Michael M. Smith"
                          id="name"
                          required
                          {...register("name")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          placeholder="support@gmail.com"
                          id="email"
                          required
                          {...register("email")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="text"
                          placeholder="0433 333 333"
                          id="phone"
                          {...register("phone")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="time">Best time to Contact</label>
                        <input
                          type="text"
                          placeholder="Time"
                          id="time"
                          required
                          {...register("time")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-field">
                        <label htmlFor="message">Write Message</label>
                        <textarea
                          id="message"
                          placeholder="Write Message...."
                          defaultValue={""}
                          required
                          {...register("message")}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button className="template-btn" type="submit">
                          Send Us Message <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {success && (
                 <div className="success-msg">Congratulations! Your Query been set to team</div>
            )}
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
