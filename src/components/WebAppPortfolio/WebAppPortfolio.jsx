import React, { useState } from "react";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Slider from "../EcommercePortfolio/Slider";
import Slider from "../WebAppPortfolio/Slider";

function WebAppPortfolio() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const [showslide, setShowslide] = useState(false);
  const [imgname, setImgname] = useState("");
  const [filename, setFilename] = useState("");
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

  const show = (imgname, filename) => {
    window.scrollTo(0, 0);
    setImgname(imgname);
    setFilename(filename);
    setShowslide(true);
  };

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
      <div class="content-wrapper portfolio-box-align-sction portfolia-case-section">
        <section class="medium-padding120 portfolio-connect-box">
          <div class="container">
            <div class="crumina-module crumina-module-img-bottom">
              <div class="row mb60 portfolio-banner-sec">
                <div class="col-lg-7 col-md-12 col-12 col-xxl-7">
                  <div class="crumina-module crumina-heading">
                    <h2 class="heading-title">Web Application Portfolio</h2>
                    <h3 class="heading-title">
                      Seamlessly connect with your customers by getting an
                      intuitive web application developed.
                    </h3>

                    <div class="crumina-bootom-heading">
                      <h6 class="heading-sup-title">
                        Do you need a website or a web application for your
                        Business?
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
                      <img src="img/ezshopit(1).png" alt="case" />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">Ezshopit</h2>

                          <h5 class="title">Framework: Codeigniter</h5>
                          <a
                            href="https://ezshopit.com/"
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
                          <h2 class="title">Tommygun Art Club</h2>

                          <h5 class="title">Framework: Codeigniter</h5>
                          <a
                            onClick={() => show("tommygun", "tommygun")}
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>View Slide</span>
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
                            - Website Design (Frontend and Admin)
                            <br />
                            - Sign Up, Login, Forget Password, Newsletter Sign
                            Up, Assign Points
                            <br />
                            - Shopping Cart, Art Gallery, Start a Contest, Vote
                            on a Contest
                            <br />
                            - First Data Payment Gateway Integration, Track
                            Order
                            <br />
                            - Admin Settings, Track Payments, Track Registered
                            Users,
                            <br />- Manage Artist, Contest, Track Member Points,
                            Manage Emails
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/tommygun.png" alt="case" />
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
                      <img
                        src="img/hire/management-login-form.png"
                        alt="case"
                      />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">Business Management Application</h2>

                          <h5 class="title">Framework: Codeigniter</h5>

                          <a
                            onClick={() =>
                              show("management_website", "management_website")
                            }
                            target="_blank"
                            class="more-arrow white"
                          >
                            <span>View slide</span>
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
                            - Multi-user Interface
                            <br />
                            - Mark/View Attendance
                            <br />
                            - Mark/View Leave
                            <br />
                            - Manage Lead
                            <br />
                            - Manage Clients
                            <br />
                            - Manage Projects
                            <br />
                            - Manage Team
                            <br />
                            - Manage Tasks
                            <br />
                            - Manage Marketing/Sales
                            <br />- Manage Income/Expense
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
                          <h2 class="title">Bolton Travel Quotation CRM</h2>

                          <h5 class="title">Framework : Laravel</h5>
                          <a
                            onClick={() =>
                              show(
                                "bolton_travel_business",
                                "bolton_travel_business"
                              )
                            }
                            //target="_blank"
                            class="more-arrow white"
                          >
                            <span>View slide</span>
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
                            - Quotation Feeding in the System, Preview Quotation
                            <br />
                            - Quotation Generation in PDF Format
                            <br />
                            - Invoice Generation, Invoice Sending to Customers
                            <br />
                            - Manage Supplier Data, Download Supplier Data in
                            Excel Format
                            <br />
                            - Hotel Accommodation & Flight Booking Management
                            <br />
                            - Manage KYC, Manage Client Payment
                            <br />
                            - View Sales Report
                            <br /> - Generate Hotel Voucher
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img
                        src="img/hire/bolton-travel-quotation.png"
                        alt="case"
                      />
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
                      <img src="img/hire/bolton-login.png" alt="case" />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">Bolton Travel Business CRM</h2>

                          <h5 class="title">Framework: Node, React</h5>
                          <a
                            onClick={() =>
                              show(
                                "bolton_travel_business",
                                "bolton_travel_business"
                              )
                            }
                            //target="_blank"
                            class="more-arrow white"
                          >
                            <span>View slide</span>
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
                            - Manage Employee
                            <br />
                            - Manage Employee Task
                            <br />
                            - Manage Sales Tracker
                            <br />
                            - Manage Brightson
                            <br />
                            - Manage Tour
                            <br />
                            - Manage Transfer
                            <br />
                            - Manage Client Outstanding
                            <br />- Manage Hotel
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
                          <h2 class="title">School Management System</h2>

                          <h5 class="title">Framework: Codeigniter</h5>
                          <a
                            onClick={() =>
                              show(
                                "School_Management_System",
                                "School_Management_System"
                              )
                            }
                            //target="_blank"
                            class="more-arrow white"
                          >
                            <span>View slide</span>
                            <div class="btn-next">
                              <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg class="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </a>

                          <p class="loaction-text">Location: India</p>

                          <h2 class="title high-title">Highlights:</h2>
                          <p>
                            - Students/Parents Login with Unique ID
                            <br />
                            - View Monthly attendance, Fee deposition details
                            <br />
                            - View Annual report, Annual progress by class and
                            subjects
                            <br />
                            - Receives text notifications from their schools
                            <br />
                            - Admin: Create School Login, Get Report on Total
                            Schools & Students Enrolled, Manage Franchisee,
                            Latest Career News
                            <br />
                            - Schools: Login, Add Students, Add Staff, Send
                            Notifications to Students, Manage Students
                            Attendance, Fee, Annual Report
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/hire/school1.png" alt="school" />
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
                      <img
                        src="img/hire/worthmetrix2.png"
                        alt="worthmetrix_image"
                      />
                    </div>

                    <div class="container-text col-lg-6 col-md-6 col-sm-12">
                      <div
                        class="crumina-module crumina-case-item"
                        data-mh="case-item"
                      >
                        <div class="case-item-content">
                          <h2 class="title">Worthmetrix</h2>

                          <h5 class="title">Framework: Codeigniter</h5>
                          <a
                            href="https://worthmetrix.com/"
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
                            - Signup, Login, Reset Password - Company Profile
                            Entry
                            <br />
                            - Last 5 years financial data entry
                            <br />
                            - Paypal Payment method integrated
                            <br />
                            - Report Generation by the Application
                            <br />
                            - Business health analysis report
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
                          <h2 class="title">Oktaxrolls</h2>

                          <h5 class="title">Framework: Codeigniter</h5>
                          <a
                            href="https://oktaxrolls.com/"
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
                            - Tax paying portal for Individual/Businesses
                            <br />
                            - Pay taxes by County(USA)
                            <br />
                            - Search Tax payer name and details
                            <br />
                            - Search By name, property id
                            <br />
                            - Scan Barcode, Pay taxes, Generate report
                            <br />
                            - Check tax history, ACL system for admin
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="container-img big col-lg-6 col-md-6 col-sm-12"
                      data-parallax='{"y": -80, "smoothness": 30}'
                    >
                      <img src="img/hire/tax-consulting12.png" alt="case" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
        <section class="background-cover align-center medium-padding120 need-web hm-need-wab e-port web-app-dev view-portfolio-pg">
          <div class="container">
            <div class="bg-96">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="crumina-module crumina-heading">
                    <h2 class="heading-title home-title">
                      I am still confused and would like guidance from an
                      expert.
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

      {showslide ? (
        <div class="close-slider-btn">
          <button onClick={() => setShowslide(false)}>
            <span>×</span>
          </button>
          <Slider img={imgname} file={filename}></Slider>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
}

export default WebAppPortfolio;
