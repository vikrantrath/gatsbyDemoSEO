import React from 'react';
import SectionHeader from '../../Shared/SectionHeader'

export default function LatestPublication() {
    const mrReports = ["Global Zinc Smelters Market (By Method – Pyrometallurgical Process, Electrolysis Process, By Products – Special High Grade (SHG), Continuous Galvanizing Grade (CGG), Prime Western (PW), Electro-Plating SHG (EPG SHG), Die-Cast Alloy, By Shapes – Ingots, Standard, Jumbo, Bars, By End Use Industry – Semiconductors, Catalyst in Industrial Products, Beauty Products / Cosmetics, Alloy, Anti-Corrosion and Batteries, and Others, And By Regions) – Global Industry Analysis, Size, Share, Growth, Trends and Forecast, 2018 – 2026",
        "Global CRISPR Technology Market (By Types- gRNA, Proteins, Vectors, Library, Designing Tools, Control Kits, Plasmids and Others. By Application- Agricultural Biotech, Biological Research, Industrial Biotech and Drugs and Therapeutic Discovery and By Regions)– Global Industry Analysis, Size, Share, Growth, Trends and Forecast, 2018 – 2026",
        "Global Smart Grid Market (By Technology: Advanced Metering, Distribution Automation, Communication Technology, Hardware & Software, Transmission Technology and Others. By Deployment- Generation, Transmission, Distribution and After Sales Services and By Regions)– Global Industry Analysis, Size, Share, Growth, Trends and Forecast, 2018 – 2026",
        "Global Enterprise Video Market (By Type – Video Content Management, Video Conferencing and Webcasting. By Application – Corporate Communication, Training & Development, Client Management and Broadcast Media. By End-User – BFSI, Healthcare, Education, Media & Entertainment and Others) – Global Industry Analysis, Size, Share, Growth, Trends and Forecast, 2018 – 2026",
        "Global Cell Surface Marker Market (By Component- Flow Cytometer, Hematology Analyzer and Reagents and Kits. By Cell Type- T Cell, B Cell and NK Cell. By Application- Research and Clinical and By Regions)– Global Industry Analysis, Size, Share, Growth, Trends and Forecast, 2018 – 2026",
        "Global Organic Personal Care Market (By Product: Skin Care, Hair Care, Cosmetics and Oral Care. By Channels of Distribution- Parlors and Salons, Pharmacies, Specialty Stores, Super Markets and Online Stores and By Regions)– Global Industry Analysis, Size, Share, Growth, Trends and Forecast, 2018 – 2026",
        "Global Li-Fi Market (By Component: LEDs, Microcontroller, Optical Sensor and Photo Detector. By End-User- Aerospace & Defense, Transportation, Education, Healthcare, Retail and Others and By Regions) – Global Industry Analysis, Size, Share, Growth, Trends and Forecast, 2018 – 2025"]

    const pressRelease = ["Global Bronchial Thermoplasty Market expected to reach US$ 99.68 Bn by 2026: Market insights, analysis, trends and forecast | Sheer Analytics and Insights",
        "Global automated 3D printing market expected to become USD 5083.8 Mn in total market revenue (TMR) by 2025: Market insights, analysis, trends, forecast | Sheer Analytics and Insights",
        "Globally infusion pump market total market revenue (TMR) will become US$17.1 Bn by 2025: market insights, industry, analysis, trends and forecast | Sheer Analytics and Insights",
        "Global aircraft exhaust system market to grow at 7.5% CAGR (2018 – 2025) – market insights, analysis, trends, forecast | Sheer Analytics and Insights",
        "Aircraft Engine Outsource Market (Service provider end) – An Exclusive Report | Sheer Analytics and Insights",
        "Global train collision avoidance system market to witness 6.5% CAGR between 2018 and 2025 – Market insights, analysis, trends and forecast | Sheer Analytics and Insights",
        "Global Artificial Organ Technology Market is expected to grow at 10.1% by 2025 | Sheer Analytics and Insights",
        "Global Electrical Submersible Pumps Market is expected to reach US$ 20.02 Billion by 2025 | Sheer Analytics and Insights"]
    return (
        <div className="container">
            <SectionHeader headingText={"Latest Publications"} />
            <div className="row">
                < div class="text-center col-md-8 col-sm-12" >
                    <h5 class="text-center">Market Research Reports</h5>
                    {mrReports.map(e => {
                        return (
                            <div className="font-weight-lighter text-left p-2 border"><a href="#">{e}</a></div>
                        );
                    })}
                    <button type="button" class="btn btn-outline-primary mt-2 mb-2">View All Latest Reports</button>
                </ div>
                < div class="text-center col-md-4 col-sm-12" >
                    <h5 class="text-center">Press Release</h5>
                    {pressRelease.map(e => {
                        return (
                            <div className="font-weight-lighter text-left p-2 border"><a href="#">{e}</a></div>
                        );
                    })}
                    <button type="button" class="btn btn-outline-primary mt-2 mb-2">View All Press</button>
                </ div>
            </div>
        </div>
    );
}