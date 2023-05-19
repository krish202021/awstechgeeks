import React from 'react'
import Footer from '../../includes/Footer'
import Header from '../../includes/Header'
import ClientsAboutus from '../Home/ClientsAboutus'
import BusinessSolution from './BusinessSolution'
import PricingTable from './PricingTable'
import PromoBlock from './PromoBlock'
import Slider from './Slider'
import Subscription from './Subscription'
import WebSolution from './WebSolution'
import SeoTag from '../seo/SeoTag'

function EcommerceSolution() {
    return (
        <div>


            <div class="content-wrapper ecommerce-page">
                <Header />
                <SeoTag page_id={18}/>
                <Slider />
                <WebSolution />
                <Subscription />
                <BusinessSolution />
                <PromoBlock />
                <ClientsAboutus />
                <PricingTable />
                <Footer />
            </div>
        </div>
    )
}

export default EcommerceSolution