import React from 'react';

export default function ContactInfo() {
    return (
        <div class="row">
            <div className="col-xs-12 col-sm-12 col-md-12 p-md-0 p-4">
                <h6 class="font-weight-bold text-white mt-2 mb-2"><ins>Registered Office</ins></h6>
                <div class="font-weight-lighter text-white">
                    RDB Boulevard, 8th Floor, Plot K 1, Sector 5, Block EP and GP, Kolkata 700091, India.
            </div>
                <h6 class="font-weight-bold text-white mt-2 mb-2"><ins>Contact Us</ins></h6>
                <div class="row align-items-center font-weight-lighter text-white col-md-12 pl-0 ml-0">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <div class="font-weight-lighter text-white ml-1">+91-33-4600-9199</div>
                </div>
                <div class="row align-items-center font-weight-lighter text-white col-md-12 pl-0 ml-0">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <div class="font-weight-lighter text-white ml-1">+1-414-240-5010</div>
                </div>
                <div class="row align-items-center font-weight-lighter text-white col-md-12 pl-0 ml-0">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <div class="font-weight-lighter text-white ml-1">sales@sheeranalyticsandinsights.com</div>
                </div>
            </div>
        </div>
    );
}