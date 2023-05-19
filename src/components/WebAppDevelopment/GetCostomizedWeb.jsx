import React from 'react'
import { Link } from 'react-router-dom'
function GetCostomizedWeb() {
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
                                <h6 className="slider-content-text">
                                    We work closely with Clients to design <strong>custom Web Application Solutions</strong>  
                                    that help them understand their business statistics and scale it. 
                                    We have developed Automated Solutions for LED Manufacturing Companies, 
                                    Tour & Travel, E-Commerce Companies, Edtech and IT Companies which they are using to 
                                    automate their processes.
                                </h6>
                            </div>
                            <Link to='/popup'>
                                <div className="text">
                                    <span className="title">Get Started Now</span>
                                </div>
                            </Link>
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
                                <figure><img src="img/funny-man-cartoon.png" alt="" /></figure>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-12 col-xxl-9">
                            <div className="crumina-module">
                                <h2 className="heading-title">Why pay recurring monthly subscriptions to 3rd party companies forever?</h2>
                                <h5 className="heading-title">Get a Web application developed by TGAYS Technology to manage all your Business operations from your interface and save monthly charges</h5>

                                <Link to='/popup' className="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary js-message-popup">
                                    <div className="text">
                                        <span className="title">DROP YOUR REQUIREMENT NOW</span>
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

export default GetCostomizedWeb