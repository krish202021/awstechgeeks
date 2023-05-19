import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import HireLaravelWork from '../../../includes/slider/HireLaravelWork'
import SeoTag from '../../seo/SeoTag'
import PromoBlock from './PromoBlock'
import Slider from './Slider'
import WhyLaravel from './WhyLaravel'


function HireLaravel() {
    return (
        <div>
            <Header />
            <SeoTag page_id={4}/>
            <div class="content-wrapper">
                <Slider />
                <HireLaravelWork/>
                <WhyLaravel />
                <PromoBlock />
            </div>
            <Footer />
        </div>
    )
}

export default HireLaravel