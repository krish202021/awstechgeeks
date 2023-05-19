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
function AboutOurWork() {
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
         	<div class="swiper-wrapper">

                          <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
								<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/hire/go-gro-local-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/go-gro-local.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue-dark"></div>
									<div class="case-item-content">
										<h3 class="title">Go Gro Local</h3>
                                        <p class="title">Multi-vendor, multi-store e-commerce website - Delivery within 30 minutes. </p>
										<h6 class="title">Built In: Codeigniter</h6>
										<a href="https://gogrolocal.in/en/" class="more-arrow white" target="_blank">
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
									<p onClick={()=>{action('img/hire/worthm-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/worthm.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-marrow"></div>
									<div class="case-item-content">
										<h3 class="title">Worthmetrix</h3>
										<p class="title">A Business CRM for a Financial Firm </p>
										<h6 class="title">Built In: Codeigniter</h6>
										<a href="https://worthmetrix.com/" class="more-arrow white" target="_blank">
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
									<p onClick={()=>{action('img/hire/ezshopit-zoom-1.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/ezshopit.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue-dark"></div>
									<div class="case-item-content">
										<h3 class="title">Ezshopit</h3>
										<p class="title">A multi-language, multi-currency e-Commerce Website </p>
										<h6 class="title">Built In: Codeigniter</h6>
										<a href="https://ezshopit.com/" class="more-arrow white" target="_blank">
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
									<p onClick={()=>{action('img/hire/tommygun-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/tommygun.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-marrow"></div>
									<div class="case-item-content">
										<h3 class="title">Tommygun Art Club</h3>
										<p class="title">A digital art selling e-commerce website </p>
										<h6 class="title">Built In: Codeigniter</h6>
										<a href="https://tommygunartclub.com/" class="more-arrow white" target="_blank">
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
  )
}

export default AboutOurWork