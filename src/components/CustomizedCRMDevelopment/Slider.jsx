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
              src="img/customized-banner_img.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block web-app-dev crm_dev">
              <h3>CUSTOMIZED CRM SERVICES</h3>

              <p>
                Say Goodbye to Generic CRM: Choose Us for Customized CRM
                Services that Drive Results. Your Partner in Streamlining Sales,
                Marketing, and Customer Service.
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
