import React from 'react'
import { Link } from 'react-router-dom'
function Slider() {
    return (
        <div>
	<div id="carouselExampleCaptions about-us-banner" class="carousel slide php-banner" data-bs-ride="carousel">
		  <div class="carousel-inner">
		    <div class="carousel-item carousal-img active">
		      <img src="img/laravel-bg.png" class="d-block w-100" alt="..."/>
		      <div class="carousel-caption d-md-block about-us-banner hire_php_carousel-caption">

				<p>HIRE A LARAVEL DEVELOPER</p>
		        <h5 class="">Small or Mid-size Websites or a Large-Scale Web Applications. We have all expertise to develop it in  Laravel. </h5>

		        
		        <p>Laravel is popular Php Framework to develop Mid-size and Large-Scale Web Applications, <br/> Back-end Development and REST API Development.<br/><br/> Have a project but not sure how to proceed?
		         </p>
		       <Link to='/popup'>
		        <button type="" class="btn btn-primary js-message-popup">Talk to Us Now</button>
				</Link>
		      </div>
		    </div>
		  </div>
	</div>

        </div>
    )
}

export default Slider