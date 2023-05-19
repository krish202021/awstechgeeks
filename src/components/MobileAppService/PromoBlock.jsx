import React from 'react'
import { Link } from 'react-router-dom'
function PromoBlock() {
    return (
        <div>

            <section class="background-cover align-center medium-padding120 are-you-confuse web-app-dev mobile-app-drop-sec">
                <div class="container">
                    <div class="bg-96">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="crumina-module crumina-heading">
                                    <h2 class="heading-title">Are you confuse about Technology, Budget or Need<br /> some consultation?</h2>
                                </div>

                                <Link to='/popup' class="btn btn-primary btn-market btn--with-shadow drop-msg web-app-dev-btn">
                                    <div class="text">
                                        <span class="title">DROP A MESSAGE NOW</span>
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