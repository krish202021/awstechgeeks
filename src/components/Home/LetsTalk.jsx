import React from 'react'
import { Link } from 'react-router-dom'

import GettingProjEasy from './GeetingProjEasy'
function LetsTalk() {
    return (
        <div>

	<GettingProjEasy/>

	<section class="background-cover align-center medium-padding120 need-web hm-need-wab">
		<div class="container">
			<div class="bg-96">
				<div class="row">
					<div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12">
						<div class="crumina-module crumina-heading">
							<h2 class="heading-title home-title need-website-web-app-sec">Need a Website, Web Application, Customized CRM Software or a Mobile App for <br/>your Business?</h2>
						</div>

							<Link to='/popup'  class="btn btn-primary btn-market btn--with-shadow js-message-popup let-talk-btn home-talk-btn">
							LET'S TALK
						    </Link>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}

export default LetsTalk