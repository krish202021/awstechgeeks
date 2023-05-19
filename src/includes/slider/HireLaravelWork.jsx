import React, { Component, useState } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Modal from 'react-modal';
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
          items: 1,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 2,

      }
  },
};
function HireLaravelWork() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [img, setImg] = useState('');
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	function openModal() {
		setIsOpen(true);
	}

	//   function afterOpenModal() {
	// 	// references are now sync'd and can be accessed.
	// 	subtitle.style.color = '#f00';
	//   }

	function closeModal() {
		setIsOpen(false);
	}

	const action = (img) =>{
		setImg(img)
		setIsOpen(true);
	}
  return (
    <div>
		<section class="crumina-module crumina-module-slider medium-padding100 case-project-sec hire-page-slider">
		<div class="container">
			<div class="row">
				<div class="crumina-module crumina-module-img-bottom">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="crumina-module crumina-heading">
							<h2 class="heading-title hire-heading">Some of our best work in Laravel</h2>
						</div>
					</div>

				</div>
				
				<div class="col-lg-12 col-md-12 col-sm-12">
					{/* <div class="swiper-container pagination-bottom" data-show-items="2"> */}
       <div class="swiper-wrapper">
                        <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
								<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/veditalia-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/veditalia.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue"></div>
									<div class="case-item-content">
										<h3 class="title">Veditalia</h3>
										<p class="title">Back-end API system for Tour Booking </p>
										<h6 class="title">Built in: PHP/Laravel</h6>
										<a href="https://test.veditalia.com/" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkHref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkHref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/cloudcalculator123.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/cloudcalculator.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue-dark"></div>
									<div class="case-item-content">
										<h3 class="title">Cloud Calculator</h3>
										<p class="title">Back-end system to save customer data </p>
										<h6 class="title">Built in: PHP/Laravel</h6>
										<a href="https://cloud.techsgeeks.in/" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkHref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkHref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/directcalculator-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/directcalculator.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-marrow"></div>
									<div class="case-item-content">
										<h3 class="title">Direct Calculator</h3>
										<p class="title">Online application to apply for loans, calculate mortgages etc. </p>
										<h6 class="title">Built in: PHP/Laravel</h6>
										<a href="http://directcalculator.techsgeeks.in/" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkHref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkHref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>
							 </OwlCarousel>
						</div>
						<div class="swiper-pagination bottom-left"></div>
							<Modal
								isOpen={modalIsOpen}
								//onAfterOpen={afterOpenModal}
								onRequestClose={closeModal}
								style={customStyles}
								contentLabel="Example Modal"
							>
								<div class="image-zoom-popup-close-btn">
								   <button onClick ={() =>closeModal()} class="popup-close popup-close-btn"><span>×</span></button>
								</div>
								<img src={img}/>
							</Modal>
                   </div>
		</div>
		</div>
		{/* </div> */}
	</section>
      
			
    </div>
  )
}

export default HireLaravelWork