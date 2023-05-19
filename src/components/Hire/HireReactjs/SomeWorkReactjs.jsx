import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  margin: 30,
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
          items: 1,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 2,

      }
  },
};
function SomeWorkReactjs() {
  return (
    
            <div>

                <section className="crumina-module crumina-module-slider medium-padding100">

                    <div className="container">

                        <div className="row">
                            	<div class="crumina-module crumina-module-img-bottom">
					 <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="crumina-module crumina-heading">
							<h2 class="heading-title hire-heading">Some of our React JS <br/> Work</h2>
						</div>
					 </div>

				    </div>
                              <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
                               <div class="col-lg-12 col-md-12 col-sm-12">
					<div class="swiper-container pagination-bottom" data-show-items="2">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<a href="img/case1.jpg" class="case-item__thumb js-zoom-image">
										<img src="img/case1.jpg" alt="case"/>
									</a>

									<div class="square-colored bg-product-blue"></div>
									<div class="case-item-content">
										<h3 class="title">MyBatch.club</h3>
										<h6 class="title">Built in: React.js, Node.js</h6>
										<a href="#" class="more-arrow white">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkHref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkHref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<a href="img/case2.jpg" class="case-item__thumb js-zoom-image">
										<img src="img/case2.jpg" alt="case"/>
									</a>

									<div class="square-colored bg-product-blue-dark"></div>
									<div class="case-item-content">
										<h3 class="title">Bolton Travel</h3>
										<h6 class="title">Built in: React.js, Node.js</h6>
										<a href="#" class="more-arrow white">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkHref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkHref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<a href="img/case1.jpg" class="case-item__thumb js-zoom-image">
										<img src="img/case1.jpg" alt="case"/>
									</a>

									<div class="square-colored bg-product-marrow"></div>
									<div class="case-item-content">
										<h3 class="title">Tech Geeks</h3>
										<h6 class="title">Built in: React.js, Node.js</h6>
										<a href="#" class="more-arrow white">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkHref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkHref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							
						</div>

					
						<div class="swiper-pagination bottom-left"></div>
					</div>
				</div>

                            </OwlCarousel>
                        </div>
                    </div>

                </section>

            </div>
    )
}

export default SomeWorkReactjs