
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import SomeworkReactjs from './SomeWorkReactjs'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WhyReactjs from './WhyReactjs'
import ReactjsAccordion from '../../../includes/Accordionpopup/Reactjs/ReactjsAccordion'
import HireNodeWork from '../../../includes/slider/HireNodeWork'
import HireReactjswork from '../../../includes/slider/HireReactj'
import SeoTag from '../../seo/SeoTag'
function HireReact() {

	return (
		<div>
			<Header />
			<SeoTag page_id={6}/>
			<div class="content-wrapper">
				<div id="carouselExampleCaptions about-us-banner" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="img/react.js-bg.png" class="d-block w-100" alt="..." />
							<div class="carousel-caption d-md-block about-us-banner">
								<p>HIRE A REACTJS DEVELOPER</p>
								<h5 class="abu-title">If Netflix, PayPal, Apple rely on React.js for fast rendering,  <br /> what's stopping you? </h5>

								<p>All the popular websites that we see around are built on React.js.<br />
									It is not only used to develop a fast rendering websites but also acts<br />
									as a base for building mobile applications.</p>
								<Link to='/popup'>
									<button type="" class="btn btn-primary js-message-popup">Talk to us now</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <SomeworkReactjs /> */}

				<HireReactjswork />
				<WhyReactjs />
				<section class="background-cover align-center medium-padding120 more-que-sec still-confused-sec">
					<div class="container">
						<div class="bg-96">
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="crumina-module crumina-heading">
										<h2 class="heading-title">Still not sure about using React.js?<br />Speak to our Tech-Savvy Expert Professionals!</h2>
									</div>

									<Link to='/popup' class="btn btn-primary btn-market btn--with-shadow hire-p-sec js-message-popup hr-sec-btn">
										<div class="text">
											<span class="title">Share Requirement</span>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
			<Footer />
		</div>
	)
}

export default HireReact