import React from 'react'

function Slider() {
    return (
        <div>

            <div id="carouselExampleCaptions" className="carousel slide mobile-app-banner" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/mobile-app-bg.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h2 className="case-title">Gym Forest Case Study</h2>
                            <h5>Do you know?</h5>
                            <p>81% of Companies Now have their Personalized Mobile Application. And, choosing the Right-company and the Best-Technology with cost-effectiveness is not easy.</p>
                            <a href="#" target="_blank" className="btn btn-market btn--with-shadow google-play-btn">
                                <img className="utouch-icon" src="svg-icons/google-play.svg" alt="google" />
                                <div className="text">
                                    <span className="sup-title">Check Our Mobile</span>
                                    <span className="title">App Portfolio</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider