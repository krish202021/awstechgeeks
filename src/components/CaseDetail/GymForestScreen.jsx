import React from 'react'

function GymForestScreen() {
    return (
        <div>
            <section className="medium-padding120 align-center gym-forest-screen">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-3 col-md-12 col-sm-12 col-xs-12 mb30">
                            <div className="crumina-module crumina-heading">
                                <h2 className="heading-title">GYM FOREST SCREEN</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="crumina-module crumina-module-slider slider--full-width screenshots-slider-style1 navigation-center-both-sides">
                    <div className="swiper-container pagination-bottom" data-show-items="5" data-centered-slider="true">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="screenshot-item">
                                    <a href="img/screen2.png" className="js-zoom-image">
                                        <img src="img/screen2.png" alt="image" />
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="screenshot-item">
                                    <a href="img/screen2.png" className="js-zoom-image">
                                        <img src="img/screen2.png" alt="image" />
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="screenshot-item">
                                    <a href="img/screen2.png" className="js-zoom-image">
                                        <img src="img/screen2.png" alt="image" />
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="screenshot-item">
                                    <a href="img/screen2.png" className="js-zoom-image">
                                        <img src="img/screen2.png" alt="image" />
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="screenshot-item">
                                    <a href="img/screen2.png" className="js-zoom-image">
                                        <img src="img/screen2.png" alt="image" />
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="swiper-pagination"></div>
                    </div>



                    <div className="btn-prev">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-left-1"><use xlinkHref="#utouch-icon-arrow-left-1"></use></svg>
                        <svg className="utouch-icon utouch-icon-arrow-left1"><use xlinkHref="#utouch-icon-arrow-left1"></use></svg>
                    </div>

                    <div className="btn-next">
                        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                        <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                    </div>

                </div>
            </section>


            <section className="background-cover align-center medium-padding120 are-you-confuse case-details-btm-sec">
                <div className="container">
                    <div className="bg-96">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12">
                                <div className="crumina-module crumina-heading">
                                    <h2 className="heading-title">Looking for a React Native<br /> Expert?</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-market btn--with-shadow drop-msg">
                                    <div className="text">
                                        <span className="title">CONTACT US Now</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default GymForestScreen