import React, { useState, useEffect } from "react"
import { navigate, Link } from "gatsby"
import GoogleTranslate from "../Base/GoogleTranslate"
import Logo from "../../assets/sai_logo.png"
import DropdownItem from "../Shared/DropdownItems"
import {
  extractIndustryData,
  extractRegionData,
  extractPassport1Data,
  extractPassport2Data,
  extractSyndicateReport,
  extractUpcomingsData,
} from "../../services"

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

  const [searchResults, setSearchResult] = useState(undefined)
  const [searchTerm, setSearchTerm] = useState("")
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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
      link: "/industry",
      isDropDown: true,
      dropdownItems: industryData,
      columns: 3,
    },
    {
      name: "Regions",
      link: "/regions",
      isDropDown: true,
      dropdownItems: regionData,
      columns: 12,
    },
    {
      name: "Solutions",
      link: "/solutions",
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

  const reports = [
    ...extractPassport1Data(),
    ...extractPassport2Data(),
    ...extractSyndicateReport(),
    extractUpcomingsData(),
  ]
  useEffect(() => {
    const foundTerm = reports.filter(
      ele =>
        ele.title &&
        searchTerm &&
        ele.title.toUpperCase().includes(searchTerm.toUpperCase())
    )
    setSearchResult(foundTerm)
  }, [searchTerm])

  function gotoReport(report) {
    setSearchResult(undefined)
    document.getElementById("searchReport").value = ""
    navigate(
      `/market-report-research/${report.slug}-${report.report_type}${report.report_sub_type}`
    )
  }

  function validateAndNavigate() {
    if (searchResults.length == 0) {
      setSearchResult(undefined)
      document.getElementById("searchReport").value = ""
      navigate(`/submit-query`)
    } else if (searchResults.length == 1) {
      document.getElementById("searchReport").value = ""
      const report = searchResults[0]
      setSearchResult(undefined)
      navigate(
        `/market-report-research/${report.slug}-${report.report_type}${report.report_sub_type}`
      )
    } else {
      document.getElementById("searchReport").value = ""
      setSearchResult(undefined)
      navigate(`/search-results/${searchTerm}`)
    }
  }

  return (
    <>
      <div
        className="row"
        style={{ backgroundColor: "#0f0f7a", fontSize: "12px" }}
      >
        <div className="col-md-3 col-sm-12 text-center text-light align-content-center">
          <GoogleTranslate />
        </div>
        <div className="col-md-6 col-sm-12 text-center text-light pt-2">
          <i className="fa fa-phone" aria-hidden="true"></i>
          +91-33-4600-9199&nbsp; (India),
          <i className="fa fa-phone" aria-hidden="true"></i> +1-414-240-5010
          (U.S.)
        </div>
        <div className="col-md-3 col-sm-12 text-center text-light pt-2">
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
            onClick={() => setShowMobileMenu(!showMobileMenu)}
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
                  id="searchReport"
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  onChange={e => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  onKeyDown={e => e.keyCode == 13 && validateAndNavigate()}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    onClick={validateAndNavigate}
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
                <ul
                  className="mt-5 list-unstyled"
                  style={{
                    position: "absolute",
                    zIndex: "100",
                    width: "100%",
                    backgroundColor: "white",
                  }}
                >
                  {searchResults &&
                    [...searchResults].splice(0, 5).map(e => (
                      <li
                        className="bg-muted p-2 text-muted border searchResultsUl"
                        onClick={() => gotoReport(e)}
                        style={{ cursor: "pointer" }}
                      >
                        {e.title.substring(0, 50).concat("...")}
                      </li>
                    ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {showMobileMenu && (
        <ul className="list-unstyled text-center">
          {navItems.map(e => (
            <li className="bg-primary border p-2">
              <Link to={e.link} className="text-decoration-none text-white">
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
