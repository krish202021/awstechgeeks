import React from 'react'
import { Link } from "react-router-dom";

function ChooseProducts() {
    return (
        <div>

            <section className="background-contain bg-13 medium-padding100 pricing-tab-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12 mb60">
                            <div className="crumina-module crumina-heading align-center">
                                {/* <h6 className="heading-sup-title">Choose the product that you really need!</h6> */}
                                <h2 className="heading-title">CUTTING-EDGE TECH STACK WE USE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="pricing-wrap">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div className="crumina-module crumina-pricing-tables-item pricing-tables-item-standard">
                                    <div className="main-pricing-content">
                                        
                                        <h2 className="h1 rate">Front-end Languages</h2>


                                        <div className="pricing-line"></div>

                                        

                                        <ul className="pricing-tables-position">
                                            <li className="position-item">
                                               HTML
                                            </li>
                                            <li className="position-item">
                                               CSS
                                            </li>
                                            <li className="position-item">
                                               Bootstrap
                                            </li>
                                            <li className="position-item ">
                                               React.js
                                            </li>

                                            <li className="position-item">
                                                Angular.js
                                            </li>
                                            <li className="position-item ">
                                               Next.js
                                            </li>
                                            <li className="position-item">
                                               JQuery
                                            </li>
                                            <li className="position-item">
                                               Javacript
                                            </li>
                                            <li className="position-item ">
                                              FIGMA
                                            </li>

                                            <li className="position-item ">
                                               Webflow 
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
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div className="crumina-module crumina-pricing-tables-item pricing-tables-item-standard main-plan">
                                    <div className="main-pricing-content">
                                        
                                        <h2 className="h1 rate">Back-end Languages</h2>


                                        <div className="pricing-line "></div>

                                        

                                        <ul className="pricing-tables-position">
                                            <li className="position-item">
                                            PHP and it’s Framework
                                            </li>
                                            <li className="position-item">
                                            Node.js
                                            </li>
                                            <li className="position-item">
                                            Python
                                            </li>
                                            <li className="position-item">
                                            MySQL
                                            </li>
                                            <li className="position-item">
                                            MongoDB
                                            </li>
                                            <li className="position-item">
                                            Redis
                                            </li>
                                            <li className="position-item">
                                            Postgres
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
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div className="crumina-module crumina-pricing-tables-item pricing-tables-item-standard">
                                    <div className="main-pricing-content">
                                        <h2 className="h1 rate">CRM, CMS & Frameworks</h2>


                                        <div className="pricing-line"></div>

                                        <ul className="pricing-tables-position">
                                            <li className="position-item">
                                            Salesforce(CRM)
                                            </li>
                                            <li className="position-item">
                                            Codeigniter(PHP Framework)
                                            </li>
                                            <li className="position-item">
                                            Laravel(PHP Framework)
                                            </li>
                                            <li className="position-item">
                                            Wordpress(PHP CMS)
                                            </li>
                                            <li className="position-item">
                                            Magento(E-Commerce CMS)
                                            </li>
                                            <li className="position-item">
                                            Drupal(PHP CMS)
                                            </li>
                                            <li className="position-item">
                                            Django(Python Framework)
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
                        </div>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default ChooseProducts