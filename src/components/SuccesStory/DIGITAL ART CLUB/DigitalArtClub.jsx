import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import Banner from './Banner'
import ClientExp from './ClientExp'
import ClientRequirment from './ClientRequirment'
import FeaturesandHighlight from './FeaturesandHighlight'
import HelpThem from './HelpThem'
import HelpYou from './HelpYou'
import MobileAppGallery from './MobileAppGallery'

function DigitalArtClub() {
  return (
    <div>
       <Header/>
            <div className="content-wrapper website-case-page">
             <Banner/>
             <ClientRequirment/>
             <FeaturesandHighlight/>
             {/* <MobileAppGallery/> */}
             {/* <HelpThem/> */}
             {/* <ClientExp/> */}
             <HelpYou/>
            </div>
            <Footer/>
    </div>
  )
}

export default DigitalArtClub