import React from 'react'
import { Link } from 'react-router-dom'
import ShowWorkPortfolio from '../../WorkPortfolioSection/ShowWorkPortfolio'
function PromoBlock() {
    return (
        <div>
			<ShowWorkPortfolio/>
           	<section class="background-cover align-center medium-padding120 more-que-sec still-confused-sec hire-php-pop-section">
				<div class="container">
					<div class="bg-96">
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="crumina-module crumina-heading">
								

									<h2 class="heading-title mobile-view">Let our experienced developers bring your ideas to life with our comprehensive web and mobile development services.</h2>
								</div>

								<Link to='/popup' class="btn btn-primary btn-market btn--with-shadow hire-p-sec js-message-popup hr-sec-btn ">
									<div class="text">
										<span class="title">Share Requirement</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

        </div>
    )
}

export default PromoBlock