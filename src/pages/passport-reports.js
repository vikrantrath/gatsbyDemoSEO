import React from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

import extractPassport1Data from "../services/extractPassport1Data"
import extractPassport2Data from "../services/extractPassport2Data"
import extractUpcomingsReport from "../services/extractUpcomingsData"

import constants from "../services/constants"

import { getAllReportsByType } from "../services/extractReportsData"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import HyperlinkList from "../components/Shared/HyperlinkList"
import ReportTable from "../components/Shared/ReportTable"

export default function() {
  const data = getAllReportsByType(
    extractPassport2Data(),
    extractUpcomingsReport(),
    constants().solution_type.Syndicate_Report,
    extractPassport1Data()
  )
  return (
    <Layout>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner
        headingText={"Passport Reports"}
        linkText={"Passport Reports"}
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
