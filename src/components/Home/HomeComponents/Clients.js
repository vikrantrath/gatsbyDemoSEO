import React from 'react';

import './Clients.css'

import gartnerLogo from '../../../assets/sheerClientLogo/Gartner_logo.png'
import diplomatLogo from '../../../assets/sheerClientLogo/Diplomat-Group.png'
import hyundaiLogo from '../../../assets/sheerClientLogo/Hyundai_Wia.png'
import lcyLogo from '../../../assets/sheerClientLogo/LCY_Chemicals.png'
import panasonicLogo from '../../../assets/sheerClientLogo/panasonic-logo.png'
import thalesLogo from '../../../assets/sheerClientLogo/thales-group.png'
import yjmLogo from '../../../assets/sheerClientLogo/YJM Entertainment.png'
import deloitteLogo from '../../../assets/sheerClientLogo/deloitte-logo.png'
import dowLogo from '../../../assets/sheerClientLogo/PNGPIX-COM-Dow.png'
import topconLogo from '../../../assets/sheerClientLogo/topcon.png'


export default function Clients() {

    const clientTestimonials = [
        { name: "Panasonic", testimonial: "The report was really helpful and the quality was great. Overall it is nice work to understand the comprehensive outlook of the industry. We will certainly register their services in future and will recommend others as well." },
        { name: "Thales", testimonial: "It was great working with your team. The report was extremely helpful and gave a deep insight into the market. We definitely got the best value for money in terms of investment. Look forward to hiring your expertise in future as well." },
        { name: "LCY", testimonial: "Sheer Analytics and Insights provided an extremely detailed and in-depth report that was extremely helpful for our business decision making needs. The report was excellent and great value for our investment. We definitely recommend them for any market research and business consultancy needs." }
    ]

    const clientLogo = [gartnerLogo, diplomatLogo, hyundaiLogo, lcyLogo,
        panasonicLogo, thalesLogo, yjmLogo, deloitteLogo,
        dowLogo, topconLogo
    ]

    return (
        <div className="container-fluid clientsContainer mt-4">
            <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                    <h4 className="font-weight-bold mt-4 mb-4"> Clients' Testimonials</h4>
                    {clientTestimonials.map(e => {
                        return (
                            <div className="col-md-12">
                                <div className="font-weight-light text-muted">{e.testimonial}</div>
                                <footer class="blockquote-footer font-weight-bold h2" style={{ fontSize: '1.4em' }}>{e.name}</footer>
                            </div>
                        );
                    })}
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <h4 className="font-weight-bold mt-4 mb-4"> Some Of Our Major Clients</h4>
                    <div className="row">
                        {clientLogo.map(e => {
                            return (
                                <div className="col-md-3 col-xs-6 col-lg-3 col-sm-3 border clientLogo">
                                    <img className="img-fluid" src={e}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}