import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import Slider from './Slider'
import Banner from './banner'
import Promoblock from './Promoblock'
import WhyWebsiteDesigner from './WhyWebsiteDesigner'
import WorkInWEbsiteDesigner from './WorkInWEbsiteDesigner'
import WorkInUiUX from './WorkinUiUx'
import UiUxWork from './UiUxWork'
import SeoTag from '../../seo/SeoTag'


function HireUiUxDesigner() {
    return (
        <div>
            <Header />
            <SeoTag page_id={9}/>
            <div class="content-wrapper ui-ux-page-section">
                <Slider />
                {/* <WorkInWEbsiteDesigner /> */}
                {/* <Banner/> */}
                <UiUxWork/>
                {/* <WorkInUiUX/> */}
                {/* <HireUiUxDesigner /> */}
                <WhyWebsiteDesigner />
                <Promoblock />
            </div>
            <Footer />
        </div>
    )
}

export default HireUiUxDesigner