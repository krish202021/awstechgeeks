import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AboutOurWork from '../../includes/slider/AboutOurWork';

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
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 4,

      }
  },
};
export const OurCompany = () => {
    return (
        <div>
            <div id="carouselExampleCaptions about-us-banner " class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
					<img src="img/about-us-bg.png" class="d-block w-100" alt="..."/>
					<div class="carousel-caption d-md-block about-us-banner our_company_sec">
						<h5 class="about-title-desk">Quality in a Service or Product is not <br/>  what you put into it. It is what the <br/>  customer gets out of it.</h5>
						<h5 class="about-title-mob">Quality in a Service or Product is not what you put into it. It is what the  customer gets out of it.</h5>
						<p>When you work with us, we both have the same goal <br/> i.e Maximizing your Return of Investment(ROI).</p>
					<Link to='/popup' >
						<button type="" class="btn btn-primary js-message-popup">Let’s Discuss Your Requirement</button>
					</Link>
					</div>
					</div>
				</div> 
			</div>

			<section class="medium-padding100 our-mission-box-sec">
                <div class="container">
				<div class="crumina-module crumina-heading">
						<h2 class="heading-title hire-heading align-center">Our <span class="c-primary">Mission :</span>
						</h2>
						</div>
					<div class="row">
					    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
						    <img src="img/our-mission.png" alt="our-mission"/>
						</div>
						<div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
							<p>Our mission is to create innovative and user-friendly web and mobile applications that meet the needs and exceed the expectations of our clients. We strive to be a leader in the industry, leveraging the latest technologies and tools to deliver exceptional products and services.</p>
						    <p>We are committed to building long-term relationships with our clients, based on trust, transparency, and mutual respect. We listen to their feedback and work collaboratively to ensure that their vision is realized in every aspect of the project. Our team of talented and experienced developers, designers, and project managers are 
								dedicated to delivering high-quality solutions that help our clients achieve their business objectives.</p>
							<p>At our core, we are driven by a passion for technology and a desire to create solutions that make a positive impact on people's lives. We believe that our success is measured not just by the quality of our products but also by the positive impact they have on the world around us. Therefore, we are committed to
								using our expertise and resources to support social and environmental causes that align with our values.</p>
							<p>Ultimately, our goal is to be recognized as a company that delivers exceptional products, values our clients, and contributes to the greater good. We will achieve this by staying true to our mission and continuing to innovate and evolve as a company.</p>
						</div>
					</div>
				</div>
			</section>

	
			<section class="medium-padding100 wwr">
				<div class="container">
				    <div class="crumina-module crumina-heading">
						<h2 class="heading-title hire-heading align-center">Our <span class="c-primary">Vision:</span>
						</h2>
						<p>Our vision is to revolutionize the way people interact with technology. Through innovative software solutions, we strive to enhance the lives of individuals and businesses around the world, empowering them to achieve their goals and aspirations. We aim to be the leading provider of cutting-edge software solutions that enable our customers to thrive in a rapidly changing technological landscape.</p>
					</div>
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
							<div class="crumina-module crumina-info-box info-box--numbers who-we-are-sec">
								<h5 class="order-number">1</h5>
								<h3 class="h5 info-box-title">Who We Are</h3>
								<p class="info-box-text">TGAYS(Tech Geeks) has emerged out of technology requirement to provide solutions to professionals(Doctors, CA, Lawyers etc.), Small Businesses(Micro, Small, Medium), Start-ups and Large-scale Businesses across the Globe. 
								</p>
								<p><b>We work in various domains like: </b>
									<ul>
										<li>- E-Commerce</li>
										<li>- Healthcare</li>
										<li>- Tour & Travel</li>
										<li>- Finance</li>
										<li>- Real Estate</li>
										<li>- Education</li>
										<li>- Food Industry</li>
										<li>- Gym</li>
									</ul>
								</p>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
							<div class="crumina-module crumina-info-box info-box--numbers what-we-do-sec">
								<h5 class="order-number">2</h5>
								<h3 class="h5 info-box-title">What We Do</h3>
								<p class="info-box-text">We help Businesses to strengthen their online presence through strategic digital marketing services, interactive and robust mobile apps and fast loading websites.
								</p>
								<p><b>Our Core Services: </b>
									<ul>
									<li>- Complete E-Commerce Solution(Website and Mobile App)</li>
									<li>- Business Dashboards</li>
									<li>- Android/iPhone development</li>
									<li>- Website Security, Hosting, Migration, Maintenance & Optimization</li>
									<li>- ERP development</li>
									<li>- CRM development</li>
									<li>- CMS development</li>
									<li>- Project Management</li>
									<li>- Digital Marketing</li>
									<li>- Content Writing</li>
									<li>- QA Testing</li>
									</ul>
								</p>

								
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
							<div class="crumina-module crumina-info-box info-box--numbers how-we-do-it-sec">
								<h5 class="order-number">3</h5> 
								<h3 class="h5 info-box-title">How We Do It</h3>
								<p class="info-box-text">We do a deep research into your Business domain, your market, your competitors and combine it to create a high-converting website, mobile app or customized solution that can make your life easy and can generate more Profit for you.
								</p>
								<p class="info-box-text">Whether you're looking to develop a new mobile app, revamp your website, or create a custom software solution, we're here to help. We pride ourselves on our attention to detail, commitment to quality, and ability to deliver results that exceed our clients' expectations.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="crumina-module crumina-module-slider medium-padding100 about-case-section">
				<div class="container">
					<div class="row">
						<div class="crumina-module crumina-module-img-bottom">
							<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
								<div class="crumina-module crumina-heading">
									<h6 class="heading-sup-title c-black">Our Work</h6>
									<h2 class="heading-title c-black">Get a Feel Of Our Best Work</h2>
								</div>
							</div>

							<div class="col-lg-3 col-lg-offset-3 col-md-12 col-sm-12 col-sm-offset-0">
								<Link to="/website-portfolio"  class="btn btn-border btn--with-shadow c-primary mb30 work-btn check-btn-company">
								Check our Portfolio
								</Link>
							</div>
						</div>

						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="swiper-container pagination-bottom" data-show-items="2">
							<AboutOurWork/>
								<div class="swiper-pagination bottom-left"></div>
								
							</div>
							
						</div>

					</div>
				</div>
			</section>



        </div>
    )
}
