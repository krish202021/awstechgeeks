import React, { useState } from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function DigitalMarketing() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  //   function afterOpenModal() {
  // 	// references are now sync'd and can be accessed.
  // 	subtitle.style.color = '#f00';
  //   }

  function closeModal() {
    setIsOpen(false);
  }

  const action = (img) => {
    setImg(img);
    setIsOpen(true);
  };
  return (
    <div>
      <Header />

      <div className="content-wrapper">
        <section className="medium-padding120 portfolio-connect-box">
          <div className="container">
            <div className="crumina-module crumina-module-img-bottom">
              <div className="row mb60 portfolio-banner-sec">
                <div className="col-lg-7 col-md-12 col-12 col-xxl-7">
                  <div className="crumina-module crumina-heading">
                    <h6 className="heading-sup-title">
                      Digital Marketing Portfolio
                    </h6>
                    <h2 className="heading-title">
                      We mix the beautiful with the usable. Have a look at our
                      work!
                    </h2>

                    <div className="crumina-bootom-heading">
                      <h6 className="heading-sup-title">
                        Need an Digital Marketing Website?
                      </h6>
                      <Link
                        to="/popup"
                        className="btn btn--gree btn--with-shadow js-message-popup cd-nav-trigger"
                      >
                        Let's Connect Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-4 col-12 col-xxl-5">
                  <div className="portfolio-img-sec">
                    <img src="img/portfolio-img.png" alt="portfolio" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row square-colored bg-product-blue crumina-case-item web-one port_1">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-one"
                >
                  <img src="img/ezshopit(1).png" alt="case" />
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">Ezshopit</h2>

                    <h5 className="title">Framework: Codeigniter</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row square-colored bg-product-blue-dark crumina-case-item web-two">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">Tommygun Art Club</h2>

                    <h5 className="title">Framework: Codeigniter</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-two"
                >
                  <img src="img/tommygun.png" alt="case" />
                </p>
              </div>
            </div>

            <div className="row square-colored bg-product-marrow crumina-case-item web-one">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-one"
                >
                  <img src="img/ezglobalshop.png" alt="case" />
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">Ez Global Shopping</h2>

                    <h5 className="title">CMS: Woo-commerce</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row square-colored bg-dark crumina-case-item web-two">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">Smart Relief Massage</h2>

                    <h5 className="title">CMS: Woo-commerce</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-two"
                >
                  <img src="img/smart-relief.png" alt="case" />
                </p>
              </div>
            </div>

            <div className="row square-colored bg-product-blue crumina-case-item web-one">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-one"
                >
                  <img src="img/mypartyjumpers.png" alt="case" />
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">My Party Jumpers</h2>

                    <h5 className="title">CMS: Magento 2</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row square-colored bg-product-blue-dark crumina-case-item web-two">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">Square One London</h2>

                    <h5 className="title">CMS: Magento 2</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-two"
                >
                  <img src="img/square-one-london.png" alt="case" />
                </p>
              </div>
            </div>

            <div className="row square-colored bg-product-marrow crumina-case-item web-one">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-one"
                >
                  <img src="img/1oakwholesale.png" alt="case" />
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">1OakWholesale</h2>

                    <h5 className="title">CMS: Magento 2</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row square-colored bg-dark crumina-case-item web-two">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <h2 className="title">Dolly and Dotty</h2>

                    <h5 className="title">CMS: Magento 2</h5>
                    <a
                      href="http://ezshopit.com/"
                      target="_blank"
                      className="more-arrow white"
                    >
                      <span>Visit Website</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                    <br />
                    <a
                      href="05_case_details_ver_01.html"
                      className="more-arrow white"
                    >
                      <span>View Case</span>
                      <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                        </svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1">
                          <use xlinkHref="#utouch-icon-arrow-right1"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="crumina-module crumina-case-item"
                  data-mh="case-item"
                >
                  <div className="case-item-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <p
                  onClick={() => {
                    action("img/case1.jpg");
                  }}
                  className="case-item__thumb js-zoom-image web-zoom-two"
                >
                  <img src="img/dolly-and-dotty.png" alt="case" />
                </p>
              </div>
            </div>

            <Modal
              isOpen={modalIsOpen}
              //onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div class="image-zoom-popup-close-btn">
                <button
                  onClick={() => closeModal()}
                  class="popup-close popup-close-btn"
                >
                  <span>×</span>
                </button>
              </div>

              <img src={img} />
            </Modal>
          </div>
        </section>
        <section class="background-cover align-center medium-padding120 need-web hm-need-wab e-port web-app-dev view-portfolio-pg">
          <div class="container">
            <div class="bg-96">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="crumina-module crumina-heading">
                    <h2 class="heading-title home-title">
                      I am still confused and would like guidance from an
                      ecommerce expert.{" "}
                    </h2>
                  </div>

                  <Link
                    to="/popup"
                    class="btn btn-primary btn-market btn--with-shadow js-message-popup let-talk-btn home-talk-btn web-app-dev-btn"
                  >
                    TALK TO US NOW
                  </Link>
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

export default DigitalMarketing;
