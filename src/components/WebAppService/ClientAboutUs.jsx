import React from "react";
import OwlCarousel from "react-owl-carousel";

function ClientAboutUs() {
  return (
    <div>
      <div class="testimonials-section">
        <div class="container">
          <div class="crumina-module crumina-heading">
            <h2 class="heading-title">
              What our Clients <span class="c-primary">say about us?</span>
            </h2>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-12 col-12 col-xxl-8">
              <section class="crumina-module crumina-module-slider bg-4 cloud-center navigation-center-both-sides medium-padding100">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0">
                      <div class="swiper-container" data-effect="fade">
                        <div class="swiper-wrapper">
                          <OwlCarousel
                            items={1}
                            className="owl-theme"
                            loop
                            nav
                            margin={8}
                          >
                            <div class="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">
                              <div
                                class="testimonial-img-author"
                                data-swiper-parallax="-100"
                              >
                                <img src="img/rich.jpg" alt="avatar" />
                              </div>

                              <h6
                                class="testimonial-text"
                                data-swiper-parallax="-300"
                              >
                                It was fantastic 7 years working with the Team.
                                I didn't even realize, we spent more than 7
                                years together. Timezone Difference or Remote
                                work was never a barrier.
                              </h6>

                              <div
                                class="author-info-wrap"
                                data-swiper-parallax="-100"
                              >
                                <div class="author-info">
                                  <a class="h6 author-name">Richard Bonitz</a>
                                  <div class="author-company">
                                    Director, Endless River Technology
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">
                              <div
                                class="testimonial-img-author"
                                data-swiper-parallax="-100"
                              >
                                <img src="img/francis.png" alt="avatar" />
                              </div>

                              <h6
                                class="testimonial-text"
                                data-swiper-parallax="-300"
                              >
                                They turned to be one of our best choice as a
                                Technology partner. They have quick turn-around
                                time easily accessible, cost-effective and has a
                                great value in their work.
                              </h6>

                              <div
                                class="author-info-wrap"
                                data-swiper-parallax="-100"
                              >
                                <div class="author-info">
                                  <a class="h6 author-name">Francis Wills</a>
                                  <div class="author-company">
                                    Managing Partner, KIA-GTS
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">
                              <div
                                class="testimonial-img-author"
                                data-swiper-parallax="-100"
                              >
                                <img src="img/chris.png" alt="avatar" />
                              </div>

                              <h6
                                class="testimonial-text"
                                data-swiper-parallax="-300"
                              >
                                From the half way round the world, we found an
                                excellent IT Offshore Partner. We were looking
                                for a Company which can take care of our 30+
                                existing websites and can also develop new
                                websites.
                              </h6>

                              <div
                                class="author-info-wrap"
                                data-swiper-parallax="-100"
                              >
                                <div class="author-info">
                                  <a class="h6 author-name">Chris Shrinkle</a>
                                  <div class="author-company">
                                    Managing Director, Gogiro Cleveland LLC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </OwlCarousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="btn-prev">
                  <svg class="utouch-icon icon-hover utouch-icon-arrow-left-1">
                    <use xlinkHref="#utouch-icon-arrow-left-1"></use>
                  </svg>
                  <svg class="utouch-icon utouch-icon-arrow-left1">
                    <use xlinkHref="#utouch-icon-arrow-left1"></use>
                  </svg>
                </div>

                <div class="btn-next">
                  <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                    <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                  </svg>
                  <svg class="utouch-icon utouch-icon-arrow-right1">
                    <use xlinkHref="#utouch-icon-arrow-right1"></use>
                  </svg>
                </div>
              </section>
            </div>
            <div class="col-lg-4 col-md-12 col-12 col-xxl-4">
              <img
                src="img/successful-young.png"
                alt="testimonial-mg"
                class="testimonial-mg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientAboutUs;
