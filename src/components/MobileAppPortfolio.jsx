import React, { useState } from "react";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function MobileAppPortfolio() {
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
        <section class="medium-padding120 portfolia-case-section">
          <div class="container">
            <div class="crumina-module crumina-module-img-bottom">
              <div class="row mb60 portfolio-banner-sec">
                <div class="col-lg-7 col-md-12 col-12 col-xxl-7">
                  <div class="crumina-module crumina-heading">
                    <h2 class="heading-title">Mobile App Portfolio</h2>
                    <h3 class="heading-title">
                      It has been observed that a user prefers mobile apps more
                      than websites to shop due to an easy and a smooth
                      navigation.
                    </h3>

                    <div class="crumina-bootom-heading">
                      <h6 className="heading-sup-title">
                        Get a Mobile app developed for your Business. Talk to an
                        Expert.
                      </h6>
                      <Link
                        to="/popup"
                        class="btn btn--gree btn--with-shadow js-message-popup cd-nav-trigger"
                      >
                        Let's Connect Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-lg-5 col-md-4 col-12 col-xxl-5">
                  <div class="portfolio-img-sec">
                    <img src="img/portfolio-img.png" alt="portfolio" />
                  </div>
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
                        src="img/hire/eolveai-mobile_resize.png"
                        alt="case"
                      />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">EvolveAI</h2>

                          <h5 class="title">
                            Built In: React Native, Firebase Cloud Storage,
                            Stripe
                          </h5>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.skynetcoaching.expertsystem&hl=en_IN&gl=US"
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>VISIT APP STORE</span>
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
                            - 1000+ Download
                            <br />
                            - Android and iOS App
                            <br />
                            - Paid Subscription for 3 months, 6 months, 1 year
                            <br />
                            - Paid Training using Recorded and Live Videos
                            <br />
                            - Screen Design Integration from Figma
                            <br />
                            - Readiness Test
                            <br />
                            - Firebase Integration
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
                          <h2 class="title">Ezshopit</h2>

                          <h5 class="title">Built In: React Native</h5>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.ezshopitss"
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>VISIT APP STORE</span>
                            <div class="btn-next">
                              <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg class="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </a>

                          <p class="loaction-text">LOCATION: DUBAI</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - Product/Deals Listing By Category
                            <br />
                            - Add To Cart, Shopping Cart, Checkout, Payment
                            Gateway System
                            <br />
                            - Customer Login, Track Order, Track Shipping Status
                            of Product
                            <br />
                            - Customer Complain, Coupon Offering,
                            <br />
                            - Multiple Vendor, Multiple Currency and Multiple
                            Language Support.
                            <br />
                            - Catalog/Product Inventory Management by Vendor,
                            Manage Shipping
                            <br />
                            - Warehouse Login, Assign Order to Delivery Guy,
                            Update Delivery Status
                            <br />- Admin Section: Approve Product, User,
                            Vendor, Track Sales, Offer Coupons
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/hire/ezshopit.png" alt="case" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section-pr-el margin-top-140">
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
                      <img src="img/hire/twgtea.jpg" alt="case" />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">TWG Tea</h2>

                          <h5 class="title">Built In: React Native</h5>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.twg.twgtea&hl=en_IN&gl=US"
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>VISIT APP STORE</span>
                            <div class="btn-next">
                              <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg class="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </a>

                          <p class="loaction-text">LOCATION: Singapore</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - 5000+ Downloads
                            <br />
                            - Android and iOS App Development
                            <br />
                            - Screen Design using React Native
                            <br />
                            - API Integration with Front-end
                            <br />
                            - Product Listing
                            <br />
                            - Search, Cart, Checkout
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
                          <h2 class="title">Go Gro Local</h2>

                          <h5 class="title">Built In: React</h5>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.customer.gogrolocal"
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>VISIT APP STORE</span>
                            <div class="btn-next">
                              <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg class="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </a>

                          <p class="loaction-text">LOCATION: INDIA</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - Browse online stores near you
                            <br />
                            - Catalog and Product Listing
                            <br />
                            - Add to Cart, Payment System, Checkout
                            <br />
                            - Order Grocery, Clothing, Vegetables, Medicine
                            items
                            <br />
                            - Check Vendor transactions
                            <br />
                            - Sale tracking and Report Generation
                            <br />
                            - Screen Design using Figma
                            <br />
                            - UI/UX App Front-end design
                            <br />
                            - API Development & Integration
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/hire/go-gro-local2.png" alt="case" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section-pr-el margin-top-140">
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
                      <img src="img/hire/login-screen.jpg" alt="case" />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">e-Fitness</h2>

                          <h5 class="title">Built In: Native Android</h5>
                          {/* <!-- <a href="https://www.mypartyjumpers.com/" target="_blank" class="more-arrow white">
												<span>AVAILABLE UPON REQUEST</span>
												<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
												<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
												</div>
											</a> --> */}

                          <p class="loaction-text">LOCATION: India</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - Navigate Gyms
                            <br />
                            - Book a Gym
                            <br />
                            - Paid Subscription
                            <br />
                            - Gym and Trainer Information
                            <br />
                            - Reviews and Ratings.
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
                          <h2 class="title">Your Fastest Delivery App</h2>

                          <h5 class="title">Built In: React Native</h5>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.e3_delivery_apps&hl=en_US&gl=US"
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>VISIT APP STORE</span>
                            <div class="btn-next">
                              <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg class="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </a>

                          <p class="loaction-text">LOCATION: INDIA</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - 100+ Downloads
                            <br />
                            - Delivery Boy Login
                            <br />
                            - Show All Deliveries
                            <br />
                            - Remarks for Successful and Failed Deliveries
                            <br />
                            - API development & Integration
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/hire/fastest-delivery-app.png" alt="case" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section-pr-el margin-top-140">
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
                      <img src="img/hire/expense-management.png" alt="case" />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">Expense Management</h2>

                          <h5 class="title">Built In: React Native</h5>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.e3_expense_management&hl=en_US&gl=US"
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>VISIT APP STORE</span>
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
                            - Add Income/Expense By Category
                            <br />
                            - Generate Expense Report
                            <br />
                            - View Expense By Date
                            <br />
                            - Check Expense Details
                            <br />
                            - API development & Integration
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
                          <h2 class="title">Peer2Peer</h2>

                          <h5 class="title">Built in: React Native</h5>
                          {/* <!-- <a href="#" target="_blank" class="more-arrow white">
												<span>AVAILABLE ON REQUEST</span>
												<div class="btn-next">
													<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
													<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
												</div>
												</a> --> */}

                          <p class="loaction-text">LOCATION: USA</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - B2C App
                            <br />
                            - Find Service Provider near you
                            <br />
                            - Book available Timeslot
                            <br />
                            - Payment system set-up
                            <br />
                            - Mobile App UI/UX Design
                            <br />
                            - API development & Integration
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/hire/peer2peer220-320.jpg" alt="case" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section class="section-pr-el margin-top-140">
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
                      <img src="img/hire/go-gro-local2.png" alt="case" />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">Go Gro Local</h2>

                          <h5 class="title">Built In: React </h5>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.customer.gogrolocal"
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>VISIT APP STORE</span>
                            <div class="btn-next">
                              <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg class="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </a> */}

          {/* <p class="loaction-text">LOCATION: INDIA</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - Browse online stores near you
                            <br />
                            - Catalog and Product Listing
                            <br />
                            - Add to Cart, Payment System, Checkout
                            <br />
                            - Order Grocery, Clothing, Vegetables, Medicine
                            items
                            <br />
                            - Check Vendor transactions
                            <br />
                            - Sale tracking and Report Generation
                            <br />
                            - Screen Design using Figma
                            <br />
                            - UI/UX App Front-end design
                            <br />
                            - API Development & Integration
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          {/* <div class="el el-lecollectionist el-desktop reach">
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
                          <h2 class="title">Gym Forest</h2>

                          <h5 class="title">Built In: React Native</h5>
                          {/* <!-- <a href="https://smartreliefmassage.com/" target="_blank" class="more-arrow white">
												<span>Visit Website</span>
												<div class="btn-next">
													<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
													<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
												</div>
												</a> --> */}

          {/* <p class="loaction-text">LOCATION: INDIA</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/hire/gym-forest-220-320.jpg" alt="case" />
                    </div>
                  </div>
                </div>
              </div> */}
          {/* </div>
          </section> */}

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
        </section>

        <section class="background-cover align-center medium-padding120 more-que-sec">
          <div class="container">
            <div class="bg-96">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="crumina-module crumina-heading">
                    <h2 class="heading-title">
                      Are you worried about the Mobile app cost?
                      <br /> No worries, We offer one of the best deals.
                    </h2>
                  </div>

                  <Link
                    to="/popup"
                    class="btn btn-primary btn-market btn--with-shadow hire-p-sec js-message-popup"
                  >
                    <div class="text">
                      <span class="title">CONSULT US NOW</span>
                    </div>
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

export default MobileAppPortfolio;
