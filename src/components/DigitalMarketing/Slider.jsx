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
              src="img/digital-marketing.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-app-dev ">
              <h3>DIGITAL MARKETING(SEO, SEM, PPC) SERVICES</h3>

              <p>
                Be at the top of search results and outrank your competitors
                with our data-driven SEO techniques that enhance your website's
                search engine performance.
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
