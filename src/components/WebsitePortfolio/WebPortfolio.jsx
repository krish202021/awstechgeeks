import React, { useState } from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function WebPortfolio() {
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

      <div class="content-wrapper portfolia-case-section ecommerce-port-box_section portfolio-box-align-sction">
        <section className="medium-padding120 portfolio-connect-box">
          <div className="container">
            <div className="crumina-module crumina-module-img-bottom">
              <div className="row mb60 portfolio-banner-sec">
                <div className="col-lg-7 col-md-12 col-12 col-xxl-7">
                  <div className="crumina-module crumina-heading">
                    <h6 className="heading-sup-title">Website Portfolio</h6>
                    <h2 className="heading-title">
                      We mix the beautiful with the usable. Have a look at our
                      work!
                    </h2>

                    <div className="crumina-bootom-heading">
                      <h6 className="heading-sup-title">
                        LOOKING FOR A WEBSITE FOR YOUR PRODUCT OR BUSINESS?
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

            <section on class="section-pr-el margin-top-140">
              <div class="container-el">
                <div class="el el-mondocteur el-desktop reach">
                  <div class="illu">
                    <div class="bg bg-product-blue"></div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div
                        class="container-img big col-lg-6 col-md-6 col-sm-12"
                        data-parallax='{"y": -80, "smoothness": 30}'
                      >
                        <img
                          src="img/website-portfolio/AudioItch1.png"
                          alt="case"
                        />
                      </div>

                      <div class="container-text col-lg-6 col-md-6 col-sm-12">
                        <div
                          class="crumina-module crumina-case-item"
                          data-mh="case-item"
                        >
                          <div class="case-item-content">
                            <h2 class="title"> AudioItch</h2>

                            <h5 class="title">Built In: Wordpress</h5>
                            <a
                              href="https://audioitch.com"
                              target="_blank"
                              class="more-arrow white"
                            >
                              <span>Visit Website</span>
                              <div class="btn-next">
                                <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                  <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                                </svg>
                                <svg class="utouch-icon utouch-icon-arrow-right1">
                                  <use xlinkHref="#utouch-icon-arrow-right1"></use>
                                </svg>
                              </div>
                            </a>

                            <p class="loaction-text">LOCATION: USA</p>

                            <h2 class="title high-title">Highlights:</h2>
                            <p>
                              - Design HTML Template using HTML, CSS, Bootstrap
                              <br />
                              - Convert HTML to Wordpress Theme
                              <br />
                              - Page Creation and Plugin Installation
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el el-lecollectionist el-desktop reach">
                  <div class="illu">
                    <div class="bg bg-dark"></div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="container-text col-lg-6 col-md-6 col-sm-12">
                        <div
                          class="crumina-module crumina-case-item"
                          data-mh="case-item"
                        >
                          <div class="case-item-content">
                            <h2 class="title">Vibrant Bihar</h2>

                            <h5 class="title">Built In: Codeigniter4</h5>
                            <a
                              href="https://vibrantbihar.org.in/"
                              target="_blank"
                              class="more-arrow white"
                            >
                              <span>Visit Website</span>
                              <div class="btn-next">
                                <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                  <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                                </svg>
                                <svg class="utouch-icon utouch-icon-arrow-right1">
                                  <use xlinkHref="#utouch-icon-arrow-right1"></use>
                                </svg>
                              </div>
                            </a>

                            <p class="loaction-text">LOCATION: India</p>

                            <h2 class="title high-title">Highlights:</h2>
                            <p>
                              - Template Design using HTML, CSS, Bootstrap
                              <br />
                              - Codeigniter4 Setup on Server
                              <br />
                              - Banner and Logo Design For Website
                              <br />
                              - Template Integration into Codeigniter4
                              <br />
                              - Event Management
                              <br />
                              - Admin Access to manage Events
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="container-img big col-lg-6 col-md-6 col-sm-12"
                        data-parallax='{"y": -80, "smoothness": 30}'
                      >
                        <img
                          src="img/website-portfolio/Vibrant-Bihar-code1.png"
                          alt="case"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section on class="section-pr-el margin-top-140">
              <div class="container-el">
                <div class="el el-mondocteur el-desktop reach">
                  <div class="illu">
                    <div class="bg bg-product-blue"></div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div
                        class="container-img big col-lg-6 col-md-6 col-sm-12"
                        data-parallax='{"y": -80, "smoothness": 30}'
                      >
                        <img
                          src="img/website-portfolio/Get_old_books1.png"
                          alt="case"
                        />
                      </div>

                      <div class="container-text col-lg-6 col-md-6 col-sm-12">
                        <div
                          class="crumina-module crumina-case-item"
                          data-mh="case-item"
                        >
                          <div class="case-item-content">
                            <h2 class="title"> GET OLD BOOKS</h2>

                            <h5 class="title">Built In: Codeigniter4</h5>
                            <a
                              href="https://getoldbooks.com/"
                              target="_blank"
                              class="more-arrow white"
                            >
                              <span>Visit Website</span>
                              <div class="btn-next">
                                <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                  <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                                </svg>
                                <svg class="utouch-icon utouch-icon-arrow-right1">
                                  <use xlinkHref="#utouch-icon-arrow-right1"></use>
                                </svg>
                              </div>
                            </a>

                            <p class="loaction-text">LOCATION: India</p>

                            <h2 class="title high-title">Highlights:</h2>
                            <p>
                              - Website Template Design
                              <br />
                              - Device Responsive Template
                              <br />
                              - Banner and Logo Design For Website
                              <br />
                              - Codeigniter4 Setup on Server
                              <br />
                              - Website Development using Codeigniter4
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el el-lecollectionist el-desktop reach">
                  <div class="illu">
                    <div class="bg bg-dark"></div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="container-text col-lg-6 col-md-6 col-sm-12">
                        <div
                          class="crumina-module crumina-case-item"
                          data-mh="case-item"
                        >
                          <div class="case-item-content">
                            <h2 class="title">My Batchmates</h2>

                            <h5 class="title">Built In: Node.js, React.js</h5>
                            <a
                              href="http://mybatch.club/"
                              target="_blank"
                              class="more-arrow white"
                            >
                              <span>Visit Website</span>
                              <div class="btn-next">
                                <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                  <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                                </svg>
                                <svg class="utouch-icon utouch-icon-arrow-right1">
                                  <use xlinkHref="#utouch-icon-arrow-right1"></use>
                                </svg>
                              </div>
                            </a>

                            <p class="loaction-text">LOCATION: India</p>

                            <h2 class="title high-title">Highlights:</h2>
                            <p>
                              - Signup, Login
                              <br />
                              - Find your batchmates, Send Add Request
                              <br />
                              - Post Memories, Like, Comment on POST
                              <br />
                              - Invite your Batchmates
                              <br />
                              - Check Batcmate Profiles
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="container-img big col-lg-6 col-md-6 col-sm-12"
                        data-parallax='{"y": -80, "smoothness": 30}'
                      >
                        <img
                          src="img/website-portfolio/mybatch-club1.png"
                          alt="case"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section on class="section-pr-el margin-top-140">
              <div class="container-el">
                <div class="el el-mondocteur el-desktop reach">
                  <div class="illu">
                    <div class="bg bg-product-blue"></div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div
                        class="container-img big col-lg-6 col-md-6 col-sm-12"
                        data-parallax='{"y": -80, "smoothness": 30}'
                      >
                        <img
                          src="img/website-portfolio/viral-news-factory1.png"
                          alt="case"
                        />
                      </div>

                      <div class="container-text col-lg-6 col-md-6 col-sm-12">
                        <div
                          class="crumina-module crumina-case-item"
                          data-mh="case-item"
                        >
                          <div class="case-item-content">
                            <h2 class="title"> Viral News Factory</h2>

                            <h5 class="title">Built In: Wordpress</h5>
                            <a
                              href="https://viralnewsfactory.com/"
                              target="_blank"
                              class="more-arrow white"
                            >
                              <span>Visit Website</span>
                              <div class="btn-next">
                                <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                  <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                                </svg>
                                <svg class="utouch-icon utouch-icon-arrow-right1">
                                  <use xlinkHref="#utouch-icon-arrow-right1"></use>
                                </svg>
                              </div>
                            </a>

                            <p class="loaction-text">LOCATION: USA</p>

                            <h2 class="title high-title">Highlights:</h2>
                            <p>
                              - Worpress Setup on Server
                              <br />
                              - Free theme Customization for News Website
                              <br />
                              - Image and Banner Design
                              <br />
                              - LOGO Design
                              <br />
                              - Blog Writing
                              <br />
                              - SEO
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el el-lecollectionist el-desktop reach">
                  <div class="illu">
                    <div class="bg bg-dark"></div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="container-text col-lg-6 col-md-6 col-sm-12">
                        <div
                          class="crumina-module crumina-case-item"
                          data-mh="case-item"
                        >
                          <div class="case-item-content">
                            <h2 class="title">Bermar Collection</h2>

                            <h5 class="title">Built In: Wordpress</h5>
                            <a
                              href="https://bermar.co.uk/"
                              target="_blank"
                              class="more-arrow white"
                            >
                              <span>Visit Website</span>
                              <div class="btn-next">
                                <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                  <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                                </svg>
                                <svg class="utouch-icon utouch-icon-arrow-right1">
                                  <use xlinkHref="#utouch-icon-arrow-right1"></use>
                                </svg>
                              </div>
                            </a>

                            <p class="loaction-text">LOCATION: UK</p>

                            <h2 class="title high-title">Highlights:</h2>
                            <p>
                              - Plugin Development
                              <br />
                              - Woocommerce Integration and Configuration
                              <br />
                              - Wordpress Theme integration and Configuration
                              <br />
                              - Cache and Security Management
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="container-img big col-lg-6 col-md-6 col-sm-12"
                        data-parallax='{"y": -80, "smoothness": 30}'
                      >
                        <img
                          src="img/website-portfolio/bermar2.png"
                          alt="case"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <div className="row square-colored bg-product-blue-dark crumina-case-item web-two">
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
            </div> */}

            {/* <div className="row square-colored bg-product-marrow crumina-case-item web-one">
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
            </div> */}

            {/* <div className="row square-colored bg-dark crumina-case-item web-two">
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
            </div> */}

            {/* <div className="row square-colored bg-product-blue crumina-case-item web-one">
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
            </div> */}

            {/* <div className="row square-colored bg-product-blue-dark crumina-case-item web-two">
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
            </div> */}

            {/* <div className="row square-colored bg-product-marrow crumina-case-item web-one">
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
            </div> */}

            {/* <div className="row square-colored bg-dark crumina-case-item web-two">
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
            </div> */}

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

export default WebPortfolio;
