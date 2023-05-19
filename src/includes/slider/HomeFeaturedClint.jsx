import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
//   margin: 30,
  responsiveClass: true,
  
  nav: true,
  autoplay: false,
  navText: ["<", ">"],
  smartSpeed: 1000,
  responsive: {
      320: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 4,

      }
  },
};
function HomeFeaturedClint() {
  return (
    <div>
         <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
		          	    	<div className="">
								<a className="clients-item" >
									<span className="clients-images">
										<img src="img/qs1.png" className="" alt="logo"/>
									</span>
								</a>
							</div>

							<div className="">
								<a className="clients-item" >
									<span className="clients-images">
										<img src="img/kia-gts-logo.png" className="" alt="logo"/>
									</span>
								</a>
							</div>

							
							<div className="">
								<a className="clients-item" >
									<span className="clients-images">
										<img src="img/thedeenshow.png" className="" alt="logo"/>
									</span>
								</a>
							</div>
							<div className="">
								<a className="clients-item" >
									<span className="clients-images">
										<img src="img/logo_bolton.png" className="" alt="logo"/>
									</span>
								</a>
							</div>
							<div className="">
								<a className="clients-item" >
									<span className="clients-images">
										<img src="img/smartrelief-logo.png" className="" alt="logo"/>
									</span>
								</a>
							</div>
							</OwlCarousel>
    </div>
  )
}

export default HomeFeaturedClint