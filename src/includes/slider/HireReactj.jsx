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
function HireReactjswork() {
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
							<h2 class="heading-title hire-heading">Some of our React JS <br/> Work</h2>
						</div>
					</div>

				</div>

                    	<div class="col-lg-12 col-md-12 col-sm-12">
					{/* <div class="swiper-container pagination-bottom" data-show-items="2"> */}
						<div class="swiper-wrapper">
                                <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
						<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/batchmates-zoom.png')}}  class="case-item__thumb js-zoom-image">
										<img src="img/batchmates.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue"></div>
									<div class="case-item-content">
										<h3 class="title">MyBatch.club</h3>
										<p class="title">A social media website to connect school and college batchmates </p>
										<h6 class="title">Built in: React.js, Node.js</h6>
										<a href="http://mybatch.club/" class="more-arrow white" target="blank">
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
									<p onClick={()=>{action('img/bolton-zoom.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/bolton.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue-dark"></div>
									<div class="case-item-content">
										<h3 class="title">Bolton Travel</h3>
										<p class="title">A CRM to manage Customers Data, Quotations and reports</p>
										<h6 class="title">Built in: React.js, Node.js</h6>
										<a href="#" class="more-arrow white" target="blank">
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
									<p onClick={()=>{action('img/tgays-zoom.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/tgays.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-marrow"></div>
									<div class="case-item-content">
										<h3 class="title">Tech Geeks</h3>
										<p class="title">Corporate website built in React and Node.js</p>
										<h6 class="title">Built in: React.js, Node.js</h6>
										<a href="#" class="more-arrow white" target="blank">
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
									<p onClick={()=>{action('img/hire/eolveai-zoom.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/EvolveAi.png" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue"></div>
									<div class="case-item-content">
										<h3 class="title">EvolveAI</h3>
										<p class="title">Subscription based Gym training to paid users</p>
										<h6 class="title">Built In: React.js, Next.js</h6>
										<a href="https://www.evolveai.app/" class="more-arrow white" target="blank">
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
					{/* </div> */}
				</div>

                    </div>
                </div>
               
            </section>
    </div>
  )
}

export default HireReactjswork