import CookieConsent, { Cookies } from "react-cookie-consent";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <footer class="footer" id="site-footer">
        <div class="header-lines-decoration">
          <span class="bg-secondary-color"></span>
          <span class="bg-blue"></span>
          <span class="bg-blue-light"></span>
          <span class="bg-orange-light"></span>
          <span class="bg-red"></span>
          <span class="bg-green"></span>
          <span class="bg-secondary-color"></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div class="widget w-info">
                <div class="site-logo">
                  <a class="full-block"></a>

                  <div class="logo-text">
                    <div class="logo-title">
                      {" "}
                      <Link to="/">TGAYS Technology</Link>
                    </div>
                    <div class="logo-sub-title">app specialist</div>
                  </div>
                </div>

                <p>
                  TGAYS(Tech Geeks) Technology has emerged out of technology
                  requirements to provide solutions to Startups and Large-scale
                  Businesses across the Globe. We love to speak with people and
                  help them with all that we have got.
                </p>

                <p>
                  We provide remote staffing to hire dedicated employees in
                  Website, Web Application, and Mobile App development. Our
                  Clients can hire dedicated employees to work exclusively for
                  them from our well-equipped managed office in India.
                </p>
              </div>
            </div>

            <div class="col-lg-2 col-lg-offset-1 col-md-3 col-sm-12 col-sm-offset-0 col-xs-12">
              <div class="widget w-list">
                <h5 class="widget-title">Useful Links</h5>
                <ul class="list list--primary">
                  <li>
                    <Link to="/">Home</Link>
                    <svg class="utouch-icon utouch-icon-arrow-right">
                      <use xlinkHref="#utouch-icon-arrow-right"></use>
                    </svg>
                  </li>
                  <li>
                    <a>Hire a Resource</a>
                    <svg class="utouch-icon utouch-icon-arrow-right">
                      <use xlinkHref="#utouch-icon-arrow-right"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/company">About Company</Link>
                    <svg class="utouch-icon utouch-icon-arrow-right">
                      <use xlinkHref="#utouch-icon-arrow-right"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/pravicy-policy">Privacy Policy</Link>
                    <svg class="utouch-icon utouch-icon-arrow-right">
                      <use xlinkHref="#utouch-icon-arrow-right"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                    <svg class="utouch-icon utouch-icon-arrow-right">
                      <use xlinkHref="#utouch-icon-arrow-right"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                    <svg class="utouch-icon utouch-icon-arrow-right">
                      <use xlinkHref="#utouch-icon-arrow-right"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/career">Career</Link>
                    <svg class="utouch-icon utouch-icon-arrow-right">
                      <use xlinkHref="#utouch-icon-arrow-right"></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-lg-offset-1 col-md-4 col-sm-12 col-sm-offset-0 col-xs-12">
              <div class="widget w-contacts">
                <h5 class="widget-title">Contact with us</h5>
                <div class="contact-item display-flex">
                  <svg class="utouch-icon utouch-icon-telephone-keypad-with-ten-keys">
                    <use xlinkHref="#utouch-icon-telephone-keypad-with-ten-keys"></use>
                  </svg>
                  <span class="info">
                    +91 9319239730
                    <br />
                  </span>
                </div>
                <div class="contact-item display-flex">
                  <svg class="utouch-icon utouch-icon-message-closed-envelope-1">
                    <use xlinkHref="#utouch-icon-message-closed-envelope-1"></use>
                  </svg>
                  <span class="info">
                    info@techsgeeks.in
                    <br />
                    sales@techsgeeks.in
                  </span>
                </div>

                <Link
                  to="/popup"
                  class="btn btn--green full-width btn--with-shadow js-message-popup cd-nav-trigger"
                >
                  Let's Talk
                </Link>
              </div>

              <div class="widget w-follow">
                <ul>
                  <li>Follow Us:</li>
                  <li>
                    <a
                      title="Facebook"
                      href="https://www.facebook.com/tgays.technology"
                      target="blank"
                    >
                      <span>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      title="Linkedin"
                      href="https://www.linkedin.com/company/tgays-technology/"
                      target="blank"
                    >
                      <span>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a title="Youtube" target="blank">
                      <span>
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      title="Download App"
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
        </div>

        <div class="sub-footer">
          <a class="back-to-top">
            <span>
              <i
                class="fa fa-arrow-up"
                aria-hidden="true"
                onClick={scrollToTop}
              ></i>
            </span>
          </a>
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <span>
                  Copyright © 2023{" "}
                  <Link to="/" class="sub-footer__link">
                    TGAYS Technology
                  </Link>{" "}
                  Pvt. Ltd, All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="skyp">
        <a href="skype:webapp.development">
          <i class="fa fa-skype" aria-hidden="true"></i>
        </a>
      </div>
      <WhatsAppWidget
        phoneNo="+919319239730"
        position="right"
        widgetWidth="300px"
        marginRight="100px"
        widgetWidthMobile="260px"
        autoOpen={false}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt="Hi Team, is there any related service available ?"
        iconSize="65"
        iconColor="white"
        iconBgColor="#0083ff"
        headerIcon="/img/logo-tgys.png"
        headerIconColor="blue"
        headerTxtColor="white"
        headerBgColor="#0083ff"
        headerTitle="TechsGeeks"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
        footerBgColor="#999"
        placeholder="Type a message.."
        btnBgColor="#0083ff"
        btnTxt="Start Chat"
        btnTxtColor="white"
      />
      {/* <CookieConsent
        disableStyles={true}
        // location={OPTIONS.BOTTOM}
        buttonClasses="btn btn-primary"
        containerClasses="alert alert-warning col-lg-12"
        contentClasses="text-capitalize"
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent> */}
    </div>
  );
  
}

export default Footer;
