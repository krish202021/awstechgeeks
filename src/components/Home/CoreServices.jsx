import React from "react";
import OwlCarousel from "react-owl-carousel";
function CoreServices() {
  return (
    <div>
      <section class="medium-padding100 hm-core-secvice">
        <div class="container core-secvice-sec">
          <div class=" text-center">
            <h1 class="display-4">
              Our <span class="c-primary"> Core Services</span>
            </h1>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12 col-xxl-6">
              <div class="crumina-module crumina-info-box info-box--standard-hover">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12 col-xxl-4">
                    <div class="info-box-image">
                      <img
                        class="utouch-icon"
                        src="svg-icons/smartphone.svg"
                        alt="smartphone"
                      />
                      <img class="cloud" src="img/clouds8.png" alt="cloud" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-12 col-xxl-8">
                    <div class="info-box-content">
                      <a href="#" class="h5 info-box-title">
                        Mobile App
                      </a>
                      <p class="info-box-text">
                        There are more than 3 billion mobile users in the world.
                        If you have a great idea, your customers are waiting to
                        download an interactive mobile app that makes their life
                        easier. All you need is the right company to take your
                        idea to the next level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="crumina-module crumina-info-box info-box--standard-hover">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12 col-xxl-4">
                    <div class="info-box-image">
                      <img
                        class="utouch-icon"
                        src="svg-icons/music(1).svg"
                        alt="smartphone"
                      />
                      <img class="cloud" src="img/clouds9.png" alt="cloud" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-12 col-xxl-8">
                    <div class="info-box-content">
                      <a href="#" class="h5 info-box-title">
                        Website Design
                      </a>
                      <p class="info-box-text">
                        A company's credibility is judged based on how the
                        website looks and loads. So, we have to be very careful
                        in designing a user-friendly, easy to navigate, device
                        responsive and fast loading website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="crumina-module crumina-info-box info-box--standard-hover">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12 col-xxl-4">
                    <div class="info-box-image">
                      <img
                        class="utouch-icon"
                        src="svg-icons/settings(4).svg"
                        alt="smartphone"
                      />
                      <img class="cloud" src="img/clouds10.png" alt="cloud" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-12 col-xxl-8">
                    <div class="info-box-content">
                      <a href="#" class="h5 info-box-title">
                        Web Applications
                      </a>
                      <p class="info-box-text">
                        Having an automated process according to our Business
                        needs makes our life and work much easier. TGAYS
                        Technology has an extensive experience in creating high
                        performance, feature-packed customized web applications
                        according to specific business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12 col-12 col-xxl-6">
              <img
                src="img/core-service-img.png"
                class="core-service-img"
                alt="core-services"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="background-contain pt100 hm-about-sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="crumina-module about-video">
                <div class="about-thumb">
                  <OwlCarousel
                    items={1}
                    className="owl-theme"
                    loop
                    nav
                    margin={6}
                  >
                    <img src="img/3.png" alt="video" />
                    <img src="img/8.png" alt="video" />
                    <img src="img/office1.png" alt="video" />
                  </OwlCarousel>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
              <div class="crumina-module crumina-heading">
                <div class="about-us-hedding">
                  <h2 class="heading-title">
                    <span class="c-primary">About</span> us
                  </h2>
                  <img class="cloud" src="img/clouds8.png" alt="cloud" />
                </div>
                <p class="heading-text">
                  The TGAYS Foundation team is a group of technical experts.
                  That's why the name <strong>"TGAYS"</strong> or the{" "}
                  <strong>"Tech Geeks At Your Service"</strong>!
                </p>
                <p>
                  We researched to find out that there is a pool of IT Companies
                  providing website and mobile app solutions. However, getting a
                  right company is very challenging for the customers. As a
                  result, the Client remains unhappy because of the missing
                  support from the beginning to the end of the project delivery.
                  And, the support after delivery is completely missing. We work
                  with a motive to always stay connected with our customers,
                  giving them the best experience as a Service Provider.{" "}
                </p>
              </div>
              <a class="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary">
                <div class="text">
                  <span class="title">READ MORE ABOUT US</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoreServices;
