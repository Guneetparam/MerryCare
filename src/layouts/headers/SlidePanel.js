import React from "react";

const SlidePanel = ({ sidebarTrigger, setSidebarTrigger }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${
        sidebarTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setSidebarTrigger()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
          Merry Care Disability Services is a dedicated organization 
          that focuses on empowering people with disabilities to live 
          independently through quality care and personalized support.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              Glen Waverley
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:support@qolle.com">merrycareservices@gmail.com</a>
{/*               <a href="mailto:info@qolle.com">info@seeva.com</a>
 */}            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">0405020440</a>
              <br />
              <a href="tel:+8563214">0433393697</a>
              <br />
              <a href="tel:+8563214">0430383697</a>

            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => setSidebarTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default SlidePanel;
