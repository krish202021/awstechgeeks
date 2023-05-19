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
              src="img/E-Commerce-Website-Mobile-App-Development-banner.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-app-dev ">
              <h3>E-COMMERCE WEBSITE AND MOBILE APP DEVELOPMENT SERVICES</h3>

              <p>
              Unleash the power of e-commerce with our cutting-edge website and mobile app development 
              services, driving your online business to new heights of success.
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
