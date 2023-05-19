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
function HireWordpresswork() {
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
							<h2 class="heading-title hire-heading">Some of our WordPress <br/> Work</h2>
						</div>
					</div>

				</div>


                    	<div class="col-lg-12 col-md-12 col-sm-12">
					{/* <div class="swiper-container pagination-bottom" data-show-items="2"> */}
							<div class="swiper-wrapper">
                                 <OwlCarousel className="slider-items owl-carousel" {...options} nav  loop >
						
							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/hire/Audio-Itch-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/Audio-Itch.jpg" alt="case"/>
									</p>
									

									<div class="square-colored bg-product-blue-dark"></div>
									<div class="case-item-content">
										<h3 class="title">Audioitch</h3>
										<p class="title">Business in Car Services</p>
										<h6 class="title">Built In: Wordpress/Woo-commerce</h6>
										<a href="http://audioitch.com/" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkhref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkhref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/hire/globalshoping-zoom.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/High-Quality-Products.jpg" alt="case"/>
									</p>

									<div class="square-colored bg-product-marrow"></div>
									<div class="case-item-content">
										<h3 class="title">Ez Global Shopping</h3>
										<p class="title">Website that sells multiple category products(dropshipping)</p>
										<h6 class="title">Built In: : Wordpress/Woo-commerce</h6>
										<a href="https://ezglobalshoping.com/" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkhref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkhref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/hire/sgtrek-click.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/sgtrek.jpg" alt="case"/>
									</p>

									<div class="square-colored bg-dark"></div>
									<div class="case-item-content">
										<h3 class="title">SGTREK</h3>
										<p class="title">Tourists and Travellers information and booking Website</p>
										<h6 class="title">Built In: Wordpress/Woo-commerce</h6>
										<a href="https://sgtrek.com" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkhref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkhref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/hire/itsmycostume-zoom.png')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/itsmycostume.jpg" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue"></div>
									<div class="case-item-content">
										<h3 class="title">Its My Costume</h3>
										<p class="title">Ethinic and party wear costumes selling websites</p>
										<h6 class="title">Built In: Wordpress/Woo-commerce</h6>
										<a href="https://itsmycostume.com" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkhref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkhref="#utouch-icon-arrow-right1"></use>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>


							<div class="swiper-slide">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
									<p onClick={()=>{action('img/hire/brightguideafrica-click.jpg')}} class="case-item__thumb js-zoom-image">
										<img src="img/hire/brightguideafrica.jpg" alt="case"/>
									</p>

									<div class="square-colored bg-product-blue"></div>
									<div class="case-item-content">
										<h3 class="title">Bright Guide Africa</h3>
										<p class="title">Informational website for better client communication</p>
										<h6 class="title">Built In: Wordpress</h6>
										<a href="https://brightguideafrica.com/" class="more-arrow white" target="blank">
											<span>Visit Website</span>
											<div class="btn-next">
												<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1">
													<use xlinkhref="#utouch-icon-arrow-right-1"></use>
												</svg>
												<svg class="utouch-icon utouch-icon-arrow-right1">
													<use xlinkhref="#utouch-icon-arrow-right1"></use>
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

export default HireWordpresswork