import React from 'react';
import SectionHeader from '../../Shared/SectionHeader'

export default function Benefits() {
    const benefits = [
        { name: "Technical Insights", desc: "Our team consisting of engineers and technical experts provide the best insights into the various avenues of technological advancement and product development in relation to every market." },
        { name: "Market Analysis", desc: "Our highly experienced market researchers and economists provide in-depth knowledge of the market dynamics, macro-economics and demand analysis, along with various factors that will play key roles, becoming the deciding factor behind the global market development." },
        { name: "Data Analytics", desc: "Our team of expert statisticians ensure in-depth insights into the data and figures, analyzing patterns and trends and providing best forecast about the market, ensuring best decision making and minimizing risks." }
    ];
    return (
        <div className="container-fluid">
            <SectionHeader headingText={"Benefit From Our 3-Pronged Approach"} />
            <div className="row">
                {benefits.map(item => {
                    return (
                        <div class="text-center col-md-4 col-sm-12" >
                            <h5 className="font-weight-bold"> {item.name}</h5>
                            <div className="font-weight-light text-muted">{item.desc}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}