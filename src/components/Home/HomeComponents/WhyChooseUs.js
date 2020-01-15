import React from 'react';
import SectionHeader from '../../Shared/SectionHeader'

import microscope from '../../../assets/microscope.png'
import globe from '../../../assets/globe.png'
import client1 from '../../../assets/client1.png'
import ontime from '../../../assets/ontime.png'
import phone from '../../../assets/phone.png'
import report from '../../../assets/report.png'

export default function () {
    const items = [
        { imageSrc: microscope, primaryText: "100+", secondaryText: "Years Of Cumulative Market Research Experience" },
        { imageSrc: globe, primaryText: "1000+", secondaryText: "Cross Country Market Reports" },
        { imageSrc: client1, primaryText: "500", secondaryText: "Clients Include Fortune 500 Companies" },
        { imageSrc: phone, primaryText: "200+", secondaryText: "Hours Of Free Post Sale Services" },
        { imageSrc: report, primaryText: "1000K +", secondaryText: "Confirmed Data Points" },
        { imageSrc: ontime, primaryText: "300+", secondaryText: "Ontime Delivery" }
    ]
    return (
        <div className="container-fluid">
            <SectionHeader headingText={"Why Choose Us"} />
            <div className="row">
                {items.map((item, i) => {
                    return (
                        < div class="text-center col-md-2 col-sm-6" >
                            <img src={item.imageSrc} class="rounded mb-3" alt="..." />
                            <div className="font-weight-bold">{item.primaryText}</div>
                            <div className="font-weight-normal p-2">{item.secondaryText}</div>
                        </div>)
                })}
            </div>
        </div >
    )
}