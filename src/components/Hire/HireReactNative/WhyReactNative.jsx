import React from 'react'
import ReactNativeAccordion from '../../../includes/Accordionpopup/ReactNative/ReactNativeAccordion'

function WhyReactNative() {
    return (
        <div>
            <section className="medium-padding120 native-sec-box">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
                            <img src="img/react-mobile.png" className="react-mobile-img" alt="image" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 col-xxl-6">

                            <div className="crumina-module crumina-heading">
                                <h2 className="heading-title">Why<span className="c-primary"> React Native</span> for<br /> Mobile App?</h2>
                            </div>

                          <ReactNativeAccordion/>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyReactNative