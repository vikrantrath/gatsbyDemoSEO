import React, { useState } from "react"
import GoogleTranslate from "../Base/GoogleTranslate"
import Logo from "../../assets/sai_logo.png"
import DropdownItem from "../Shared/DropdownItems"
import extractIndustryData from "../../services/extractIndustryData"
export default function Header(props) {
  const industryData = extractIndustryData().map(e => {
    return {
      sectionName: e.name,
      sectionLink: `/report/${e.slug}`,
      sectionItems: e.industrySectorList.map(ele => {
        return {
          name: ele.sectorName,
          link: `/report/sect/${ele.slug}`,
        }
      }),
    }
  })

  const navItems = [
    {
      name: "Industry Expertise",
      link: "#",
      isDropDown: true,
      dropdownItems: industryData,
      columns: 3,
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
            { name: "Sri Lanka", link: "#" },
          ],
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
          ],
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
          ],
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
          ],
        },
        {
          sectionName: "North America ",
          sectionItems: [
            { name: "US", link: "#" },
            { name: "Canada", link: "#" },
          ],
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
            { name: "Norway", link: "#" },
          ],
        },
        {
          sectionName: "Global",
          sectionItems: [{ name: "Global", link: "#" }],
        },
      ],
      columns: 12,
    },
    {
      name: "Solutions",
      link: "#",
      isDropDown: true,
      dropdownItems: [
        {
          sectionItems: [
            { name: "Consulting Enquiry", link: "/consulting-solutions" },
            { name: "IT Solution", link: "/it-solution-consulting" },
          ],
        },
        {
          sectionItems: [
            { name: "Passport Report", link: "/passport-reports" },
            { name: "Company Profiles", link: "/company-profile" },
          ],
        },
        {
          sectionItems: [
            { name: "Syndicate Report", link: "/syndicate-reports" },
            { name: "Database Solution", link: "/data-market-monitoring" },
          ],
        },
      ],
      columns: 3,
    },
    {
      name: "Resources",
      link: "/news-and-resources",
      isDropDown: false,
      dropdownItems: [],
    },
    {
      name: "About Us",
      link: "/about-us",
      isDropDown: false,
      dropdownItems: [],
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      isDropDown: false,
      dropdownItems: [],
    },
  ]

  return (
    <>
      <div className="row" style={{ backgroundColor: "#0f0f7a" }}>
        <div className="col-md-3 text-center text-light align-content-center pt-2">
          <GoogleTranslate />
        </div>
        <div className="col-md-6 text-center text-light pt-2">
          <i class="fa fa-phone" aria-hidden="true"></i>+91-33-4600-9199
          (India),<i class="fa fa-phone" aria-hidden="true"></i> +1-414-240-5010
          (U.S.)
        </div>
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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse col-md-8 pt-4" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-between">
            {navItems.map(item => {
              if (item.isDropDown) {
                return <DropdownItem item={item} />
              } else {
                return (
                  <li className="nav-item">
                    <a className="nav-link" href={item.link}>
                      {item.name}
                    </a>
                  </li>
                )
              }
            })}
            <li className="nav-item ml-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
