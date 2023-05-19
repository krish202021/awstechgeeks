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
                    Introducing Our Cutting-Edge Digital Marketing Services -
                    Unlock Your Online Success!
                  </h2>
                </div>
                <h6 className="slider-content-text">
                  Are you struggling to improve your online presence and drive
                  more targeted traffic to your website? Look no further! Our
                  digital marketing services, including Search Engine
                  Optimization (SEO), Search Engine Marketing (SEM), and
                  Pay-Per-Click (PPC) advertising, are designed to help
                  businesses like yours achieve online success.
                </h6>
                <h6 className="slider-content-text">
                  With our SEO expertise, we'll optimize your website to rank
                  higher on search engine results pages (SERPs), ensuring
                  increased visibility and organic traffic. Our team of
                  experienced SEO specialists will conduct in-depth keyword
                  research, optimize your website's meta tags, create engaging
                  content, and implement other proven SEO strategies to boost
                  your website's search engine rankings.
                </h6>
                <h6 className="slider-content-text">
                  Our SEM services will help you leverage paid advertising on
                  search engines to drive targeted traffic to your website. Our
                  team will create and manage strategic PPC campaigns that are
                  tailored to your business goals and budget, ensuring maximum
                  return on investment (ROI). We'll conduct thorough market
                  research, create compelling ad copy, and optimize your
                  campaigns to ensure you get the best results.
                </h6>
                <h6 className="slider-content-text">
                  With our PPC advertising services, you'll only pay for clicks
                  that actually drive traffic to your website, making it a
                  cost-effective way to generate qualified leads and increase
                  conversions.
                </h6>
                <h6 className="slider-content-text">
                  Don't miss out on potential customers due to poor online
                  visibility. Let our digital marketing experts optimize your
                  website for search engines, create and manage strategic PPC
                  campaigns, and help you unlock your online success! Contact us
                  today to learn more about how our digital marketing services
                  can benefit your business.
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
                  <img
                    src="img/digital-marketing-img.png"
                    alt="app-developmen"
                  />
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
                  Dominate the digital landscape with our comprehensive digital
                  marketing services, including SEO, SEM, and PPC, tailored to
                  your business goals and objectives.
                </h2>
                <h5 className="heading-title">
                  Get found online with our cutting-edge SEO strategies that
                  drive organic traffic to your website and boost your online
                  visibility.
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
