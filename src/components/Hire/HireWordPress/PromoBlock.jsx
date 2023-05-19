import React from 'react'
import { Link } from 'react-router-dom'
function PromoBlock() {
    return (
        <div>
<section class="background-cover align-center medium-padding120 more-que-sec wordpress-consult-box still-confused-sec">
		<div class="container">
			<div class="bg-96">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="crumina-module crumina-heading">
							<h2 class="heading-title">Looking to get a website or a <br/> custom plugin built in Wordpress?</h2>
						</div>

						  <Link to='/popup' class="btn btn-primary btn-market btn--with-shadow hire-p-sec js-message-popup hr-sec-btn">
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