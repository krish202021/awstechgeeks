import React from 'react'
import { Link } from 'react-router-dom'
function Slider() {
    return (
        <div>

	<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
		  <div class="carousel-inner">
		     <div class="carousel-item active">
		      <img src="img/banner.png" class="d-block w-100 home-img" alt="..."/>
		      <div class="carousel-caption d-md-block home-page-slider-sec">
		        <h5>Do you have a CRM to manage your day to day Business Operations? <br/></h5>
		        <p>No??? Then you are doing the biggest mistake in your Business. Most of the businesses fails in the first five years of its inception because the automation is missing. We can build Web CRM to put your entire business operations on automation so that you can focus entirely on the Business growth and strategy and not in day to day operations.  </p>
		        <Link to='/popup'>
				<button type="" class="btn btn-primary js-message-popup">Get Started Now</button>
				</Link>
		      </div>
		    </div>
		    <div class="carousel-item">
		      <img src="img/mobile-banner.png" class="d-block w-100 home-img" alt="..."/>
		      <div class="carousel-caption d-md-block home-page-slider-sec">
		        <h5>Mobile App Guru that <br/> will sky rocket your conversions!</h5>
		        <p>We work closely with you to understand your goals, analyzing your market and your target audience. From starting our first call with you to a successful end-delivery, we stay with you throughout the mobile app development lifecycle to make sure you get the results that you want to achieve.</p>
		              <Link to='/popup'>
				<button type="" class="btn btn-primary js-message-popup">Get Started Now</button>
		    </Link>
			  </div>
		    </div>
		    <div class="carousel-item">
		      <img src="img/banner-1.png" class="d-block w-100 home-img" alt="..."/>
		      <div class="carousel-caption d-md-block home-page-slider-sec">
		        <h5>We don't believe in Average! We aspire to deliver the best Design. <br/> </h5>
		        <p>Don't believe us. Our website is one of the finest example. We design the best or we don't make false promises. On an average, a Client stay with us for atleast 3-6 years. </p>
		        <p>Get an eye-catching websites, banners and logo designed at a nominal price.</p>
		       
			         <Link to='/popup'>
			    <button type="" class="btn btn-primary js-message-popup">Get Started Now</button>
		     </Link>
			  </div>
		    </div>
		  </div>
		  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Next</span>
		  </button>
	</div>

        </div>
    )
}

export default Slider