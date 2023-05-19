import React from 'react'
import { Link } from "react-router-dom";

function PricingTable() {
    return (
        <div>

            <section class="background-contain bg-13 medium-padding100 pricing-tab-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12 mb60">
                            <div class="crumina-module crumina-heading align-center">
                                
                                <h2 class="heading-title">CUTTING-EDGE TECH STACK FOR MOBILE APP DEVELOPMENT:</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="pricing-wrap">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-standard">
                                    <div class="main-pricing-content">
                                        
                                        <h2 class="h1 rate">MOBILE APP DEVELOPMENT</h2>


                                        <div class="pricing-line"></div>

                                        

                                        <ul class="pricing-tables-position">
                                            <li class="position-item">
                                            Android and iOS using React Native
                                            </li>
                                            <li class="position-item">
                                            Fluttr
                                            </li>
                                            <li class="position-item">
                                            Native Android
                                            </li>
                                            <li class="position-item">
                                            Website to Mobile App
                                            </li>
                                        </ul>

                                        <Link
                                            to="/popup"
                                            className="btn btn--red get-btn btn-primary btn--with-shadow cd-nav-trigger js-message-popup pincing-read-more"
                                        >
                                            Consult Now
                                        </Link>

                                    </div>


                                </div>
                            </div>
                            {/* <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-standard main-plan">
                                    <div class="main-pricing-content">
                                        <h5 class="pricing-title">Premium Plan</h5>
                                        <h2 class="h1 rate">$<span class="price">3000-10,000</span></h2>


                                        <div class="pricing-line "></div>

                                        <p class="pricing-description">Benefits of Basic Plan with Additional Features.</p>

                                        <ul class="pricing-tables-position">
                                            <li class="position-item">
                                                Maximum 800 Hours Work according to Project Size
                                            </li>
                                            <li class="position-item">
                                                1.5 Month Free Support After Completion
                                            </li>
                                            <li class="position-item">
                                                30% Upfront Fee
                                            </li>
                                            <li class="position-item del">
                                                Native App Development
                                            </li>
                                            <li class="position-item">
                                                Free Google Playstore Account
                                            </li>
                                            <li class="position-item del">
                                                Free Apple Store Account(Only 1st year)
                                            </li>
                                            <li class="position-item">
                                                React Native(Android+IPhone)
                                            </li>
                                            <li class="position-item">
                                                Back-End(PHP+MySQL)

                                            </li>
                                            <li class="position-item">

                                                Back-End(Node+Mongo for Budget = $8000)
                                            </li>
                                            <li class="position-item">

                                                AWS Server Support
                                            </li>
                                        </ul>

                                        <p class="sub-description">Suitable for All Medium-Sized Mobile Apps.</p>

                                        <button type="" class="pincing-read-more">READ MORE</button>
                                    </div>



                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-standard">
                                    <div class="main-pricing-content">
                                        <h5 class="pricing-title">Business Plan</h5>
                                        <h2 class="h1 rate">$<span class="price">10,000+</span></h2>


                                        <div class="pricing-line"></div>

                                        <p class="pricing-description">Basic Plan will include basic features like:</p>

                                        <ul class="pricing-tables-position">
                                            <li class="position-item del">
                                                Minimum 800 Hours Work according to Project Size
                                            </li>
                                            <li class="position-item">
                                                2 Month Free Support After Completion
                                            </li>
                                            <li class="position-item">
                                                30% Upfront Fee
                                            </li>
                                            <li class="position-item">
                                                Native App Development
                                            </li>
                                            <li class="position-item">
                                                Free Google Playstore Account
                                            </li>
                                            <li class="position-item">
                                                Free Apple Store Account(Only 1st year)
                                            </li>
                                            <li class="position-item">
                                                React Native(Android+IPhone)
                                            </li>
                                            <li class="position-item">
                                                Back-End(PHP+MySQL)
                                            </li>
                                            <li class="position-item">
                                                Back-End(Node+Mongo)
                                            </li>
                                            <li class="position-item">

                                                AWS Server Support
                                            </li>
                                        </ul>
                                        <p class="sub-description">Suitable for Large Scale Mobile Applications.</p>

                                        <button type="" class="pincing-read-more">READ MORE</button>
                                    </div>

                                </div>
                            </div> */}
                        </div>
                    </div>

                    
                </div>
            </section>
        </div>
    )
}

export default PricingTable