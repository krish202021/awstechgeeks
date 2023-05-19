import React, { useState } from 'react'
import Footer from '../../includes/Footer'
import Header from '../../includes/Header'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';

function EcommercePortfolio() {
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
            <Header />
            <div className="content-wrapper">




    	<section class="medium-padding120 portfolia-case-section ecommerce-port-box_section portfolio-box-align-sction">
			<div class="container">
				<div class="crumina-module crumina-module-img-bottom">
					<div class="row mb60 portfolio-banner-sec">
						<div class="col-lg-7 col-md-12 col-12 col-xxl-7">
							<div class="crumina-module crumina-heading">
								<h2 class="heading-title">Discover our e-commerce treasures</h2>
								<h3 class="heading-title">Get Your Store Online Now and Start Selling Your Products. </h3>

								
								<div class="crumina-bootom-heading"> 
									<h6 class="heading-sup-title">Behold our awe-inspiring e-commerce portfolio, where the power of innovation and magic of technology combine to create a mesmerizing shopping experience! </h6>
									<Link to='/popup' class="btn btn--gree btn--with-shadow js-message-popup cd-nav-trigger">
									Talk To Us Now
									</Link>
								</div>
								
							</div>
						</div>

						<div class="col-lg-5 col-md-4 col-12 col-xxl-5">
							<div class="portfolio-img-sec">
								<img src="img/portfolio-img.png" alt="portfolio"/>
							</div>
						</div>
					</div>
				</div>
			</div>	
			<section class="section-pr-el margin-top-140">
				<div class="container-el">

					<div class="el el-mondocteur el-desktop reach">
						<div class="illu">
						<div class="bg bg-product-blue"></div>
						</div>
						<div class="container">
						
						<div class="row">
						<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
							<img src="img/hire/gp-lifestyle.png" alt="case"/>
						</div>
						
						<div class="container-text col-lg-6 col-md-6 col-sm-12">
							<div class="crumina-module crumina-case-item" data-mh="case-item">
							
							<div class="case-item-content">
								<h2 class="title">GPLife Style</h2>
								
								<h5 class="title">Developed In: Wordpress/Woo-commerce</h5>
								{/* <a href="https://gplifestyle.in/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
									<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
									<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
								</a> */}

								<p class="loaction-text">LOCATION: INDIA</p> 
							    
								<h2 class="title high-title">Highlights:</h2>
								<p>
									- Wordpress and Woo-commerce Set up<br/>
									- Wordpress Theme Design and Customization<br/>
									- Product and Category Management<br/>
									- Manage Product by Variation<br/>
									- Inventory Management<br/>
									- Shopping Cart, Checkout, Razorpay Integration<br/>
									- Banner, Logo, Image Design for GPLifestyle<br/>
								</p>
								
							</div>
							</div>
						</div>

						</div>
						
						</div>
					</div>
					<div class="el el-lecollectionist el-desktop reach">
						<div class="illu">
						<div class="bg bg-product-blue-dark" ></div>
						</div>
						<div class="container">
						
						<div class="row">
							<div class="container-text col-lg-6 col-md-6 col-sm-12">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
								
								<div class="case-item-content">
									<h2 class="title">Go Gro Local</h2>
									
									<h5 class="title">Developed In: Codeigniter</h5>
									<a href="https://gogrolocal.in/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
										<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
										<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
									</a>
							        
									<p class="loaction-text">LOCATION: INDIA</p>
								
									<h2 class="title high-title">Highlights:</h2>
									<p>- Find stores near you
									<br/>- Product Listing By Category, Product Details
										<br/>- Order Grocery, Medicines, Clothes, Fruits, Vegetables etc.
										<br/>- Shopping Cart, Login to Checkout, Payment using Razorpay
										<br/>- Order Summary, My Orders, Tracking Orders
										<br/>- Multi-vendor Management(More than 500 vendors)
										<br/>- Category &amp; Product(Inventory) Management
										<br/>- Coupon Management, Sales Tarcking
									</p>
									
								</div>
								</div>
							</div>

							<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
								<img src="img/hire/go-gro-local.png" alt="case"/>
							</div>

						</div>
						
						</div>
					</div>
					
				</div>
			</section>

			<section class="section-pr-el margin-top-140">
				<div class="container-el">

					<div class="el el-mondocteur el-desktop reach">
						<div class="illu">
						<div class="bg bg-product-marrow"></div>
						</div>
						<div class="container">
						
						<div class="row">
							<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
								<img src="img/hire/lindys-liquor.png" alt="case"/>
							</div>
							
							<div class="container-text col-lg-6 col-md-6 col-sm-12">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
								
								<div class="case-item-content">
									<h2 class="title">Lindys Liquor</h2>
									
									<h5 class="title">Developed In: Codeigniter</h5>
									<a href="https://lindysliquor.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
										<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
										<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
									</a>
							        
									<p class="loaction-text">LOCATION: USA</p>
								
									<h2 class="title high-title">Highlights:</h2>
									<p>
									- An Online E-Commerce Wine Shop.<br/>
									- Shopping Cart, PayPal Payment, Checkout, Order Summary<br/>
									- Separate Admin and Vendor Panel.<br/>
									- Vendor Management, Transaction Details, Customer Details.<br/>
									- Website Settings, - View Sales Report<br/>
									</p>
									
								</div>
								</div>
							</div>

						</div>
						
						</div>
					</div>
					<div class="el el-lecollectionist el-desktop reach">
						<div class="illu">
						<div class="bg bg-dark" ></div>
						</div>
						<div class="container">
						
						<div class="row">
							<div class="container-text col-lg-6 col-md-6 col-sm-12">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
								
								<div class="case-item-content">
									<h2 class="title">Ezshopit</h2>
									
									<h5 class="title">Developed In: Codeigniter</h5>
									<a href="http://ezshopit.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
										<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
										<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
									</a>

									<p class="loaction-text">LOCATION: DUBAI</p>  
								    
									<h2 class="title high-title">Highlights:</h2>
									<p>
									- Multi-vendor, Multi-currency, 2 Languages support<br/>
									- Product Listing By Category, Add To Cart, Shopping Cart<br/>
										- Checkout, Payment Gateway, Customer Login<br/>
									- Track Order, Track Shipping Status of Product<br/>
									- Track Customer Complain, Coupon Management <br/>
									- Warehouse Login, Assign Order, Update Delivery Status<br/>
									- Admin Section: Manage Categories, Manage Product,<br/>
									- Manage User, Manage Vendor, Track Sales, Offer Coupons<br/>

									</p>
									
								</div>
								</div>
							</div>

							<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
								<img src="img/hire/ezshopit.png" alt="case"/>
							</div>

						</div>
						
						</div>
					</div>
					
				</div>
			</section>

			<section class="section-pr-el margin-top-140">
				<div class="container-el">

					<div class="el el-mondocteur el-desktop reach">
						<div class="illu">
						<div class="bg bg-product-blue-dark"></div>
						</div>
						<div class="container">
						
						<div class="row">
						<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
							<img src="img/hire/1oakwholesale.png" alt="case"/>
						</div>
						
						<div class="container-text col-lg-6 col-md-6 col-sm-12">
							<div class="crumina-module crumina-case-item" data-mh="case-item">
							
							<div class="case-item-content">
								<h2 class="title">1OAK WHOLESALE</h2>
								
								<h5 class="title">Developed In: Magento2</h5>
								<a href="https://1oakwholesale.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
									<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
									<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
								</a>
						        
								<p class="loaction-text">LOCATION: USA</p>
							
								<h2 class="title high-title">Highlights:</h2>
								<p>
									- Upgrade existing website from Magento1 to Magento2.<br/>
									- Customization of Magento2 Premium Theme<br/>
									- Extension Installation and Configuration.<br/>
									- Magento2 Speed Optimization.<br/>
									- Data Migration from Magento1 to Magento2.<br/>
									- Ongoing Maintenance and Security.<br/>
									- Custom Extension Development to hide Price and Add to Cart Button on Products.<br/>
								</p>
								
							</div>
							</div>
						</div>

						</div>
						
						</div>
					</div>
					<div class="el el-lecollectionist el-desktop reach">
						<div class="illu">
						<div class="bg bg-dark" ></div>
						</div>
						<div class="container">
						
						<div class="row">
							<div class="container-text col-lg-6 col-md-6 col-sm-12">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
								
								<div class="case-item-content">
									<h2 class="title">Ez Global Shopping</h2>
									
									<h5 class="title">Developed In: Wordpress/Woo-commerce</h5>
									<a href="https://ezglobalshoping.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
										<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
										<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
									</a>
							        
									<p class="loaction-text">LOCATION: DUBAI</p>
								
									<h2 class="title high-title">Highlights:</h2>
									<p>
									- E-Commerce Website built in Wordpress<br/>
									- Dropshipping integrated with Website<br/>
									- Product Listing<br/>
									- Price Display in Multiple Currency<br/>
									- Product Detail, Add to Cart<br/>
									- Payment, Checkout, Order Summary<br/>


									</p>
									
								</div>
								</div>
							</div>

							<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
								<img src="img/hire/ezglobalshop.png" alt="case"/>
							</div>

						</div>
						
						</div>
					</div>
					
				</div>
			</section>

			<section class="section-pr-el margin-top-140">
				<div class="container-el">

					<div class="el el-mondocteur el-desktop reach">
						<div class="illu">
						<div class="bg bg-product-marrow"></div>
						</div>
						<div class="container">
						
						<div class="row">
						<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
							<img src="img/hire/smart-relief.png" alt="case"/>
						</div>
						
						<div class="container-text col-lg-6 col-md-6 col-sm-12">
							<div class="crumina-module crumina-case-item" data-mh="case-item">
							
							<div class="case-item-content">
								<h2 class="title">Smart Relief Massage</h2>
								
								<h5 class="title">Developed In : Magento</h5>
								<a href="https://smartreliefmassage.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
									<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
									<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
								</a>

								<p class="loaction-text">LOCATION: USA</p>  
							
								<h2 class="title high-title">Highlights:</h2>
								<p>
									- Custom PSD design to be approved by Client.<br/>
									- PSD to Magento Theme Conversion.<br/>
									- Responsive Design Conversion.<br/>
									- Paypal, Amazon Pay.<br/>
									- Magento Shopping Cart Configuration and Management.<br/>
								</p>
								
							</div>
							</div>
						</div>

						</div>
						
						</div>
					</div>
					<div class="el el-lecollectionist el-desktop reach">
						<div class="illu">
						<div class="bg bg-product-blue-dark" ></div>
						</div>
						<div class="container">
						
						<div class="row">
							<div class="container-text col-lg-6 col-md-6 col-sm-12">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
								
								<div class="case-item-content">
									<h2 class="title">Tommygun Art Club</h2>
									
									<h5 class="title">Developed in: Codeigniter</h5>
									{/* <a href="https://tommygunartclub.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
										<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
										<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
									</a> */}
							         <p class="loaction-text">LOCATION: USA</p> 
								
									<h2 class="title high-title">Highlights:</h2>
									<p>
									- E-Commerce Website Design (Frontend and Admin)<br/>
									- Sign Up, Login, Forget Password, Newsletter Sign Up<br/>
									- Art Gallery, Start Contest, Vote Contest, Assign Points<br/>
									- Shopping Cart, First Data Payment, Track Order<br/>
									- Admin Settings, Track Payments, Track Users,<br/>
									- Manage Artist, Contest, Track Member Points, Manage Emails<br/>


									</p>
									
								</div>
								</div>
							</div>

							<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
								<img src="img/hire/tommygun.png" alt="case"/>
							</div>

						</div>
						
						</div>
					</div>
					
				</div>
			</section>

			<section class="section-pr-el margin-top-140">
				<div class="container-el">
					<div class="el el-mondocteur el-desktop reach">
						<div class="illu">
						<div class="bg bg-product-blue"></div>
						</div>
						<div class="container">
						
						<div class="row">
						<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
							<img src="img/hire/square-one-london.png" alt="case"/>
						</div>
						
						<div class="container-text col-lg-6 col-md-6 col-sm-12">
							<div class="crumina-module crumina-case-item" data-mh="case-item">
							
							<div class="case-item-content">
								<h2 class="title">Square One London</h2>
								
								<h5 class="title">Developed in: Magento 2</h5>
								<a href="https://squareonelondon.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
									<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
									<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
								</a>
						        
								<p class="loaction-text">LOCATION: UK</p> 
							
								<h2 class="title high-title">Highlights:</h2>
								<p>
									- E-Commerce Website for Men/Women in Apparels/Clothes<br/>
									- Theme Integration and Customization<br/>
									- Apparel Listing, Details, Variations<br/>
									- Add to Cart, Payment through Paypal, Checkout<br/>
									- Shipping, Customer SignIn<br/>
									- Product & Inventory Management, Order Tracking<br/>
									- Sales Tracking<br/>
								</p>
								
							</div>
							</div>
						</div>

						</div>
						
						</div>
					</div>
					<div class="el el-lecollectionist el-desktop reach">
						<div class="illu">
						<div class="bg bg-dark" ></div>
						</div>
						<div class="container">
						
						<div class="row">
							<div class="container-text col-lg-6 col-md-6 col-sm-12">
								<div class="crumina-module crumina-case-item" data-mh="case-item">
								
								<div class="case-item-content">
									<h2 class="title">My Party Jumpers</h2>
									
									<h5 class="title">CMS: Magento</h5>
									<a href="https://www.mypartyjumpers.com/" target="_blank" class="more-arrow white">
									<span>Visit Website</span>
									<div class="btn-next">
										<svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
										<svg class="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
									</div>
									</a>
							        
									<p class="loaction-text">LOCATION: USA</p> 
								
									<h2 class="title high-title">Highlights:</h2>
									<p>
									- Magento Theme Design & Integration<br/>
									- Magento Development & Customization<br/>
									- Product Catalog(Inventory Management)<br/>
									- Customization of Search and Sorting Features<br/>
									- Add to Request, Manage Featured Products<br/>
									- Product Gallery, Extension for Request Customization<br/>
									- Request Details, Submit Request<br/>
									- Review Page Customization<br/>


									</p>
									
								</div>
								</div>
							</div>

							<div class="container-img big col-lg-6 col-md-6 col-sm-12" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}" >
								<img src="img/mypartyjumpers.png" alt="case"/>
							</div>

						</div>
						
						</div>
					</div>
				</div>
			</section>

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
			

	</section>

	<section class="background-cover align-center medium-padding120 need-web hm-need-wab e-port web-app-dev view-portfolio-pg">
		<div class="container">
			<div class="bg-96">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="crumina-module crumina-heading">
							<h2 class="heading-title home-title">I am still confused and would like guidance from an ecommerce expert. </h2>
						</div>

						<Link to='/popup' class="btn btn-primary btn-market btn--with-shadow js-message-popup let-talk-btn home-talk-btn web-app-dev-btn">
							TALK TO US NOW
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>

            </div>
            <Footer />
        </div>
    )
}

export default EcommercePortfolio