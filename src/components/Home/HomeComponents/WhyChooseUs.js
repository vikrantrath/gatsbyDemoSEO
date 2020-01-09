import React from 'react';

import microscope from '../../../assets/microscope.png'
import globe from '../../../assets/globe.png'
import client1 from '../../../assets/client1.png'
import ontime from '../../../assets/ontime.png'
import phone from '../../../assets/phone.png'
import report from '../../../assets/report.png'

export default function () {
    return (
        <div className="container-fluid">
            <div className="row">
                <hr className="ma-auto" style={{ width: '65%' }} />
                <h1 className="text-center text-uppercase font-weight-light col-md-12 mb-3">Why Choose Us</h1>
            </div>
            <div className="row">
                <div class="text-center col-md-2">
                    <img src={microscope} class="rounded mb-3" alt="..." />
                    <div className="font-weight-bold">100+</div>
                    <div className="font-weight-normal p-2">Years Of Cumulative Market Research Experience</div>
                </div>
                <div class="text-center col-md-2">
                    <img src={globe} class="rounded mb-3" alt="..." />
                    <div className="font-weight-bold">1000+</div>
                    <div className="font-weight-normal p-2">Cross Country Market Reports</div>
                </div>
                <div class="text-center col-md-2">
                    <img src={client1} class="rounded mb-3" alt="..." />
                    <div className="font-weight-bold">500</div>
                    <div className="font-weight-normal p-2">Clients Include Fortune 500 Companies</div>
                </div>
                <div class="text-center col-md-2">
                    <img src={phone} class="rounded mb-3" alt="..." />
                    <div className="font-weight-bold">200+</div>
                    <div className="font-weight-normal p-2">Hours Of Free Post Sale Services</div>
                </div>
                <div class="text-center col-md-2">
                    <img src={report} class="rounded mb-3" alt="..." />
                    <div className="font-weight-bold">1000K +</div>
                    <div className="font-weight-normal p-2">Confirmed Data Points</div>
                </div>
                <div class="text-center col-md-2">
                    <img src={ontime} class="rounded mb-3" alt="..." />
                    <div className="font-weight-bold">300+</div>
                    <div className="font-weight-normal p-2">Ontime Delivery</div>
                </div>
            </div>
        </div>
    )
}