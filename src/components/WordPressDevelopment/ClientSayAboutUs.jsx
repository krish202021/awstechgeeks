import React from 'react'

function ClientSayAboutUs() {
    return (
        <div>
            <section className="background-cover align-center medium-padding120 web-app web-app-dev">
                <div className="container">
                    <div className="bg-96">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="crumina-module crumina-heading">
                                    <h2 className="heading-title">Check our Web App Portfolio</h2>
                                </div>

                                <a className="btn btn-primary btn-market btn--with-shadow js-message-popup let-talk-btn web-app-dev-btn">
                                    View Web App Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="testimonials-section">
                <div className="container">
                    <div className="crumina-module crumina-heading">
                        <h2 className="heading-title">What our Clients <span className="c-primary">say about us?</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12 col-xxl-8">
                            <section className="crumina-module crumina-module-slider bg-4 cloud-center navigation-center-both-sides medium-padding100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0">
                                            <div className="swiper-container" data-effect="fade">
                                                <div className="swiper-wrapper">
                                                    <div className="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">

                                                        <div className="testimonial-img-author" data-swiper-parallax="-100">
                                                            <img src="img/rich.jpg" alt="avatar" />
                                                        </div>

                                                        <h6 className="testimonial-text" data-swiper-parallax="-300">
                                                            It was fantastic 7 years working with Jamal and Team. I didn't even realize, we spent more than 7 years together. Timezone Difference or Remote work was never a barrier. I highly recommend them.
                                                        </h6>

                                                        <div className="author-info-wrap" data-swiper-parallax="-100">

                                                            <div className="author-info">
                                                                <a className="h6 author-name">Richard Bonitz</a>
                                                                <div className="author-company">Director, Endless River Technology</div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">

                                                        <div className="testimonial-img-author" data-swiper-parallax="-100">
                                                            <img src="img/francis.png" alt="avatar" />
                                                        </div>

                                                        <h6 className="testimonial-text" data-swiper-parallax="-300">
                                                            They turned to be one of our best choice as a Technology partner. They have quick turn-around time easily accessible, cost-effective and provides a great value.
                                                        </h6>

                                                        <div className="author-info-wrap" data-swiper-parallax="-100">

                                                            <div className="author-info">
                                                                <a className="h6 author-name">Francis Wills</a>
                                                                <div className="author-company">Managing Partner, KIA-GTS</div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">

                                                        <div className="testimonial-img-author" data-swiper-parallax="-100">
                                                            <img src="img/chris.png" alt="avatar" />
                                                        </div>

                                                        <h6 className="testimonial-text" data-swiper-parallax="-300">
                                                            From the half way round the world, we found an excellent IT Offshore Partner. We were looking for a Company which can take care of our 30+ existing websites and can also develop new websites.
                                                        </h6>

                                                        <div className="author-info-wrap" data-swiper-parallax="-100">

                                                            <div className="author-info">
                                                                <a className="h6 author-name">Chris Shrinkle</a>
                                                                <div className="author-company">Managing Director, Gogiro Cleveland LLC</div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="btn-prev">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-left-1">
                                        <use xlinkHref="#utouch-icon-arrow-left-1"></use>
                                    </svg>
                                    <svg className="utouch-icon utouch-icon-arrow-left1">
                                        <use xlinkHref="#utouch-icon-arrow-left1"></use>
                                    </svg>
                                </div>

                                <div className="btn-next">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
                                        <use xlinkHref="#utouch-icon-arrow-right-1"></use>
                                    </svg>
                                    <svg className="utouch-icon utouch-icon-arrow-right1">
                                        <use xlinkHref="#utouch-icon-arrow-right1"></use>
                                    </svg>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 col-xxl-4">
                            <img src="img/successful-young.png" alt="testimonial-mg" className="testimonial-mg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClientSayAboutUs