import React from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

import extractSyndicateReport from "../services/extractSyndicateReport"
import extractUpcomingsReport from "../services/extractUpcomingsData"

import constants from "../services/constants"

import { getAllReportsByType } from "../services/extractReportsData"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import HyperlinkList from "../components/Shared/HyperlinkList"
import ReportTable from "../components/Shared/ReportTable"

export default function() {
  const data = getAllReportsByType(
    extractSyndicateReport(),
    extractUpcomingsReport(),
    constants().solution_type.Syndicate_Report
  )
  return (
    <Layout>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner
        headingText={"Syndicate Reports"}
        linkText={"Syndicate Reports"}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <HyperlinkList
              headingText={"Solutions"}
              linkList={[
                { name: "Passport Report", href: "/passport-reports" },
                { name: "Syndicate Report", href: "/syndicate-reports" },
              ]}
            />
          </div>
          <div className="col-md-10">
            <ReportTable tableData={data} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
