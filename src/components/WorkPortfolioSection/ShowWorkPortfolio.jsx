import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';

function ShowWorkPortfolio () {
  const history = useHistory();
  const [tabType, setTabType] = useState('all')
  
  const toggleMe=(value)=>{
    setTabType(value)
  }

  const action = (img) => {
    history.push({
        pathname: `/imagepop`,
        state: { img: img },
    });
}

    return (
      <div>
        		

        <section class="client-videos">
            <div class="container">
                
                <div class="crumina-module crumina-heading">
                    <h2 class="heading-title hire-heading align-center"> Recommendations from <span class="c-primary">Clients:</span></h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                        <div class="video-box">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/EGoFnRfbdwg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                        <div class="video-box">
                             <iframe width="100%" height="250" src="https://www.youtube.com/embed/FSiVXfHYAPY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                        <div class="video-box">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/5n9QDlURcew?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div> 
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 col-xxl-4">
                        <div class="video-box">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/KfKLmd3ulhs?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }

export default ShowWorkPortfolio