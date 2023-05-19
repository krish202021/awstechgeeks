import React from "react";
import { Link } from "react-router-dom";
function GetCostomizedWeb() {
  return (
    <div>
      <section className="background-contain pt100 web-solution-section">
        <div className="container">
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="crumina-module ">
                <div className="img-thumb">
                  <img src="img/E-COMMERCE-WEBSITE-DEVELOPMENT_img.png" alt="app-developmen" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
              <div className="crumina-module crumina-heading">
                <div className="about-us-hedding">
                  <h2 className="heading-title">
                  Open the door to global opportunities with our e-commerce website and mobile app development services, expanding your reach and boosting your sales.
                  </h2>
                </div>
                <h6 className="slider-content-text">
                E-commerce website and mobile app development services are essential for businesses 
                looking to establish or enhance their online presence. A well-designed and optimized 
                e-commerce website and mobile app can provide a seamless and convenient shopping 
                experience for customers, resulting in increased sales and customer loyalty.
                </h6>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="crumina-module background-contain subscription-change-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-3 col-xxl-3">
              <div className="client-sec-img">
                <figure>
                  <img src="img/funny-man-cartoon.png" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-12 col-xxl-9">
              <div className="crumina-module">
                <h2 className="heading-title">
                Open the door to global opportunities with our e-commerce website 
                and mobile app development services, expanding your reach and boosting your sales.
                </h2>
                <h5 className="heading-title">
                Maximize your online potential with our expert e-commerce solutions, providing 
                feature-rich website and mobile app development for a user-friendly and engaging shopping experience.
                </h5>

                <Link
                  to="/popup"
                  className="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary js-message-popup"
                >
                  <div className="text">
                    <span className="title">SHARE YOUR REQUIREMENT</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetCostomizedWeb;
