import React from 'react'
import { Link } from 'react-router-dom'

function HelpYou() {
  return (
    <div>
        <section class="background-cover align-center medium-padding120 web-app cont-sec eccormce-contact web-app-dev scss-serve-sec">
		<div class="container">
			<div class="bg-96">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="crumina-module crumina-heading">
							<h2 class="heading-title">Have a project idea, a website, a mobile app, an ERP but not sure about where to start?</h2>
						</div>

						<Link to='/popup' class="web-app-dev-btn">
							<button type="" class="btn btn-primary btn-market btn--with-shadow js-message-popup let-talk-btn serve-seccess-story-btn">Contact Now</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default HelpYou