import React from 'react';
import SectionHeader from '../../Shared/SectionHeader'
import './Industry.css'

export default function Industry() {
    const sectorList = [
        {
            name: "Consumer Oriented Sector",
            icon: "fa fa-users",
            description: "From the latest market research reports on the consumer-oriented sector, you can get a deeper insight of the consumer goods industry and know about its various market segmentations in details.",
            items: ["Food", "Health & Beauty", "Alcoholic Beverages", "Food Ingredients", "Pet Care", "Baby Care", "Footwear", "Packaging", "Travel and Tourism", "Home Care", "Other Consumer Goods"]
        },
        {
            name: "Technology Sector",
            icon: "fa fa-cogs",
            description: "Find the latest market reports and trends in the information technology & market. Check out in-depth market research analysis and global market insights of its various verticals.",
            items: ["Electronics", "Semiconductors", "Communication & Technology", "Automation", "Photonics", "Instrumentation", "Shipping & Heavy Machinery", "Electrical", "Civil"]
        },
        {
            name: "Defense Aerospace And Automotives",
            icon: "fa fa-plane",
            description: "The aerospace & defense industry research sector is involved in development of various military equipment such as weapon system, control systems, components, and others. Check global market insight.",
            items: ["Defence", "Automotives", "Aerospace", "Services", "Other Transportation"]
        },
        {
            name: "Life Science",
            icon: "fa fa-globe",
            description: "The life science industry & solutions is a very diversified industry which consists of pharmaceuticals, biotechnology, medical devices, and healthcare. Check out the latest market research analysis of the biotechnology, healthcare, and pharmaceutical industry.",
            items: ["Health Care", "Medical Devices", "Pharmaceuticals", "Biotechnology"]
        },
        {
            name: "Chemical Materials And Energy",
            icon: "fa fa-flask",
            description: "The chemicals, materials and energy industry market are growing with the increasing usage of its raw materials by various end-user industries. Find out more through the chemicals, materials and energy industry market research, in-depth market analysis, market forecast and more.",
            items: ["Chemicals", "Energy", "Materials"]
        },
        {
            name: "Banking, Financial Services And Insurance Sector",
            icon: "fa fa-money",
            description: "According to the industry research firm the demand of integrated solution is driving the market of BFSI along with the growing preferences towards common security platforms which is reducing the rate and difficulties of financial services. More business market research and analysis here.",
            items: ["Banking", "Financial", "Insurance"]
        }
    ];
    return (
        <div className="container-fluid p-4">
            <SectionHeader headingText={"Industry Expertise"} />
            <div className="row">
                {sectorList.map(item => {
                    return (
                        < div class="text-center col-md-6 col-sm-12" >
                            <div className="col-md-12">
                                <div className="industry-icon">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-md-12"><h5>{item.name}</h5></div>
                            <div className="font-weight-lighter col-md-12 text-left p-2 mb-4" style={{ fontSize: '0.93em' }}>{item.description}</div>
                            <div className="container">
                                <ul className="row list-unstyled">
                                    {item.items.map(e => {
                                        return (
                                            < li class="col-md-4 col-sm-12 text-left p-0" >
                                                <div className="industry-icon pl-2 ">
                                                    <i className="fa fa-chevron-right ml-1" aria-hidden="true"></i>
                                                </div>
                                                <span className="font-weight-light text-left pl-1" style={{ fontSize: '0.84em' }}>{e}</span>
                                            </ li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <button type="button" class="float-left btn btn-outline-primary mt-2 mb-2">Submit</button>
                        </ div>
                    )
                })}
            </div>
        </div>
    )
}