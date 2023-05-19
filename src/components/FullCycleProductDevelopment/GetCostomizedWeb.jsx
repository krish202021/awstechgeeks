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
                  <img src="img/Full-Cycle-Product_img.png" alt="app-developmen" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
              <div className="crumina-module crumina-heading">
                <div className="about-us-hedding">
                  <h2 className="heading-title">
                  Are you an innovator with a game-changing idea but unsure how to turn it into a reality?
                  </h2>
                </div>
                <h6 className="slider-content-text">
                Look no further! Our Full-cycle product development services offer a comprehensive solution 
                that takes your concept from inception to market, guiding you every step of the way. From 
                brainstorming and idea generation to design, prototyping, testing, manufacturing, and launch,
                full-cycle product development services cover the entire product development process. 
                With a team of experienced experts, cutting-edge technology, and a client-centric approach, 
                these services provide end-to-end solutions tailored to your unique needs.
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
                Don't just dream it, develop it! Our full-cycle product development services provide end-to-end 
                solutions for turning your idea into a market-ready product.
                </h2>
                <h5 className="heading-title">
                From idea to market-ready product, our full-cycle product development services bring 
                your vision to life with precision and expertise.
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
