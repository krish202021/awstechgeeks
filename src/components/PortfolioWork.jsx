import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import Footer from '../includes/Footer'
import Header from '../includes/Header'
import Modal from 'react-modal';
import ModelPopup from './ModelPopup';
function PortfolioWork() {
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
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/bidraves-click.png")}>
                                                <img src="img/hire/bidraves.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-click.png")}>
                                                <img src="img/hire/ezshopit.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/fastest-delivery-app-click.png")}>
                                                <img src="img/hire/fastest-delivery-app.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/expense-management-click.png")}>
                                                <img src="img/hire/expense-management.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/login-screen.jpg")}>
                                                <img src="img/hire/login-screen.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/peer2peer.jpg")}>
                                                <img src="img/hire/peer2peer.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/go-gro-local-click.png")}>
                                                <img src="img/hire/go-gro-local-click.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/twgtea.jpg")}>
                                                <img src="img/hire/twgtea.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/gym-forest-220-320.jpg")}>
                                                <img src="img/hire/gym-forest-220-320.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Canadian-County-zoom.png")}>
                                                <img src="img/hire/Canadian-County.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }

                            {/* banner */}

                            {
                                tabType === 'graphic' && <div>
                                    <div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/big-festive-sale.png")}>
                                                <img src="img/hire/big-festive-sale.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/big-festive-sale-2.png")}>
                                                <img src="img/hire/big-festive-sale-2.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Apparel.png")}>
                                                <img src="img/hire/Apparel.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Apparel-style2.png")}>
                                                <img src="img/hire/Apparel-style2.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Electronic-Items.png")}>
                                                <img src="img/hire/Electronic-Items.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/laptop-banner.png")}>
                                                <img src="img/hire/laptop-banner.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Laptops-&=Accessories.png")}>
                                                <img src="img/hire/Laptops-&-Accessories.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio banner-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/think-eletonices.png")}>
                                                <img src="img/hire/think-eletonices.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item gp-logo" onClick={() => action("img/hire/gplogo2.png")}>
                                                <img src="img/hire/gplogo2.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item gp-logo" onClick={() => action("img/hire/warthmetrix-logo.png")}>
                                                <img src="img/hire/warthmetrix-logo.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/Bml-logo.png")}>
                                                <img src="img/hire/Bml-logo.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/tgyas-logo.png")}>
                                                <img src="img/hire/tgyas-logo.png" alt="logo" class="logo-img" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/vb-logo.png")}>
                                                <img src="img/hire/vb-logo.png" alt="logo" class="logo-img" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item audio logo-item">
                                            <div class="screenshots-item lmb-logo" onClick={() => action("img/hire/health1.png")}>
                                                <img src="img/hire/health1.png" alt="logo" class="logo-img" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            }


                            {/* website */}

                            {

                                tabType === 'website' && <div>
                                    <div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/audioitch-260-464.jpg")}>
                                                <img src="img/hire/audioitch-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/sgtrek-260-464.jpg")}>
                                                <img src="img/hire/sgtrek-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/smartreliefmassage-260-464.jpg")}>
                                                <img src="img/hire/smartreliefmassage-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/tommygunartclub-260-464.jpg")}>
                                                <img src="img/hire/tommygunartclub-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/ezshopit(1).png")}>
                                                <img src="img/hire/ezshopit(1).png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/ezglobalshop.png")}>
                                                <img src="img/hire/ezglobalshop.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/mypartyjumpers.png")}>
                                                <img src="img/hire/mypartyjumpers.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/square-one-london.png")}>
                                                <img src="img/hire/square-one-london.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/square-one-london.png")}>
                                                <img src="img/hire/square-one-london.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/dolly-and-dotty.png")}>
                                                <img src="img/hire/dolly-and-dotty.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Canadian-County-zoom.png")}>
                                                <img src="img/hire/Canadian-County.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

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
                                            <div class="screenshots-item" onClick={() => action("img/hire/vingino-260-464.jpg")}>
                                                <img src="img/hire/vingino-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/1oakwholesale-click.jpg")}>
                                                <img src="img/hire/1oakwholesale.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-260-464.jpg")}>
                                                <img src="img/hire/ezshopit-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/zoomrestroomfixtures-260-464.jpg")}>
                                                <img src="img/hire/zoomrestroomfixtures-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

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
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-click.png")}>
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
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezglobalshop-click.png")}>
                                                <img src="img/hire/ezglobalshop.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/smart-relief-click.png")}>
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
                                            <div class="screenshots-item" onClick={() => action("img/hire/my-party-jumpers-click.png")}>
                                                <img src="img/hire/my-party-jumpers.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }

                            {
                                tabType === 'all' && <div>
                                    <div class="" id="" data-layout="masonry">

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/bidraves-click.png")}>
                                                <img src="img/hire/bidraves.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-click.png")}>
                                                <img src="img/hire/ezshopit.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/fastest-delivery-app-click.png")}>
                                                <img src="img/hire/fastest-delivery-app.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/expense-management-click.png")}>
                                                <img src="img/hire/expense-management.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/1oakwholesale-click.jpg")}>
                                                <img src="img/hire/1oakwholesale.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/audioitch-260-464.jpg")}>
                                                <img src="img/hire/audioitch-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/ezshopit-260-464.jpg")}>
                                                <img src="img/hire/ezshopit-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/sgtrek-260-464.jpg")}>
                                                <img src="img/hire/sgtrek-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/smartreliefmassage-260-464.jpg")}>
                                                <img src="img/hire/smartreliefmassage-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/tommygunartclub-260-464.jpg")}>
                                                <img src="img/hire/tommygunartclub-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/vingino-260-464.jpg")}>
                                                <img src="img/hire/vingino-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item photos websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/zoomrestroomfixtures-260-464.jpg")}>
                                                <img src="img/hire/zoomrestroomfixtures-245-437.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/go-gro-local-click.png")}>
                                                <img src="img/hire/go-gro-local-click.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/twgtea.jpg")}>
                                                <img src="img/hire/twgtea.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/gym-forest-220-320.jpg")}>
                                                <img src="img/hire/gym-forest-220-320.jpg" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
                                            <div class="screenshots-item" onClick={() => action("img/hire/Canadian-County-zoom.pbg")}>
                                                <img src="img/hire/Canadian-County.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/ezshopit(1).png")}>
                                                <img src="img/hire/ezshopit(1).png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/ezglobalshop.png")}>
                                                <img src="img/hire/ezglobalshop.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/mypartyjumpers.png")}>
                                                <img src="img/hire/mypartyjumpers.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/square-one-london.png")}>
                                                <img src="img/hire/square-one-london.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item music websites-item">
                                            <div class="screenshots-item" onClick={() => action("img/dolly-and-dotty.png")}>
                                                <img src="img/hire/dolly-and-dotty.png" alt="logo" />
                                                <div class="overlay-standard overlay--blue-dark"></div>

                                            </div>
                                        </div>


                                    </div>

                                </div>
                            }
                            {modalIsOpen?
                            <ModelPopup modal={true} image={img}/>
                            :
                            ''
                            }
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default PortfolioWork