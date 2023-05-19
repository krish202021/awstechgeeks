import React from "react";

import { Link } from "react-router-dom";
function Slider() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/Website-Maintenance-Security-bg.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-main-slider">
              <span className="our_services_add">
                <h5>OUR SERVICES</h5>
              </span>
              <p>Web App Development</p>
              <h5>
                Make your Business Operations
                <br /> Automated, Get a Web Application Developed!
              </h5>
              <p>
                It has been observed that a start-up takes atleast 2-3 years to
                align, their Business operations. While they can achieve the
                same in just a few months by having an automated system built
                for managing their Business.
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
                  <span className="title">Get Started Now</span>
                </div>
              </Link>
              <a className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger ">
                <div className="text">
                  <span className="title">Check Our Web App Portfolio</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
