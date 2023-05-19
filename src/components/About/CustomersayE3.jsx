import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const options = {
//   margin: 30,
  responsiveClass: true,
  
  nav: true,
  autoplay: false,
  navText: ["<", ">"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 2,

      }
  },
};
const CustomersayE3 = () => {
    return (
        <div>


            <section className="crumina-module crumina-module-slider background-contain bg-16 bg-blue-lighteen pt100">
                <div className="container">
                    <div className="row">
                         
                        <div className="crumina-module crumina-module-img-bottom">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <img className="img-bottom" src="img/cartoon-men2.png" alt="man" />
                            </div>

                            <div className="col-lg-8 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                                <div className="row">
                                 
                                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
								<div class="crumina-module-img-content">
									<div class="crumina-module crumina-heading">
										<h2 class="heading-title">What Our Customers Say About Us</h2>
									</div>
								</div>
							</div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        {/* <div className="swiper-container top-navigation" data-show-items="2"> */}
                                            <div className="swiper-wrapper">
                                <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
                                                <div className="swiper-slide">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="crumina-module crumina-testimonial-item testimonial-item-arrow">
                                                            <div className="author-info-wrap">
                                                                <div className="testimonial-img-author">
                                                                    <img src="img/rich.jpg" alt="author" />
                                                                </div>
                                                                <div className="author-info">
                                                                    <a className="h6 author-name">Rich Bonitz</a>
                                                                    <div className="author-company">Director, Endless River Technology</div>
                                                                </div>
                                                            </div>

                                                            <h6 className="testimonial-text">
                                                                It was fantastic year working with Jamal and his team. I didn't even realize, we spent year together. Timezone Difference or Remote work was never a barrier. I highly recommend them to anyone looking for an effective work.
                                                            </h6>

                                                            {/* <ul className="rait-stars">
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul> */}

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="crumina-module crumina-testimonial-item testimonial-item-arrow">
                                                            <div className="author-info-wrap">
                                                                <div className="testimonial-img-author">
                                                                    <img src="img/francis.png" alt="author" />
                                                                </div>
                                                                <div className="author-info">
                                                                    <a className="h6 author-name">Francis Wills</a>
                                                                    <div className="author-company">Managing Partner, KIA-GTS</div>
                                                                </div>
                                                            </div>

                                                            <h6 className="testimonial-text">
                                                                TGAYS Technology turned to be one of our best choice as a Technology partner. They have quick turn-around time, easily accessible, cost-effective and provides a great value. We are looking ahead to continue working with them.
                                                            </h6>

                                                            {/* <ul className="rait-stars">
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul> */}

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="crumina-module crumina-testimonial-item testimonial-item-arrow">
                                                            <div className="author-info-wrap">
                                                                <div className="testimonial-img-author">
                                                                    <img src="img/chris.png" alt="author" />
                                                                </div>
                                                                <div className="author-info">
                                                                    <a className="h6 author-name">Chris Shrinkle</a>
                                                                    <div className="author-company">Managing Director, Gogiro Cleveland LLC</div>
                                                                </div>
                                                            </div>

                                                            <h6 className="testimonial-text">
                                                                From the half way round the world, we found an excellent IT Offshore Partner. We were looking for a Company which can take care of our 30+ existing websites and can also develop new websites as per the need.
                                                            </h6>

                                                            {/* <ul className="rait-stars">
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star">
                                                                            <use xlink:href="#utouch-icon-star"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a >
                                                                        <svg className="utouch-icon utouch-icon-star-half-empty">
                                                                            <use xlink:href="#utouch-icon-star-half-empty"></use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul> */}

                                                        </div>

                                                    </div>
                                                </div>
</OwlCarousel>
                                            </div>



                                        {/* </div> */}
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

export default CustomersayE3