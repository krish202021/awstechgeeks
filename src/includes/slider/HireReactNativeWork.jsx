import React, { useState } from 'react'

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
function HireReactNativework() {
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
               
  <section className="crumina-module crumina-module-slider medium-padding100 hire-page-slider">

                <div className="container">
             
                    <div className="row">
                        <div class="crumina-module crumina-module-img-bottom">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="crumina-module crumina-heading">
							<h2 class="heading-title hire-heading">Some of our React Native <br/> Work</h2>
						</div>
					</div>

				</div>


                    	<div class="col-lg-12 col-md-12 col-sm-12">
					{/* <div class="swiper-container pagination-bottom" data-show-items="2"> */}
							<div class="swiper-wrapper">
                                 <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/hire/ezshopit-zoom-1.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/ezshopit.png" alt="case"/>
									</p>
									

									<div class="square-colored bg-product-blue-dark"></div>
									<div class="case-item-content">
										<h3 class="title">Ezshopit</h3>
										<p class="title">Multi-vendor, multi-currency, 2 language E-commerce app</p>
										<h6 class="title">Built In: React Native</h6>
										<a href="https://play.google.com/store/apps/details?id=com.ezshopitss" class="more-arrow white" target="blank">
											<span>Visit App Store</span>
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
									<p onClick={()=>{action('img/hire/fastest-delivery-app-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/fastest-delivery-app.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-black"></div>
									<div class="case-item-content">
										<h3 class="title">Delivery App</h3>
										<p class="title">App to manage all deliveries and update delivery status</p>
										<h6 class="title">Built In: React Native</h6>
										<a href="https://play.google.com/store/apps/details?id=com.e3_delivery_apps" class="more-arrow white" target="blank">
											<span>Visit App Store</span>
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
									<p onClick={()=>{action('img/hire/e3-kart-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/e3-kart.png" alt="case"/>
									</p>

									<div class="square-colored bg-dark"></div>
									<div class="case-item-content">
										<h3 class="title">E3 Kart</h3>
										<p class="title">E-Commerce app to manage product items</p>
										<h6 class="title">Built In: React Native</h6>
										<a href="https://play.google.com/store/apps/details?id=com.e3kart" class="more-arrow white" target="blank">
											<span>Visit App Store</span>
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
									<p onClick={()=>{action('img/hire/expense-management-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/expense-management.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue"></div>
									<div class="case-item-content">
										<h3 class="title">Expense Management</h3>
										<p class="title">Manage all the income and expenses and check reports</p>
										<h6 class="title">Built In: React Native</h6>
										<a href="https://play.google.com/store/apps/details?id=com.e3_expense_management&hl=en&gl=US" class="more-arrow white" target="blank">
											<span>Visit App Store</span>
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
									<p onClick={()=>{action('img/hire/eolveai-mobile-zoom.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/eolveai-mobile.png" alt="case"/>
									</p>

									<div class="square-colored bg-dark"></div>
									<div class="case-item-content">
										<h3 class="title">EvolveAI</h3>
										<p class="title">Subscription based Gym training to paid users</p>
										<h6 class="title">Built In: React Native, Firebase Cloud Storage, Stripe</h6>
										<a href="https://play.google.com/store/apps/details?id=com.skynetcoaching.expertsystem&hl=en_IN&gl=US" class="more-arrow white" target="blank">
											<span>Visit App Store</span>
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
					{/* </div> */}
				</div>

                    </div>
                </div>
               
            </section>
    </div>
  )
}

export default HireReactNativework