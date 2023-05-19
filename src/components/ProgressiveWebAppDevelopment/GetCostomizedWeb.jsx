import React from "react";
import { Link } from "react-router-dom";
function GetCostomizedWeb() {
  return (
    <div>
      <section className="background-contain pt100 web-solution-section">
        <div className="container">
          <div className="row">
          
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
              <div className="crumina-module crumina-heading">
                <div className="about-us-hedding">
                  <h2 className="heading-title">
                  Transform Your Website into a Lightning-Fast, Engaging Progressive Web App with Our Services!
                  </h2>
                </div>
                <h6 className="slider-content-text">
                In today's fast-paced digital world, delivering a seamless and engaging user 
                experience on the web is more important than ever. With the advent of Progressive 
                Web Apps (PWAs), businesses and developers have a powerful tool at their disposal to enhance user experience and drive better results.
                </h6>
                <h6 className="slider-content-text">
                Progressive Web Apps are web applications that combine the best of both worlds: the 
                performance and accessibility of a website with the functionality and interactivity 
                of a native app. PWAs are built using web technologies such as HTML, CSS, and JavaScript, 
                and they can be accessed through a web browser or installed on a user's home screen, 
                just like a traditional app. One of the key features of PWAs is their ability to work 
                offline, providing a seamless experience even in low or no internet connectivity situations.
                </h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="crumina-module ">
                <div className="img-thumb">
                  <img src="img/Web-App-Development-img.png" alt="app-developmen" />
                </div>
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
                Stay Ahead of the Competition with Our Innovative Progressive Web App Services!
                </h2>
                <h5 className="heading-title">
                Progressive Web Apps (PWAs) have emerged as a powerful tool for delivering a seamless 
                user experience on the web. PWAs combine the best of both worlds: the performance 
                and accessibility of a website with the functionality and interactivity of a native app. 
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
