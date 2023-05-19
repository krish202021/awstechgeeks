import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
//   margin: 30,
  responsiveClass: true,
  
  nav: true,
  autoplay: false,
//   navText: ["<", ">"],
  smartSpeed: 1000,
  responsive: {
      320: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 1,
      },
      1000: {
          items: 1,

      }
  },
};
function GeetingProjEasy() {

   

  return (
    <div>
       
	{/* <section class="crumina-module crumina-module-slider pt100 hm-easy-section"> */}
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12 mb30">
					<div class="crumina-module crumina-heading hm-easy-section">
						<h2 class="heading-title">Getting Your Project Started is Easy!</h2>
						<h6 class="heading-sup-title">CHECK THE STEPS BLOW</h6>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="swiper-container navigation-bottom" data-effect="fade">
						
						<div class="swiper-wrapper">
                            <OwlCarousel items={1}
                                className="owl-theme"
                                loop
                                nav
                                margin={8} >
							<div class="swiper-slide">
								<div class="row">
									<div class="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
										<div class="slider-faqs-thumb">
											<img class="utouch-icon" src="svg-icons/dial.svg" alt="image"/>
										</div>
									</div>

									<div class="col-lg-7 col-md-12 col-sm-12" data-swiper-parallax="-300">
										<h5 class="slider-faqs-title">SHARE YOUR BUSINESS/PROJECT REQUIREMENT WITH US!</h5>

										<div class="row">
											<div class="col-lg-6 col-md-6 col-sm-12">
												<p>We can easily be reached at:.</p>
												<ul class="list list--standard">
													<li>
														<svg class="utouch-icon utouch-icon-correct-symbol-1">
															<use xlinkHref="#utouch-icon-correct-symbol-1"></use>
														</svg>
														<a href="#">Phone: +91-9319239730</a>
													</li>
													<li>
														<svg class="utouch-icon utouch-icon-correct-symbol-1">
															<use xlinkHref="#utouch-icon-correct-symbol-1"></use>
														</svg>
														<a href="#">Email: info@techsgeeks.in</a>
													</li>
													<li>
														<svg class="utouch-icon utouch-icon-correct-symbol-1">
															<use xlinkHref="#utouch-icon-correct-symbol-1"></use>
														</svg>
														<a href="#">Skype:webapp.development</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="row">
									<div class="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
										<div class="slider-faqs-thumb">
											<img class="utouch-icon" src="svg-icons/chat1.svg" alt="image"/>
										</div>
									</div>

									<div class="col-lg-7 col-md-12 col-sm-12" data-swiper-parallax="-300">
										<h5 class="slider-faqs-title">BRIEF YOUR REQUIREMENT</h5>

										<p>There is always a Project Manager or a Business Analyst to follow up with you to discuss about your Business Requirement. We ask as many questions as we can to get every bit of information from you so that we dont't miss anything to understand your expectation. We might take just one discussion call or 3-4 calls depending upon your project length.</p>

									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="row">
									<div class="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
										<div class="slider-faqs-thumb">
											<img class="utouch-icon" src="svg-icons/devices.svg" alt="image"/>
										</div>
									</div>

									<div class="col-lg-7 col-md-8 col-sm-12" data-swiper-parallax="-100">
										<h5 class="slider-faqs-title">GET PROJECT SCOPE, COST, TIMELINE AND MILESTONES PROPERLY DEFINED!</h5>
										<p>
											We review your requirement in details and after a thorough discussion with the team, we define and document the entire scope of the project, the timeline, budget, <br/> milestones/sprints and the deployment plan.
										</p>
										<p>Once the customer approves, we get into a contract to start the project.</p>

										<div class="row">
											<div class="col-lg-6 col-md-6 col-sm-12">
												<div class="crumina-module crumina-info-box info-box--standard">
													<div class="info-box-image display-flex">
														<svg class="utouch-icon utouch-icon-checked">
															<use xlinkHref="#utouch-icon-checked"></use>
														</svg>
														<h6 class="info-box-title">NDA</h6>
													</div>
													<p class="info-box-text">We are open to signing NDA's if required.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
							    <div class="row">
									<div class="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
										<div class="slider-faqs-thumb">
											<img class="utouch-icon" src="svg-icons/payment-method.svg" alt="image"/>
										</div>
									</div>

									<div class="col-lg-7 col-md-12 col-sm-12" data-swiper-parallax="-300">
										<h5 class="slider-faqs-title">SIGNING AN AGREEMENT</h5>
										<p class="weight-bold">The final step to start a Project is signing an agreement.
										</p>
										<p>We understand that your time is really valuable and we do respect it. To make the bonding more adamant, we prefer signing a contract so that we are in a bond of transparency from the beginning of the work.
										</p>
										
									</div>
								</div>
							</div>
							<div class="swiper-slide">
							    <div class="row">
									<div class="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
										<div class="slider-faqs-thumb">
											<img class="utouch-icon" src="svg-icons/rocket.svg" alt="image"/>
										</div>
									</div>

									<div class="col-lg-7 col-md-12 col-sm-12" data-swiper-parallax="-300">
										<h5 class="slider-faqs-title">GET GOING</h5>

										<div class="row">
											<div class="col-lg-12 col-md-12 col-sm-12">
												<p>All Initals Set and Done! We are ready to start the <br/>
													new assignment.
												</p>
											</div>
											
										</div>
									</div>
								</div>
							</div>
                            </OwlCarousel>
						</div>

					

					</div>
				</div>
			</div>
		</div>
	{/* </section> */}

	
    </div>
  )
}

export default GeetingProjEasy