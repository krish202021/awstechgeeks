import React from 'react'
import { Link } from 'react-router-dom'
function Slider() {
    return (
        <div>
	<div id="carouselExampleCaptions about-us-banner" class="carousel slide php-banner" data-bs-ride="carousel">
		  <div class="carousel-inner">
		    <div class="carousel-item carousal-img active">
		      <img src="img/codeigniter-bg.png" class="d-block w-100" alt="..."/>
		      <div class="carousel-caption d-md-block about-us-banner hire_php_carousel-caption">
				<p>HIRE A CODEIGNITER DEVELOPER</p>
		        <h5 class="abu-title">If you are just starting your business, Codeigniter is the right framework for your tech product. </h5>
				
		        <p>There are lots of unexpected expenses involved while starting a<br/>
new business and it takes a few years for any business to be successful. So, <br/>why to go for a huge expense in the first place. Hire a Codeigniter developer at an easy cost.</p>
				         
				<p>Are you still not sure? Let’s help you decide!</p>

				<Link to='/popup'>
		        <button type="" class="btn btn-primary js-message-popup"> Talk to us Now</button>
				</Link>
		      </div>
		    </div>
		  </div>
	</div>
        </div>
    )
}

export default Slider