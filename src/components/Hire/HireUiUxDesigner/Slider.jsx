import React from 'react'
import { Link } from 'react-router-dom'
function Slider() {
    return (
        <div>


	<div id="carouselExampleCaptions about-us-banner" class="carousel slide php-banner" data-bs-ride="carousel">
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img src="img/graphics-designer-bg.png" class="d-block w-100" alt="..."/>
		      <div class="carousel-caption d-md-block about-us-banner">

				<p>HIRE AN EXPERT UI/UX DESIGNER</p>
		        <h5 class="abu-title">As far as the customer is concerned,<br/> the interface is the product. </h5>

		        <p>Good UX is good business. If you think good design is expensive, you should look<br/> at the cost of bad design. <br/> 
		        	Your app or website might be a technological marvel, but don’t forget that it’s people who need<br/> to interact with it. 
		         </p>
				  <Link to='/popup' >
		        <button type="" class="btn btn-primary js-message-popup">Get Started Now</button>
				</Link>
		      </div>
		    </div>
		  </div>
	</div>

        </div>
    )
}

export default Slider