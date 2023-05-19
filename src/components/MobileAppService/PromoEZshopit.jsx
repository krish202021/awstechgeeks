import React from 'react'
import { Link } from "react-router-dom";

function PromoEZshopit() {
    return (
        <div>

            <section class="background-cover align-center medium-padding120 chck-app">
                <div class="container">
                    <h2 class="heading-title">Elevate Your Business with our Expert Mobile App Development Services!</h2>
                    <div class="row">

                        <div class="col-lg-5 col-md-5 col-12 col-xxl-5">
                            <div class="check-mobile-app">
                                <img src="img/removebg-preview.png" alt="" />
                            </div>
                        </div>

                        <div class="col-lg-7 col-md-7 col-12 col-xxl-7 text_box_chck-app">
                            <div class="crumina-module crumina-heading">

                                <p class="heading-text">Our team of skilled developers will transform your ideas into innovative and user-friendly mobile applications that cater to modern devices. With seamless user experiences and cutting-edge technology, we'll help you stay ahead of the competition and unlock the full potential of your business. Don't miss out on the opportunity to enhance your brand's visibility and engage with customers on the go. Contact us today and let's bring your mobile app vision to life!</p>
                            </div>

                           

                            

                            <Link to="/web-app-portfolio" className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger ">
                                <div className="text">
                                <span className="title">WEB APP PORTFOLIO</span>
                                </div>
                                </Link>



                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default PromoEZshopit