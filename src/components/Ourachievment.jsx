import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import SeoTag from "./seo/SeoTag";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Ourachievment() {
  return (
    <div>
      <Header />
      <SeoTag page_id={12} />
      <div className="content-wrapper our-achievement-page">
        <section className="our-achiv-box">
          <div className="our-achived-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
                  <div className="our-achived-title">
                    <div className="crumina-module crumina-heading">
                      <h2 className="heading-title">
                        Invited as a Chief Guest{" "}
                        <span className="c-primary">
                          in the Startup Summit 2022 organized by Gopal Narayan
                          Singh University, Rohtas.{" "}
                        </span>
                      </h2>
                    </div>
                    <p>
                      Mr. Jamal Ashraf, Managing Director and Mr. Vikash Kumar,
                      Chief Technical Officer of TGAYS Technology were one of
                      the chief guests invited in the Start Up Summit organized
                      by Gopal Narayan Singh University, Rohtas in the December
                      month. Mr. Ashraf had a discussion with the University
                      Director, Dean and students about how the Universities are
                      adapting towards preparing their students for
                      Entrepreneurship. Mr. Ashraf and Mr. Kumar also met Mr.
                      Ravi Ranjan, Business Ex-Advisor, Shark Tank India and had
                      an interaction on encouraging Start-up ecosystem in the
                      state.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <Carousel responsive={responsive}>
                  <div className="img_items">
                    <figure>
                      <img src="img/gnsu1.jpg" alt="Achievement_images" />
                    </figure>
                  </div>
                  <div className="img_items">
                    <figure>
                      <img src="img/gnsu2.jpg" alt="achievement_images" />
                    </figure>
                  </div>
                  <div className="img_items">
                    <figure>
                      <img src="img/gnsu3.jpg" alt="achievement_images" />
                    </figure>
                  </div>

                  <div className="img_items">
                    <figure>
                      <img src="img/gnsu4.jpeg" alt="achievement_images" />
                    </figure>
                  </div>
                  <div className="img_items">
                    <figure>
                      <img src="img/gnsu5.jpeg" alt="achievement_images" />
                    </figure>
                  </div>
                </Carousel>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
                  <div className="our-achived-title">
                    <div className="crumina-module crumina-heading">
                      <h2 className="heading-title">
                        Organized Vibrant Bihar-{" "}
                        <span className="c-primary">
                          Entrepreneurship Global Summit{" "}
                        </span>
                      </h2>
                    </div>
                    <p>
                      In co-ordination with a few more companies and Lets
                      Inspire Bihar, TGAYS Technology have facilitated and
                      helped in organizing an Entreperenueship Global Summit on
                      5th June 2022 at Hotel Maurya in patna. The aim of
                      organizing this Global Summit was to revolutionize
                      industrialization, entrepreneurship eco-system and better
                      skill development in Bihar. The Entrepreneurs from all
                      over the world attended this event making it a grand
                      success. More than 110 start-ups attended this event to
                      try their luck and potential for investment by 50+ angel
                      investors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <Carousel responsive={responsive}>
                  <div className="img_items">
                    <figure>
                      <img src="img/jama-lib.jpg" alt="Achievement_images" />
                    </figure>
                  </div>
                  <div className="img_items">
                    <figure>
                      <img
                        src="img/lib-event-organizers.png"
                        alt="achievement_images"
                      />
                    </figure>
                  </div>
                  <div className="img_items">
                    <figure>
                      <img
                        src="img/jamal-speaker.jpg"
                        alt="achievement_images"
                      />
                    </figure>
                  </div>

                  <div className="img_items">
                    <figure>
                      <img
                        src="img/vikash-speaker.jpg"
                        alt="achievement_images"
                      />
                    </figure>
                  </div>
                </Carousel>
              </div>

              <div className="our-achiv-second-section">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
                    <div className="our-achived-title">
                      <div className="crumina-module crumina-heading">
                        <h2 className="heading-title">
                          Collaboration with{" "}
                          <span className="c-primary">
                            KIAGTS LLC, A Dubai based Company
                          </span>
                        </h2>
                      </div>
                      <p>
                        Our company had a collaboration with Dubai based company
                        KIAGTS LLC as their technology partner. Mr. Francis
                        Wills, the managing partner of the Company from Dubai
                        visited our office in Noida to have a discussion about
                        this collaboration process and the memorandum of
                        understanding(MOU).{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <Carousel responsive={responsive}>
                    <div className="img_items">
                      <figure>
                        <img src="img/franc.jpg" alt="...." />
                      </figure>
                    </div>
                    <div className="img_items">
                      <figure>
                        <img src="img/kiagts1.jpg" alt="...." />
                      </figure>
                    </div>
                    <div className="img_items">
                      <figure>
                        <img src="img/kiagts-meeting.jpg" alt="...." />
                      </figure>
                    </div>
                    <div className="img_items">
                      <figure>
                        <img src="img/kiagts2.jpg" alt="...." />
                      </figure>
                    </div>
                  </Carousel>
                </div>
              </div>

              <div className="our-achiv-second-section">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
                    <div className="our-achived-title">
                      <div className="crumina-module crumina-heading">
                        <h2 className="heading-title">
                          Bidraves Success{" "}
                          <span className="c-primary">
                            Celebration at Los Angeles
                          </span>
                        </h2>
                      </div>
                      <p>
                        Bidraves was one of the successful marketplace B2B
                        business. The entire operation was managed successfully
                        by mobile application developed by our Company. The
                        pictures below depics the celebration of the Bidraves
                        success at a hotel in Los Angeles in California State,
                        USA.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 col-xxl-4">
                    <figure>
                      <img src="img/bidr.jpg" alt="...." />
                    </figure>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12 col-xxl-8">
                    <figure>
                      <img src="img/bidraves1.jpeg" alt="...." />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Ourachievment;
