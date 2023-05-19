import React from 'react'

import { Link } from 'react-router-dom'
function CustomizedWebSolution() {
    return (
        <div>

            <section className="background-contain pt100 web-solution-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">

                            <div className="crumina-module crumina-heading">
                                <div className="about-us-hedding">
                                    <h2 className="heading-title">Get A Customized Web Solution/Dashboard as per your Business Needs</h2>
                                </div>
                                <h6 className="slider-content-text" data-swiper-parallax="-200" >We work closely with Clients to design custom <strong>Web App Solutions</strong> that help them understand their business statistics and scale.
                                    We have developed Automated Solutions for LED Manufacturing Company, Tour &amp; Travel and IT Companies which they are using to automate their processes.
                                </h6>
                            </div>
                            <Link to='/popup' className="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary js-message-popup">
                                <div className="text">
                                    <span className="title">Get Started Now</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="crumina-module ">
                                <div className="img-thumb">
                                    <img src="img/Magento.Cloud.png" alt="app-developmen" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section class="crumina-module background-contain subscription-change-section">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-3 col-xxl-3">
                            <div class="client-sec-img">
                                <figure><img src="img/funny-man-cartoon.png" alt="" /></figure>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-12 col-xxl-9">
                            <div class="crumina-module">
                                <h2 class="heading-title">Why to pay monthly subscription charges?</h2>
                                <h2 class="heading-title">Get a web application developed to manage <br /> your Business operations 100%.</h2>

                                <Link to='/popup' class="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary js-message-popup">
                                    <div class="text">
                                        <span class="title">DROP A MESSAGE NOW</span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CustomizedWebSolution