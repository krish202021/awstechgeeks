import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../components/API/Fetch";
const Header = () => {
  const [data, setData] = useState("");
  const [link, setLink] = useState("");
  function updateHeader() {
    if (data == "block") {
      setData("none");
    } else {
      setData("block");
    }
  }

  const [toggler, setToggler] = useState("");
  const hideShow = (event) => {
    const id = event.currentTarget.id;
    console.log(id, toggler);
    if (toggler == "block") {
      setToggler("none");
      document.getElementById(id).children[0].style.display = "none";
    } else {
      setToggler("block");
      document.getElementById(id).children[0].style.display = "block";
    }
  };
  // function hideShow(event) {
  //   const id = event.target.id;
  //   console.log(id, toggler);
  //   if (toggler == "block") {
  //     setToggler("none");
  //     document.getElementById(id).style.display = "none";
  //   } else {
  //     setToggler("block");
  //     document.getElementById(id).style.display = "block";
  //   }
  // }

  useEffect(() => {
    const data = { token: "token" };
    API.get(data, "user/social-link").then((res) => {
      if (res) {
        console.log(res);
        setLink(res.result);
      } else {
        console.log("token mismatch");
      }
    });
  }, []);
  return (
    <div>
      <header className="header" id="site-header">
        <div className="header-lines-decoration">
          <span className="bg-secondary-color"></span>
          <span className="bg-blue"></span>
          <span className="bg-blue-light"></span>
          <span className="bg-orange-light"></span>
          <span className="bg-red"></span>
          <span className="bg-green"></span>
          <span className="bg-secondary-color"></span>
        </div>

        <div className="container">
          <div className="header-content-wrapper">
            <div className="site-logo">
              <Link to="/" className="full-block"></Link>
              <img
                src={process.env.PUBLIC_URL + "/img/logo-tgys.png"}
                alt="Utouch"
              />
              {/* <!-- <div className="logo-text">
                <div className="logo-title">Utouch</div>
                <div className="logo-sub-title">app startup</div>
            </div> --> */}
            </div>

            <div className="phone-mail-sec">
              <ul>
                <li>
                  <a title="">
                    <img
                      src={process.env.PUBLIC_URL + "/img/envelope-open.png"}
                      alt=""
                    />{" "}
                    info@techsgeeks.in
                  </a>
                </li>

                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/img/ind-mp.png"}
                    alt="ind"
                  />
                  <a title="">+91 9319239730</a>
                </li>
              </ul>
            </div>

            <div className="top-head-social-icon">
              {/* <ul>
                {link
                  ? link.map((item, index) => {
                      return (
                        <li>
                          <a
                            title=""
                            key={index}
                            href={item.link}
                            target="blank"
                          >
                            <span>
                              <i className={item.icon} aria-hidden="true"></i>
                            </span>
                          </a>
                        </li>
                      );
                    })
                  : ""}
              </ul> */}
              <ul>
                <li title="Facebook">
                  <a
                    href="https://www.facebook.com/tgays.technology"
                    target="blank"
                  >
                    <span>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li title="Linkedin">
                  <a
                    href="https://www.linkedin.com/company/tgays-technology/"
                    target="blank"
                  >
                    <span>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li title="Youtube">
                  <a target="blank">
                    <span>
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li title="Download App">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tgays.techsgeeks"
                    target="blank"
                  >
                    <span>
                      <i class="fa-brands fa-google-play"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="Navigation-sec">
        <div className="container">
          <nav id="primary-menu" className="primary-menu">
            <button
              className="navbar-toggler react-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={updateHeader}
            >
              <span className="navbar-toggler-icon">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </button>
            {/* <ul className="primary-menu-menu react-menu-section" style={{ display: data }}></ul> */}
            <ul
              className="primary-menu-menu react-menu-section"
              style={{ display: data }}
            >
              <li className="menu-item-has-children">
                <Link to="/">HOME</Link>
              </li>

              <li class="hire-nw" id="showHideHire" onClick={hideShow}>
                HIRE
                <ul class="sub-menu hire-nw-submenu">
                  <li>
                    <Link to="/hire-php">CODEIGNITER DEVELOPER</Link>
                  </li>

                  <li>
                    <Link to="/hire-laravel">LARAVEL DEVELOPER</Link>
                  </li>

                  <li>
                    <Link to="/hire-node">NODE DEVELOPER</Link>
                  </li>
                  <li>
                    <Link to="/hire-react">REACT.JS DEVELOPER</Link>
                  </li>

                  <li>
                    <Link to="/hire-reactnative">REACT NATIVE DEVELOPER</Link>
                  </li>

                  <li>
                    <Link to="/hire-wordPress">WORDPRESS DEVELOPER</Link>
                  </li>

                  <li>
                    <Link to="/hire-ui-ux-designer">UI/UX DESIGNER</Link>
                  </li>
                  {/* <li>
                    <Link to="#">PYTHON DEVELOPER</Link>
                  </li> */}
                  {/* <li>
                    <Link to="#">SALESFORCE DEVELOPER</Link>
                  </li> */}
                </ul>
              </li>

              <li class="at" id="showHideAt" onClick={hideShow}>
                ABOUT
                <ul class="sub-menu at-sub-menu">
                  <li>
                    <Link to="/company">COMPANY</Link>
                  </li>
                  <li>
                    <Link to="/why-us">WHY TGAYS?</Link>
                  </li>
                  <li>
                    <Link to="/our-achievment">ACHIEVEMENTS</Link>
                  </li>
                </ul>
              </li>

              <li
                className="menu-item-has-mega-menu menu-item-has-children prtfolio"
                id="showHidePort"
                onClick={hideShow}
              >
                PORTFOLIO
                <div className="megamenu with-products prtfolio-mega">
                  <div className="megamenu-row">
                    <div className="col3" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-dark"></div>
                          <img
                            src={process.env.PUBLIC_URL + "/img/e-commerce.png"}
                            alt="product"
                          />
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">E-COMMERCE</h6>
                          <Link
                            to="/ecommerce-portfolio"
                            className="more-arrow"
                          >
                            <span>VIEW PORTFOLIO</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col3" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-blue-dark"></div>
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/product-item3.jpg"
                            }
                            alt="product"
                          />
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">WEB APP</h6>
                          <Link to="/web-app-portfolio" className="more-arrow">
                            <span>VIEW PORTFOLIO</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col3" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-blue"></div>
                          <img
                            src={process.env.PUBLIC_URL + "/img/mobile-app.png"}
                            alt="product"
                          />
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">MOBILE APP</h6>
                          <Link
                            to="/mobile-app-portfolio"
                            className="more-arrow"
                          >
                            <span>VIEW PORTFOLIO</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col3" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-orange"></div>
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/product-item2.jpg"
                            }
                            alt="product"
                          />
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">WEBSITE</h6>
                          <Link to="/website-portfolio" className="more-arrow">
                            <span>VIEW PORTFOLIO</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* <div className="col3" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-blue-dark"></div>
                          <img
                            src={
                              process.env.PUBLIC_URL + "/img/product-item4.jpg"
                            }
                            alt="product"
                          />
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">DIGITAL MARKETING</h6>
                          <Link to="/digital-marketing" className="more-arrow">
                            <span>VIEW PORTFOLIO</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </li>

              <li className="servic-nv" id="shodHideServe" onClick={hideShow}>
                SERVICES
                <ul className="sub-menu servic-nv-submenu">
                  <li>
                    <Link to="/web-app-development">WEB DEVELOPMENT</Link>
                  </li>

                  <li>
                    <Link to="/mobile-app">MOBILE APP DEVELOPMENT</Link>
                  </li>

                  <li>
                    <Link to="/sale-force-crm">SALESFORCE CRM DEVELOPMENT</Link>
                  </li>

                  <li>
                    <Link to="/customized-crm-development">
                      CUSTOMIZED CRM DEVELOPMENT
                    </Link>
                  </li>

                  <li>
                    <Link to="/business-intelligence-reporting">
                      BUSINESS INTELLIGENCE & REPORTING
                    </Link>
                  </li>

                  <li>
                    <Link to="/full-cycle-product-development">
                      FULL-CYCLE PRODUCT DEVELOPMENT
                    </Link>
                  </li>

                  <li>
                    <Link to="/ecommerce-solution">
                      E-COMMERCE WEBSITE AND MOBILE APP DEVELOPMENT
                    </Link>
                  </li>

                  <li>
                    <Link to="/progressive-web-app">
                      PROGRESSIVE WEB APP DEVELOPMENT
                    </Link>
                  </li>

                  <li>
                    <Link to="/digital-marketing">
                      Digital Marketing(SEO, SEM, PPC)
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/web-app-service">
                      {" "}
                      WEBSITE DESIGN & DEVELOPMENT
                    </Link>
                  </li> */}

                  {/* <li>
                    <Link to="/website-maintanence">
                      WEBSITE MAINTENANCE & SECURITY
                    </Link>
                  </li> */}

                  {/* <li>
                    <Link to="/magneto-development">
                      MAGENTO FRONT-END AND BACK-END DEVELOPMENT
                    </Link>
                  </li> */}
                  {/* 
                  <li>
                    <Link to="/wordpress-development">
                      WORDPRESS DEVELOPMENT
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li
                className="menu-item-has-mega-menu menu-item-has-children scss-stories"
                id="showHideSuccess"
                onClick={hideShow}
              >
                SUCCESS STORIES
                <div className="megamenu with-products scss-stories-mega-menu">
                  <div className="megamenu-row">
                    <div className="col4" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-blue"></div>
                          <Link to="/served-more" className="more-arrow">
                            <img
                              src={process.env.PUBLIC_URL + "/img/rich.png"}
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">
                            10 years of working together{" "}
                          </h6>
                          <Link to="/served-more" className="more-arrow">
                            <span>View Details</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col4" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-violet"></div>
                          <Link
                            to="/ecommerce-complete-solution"
                            className="more-arrow"
                          >
                            <img
                              src={process.env.PUBLIC_URL + "/img/franc.jpg"}
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">
                            Collaboration with KIA-GTS LLC Dubai
                          </h6>
                          <Link
                            to="/ecommerce-complete-solution"
                            className="more-arrow"
                          >
                            <span>View Details</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col4" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-red"></div>
                          <Link
                            to="/service-provider-app"
                            className="more-arrow"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL + "/img/worthmetrix.png"
                              }
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">
                            Worthmetrix - Business Worth Calculator
                          </h6>
                          <Link
                            to="/service-provider-app"
                            className="more-arrow"
                          >
                            <span>View Details</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col4" data-mh="product-item">
                      <div className="product-item">
                        <div className="product-item-thumb">
                          <div className="square-colored bg-product-blue-dark"></div>
                          <Link to="/digital-art-club" className="more-arrow">
                            <img
                              src={process.env.PUBLIC_URL + "/img/thomas.png"}
                              alt="product"
                            />
                          </Link>
                        </div>
                        <div className="product-item-content">
                          <h6 className="title">DIGITAL ART CLUB</h6>
                          <Link to="/digital-art-club" className="more-arrow">
                            <span>View Details</span>
                            <div className="btn-next">
                              <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                              </svg>
                              <svg className="utouch-icon utouch-icon-arrow-right1">
                                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="https://techsgeeks.in/blog">BLOG</a>
              </li>

              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
