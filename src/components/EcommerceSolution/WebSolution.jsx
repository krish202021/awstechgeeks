import React from 'react'

import { Link } from 'react-router-dom'
function WebSolution() {
    return (
        <div>
            <section class="background-contain pt100 web-solution-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">

                            <div class="crumina-module crumina-heading">
                                <div class="about-us-hedding">
                                    <h2 class="heading-title">Get A Customized Web Solution/Dashboard as per your Business Needs</h2>
                                </div>
                                <h6 class="slider-content-text" data-swiper-parallax="-200" >We work closely with Clients to design custom <strong>Web App Solutions</strong> that help them understand their business statistics and scale.
                                    We have developed Automated Solutions for LED Manufacturing Company, Tour &amp; Travel and IT Companies which they are using to automate their processes.
                                </h6>
                            </div>
                            <Link to='/popup' class="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary js-message-popup">
                                <div class="text">
                                    <span class="title">Get Started Now</span>
                                </div>
                            </Link>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="crumina-module ">
                                <div class="img-thumb">
                                    <img src="img/ecommerce-img.png" alt="app-developmen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default WebSolution