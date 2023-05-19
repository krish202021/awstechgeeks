import React from 'react'
import { Helmet } from "react-helmet";
import Header from '../../includes/Header'
import Footer from '../../includes/Footer'
import AboutUs from './AboutUs'
import ClientsAboutus from './ClientsAboutus'
import CoreServices from './CoreServices'
import LetsTalk from './LetsTalk'
import Offer from './Offer'
import WhyChooseE3 from './WhyChooseE3'
import Slider from './Slider'
import SeoTag from '../seo/SeoTag'

function Home() {  
    return (
        <div>
            <Header />
            <SeoTag page_id={1} />
            <div className="content-wrapper">
                <Slider />
                <CoreServices />
                <AboutUs />
                <WhyChooseE3 />
                <LetsTalk />
                <ClientsAboutus />
                <Offer />
                <Footer />

            </div>
        </div>
    )
}

export default Home