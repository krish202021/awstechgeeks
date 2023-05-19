import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import HireReactNativework from '../../../includes/slider/HireReactNativeWork'
import SeoTag from '../../seo/SeoTag'
import PromoBlock from './PromoBlock'
import Slider from './Slider'
import SOmeWorkInReactNative from './SOmeWorkInReactNative'
import WhyReactNative from './WhyReactNative'

function HireReactNative() {
    return (
        <div>
            <Header />
            <SeoTag page_id={7}/>
            <div class="content-wrapper">
                <Slider />
                {/* <SOmeWorkInReactNative /> */}
                <HireReactNativework/>
                <WhyReactNative />
                <PromoBlock />
            </div>
            <Footer />
        </div>
    )
}

export default HireReactNative