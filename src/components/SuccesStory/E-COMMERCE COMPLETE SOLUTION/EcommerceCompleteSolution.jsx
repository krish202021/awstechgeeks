import React from 'react'
import Footer from '../../../includes/Footer'
import Header from '../../../includes/Header'
import Banner from './Banner'
import ClientFeedback from './ClientFeedback'
import ClientRequir from './ClientRequir'
import Contactno from './Contactno'
import Highlights from './Highlights'

function EcommerceCompleteSolution() {
  return (
    <div>
      <Header/>
<div class="content-wrapper website-case-page">
       <Banner/>
       <ClientRequir/>
       <Highlights/>
       <ClientFeedback/>
       <Contactno/>
    </div>
    <Footer/>
    </div>
  )
}

export default EcommerceCompleteSolution