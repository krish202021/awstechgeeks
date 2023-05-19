import React from 'react'
import Footer from '../../includes/Footer'
import Header from '../../includes/Header'
import CustomersayE3 from './CustomersayE3'
import ExEmployee from './ExEmployee'
import TeamMember from './TeamMember'
import { OurCompany } from './OurCompany'
import SeoTag from '../seo/SeoTag'
function Index() {
    return (
        <div>

            <div className="content-wrapper">
                <Header />
                <SeoTag page_id={10}/>
                <OurCompany />
                <TeamMember />
                <ExEmployee />
                <CustomersayE3 />
                <Footer />
            </div>
        </div>
    )
}

export default Index