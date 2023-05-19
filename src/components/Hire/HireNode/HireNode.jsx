import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import HireNodeWork from '../../../includes/slider/HireNodeWork'
import Demoslider from '../../../includes/Accordionpopup/Demoslider'
import PromoBlock from './PromoBlock'
import Slider from './Slider'

import WhyNode from './WhyNode'
import SeoTag from '../../seo/SeoTag'

function HireNode() {
    return (
        <div>
            <Header />
            <SeoTag page_id={5}/>
            <div class="content-wrapper">
                <Slider />
                   
             <HireNodeWork/>
                <WhyNode />
                <PromoBlock />
            </div>
            <Footer />
        </div>
    )
}

export default HireNode