import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import HireWordpresswork from '../../../includes/slider/HireWordpresswork'
import SeoTag from '../../seo/SeoTag'
import PromoBlock from './PromoBlock'
import Slider from './Slider'
import WhyWordPress from './WhyWordPress'
import WordPressWork from './WordPressWork'

function HireWordPress() {
    return (
        <div>
            <Header />
            <SeoTag page_id={8}/>
            <div class="content-wrapper">
                <Slider />
             <HireWordpresswork/>
                <WhyWordPress />
                <PromoBlock />
            </div>
            <Footer />
        </div>
    )
}

export default HireWordPress