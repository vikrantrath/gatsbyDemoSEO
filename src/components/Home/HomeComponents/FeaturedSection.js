import React from 'react'
import clientImage from '../../../assets/clientele.jpg'
import saiCertificateImage from '../../../assets/sai_certificate.jpg'

import './FeaturedSection.css'

export default function FeaturedSection() {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner banner-text-bg">
                <div className="carousel-item active">
                    <img src={clientImage} class = "img-responsive" width = "100%" height="400px" alt="Los Angeles" />
                </div>

                <div className="carousel-item">
                    <img src={saiCertificateImage} class = "img-responsive" width = "100%" height="400px" alt="Chicago" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}