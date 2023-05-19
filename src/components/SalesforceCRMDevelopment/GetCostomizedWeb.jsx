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
                  <img
                    src="img/Marketing-SALESFORCE-DEVELOPMENT.png"
                    alt="app-developmen"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">
                Experience the power of Salesforce, the world's #1 CRM platform.
                </h2>

                <h6 className="slider-content-text">
                  Salesforce is the undisputed leader in customer relationship
                  management (CRM) platforms, revolutionizing the way businesses
                  manage their sales processes. With its cloud-based solution,
                  Salesforce provides a comprehensive suite of tools and
                  features that empower sales teams to sell smarter, faster, and
                  more efficiently.
                </h6>

                <h6 className="slider-content-text">
                  One of Salesforce's key strengths is its ability to centralize
                  customer data, providing a 360-degree view of customer
                  interactions and history. This allows sales teams to better
                  understand customer needs and preferences, enabling
                  personalized sales efforts. Salesforce's automation tools,
                  including email automation, lead scoring, and workflow
                  automation, streamline repetitive tasks, accelerate sales
                  cycles, and improve productivity
                </h6>

                <h6 className="slider-content-text">
                  Moreover, Salesforce's customization options allow businesses
                  to tailor the platform to their unique sales processes,
                  branding, and workflows. Custom fields, objects, and layouts
                  can be easily configured, making Salesforce highly adaptable
                  to different industries and business models.
                </h6>

                <h6 className="slider-content-text">
                  Salesforce also offers advanced analytics and reporting
                  capabilities that provide valuable insights into sales
                  performance, customer behaviors, and market trends. These
                  insights enable sales teams to optimize sales strategies,
                  identify improvement opportunities, and make data-driven
                  decisions.
                </h6>

                <h6 className="slider-content-text">
                  In conclusion, Salesforce is the ultimate CRM platform that
                  revolutionizes the sales process for businesses worldwide.
                  With its centralization of customer data, automation tools,
                  customization options, and advanced analytics, Salesforce
                  empowers sales teams to achieve better results, drive revenue
                  growth, and boost business success. Whether you're a small
                  business or a global enterprise, Salesforce can be a
                  game-changer for your sales operations.
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
                  Supercharge your sales efforts with Salesforce, the
                  cloud-based CRM platform that delivers unparalleled
                  scalability, security, and flexibility
                </h2>
                <h5 className="heading-title">
                  Salesforce is the intelligent CRM platform that provides
                  unparalleled insights, automation, and collaboration tools to
                  close deals faster, streamlines your sales processes, enhances
                  customer engagement, and maximizes sales performance..
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
