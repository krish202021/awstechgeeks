import React from 'react'

import { Link } from 'react-router-dom'
function Slider() {
    return (
        <div>
      
	<div id="carouselExampleCaptions about-us-banner" class="carousel slide php-banner" data-bs-ride="carousel">
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img src="img/node-bg.png" class="d-block w-100 node-page" alt="..."/>
		      <div class="carousel-caption d-md-block about-us-banner">
				<p>HIRE A DEDICATED NODE DEVELOPER</p>
		        <h5 class="abu-title">Node.js is the road to a real-time application. </h5>

		        <p>When it comes to building Real-time, fast, scalable and dynamic applications<br/> 
		        	by using an open-source technology, Node.js is the best choice.<br/>
					We have been developing API'S in Node/Mongo for more than 5 years now.<br/>
				  So, we completely adhere to how fast
									this server-side javascript based framework renders.</p>
									<Link to='/popup'>
		        <button type="" class="btn btn-primary js-message-popup">Talk To Us Now</button>
				</Link>
		      </div>
		    </div>
		  </div>
	</div>
        </div>
    )
}

export default Slider