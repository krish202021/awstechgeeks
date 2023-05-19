import React from 'react'
import Footer from '../../includes/Footer'
import Header from '../../includes/Header'
import GymForestCaseStudy from './GymForestCaseStudy'
import GymForestCaseStudyVideo from './GymForestCaseStudyVideo'
import GymForestScreen from './GymForestScreen'
import Slider from './Slider'

function CaseDetail() {
    return (
        <div>

            <Header />
            <div class="content-wrapper">
                <Slider />
                <GymForestCaseStudy />
                <GymForestCaseStudyVideo />
                <GymForestScreen />
            </div>



            <Footer />
        </div>
    )
}

export default CaseDetail