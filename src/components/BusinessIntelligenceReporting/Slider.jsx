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
              src="img/business-report.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-app-dev ">
              <h3>BUSINESS INTELLIGENCE & REPORTING SERVICES</h3>

              <p>
                Make data-driven decisions with confidence using our top-notch
                Business Intelligence & Reporting Services. Get real-time,
                accurate, and actionable insights to drive your business
                forward.
              </p>

              <Link
                to="/popup"
                className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger js-message-popup"
              >
                <div className="text">
                  <span className="title">GET STARTED NOW</span>
                </div>
              </Link>
              {/* <Link
                to="/web-app-portfolio"
                className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger "
              >
                <div className="text">
                  <span className="title">WEB APP PORTFOLIO</span>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
