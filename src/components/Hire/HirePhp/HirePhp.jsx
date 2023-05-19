import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import HirePhpWork from '../../../includes/slider/HirePhpWork'
import SeoTag from '../../seo/SeoTag'

import PromoBlock from './PromoBlock'
import Slider from './Slider'
import WhyPhp from './WhyPhp'


function HirePhp() {
    return (
        <div>
            <Header />
            <SeoTag page_id={3}/>
            <div class="content-wrapper">
                <Slider />
               
                <HirePhpWork/>
     
                <WhyPhp />
                <PromoBlock />
            </div>
            <Footer />
        </div>
    )
}

export default HirePhp