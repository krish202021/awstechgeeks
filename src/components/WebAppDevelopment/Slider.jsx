import React from "react";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide web-app-dev-page-sec"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/Web-App-Development-bg.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-app-dev web_pp_banner_text">
              
              <h3>WEB APPLICATION DEVELOPMENT SERVICES</h3>
              
              <p>
                It has been observed that a start-up takes at least 
                2-3 years to align their Business operations while 
                they can achieve the same in just a few months by 
                having a web application that automates their Business processes.
              </p>
              <p>
                Are you ready to wait for so long just to align your Business
                processes?
              </p>
              <Link
                to="/popup"
                className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger js-message-popup"
              >
                <div className="text">
                  <span className="title">GET STARTED NOW</span>
                </div>
              </Link>
              <Link
                to="/web-app-portfolio" className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger ">
                <div className="text">
                  <span className="title">WEB APP PORTFOLIO</span>
                </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
