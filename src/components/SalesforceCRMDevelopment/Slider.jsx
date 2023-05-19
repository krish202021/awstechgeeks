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
              src="img/SALESFORCE-DEVELOPMENT-banner.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-app-dev ">
              <h3>SALESFORCE DEVELOPMENT SERVICES</h3>
              <p>
                Experience the power of Salesforce, the world's #1 CRM platform
                that empowers your sales team to sell smarter, close deals
                faster, and exceed customer expectations.
              </p>
              <Link
                to="/popup"
                className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger js-message-popup"
              >
                <div className="text">
                  <span className="title">GET STARTED NOW</span>
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
