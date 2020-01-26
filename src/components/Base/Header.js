import React, { useState } from 'react'
import GoogleTranslate from '../Base/GoogleTranslate'
import Logo from '../../assets/sai_logo.png'
import DropdownItem from '../Shared/DropdownItems'

export default function Header(props) {
    const navItems = [
        {
            name: "Industry Expertise",
            link: "#",
            isDropDown: true,
            dropdownItems: [
                {
                    sectionName: "BFSI",
                    sectionItems: [
                        { name: "Banking", link: "#" },
                        { name: "Financial", link: "#" },
                        { name: "Insurance", link: "#" },
                    ]
                },
                {
                    sectionName: "Defence, Aerospace And Automotives",
                    sectionItems: [
                        { name: "Defence", link: "#" },
                        { name: "Automotives", link: "#" },
                        { name: "Aerospace", link: "#" },
                        { name: "Services", link: "#" },
                        { name: "Other Transportation", link: "#" },
                    ]
                },
                {
                    sectionName: "Chemicals, Materials And Energy",
                    sectionItems: [
                        { name: "Chemicals", link: "#" },
                        { name: "Energy", link: "#" },
                        { name: "Materials", link: "#" },
                    ]
                },
                {
                    sectionName: "Life Science",
                    sectionItems: [
                        { name: "Health Care", link: "#" },
                        { name: "Medical Devices", link: "#" },
                        { name: "Materials", link: "#" },
                        { name: "Pharmaceuticals", link: "#" },
                        { name: "Biotechnology", link: "#" },
                    ]
                },
                {
                    sectionName: "Technology Sectors",
                    sectionItems: [
                        { name: "Electronics", link: "#" },
                        { name: "Semiconductors", link: "#" },
                        { name: "Communication & Technology", link: "#" },
                        { name: "Automation", link: "#" },
                        { name: "Photonics", link: "#" },
                        { name: "Instrumentation", link: "#" },
                        { name: "Shipping & Heavy Machinery", link: "#" },
                        { name: "Electrical", link: "#" },
                        { name: "Civil", link: "#" },
                    ]
                },
                {
                    sectionName: "Consumer Oriented Sectors",
                    sectionItems: [
                        { name: "Food", link: "#" },
                        { name: "Health &amp; Beauty", link: "#" },
                        { name: "Alcoholic Beverages", link: "#" },
                        { name: "Food Ingredients", link: "#" },
                        { name: "Pet Care", link: "#" },
                        { name: "Baby Care", link: "#" },
                        { name: "Footwear", link: "#" },
                        { name: "Packaging", link: "#" },
                        { name: "Travel and Tourism", link: "#" },
                        { name: "Home Care", link: "#" },
                        { name: "Other Consumer Goods", link: "#" },
                    ]
                }
            ],
            columns: 3
        },
        {
            name: "Regions",
            link: "#",
            isDropDown: true,
            dropdownItems: [
                {
                    sectionName: "Asia Pacific",
                    sectionItems: [
                        { name: "China", link: "#" },
                        { name: "India", link: "#" },
                        { name: "Indonesia", link: "#" },
                        { name: "Pakistan", link: "#" },
                        { name: "Japan", link: "#" },
                        { name: "Philippines", link: "#" },
                        { name: "Vietnam", link: "#" },
                        { name: "Thailand", link: "#" },
                        { name: "South Korea", link: "#" },
                        { name: "Malaysia", link: "#" },
                        { name: "Taiwan", link: "#" },
                        { name: "Australia", link: "#" },
                        { name: "Hong Kong", link: "#" },
                        { name: "Singapore", link: "#" },
                        { name: "New Zealand", link: "#" },
                        { name: "Sri Lanka", link: "#" }
                    ]
                },
                {
                    sectionName: "CEE",
                    sectionItems: [
                        { name: "Russia", link: "#" },
                        { name: "Turkey", link: "#" },
                        { name: "Ukraine", link: "#" },
                        { name: "Poland", link: "#" },
                        { name: "Romania", link: "#" },
                        { name: "Czech Republic", link: "#" },
                        { name: "Hungary", link: "#" },
                        { name: "Bulgaria", link: "#" },
                        { name: "Baltic States", link: "#" },
                        { name: "Slovakia", link: "#" },
                        { name: "Croatia", link: "#" },
                        { name: "Slovenia", link: "#" },
                        { name: "Latvia", link: "#" },
                        { name: "Lithuania", link: "#" },
                        { name: "Estonia", link: "#" },
                    ]
                },
                {
                    sectionName: "Latin America",
                    sectionItems: [
                        { name: "Uruguay", link: "#" },
                        { name: "Venezuela", link: "#" },
                        { name: "Chile", link: "#" },
                        { name: "Peru", link: "#" },
                        { name: "Colombia", link: "#" },
                        { name: "Argentina", link: "#" },
                        { name: "Brazil", link: "#" },
                        { name: "Mexico", link: "#" },
                    ]
                },
                {
                    sectionName: "Middle East & Africa",
                    sectionItems: [
                        { name: "Nigeria", link: "#" },
                        { name: "Egypt", link: "#" },
                        { name: "South Africa", link: "#" },
                        { name: "Morocco", link: "#" },
                        { name: "Saudi Arabia", link: "#" },
                        { name: "Israel", link: "#" },
                        { name: "UAE", link: "#" },
                        { name: "Ghana", link: "#" },
                        { name: "Kenya", link: "#" },
                        { name: "Iran", link: "#" },
                        { name: "Algeria", link: "#" },
                    ]
                },
                {
                    sectionName: "North America ",
                    sectionItems: [
                        { name: "US", link: "#" },
                        { name: "Canada", link: "#" },
                    ]
                },
                {
                    sectionName: "Western Europe ",
                    sectionItems: [
                        { name: "Germany", link: "#" },
                        { name: "France", link: "#" },
                        { name: "UK", link: "#" },
                        { name: "Italy", link: "#" },
                        { name: "Spain", link: "#" },
                        { name: "Netherlands", link: "#" },
                        { name: "Greece", link: "#" },
                        { name: "Portugal", link: "#" },
                        { name: "Belgium", link: "#" },
                        { name: "Sweden", link: "#" },
                        { name: "Austria", link: "#" },
                        { name: "Switzerland", link: "#" },
                        { name: "Finland", link: "#" },
                        { name: "Norway", link: "#" }
                    ]
                },
                {
                    sectionName: "Global",
                    sectionItems: [
                        { name: "Global", link: "#" },
                    ]
                }
            ],
            columns: 12
        },
        {
            name: "Solutions",
            link: "#",
            isDropDown: true,
            dropdownItems: [
                {
                    sectionItems: [
                        { name: "Consulting Enquiry", link: "#" },
                        { name: "IT Solution", link: "#" }
                    ]
                },
                {
                    sectionItems: [
                        { name: "Passport Report", link: "#" },
                        { name: "Company Profiles", link: "#" }
                    ]
                },
                {
                    sectionItems: [
                        { name: "Syndicate Report", link: "#" },
                        { name: "Database Solution", link: "#" }
                    ]
                }
            ],
            columns: 3
        },
        {
            name: "Resources",
            link: "#",
            isDropDown: false,
            dropdownItems: []
        },
        {
            name: "About Us",
            link: "#",
            isDropDown: false,
            dropdownItems: []
        },
        {
            name: "Contact Us",
            link: "#",
            isDropDown: false,
            dropdownItems: []
        }
    ]


    return (
        <>
            <div className="row" style={{ backgroundColor: "#0f0f7a" }}>
                <div className="col-md-3 text-center text-light align-content-center pt-2"><GoogleTranslate /></div>
                <div className="col-md-6 text-center text-light pt-2"><i class="fa fa-phone" aria-hidden="true"></i>+91-33-4600-9199 (India),<i class="fa fa-phone" aria-hidden="true"></i> +1-414-240-5010 (U.S.)</div>
                <div className="col-md-3 text-center text-light pt-2">
                    <ul class="list-inline">
                        <li class="list-inline-item">Home</li>
                        <li class="list-inline-item border-left pl-1">News</li>
                        <li class="list-inline-item border-left pl-1">Press</li>
                        <li class="list-inline-item border-left pl-1">Blog</li>
                        <li class="list-inline-item border-left pl-1">Query</li>
                        <li class="list-inline-item border-left pl-1">Login</li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div class="col-md-2">
                    <img src={Logo} height="60px" href="#" className="navbar-brand" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-md-8 pt-4" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-between">
                        {navItems.map(item => {
                            if (item.isDropDown) {
                                return (
                                    <DropdownItem item={item} />
                                )
                            } else {
                                return (
                                    <li className="nav-item">
                                        <a className="nav-link" href={item.link}>{item.name}</a>
                                    </li>
                                );
                            }
                        })}
                        <li className="nav-item ml-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div></li>
                    </ul>
                </div>
            </nav >
        </>
    )
}