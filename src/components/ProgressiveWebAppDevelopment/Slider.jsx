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
              src="img/Progressive-Web-App-banner.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-app-dev progressive_carousel">
              <h3>PROGRESSIVE WEB APP DEVELOPMENT SERVICES</h3>

              <p>
              Maximize User Engagement and Retention with Our Professional Progressive Web App Services!
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
