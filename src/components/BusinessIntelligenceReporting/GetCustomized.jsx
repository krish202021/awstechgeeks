import React from "react";
import { Link } from "react-router-dom";
function GetCostomizedWeb() {
  return (
    <div>
      <section className="background-contain pt100 web-solution-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
              <div className="crumina-module crumina-heading">
                <div className="about-us-hedding">
                  <h2 className="heading-title">
                    Business Intelligence & Reporting Services: Unlocking the
                    Power of Data for Business Success
                  </h2>
                </div>
                <h6 className="slider-content-text">
                  Business Intelligence & Reporting Services are invaluable
                  tools for organizations seeking to leverage the power of data
                  for business success. With access to real-time insights,
                  customizable visualizations, and predictive analytics,
                  organizations can optimize their strategies, gain a
                  competitive edge, and drive growth. Embracing Business
                  Intelligence & Reporting Services can transform businesses
                  from reactive to proactive, from data-rich to data-driven, and
                  from good to great. In today's data-centric business
                  landscape, investing in Business Intelligence & Reporting
                  Services is not just an option but a necessity for
                  organizations aiming to thrive in the digital era.
                </h6>
              </div>
              <Link to="/popup">
                <div className="text">
                  <span className="title">Get Started Now</span>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="crumina-module ">
                <div className="img-thumb">
                  <img src="img/business-report-img.png" alt="app-developmen" />
                </div>
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
                  Harness the power of data with our Business Intelligence &
                  Reporting Services.
                </h2>
                <h5 className="heading-title">
                  Make data-driven decisions with confidence using our top-notch
                  Business Intelligence & Reporting Services. Get real-time,
                  accurate, and actionable insights to drive your business
                  forward.
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
