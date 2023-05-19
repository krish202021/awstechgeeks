import React from "react";

function Offer() {
  return (
    <div>
      {/* <section className="background-contain crumina-module crumina-module-subscribe-form">
		<div className="container">
			<div className="row">
				<div className="subscribe-form">
					<div className="subscribe-main-content bg-primary-color">

						<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
							<div className="crumina-module crumina-heading">
								<h2 className="heading-title">Love offers and discounts? Subscribe Now!</h2>
								<p className="heading-text">We offer discounts on our services on special occasions and from time to time. Please subscribe if you want to capture our discount offers at first.
								</p>
							</div>

							<form className="form-validate form-inline subscribe-form-js" >
								<input placeholder="Enter your email address"/>
								<button className="btn btn--green-light" type='button'>
									Subscribe
								</button>
							</form>
						</div>

					</div>
					<div className="subscribe-img-sec">
						<img className="subscribe-img" src="img/subscribe-img.png" alt="image"/>
					</div>
				</div>
			</div>
		</div>
	</section> */}

      <section className="service-partner-box">
        <div className="container">
          <div class="crumina-module crumina-heading">
            <h2 class="heading-title">
              Service To <span class="c-primary">Industry</span>
            </h2>
          </div>
          <div className="service-partner-logo">
            <div class="row">
              <div className="col-lg-2 col-md-4 col-12 col-sm-6 col-xs-2">
                <figure>
                  <img src="img/godaddy.png" alt="godaddy" />
                </figure>
              </div>
              <div className="col-lg-2 col-md-4 col-12 col-sm-6 col-xs-2">
                <figure>
                  <img src="img/Milesweb.png" alt="Milesweb" />
                </figure>
              </div>
              <div className="col-lg-2 col-md-4 col-12 col-sm-6 col-xs-2">
                <figure>
                  <img src="img/AWS.png" alt="AWS" />
                </figure>
              </div>
              <div className="col-lg-2 col-md-4 col-12 col-sm-6 col-xs-2">
                <figure>
                  <img src="img/GSuite.png" alt="GSuite" />
                </figure>
              </div>
              <div className="col-lg-2 col-md-4 col-12 col-sm-6 col-xs-2">
                <figure>
                  <img src="img/Google.png" alt="Google" />
                </figure>
              </div>
              <div className="col-lg-2 col-md-4 col-12 col-sm-6 col-xs-2">
                <figure>
                  <img src="img/facebook_logo.png" alt="facebook" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offer;
