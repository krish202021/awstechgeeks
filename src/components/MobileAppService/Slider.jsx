import React from "react";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide mobile-app-banner"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/mobile-app-bg.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              
              <h3>Mobile App Development SERVICES</h3>
              <p>Empower Your Business: The Transformative Power of Mobile Apps for Boosting Sales, Enhancing Customer Experience, and Staying Ahead in Today's Digital Economy.</p>
              
              <Link
                to="/popup"
                className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger js-message-popup"
              >
                <div className="text">
                  <span className="title">GET STARTED NOW</span>
                </div>
              </Link>
              <Link
                to="/mobile-app-portfolio" className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger ">
                <div className="text">
                  <span className="title">MOBILE APP PORTFOLIO</span>
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
