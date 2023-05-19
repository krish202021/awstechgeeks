import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HomeAccordion from '../../includes/Accordionpopup/Home/HomeAccordion';
function AboutUs() {
    return (

        <div>


	<section class="medium-padding120 hm-software-secvice">
		<div class="container">
			<div class="row">

				<div class="col-lg-6 col-md-6 col-12 col-xxl-6">
					<img src="img/app-developmen.png" alt="image"/>
				</div>
				<div class="col-lg-6 col-md-6 col-12 col-xxl-6">

					<div class="crumina-module crumina-heading">
						<h2 class="heading-title"><span class="c-primary">Why</span> us?</h2>
					</div>
                             <HomeAccordion/>
					{/* <ul class="crumina-module crumina-accordion" id="accordion">

						<li class="accordion-panel">
							<div class="panel-heading">
								<a href="#toggleSample" class="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
									<span class="icons">
										<svg class="utouch-icon utouch-icon-add"><use xlinkHref="#utouch-icon-add"></use></svg>
										<svg class="utouch-icon active utouch-icon-minus"><use xlinkHref="#utouch-icon-minus"></use></svg>
									</span>
									<span class="ovh title">Easy To Start, Less Obligations!</span>
								</a>
							</div>

							<div id="toggleSample" class="panel-collapse collapse" aria-expanded="false" role="tree">
								<div class="panel-info">
									We have less obligations, paper-work and believe more in adequate requirement gathering. An unclear requirement is the reason for a later conflicts. We take care of everything whether it is creating scope, timeline, budget, work plan or a successful deployment.
								</div>
							</div>
						</li>

						<li class="accordion-panel">
							<div class="panel-heading">
								<a href="#toggleOne" class="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
									<span class="icons">
										<svg class="utouch-icon utouch-icon-add"><use xlinkHref="#utouch-icon-add"></use></svg>
										<svg class="utouch-icon active utouch-icon-minus"><use xlinkHref="#utouch-icon-minus"></use></svg>
									</span>
									<span class="ovh title">Save More Money without any Compromise in Product Quality</span>
								</a>
							</div>

							<div id="toggleOne" class="panel-collapse collapse" aria-expanded="false" role="tree">
								<div class="panel-info">
									We offer the best possible price that is a win-win for both. To sustain and have growth, every business need to make profits but we never over-quote. At the same time, we don't compromise with the quality of work.
								</div>
							</div>
						</li>

						<li class="accordion-panel">
							<div class="panel-heading">
								<a href="#toggleTwo" class="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
									<span class="icons">
										<svg class="utouch-icon utouch-icon-add"><use xlinkHref="#utouch-icon-add"></use></svg>
										<svg class="utouch-icon active utouch-icon-minus"><use xlinkHref="#utouch-icon-minus"></use></svg>
									</span>
									<span class="ovh title">Our response is fast, direct, and reliable, assuring you of a stress-free process.</span>
								</a>
							</div>

							<div id="toggleTwo" class="panel-collapse collapse" aria-expanded="false" role="tree">
								<div class="panel-info">
									We have an in-house team of expert developers, designers, leads and managers. We are open to be contacted on Skype, Google Meetings, WhatsApp and through a direct Phone call. So, reaching to us is fast, direct and easy. 
								</div>
							</div>
						</li>

						<li class="accordion-panel">
							<div class="panel-heading">
								<a href="#toggleThree" class="accordion-heading collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false">
									<span class="icons">
										<svg class="utouch-icon utouch-icon-add"><use xlinkHref="#utouch-icon-add"></use></svg>
										<svg class="utouch-icon active utouch-icon-minus"><use xlinkHref="#utouch-icon-minus"></use></svg>
									</span>
									<span class="ovh title">Time Zone Difference is more of an Advantage</span>
								</a>
							</div>

							<div id="toggleThree" class="panel-collapse collapse" aria-expanded="false" role="tree">
								<div class="panel-info">
									With more than 10 hours time difference, Our Customers living is USA, Canada discuss their requirement with our team before going to bed and check back the status in their morning time.
								</div>
							</div>
						</li>

					</ul> */}
				</div>

				
			</div>
		</div>
	</section>

        </div>
    )
}

export default AboutUs