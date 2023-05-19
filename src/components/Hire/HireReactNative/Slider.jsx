import React from 'react'
import { Link } from 'react-router-dom'
function Slider() {
    return (
        <div>

           
	<div id="carouselExampleCaptions about-us-banner" class="carousel slide" data-bs-ride="carousel">
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img src="img/react-bg.png" class="d-block w-100" alt="..."/>
		      <div class="carousel-caption d-md-block about-us-banner">
				<p>HIRE A REACT NATIVE DEVELOPER</p>
		        <h5 class="abu-title">Hire a Dedicated React Native Developer for your<br/> Mobile App Development Needs!</h5>
                 
		        <p>React Native is a popular Facebook Technology that is used<br/>
		         to build both Android and iOS app giving a native look and feel<br/> to mobile applicationss.
                   
                   </p>
                   <Link to='/popup'>
		        <button type="" class="btn btn-primary js-message-popup">CONTACT AN EXPERT NOW</button>
		           </Link>
              </div>
		    </div>
		  </div>
	</div>
        </div>
    )
}

export default Slider