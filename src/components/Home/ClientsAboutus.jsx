import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import HomeFeaturedClint from '../../includes/slider/HomeFeaturedClint'
function ClientsAboutus() {
	return (
		<div>

<section className="crumina-module crumina-clients background-contain bg-secondary-color">
		<div className="container">

			<div className="row">
	          <div className="col-lg-2 col-md-12 col-3 col-xxl-2">
	          	<div className="client-sec-img">
	          		<figure><img src="img/funny-man-cartoon.png" alt=""/></figure>
	          	</div>
	          </div>
	          <div className="col-lg-10 col-md-12 col-12 col-xxl-10 clients-slider-sec">
	          	    <div className="crumina-module crumina-clients-heading">
						<h2 className="heading-title">Our Featured Clients</h2>
					</div>
					
					<div className="row">
						  
		          	    {/* <div className=" brand-logo"> */}
						 <HomeFeaturedClint/>
						{/* </div> */}
							
					</div>
				
	          </div>
	        </div>
			
		</div>
	</section>

	<section class="recommendation_letter_box home_recommendation_letter">
		<div class="container">
		<div class="crumina-module crumina-heading text-center">
			<h4 class="heading-title">CLIENT RECOMMENDATION LETTER</h4>
			<h3 class="heading-title">Received on 25th April, 2023 from our esteemed client <span class="c-primary">Worthmetrix LLC</span></h3></div>
			<div class="letter_box">
				<p> Jamal Ashraf<br></br>
					Director<br></br>
					TGAYS Technology Private Limited</p>

				<p>
					<strong>Subject: Letter of Recommendation</strong>
				</p>

				<p>
				Dear Jamal,<br></br>
				I am writing to highly recommend <strong>TGAYS Technology Private Limited</strong> for any software development and technology services that your company may require. As a long-term client of <strong>TGAYS Technology,</strong> I have been consistently impressed with their exceptional level of service, technical expertise, and commitment to excellence.<br></br>
				<strong>TGAYS Technology</strong> has been providing our company with a wide range of software services, including web development, web design, and custom software solutions for over 1.5 years. Their team of highly skilled developers, designers, and project managers are true professionals who are knowledgeable, reliable, and dedicated to delivering high-quality results.
				</p>

				<p>
				One of the things that sets <strong>TGAYS Technology</strong> apart is their proactive approach to problem-solving. They take the time to thoroughly understand our requirements and business goals, and then provide innovative and creative solutions that are tailored to our specific needs. Their attention to detail and commitment to delivering on time and on budget have been invaluable to our projects' success.<br></br>
				Furthermore, the level of communication and collaboration with <strong>TGAYS Technology</strong> has been outstanding. They are always responsive and communicative, keeping us informed of project progress and addressing any questions or concerns promptly. Their customer service is top-notch, and they consistently go above and beyond to ensure our satisfaction.
				</p>

				<p>
				I have had the pleasure of working with many software service providers over the years, and I can confidently say that <strong>TGAYS Technology</strong> is among the best. Their professionalism, expertise, and commitment to delivering outstanding results make them an ideal partner for any software development and technology needs.<br></br>
				I wholeheartedly recommend <strong>TGAYS Technology</strong> without reservation. I am confident that they will exceed your expectations and provide you with exceptional service and results. Should you have any further questions or require additional information, please do not hesitate to contact me.
				</p>

				<p>
				Cordially,<br></br>
				Morris A, Nunes, Pres.
				</p>

			</div>
		</div>
    </section>

	<div class="testimonials-section home_testimonials-section">
		<div class="container">
			<div class="crumina-module crumina-heading">
				<h2 class="heading-title">What our Clients <span class="c-primary">say about us?</span></h2>
			</div>
			<div class="row">
				<div class="col-lg-8 col-md-12 col-12 col-xxl-8">
					<section class="crumina-module crumina-module-slider bg-4 cloud-center navigation-center-both-sides medium-padding100">
						<div class="container">
							<div class="row">
								<div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0">
									<div class="swiper-container" data-effect="fade">
										<div class="swiper-wrapper">
											<OwlCarousel items={1}
												className="owl-theme"
												loop
												nav
												margin={8} >
												<div class="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">

													<div class="testimonial-img-author" data-swiper-parallax="-100">
														<img src="img/rich.jpg" alt="avatar" />
													</div>

													<h6 class="testimonial-text" data-swiper-parallax="-300">
														It was fantastic 7 years working with the Team. I didn't even realize, we spent more than 7 years together. Timezone Difference or Remote work was never a barrier.
													</h6>

													<div class="author-info-wrap" data-swiper-parallax="-100">

														<div class="author-info">
															<a class="h6 author-name">Richard Bonitz</a>
															<div class="author-company">Director, Endless River Technology</div>
														</div>

													</div>
												</div>

												<div class="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">

													<div class="testimonial-img-author" data-swiper-parallax="-100">
														<img src="img/francis.png" alt="avatar" />
													</div>

													<h6 class="testimonial-text" data-swiper-parallax="-300">
														They turned to be one of our best choice as a Technology partner. They have quick turn-around time easily accessible, cost-effective and has a great value in their work.
													</h6>

													<div class="author-info-wrap" data-swiper-parallax="-100">

														<div class="author-info">
															<a class="h6 author-name">Francis Wills</a>
															<div class="author-company">Managing Partner, KIA-GTS</div>
														</div>

													</div>
												</div>

												<div class="crumina-module crumina-testimonial-item testimonial-item-author-top swiper-slide">

													<div class="testimonial-img-author" data-swiper-parallax="-100">
														<img src="img/chris.png" alt="avatar" />
													</div>

													<h6 class="testimonial-text" data-swiper-parallax="-300">
														From the half way round the world, we found an excellent IT Offshore Partner. We were looking for a Company which can take care of our 30+ existing websites and can also develop new websites.
													</h6>

													<div class="author-info-wrap" data-swiper-parallax="-100">

														<div class="author-info">
															<a class="h6 author-name">Chris Shrinkle</a>
															<div class="author-company">Managing Director, Gogiro Cleveland LLC</div>
														</div>

													</div>
												</div>
											</OwlCarousel>
										</div>
									</div>
								</div>
							</div>
						</div>



						<div class="btn-prev">
							<svg class="utouch-icon icon-hover utouch-icon-arrow-left-1">
								<use xlinkHref="#utouch-icon-arrow-left-1"></use>
							</svg>
							<svg class="utouch-icon utouch-icon-arrow-left1">
								<use xlinkHref="#utouch-icon-arrow-left1"></use>
							</svg>
						</div>

						<div class="btn-next">
							<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
								<use xlinkHref="#utouch-icon-arrow-right-1"></use>
							</svg>
							<svg class="utouch-icon utouch-icon-arrow-right1">
								<use xlinkHref="#utouch-icon-arrow-right1"></use>
							</svg>
						</div>
					</section>
				</div>
				<div class="col-lg-4 col-md-12 col-12 col-xxl-4">
					<img src="img/successful-young.png" alt="testimonial-mg" class="testimonial-mg" />
				</div>
			</div>
		</div>
	</div>

		</div>
	)
}

export default ClientsAboutus