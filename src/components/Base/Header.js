import React, { useState } from "react"
import { Link } from "gatsby"
import GoogleTranslate from "../Base/GoogleTranslate"
import Logo from "../../assets/sai_logo.png"
import DropdownItem from "../Shared/DropdownItems"
import { extractIndustryData, extractRegionData } from "../../services"
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

  const regionData = extractRegionData().map(e => {
    return {
      sectionName: e.cat_name,
      sectionLink: `/report/reg/${e.slug}`,
      sectionItems: e.sectorList.map(ele => {
        return {
          name: ele.sector_name,
          link: `/report/reg/sect/${ele.slug}`,
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
      dropdownItems: regionData,
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
      <div
        className="row"
        style={{ backgroundColor: "#0f0f7a", fontSize: "12px", height: "2rem" }}
      >
        <div className="col-md-3 text-center text-light align-content-center">
          <GoogleTranslate />
        </div>
        <div className="col-md-6 text-center text-light pt-2">
          <i className="fa fa-phone" aria-hidden="true"></i>
          +91-33-4600-9199&nbsp; (India),
          <i className="fa fa-phone" aria-hidden="true"></i> +1-414-240-5010
          (U.S.)
        </div>
        <div className="col-md-3 text-center text-light pt-2">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to={"/"} className="text-white">
                Home
              </Link>
            </li>
            <li className="list-inline-item border-left pl-1">
              <Link to={"/news-and-resources"} className="text-white">
                News
              </Link>
            </li>
            <li className="list-inline-item border-left pl-1">
              <Link to={"/press-release"} className="text-white">
                Press
              </Link>
            </li>
            <li className="list-inline-item border-left pl-1">
              <Link to={"/blog"} className="text-white">
                Blog
              </Link>
            </li>
            <li className="list-inline-item border-left pl-1">
              <Link to={"/submit-query"} className="text-white">
                Query
              </Link>
            </li>
            <li className="list-inline-item border-left pl-1">
              <Link to={"/login"} className="text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between  mb-5">
        <div className="col-md-2">
          <a href="/">
            <img src={Logo} height="60px" className="navbar-brand" />
          </a>
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
                    <Link className="nav-link" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                )
              }
            })}
            <li className="nav-item ml-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-search" aria-hidden="true"></i>
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
