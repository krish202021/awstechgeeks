import React from 'react'

import { Link } from 'react-router-dom'
function Subscription() {
    return (
        <div>
            <section class="crumina-module background-contain subscription-change-section">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-3 col-xxl-3">
                            <div class="client-sec-img">
                                <figure><img src="img/funny-man-cartoon.png" alt="" /></figure>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-12 col-xxl-9">
                            <div class="crumina-module">
                                <h2 class="heading-title">Why to pay monthly subscription charges?</h2>
                                <h2 class="heading-title">Get a web application developed to manage <br /> your Business operations 100%.</h2>
                                <Link to='/popup' class="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary js-message-popup">
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

export default Subscription