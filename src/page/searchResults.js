import React from "react"

import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

import {
  extractIndustryData,
  extractPassport1Data,
  extractPassport2Data,
  extractSyndicateReport,
  extractUpcomingsData,
} from "../services"

import ReportTable from "../components/Shared/ReportTable"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import HyperlinkList from "../components/Shared/HyperlinkList"

export default function({ slug }) {
  const industryData = extractIndustryData().map(e => {
    return {
      name: e.name,
      href: `/report/${e.slug}`,
    }
  })

  const reports = [
    ...extractPassport1Data(),
    ...extractPassport2Data(),
    ...extractSyndicateReport(),
    extractUpcomingsData(),
  ]
  const searches = reports.filter(
    ele =>
      ele.title && slug && ele.title.toUpperCase().includes(slug.toUpperCase())
  )
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Search Result"} linkText={"Search"} />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <HyperlinkList headingText={"Categories"} linkList={industryData} />
          </div>
          <div className="col-md-10">
            <ReportTable tableData={searches} />
          </div>
        </div>
      </div>
    </>
  )
}
