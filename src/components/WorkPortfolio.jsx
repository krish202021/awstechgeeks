import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import Footer from '../includes/Footer'
import Header from '../includes/Header'
import Modal from 'react-modal';
import ModelPopup from './ModelPopup';
import ShowWorkPortfolio from './WorkPortfolioSection/ShowWorkPortfolio';
import Contact from './Common/Contact';
function WorkPortfolio() {
    const history = useHistory();
    const [tabType, setTabType] = useState('all')
    const [modalIsOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState('');
    const toggleMe = (value) => {
        setTabType(value)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const action = (img) => {
        setIsOpen(true);
        setImg(img)
        // history.push({
        //     pathname: `/imagepop`,
        //     state: { img: img },
        // });
    }

    return (
        <div>
            <Header />


            <section class="medium-padding100 meet-team-section wrk-prt">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                            <div class="crumina-module crumina-heading align-center">
                                <h2 class="heading-title">Meet Our <span class="c-primary">Leaders</span></h2>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                                <div class="team-info">
                                        <div class="team-frant">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5 col-5 col-xxl-5 mobile-screen">
                                                    <img src="img/jamal.jpg" alt=""/>
                                                </div>
                                                <div class="col-lg-7 col-md-7 col-7 col-xxl-7 m-details mobile-screen">
                                                    <h3 class="haeding-title">Jamal Ashraf</h3>
                                                    <p>Chairman & Director</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="back-hover">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                                                    <h3 class="haeding-title">Jamal Ashraf</h3>
                                                    <p>Founder & Director</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                                <div class="team-info">
                                        <div class="team-frant">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5 col-5 col-xx-5 mobile-screen">
                                                    <img src="img/vikash-kumar.png" alt="..."/>
                                                </div>
                                                <div class="col-lg-7 col-md-7 col-7 col-xxl-7 mobile-screen m-details">
                                                    <h3 class="haeding-title">Vikash Kumar</h3>
                                                    <p>CTO & Director</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="back-hover">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                                                    <h3 class="haeding-title">Vikash Kumar</h3>
                                                    <p>CTO & Director</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>
                                
                                
                                <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                                <div class="team-info">
                                        <div class="team-frant">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5 col-5 col-xxl-5 mobile-screen">
                                                    <img src="img/prince-singh.png" alt="prince-singh"/>
                                                </div>
                                                <div class="col-lg-7 col-md-7 col-7 col-xxl-7 mobile-screen m-details">
                                                    <h3 class="haeding-title">Prince Singh</h3>
                                                    <p>Project Lead - Web & Mobile App</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="back-hover">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                                                    <h3 class="haeding-title">Prince Singh</h3>
                                                    <p>Project Lead - Web & Mobile App</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>
                                
                                
                                <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                                    <div class="team-info">
                                        <div class="team-frant">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5 col-5 col-xxl-5 mobile-screen">
                                                    <img src="img/kishan-b-w.jpg" alt=""/>
                                                </div>
                                                <div class="col-lg-7 col-md-7 col-7 col-xxl-7 mobile-screen m-details">
                                                    <h3 class="haeding-title">Kishan Singh</h3>
                                                    <p>Project Lead - MOBILE APP</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="back-hover">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                                                    <h3 class="haeding-title">Kishan Singh</h3>
                                                    <p>Project Lead - MOBILE APP</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                                    <div class="team-info">
                                        <div class="team-frant">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5 col-5 col-xxl-5 mobile-screen">
                                                    <img src="img/gaurav-ui-ux.png" alt=""/>
                                                </div>
                                                <div class="col-lg-7 col-md-7 col-7 col-xxl-7 mobile-screen m-details">
                                                    <h3 class="haeding-title">Gaurav Kumar</h3>
                                                    <p>UI/UX DESIGNER</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="back-hover">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                                                    <h3 class="haeding-title">Gaurav Kumar</h3>
                                                    <p>UI/UX DESIGNER</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                                    <div class="team-info">
                                        <div class="team-frant">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5 col-5 col-xxl-5 mobile-screen">
                                                    <img src="img/vivek.png" alt=""/>
                                                </div>
                                                <div class="col-lg-7 col-md-7 col-7 col-xxl-7 mobile-screen m-details">
                                                    <h3 class="haeding-title">Vivek Kumar</h3>
                                                    <p>UI/UX DESIGNER</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="back-hover">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                                                    <h3 class="haeding-title">Vivek Kumar</h3>
                                                    <p>UI/UX DESIGNER</p>
                                                    <div class="social-icon">
                                                        <ul>
                                                            <li><a href="#" title=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" title=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="process section-padding bg-img bg-fixed pos-re text-center work-specialize-sec">
                <div class="container">
                    <div class="row">
                        <div class="crumina-module crumina-heading">
                            <h2 class="heading-title">WHAT WE <span class="c-primary">SPECIALIZE</span>  IN:</h2>
                        </div>
                        <div class="full-width clearfix"></div>
                        
                        
                        
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="item first mb-md50">
                            <img src="img/arrow.png" class="tobotm" alt=""/>
                            <h3 class="icon icon-basic-lightbulb">1</h3>
                            <div class="cont">
                                <h6>Website Front-end development</h6>
                                <p>using HTML, CSS, Bootstrap, Jquery, React.js, Angular.js, Figma, Webflow. We follow the most standard practices when it comes to rendering website design.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="item odd mb-md50 manage-botm">
                            <img src="img/arrow.png" alt=""/>
                            <h3 class="icon icon-basic-lightbulb">2</h3>
                            <div class="cont">
                                <h6>Website Back-end Development</h6>
                                <p>using Codeigniter4, Laravel, Node.js, MySQL, MongoDB, API Development and Customization using REST, Third-party API Integration etc. Our developers follow a Unit testing approach and take care of standard code implementation & review, load balancing, proper error log and reporting system in a scrum environment.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="item mb-sm50 multi-cummu-section basic-five-sec">
                            {/* <img src="img/arrow.png" class="tobotm" alt=""/> */}
                            <h3 class="icon icon-basic-lightbulb">3</h3>
                            <div class="cont">
                                <h6>Mobile App Development</h6>
                                <p>using React Native, Native Android, Kotlin as front-end and PHP/CI/Laravel/Node.js/Mysql or MongoDB  as back-end development.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                        <div class="crumina-module crumina-heading make-unique-sec text-left">
                            <h2 class="heading-title">WHAT MAKES US <span class="c-primary"> UNIQUE:</span></h2>
                            <p>We follow the best practices that you generally find in big MNC's following. We do have dedicated testers to test your website/mobile app by maintaining all the test cases in proper sheets. Not only this, we provide a Scrum Master to manage the team/developer in Scrum working environment and track the developer performances, define sprint, raise tickets for developers, designers and testers, get their work uploaded on GitHub and track their work. We do a deep research into your Business domain, your market, your competitors and combine it to create a high-converting website that can generate more Profit from Day1.</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <section class="align-center medium-padding100 case-project-sec graphic-case show-work-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="crumina-module crumina-heading">
                                <h2 class="heading-title hire-heading">Work <span class="c-primary">Portfolio</span></h2>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <ul class="cat-list-bg-style sorting-menu">
                                <li class={"cat-list__item" + ' ' + `${tabType == 'all' ? 'active' : ''}`} ><a onClick={() => toggleMe('all')} class="">All</a></li>
                                <li class={"cat-list__item" + ' ' + `${tabType == 'website' ? 'active' : ''}`} ><a onClick={() => toggleMe('website')} class="">Websites</a></li>
                                <li class={"cat-list__item" + ' ' + `${tabType == 'mobile' ? 'active' : ''}`} ><a onClick={() => toggleMe('mobile')} class="">Mobile App</a></li>
                                <li class={"cat-list__item" + ' ' + `${tabType == 'graphic' ? 'active' : ''}`} ><a onClick={() => toggleMe('graphic')} class="">Graphic Design</a></li>
                                <li class={"cat-list__item" + ' ' + `${tabType == 'ecommerce' ? 'active' : ''}`} ><a onClick={() => toggleMe('ecommerce')} class="">E-commerce</a></li>
                            </ul>

                            {/* <div class="row sorting-container" id="clients-grid" data-layout="masonry"> */}

                            {/* mobile */}

                            {
                                tabType === 'mobile' && <div>
                                    <div>
                                        <div class="row"> 
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/bidraves-click.png")}>
                                                <img src="img/hire/bidraves.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-zoom-1.png")}>
                                                <img src="img/hire/ezshopit.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/fastest-delivery-app-click.png")}>
                                                <img src="img/hire/fastest-delivery-app.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/expense-management-click.png")}>
                                                <img src="img/hire/expense-management.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/login-screen-zoom.png")}>
                                                <img src="img/hire/login-screen.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/peer2peer-zoom.png")}>
                                                <img src="img/hire/peer2peer.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/go-gro-local-click.png")}>
                                                <img src="img/hire/ggl-work-img.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/twgtea-zoom.png")}>
                                                <img src="img/hire/twgtea.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/gym-zoom.png")}>
                                                <img src="img/hire/gym-forest-220-320.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Canadian-County-zoom.png")}>
                                                <img src="img/hire/Canadian-County.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            }

                            {/* banner */}

                            {
                                tabType === 'graphic' && <div>
                                    <div>
                                        <div class="row">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/big-festive-sale.png")}>
                                                <img src="img/hire/big-festive-sale.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/big-festive-sale-2.png")}>
                                                <img src="img/hire/big-festive-sale-2.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Apparel.png")}>
                                                <img src="img/hire/Apparel.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Apparel-style2.png")}>
                                                <img src="img/hire/Apparel-style2.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Electronic-Items.png")}>
                                                <img src="img/hire/Electronic-Items.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/laptop-banner.png")}>
                                                <img src="img/hire/laptop-banner.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Laptops-&=Accessories.png")}>
                                                <img src="img/hire/Laptops-&-Accessories.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/think-eletonices.png")}>
                                                <img src="img/hire/think-eletonices.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item gp-logo" onClick={() => action("img/hire/gplogo2.png")}>
                                                <img src="img/hire/gplogo2.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item gp-logo" onClick={() => action("img/hire/warthmetrix-logo.png")}>
                                                <img src="img/hire/warthmetrix-logo.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/Bml-logo.png")}>
                                                <img src="img/hire/Bml-logo.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/tgyas-logo.png")}>
                                                <img src="img/hire/tgyas-logo.png" alt="logo" class="logo-img" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/vb-logo.png")}>
                                                <img src="img/hire/vb-logo.png" alt="logo" class="logo-img" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/health1.png")}>
                                                <img src="img/hire/health1.png" alt="logo" class="logo-img" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        </div>
                                    </div>


                                </div>
                            }


                            {/* website */}

                            {

                                tabType === 'website' && <div>
                                    <div>
                                        <div class="row">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Audio-Itch-click.png")}>
                                                <img src="img/hire/audioitch-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        
                                        
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/smartreliefmassage-zoom.png")}>
                                                <img src="img/hire/smartreliefmassage-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/tommygun-click.png")}>
                                                <img src="img/hire/tommygunartclub-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-zoom-1.png")}>
                                                <img src="img/hire/ezshopit(1).png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/globalshoping-zoom.png")}>
                                                <img src="img/hire/ezglobalshop.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/partyjumpers-zoom.png")}>
                                                <img src="img/hire/my-party-peer2peer.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/square-one-london-click.png")}>
                                                <img src="img/hire/square-one-london.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/dolly-and-dotty.png")}>
                                                <img src="img/hire/dolly-and-dotty.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Canadian-County-zoom.png")}>
                                                <img src="img/hire/Canadian-County.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        </div>


                                    </div>
                                </div>
                            }


                            {/* logo */}

                            {

                                tabType === 'ecommerce' &&
                                <div>
                                    <div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/vingino-zoom.png")}>
                                                <img src="img/hire/vingino-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        {/* <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/1oakwholesale-click.jpg")}>
                                                <img src="img/hire/1oakwholesale.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div> */}
                                        
                                       
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/gp-lifestyle-click.png")}>
                                                <img src="img/hire/gp-lifestyle.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/lindys-click.png")}>
                                                <img src="img/hire/lindys-liquor.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-zoom-1.png")}>
                                                <img src="img/hire/ezshopit.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/1oakwholesale_click.png")}>
                                                <img src="img/hire/1oakwholesale.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/globalshoping-zoom.png")}>
                                                <img src="img/hire/ezglobalshop.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/smartreliefmassage-zoom.png")}>
                                                <img src="img/hire/smart-relief.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/tommygun-click.png")}>
                                                <img src="img/hire/tommygun.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/square-one-london-click.png")}>
                                                <img src="img/hire/square-one-london.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/partyjumpers-zoom.png")}>
                                                <img src="img/hire/my-party-peer2peer.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }

                            {
                                tabType === 'all' && <div>
                                    <div class="" id="" data-layout="masonry">
                                        <div class="row">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/bidraves-click.png")}>
                                                <img src="img/hire/bidraves.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-zoom-1.png")}>
                                                <img src="img/hire/ezshopit.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/fastest-delivery-app-click.png")}>
                                                <img src="img/hire/fastest-delivery-app.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/expense-management-click.png")}>
                                                <img src="img/hire/expense-management.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        {/* <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/1oakwholesale-click.jpg")}>
                                                <img src="img/hire/1oakwholesale.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div> */}

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Audio-Itch-click.png")}>
                                                <img src="img/hire/audioitch-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/smartreliefmassage-zoom.png")}>
                                                <img src="img/hire/smartreliefmassage-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/tommygun-click.png")}>
                                                <img src="img/hire/tommygunartclub-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/vingino-zoom.png")}>
                                                <img src="img/hire/vingino-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/go-gro-local-click.png")}>
                                                <img src="img/hire/ggl-work-img.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/twgtea-zoom.png")}>
                                                <img src="img/hire/twgtea.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/gym-zoom.png")}>
                                                <img src="img/hire/gym-forest-220-320.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Canadian-County-zoom.png")}>
                                                <img src="img/hire/Canadian-County.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-zoom-1.png")}>
                                                <img src="img/hire/ezshopit(1).png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/globalshoping-zoom.png")}>
                                                <img src="img/hire/ezglobalshop.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/partyjumpers-zoom.png")}>
                                                <img src="img/hire/my-party-peer2peer.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/square-one-london-click.png")}>
                                                <img src="img/hire/square-one-london.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        </div>


                                    </div>

                                </div>
                            }
                            <Modal
								isOpen={modalIsOpen}
								//onAfterOpen={afterOpenModal}
								onRequestClose={closeModal}
								style={customStyles}
								contentLabel="Example Modal"
							>
								<div class="image-zoom-popup-close-btn">
								   <button onClick ={() =>closeModal()} class="popup-close popup-close-btn"><span>×</span></button>
								</div>
								
								   <img src={img}/>
								
								

							</Modal>
                        </div>
                    </div>
                </div>
            </section>

            <section class="client-videos portfolio-work-video-sec">
                <div class="container">
                    
                    <div class="crumina-module crumina-heading">
                        <h2 class="heading-title hire-heading align-center"> What our Clients say <span class="c-primary">about us!</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                            <div class="video-box">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/EGoFnRfbdwg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                            <div class="video-box">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/FSiVXfHYAPY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                            <div class="video-box">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/5n9QDlURcew?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div> 
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                            <div class="video-box">
                                <iframe width="100%" height="250" src="https://www.youtube.com/embed/KfKLmd3ulhs?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-portfolio-page">
                <div class="container">
                    <div class="crumina-module crumina-heading">
                        <h2 class="heading-title hire-heading align-center"> Contact Us: </h2>
                        <p>We work with the business owners who cares about quality, because you know getting an A+ work will bring more Profit to your business. If that sounds like you, we are more than happy to help you.</p>
                        <p>Send a note with a bit about your company and your project requirements. And, we will schedule a call to talk.
Contact us at +91-9319239730 or drop us an email at <a href="mailto:info@techsgeeks.in"> info@techsgeeks.in</a></p>
                    </div>
                    <Contact/>
                </div>
            </section>
            
            

            <Footer />
        </div>
    )
}

export default WorkPortfolio