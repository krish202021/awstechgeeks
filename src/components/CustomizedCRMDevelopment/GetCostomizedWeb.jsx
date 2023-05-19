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
                    Empower Your Business with a Customized CRM that Works Your
                    Way.
                  </h2>
                </div>
                <h6 className="slider-content-text">
                  In today's competitive business landscape, building strong
                  customer relationships is crucial for success. That's where
                  Customer Relationship Management (CRM) comes into play,
                  helping businesses streamline their sales, marketing, and
                  customer service processes. While there are many CRM solutions
                  available in the market, businesses often require a CRM system
                  that is specifically tailored to their unique needs and
                  workflows, which is where a customized CRM comes into play.
                </h6>
                <h6 className="slider-content-text">
                  TGAYS Technology has a very strong background in building
                  Customized CRM for different businesses tailored to their
                  specific needs. We have not only developed Custom CRM for
                  other businesses but we also have our own internal CRM as per
                  our process requirement.
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
                  <img src="img/crm-develop.png" alt="app-developmen" />
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
                  Revolutionize Your Business with Customized CRM: Let Us Tailor
                  a CRM Solution Specifically for Your Needs.
                </h2>
                <h5 className="heading-title">
                  Unleash the Full Potential of Your CRM: Get a Customized
                  Solution that Empowers Your Business to Thrive in Today's
                  Competitive Market.
                </h5>

                <Link
                  to="/popup"
                  className="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary js-message-popup"
                >
                  <div className="text">
                    <span className="title">GET STARTED NOW</span>
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
