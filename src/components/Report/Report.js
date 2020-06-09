import React, { useState } from "react"

import Layout from "../Base/Layout"
import SEO from "../Base/SEO"

import extractPassport1Data from "../../services/extractPassport1Data"
import extractPassport2Data from "../../services/extractPassport2Data"
import extractSyndicateReport from "../../services/extractSyndicateReport"
import extractUpcomingData from "../../services/extractUpcomingsData"
import { getReportByType } from "../../services/extractReportsData"

import AddToCart from "./addToCart"
import RequestOptions from "./requestOptions"
import Constants from "../../services/constants"

import ReportBG from "../../assets/frontnew.png"

import "./Report.css"
import Button from "../Base/button/Button"
import { Link } from "gatsby"

export default function ({ slug }) {
  const constants = Constants()
  const data = getReportByType(
    extractSyndicateReport(),
    extractPassport1Data(),
    extractPassport2Data(),
    extractUpcomingData(),
    slug
  )
  const pages = {
    4: [
      { pageName: "Report Analysis", variableName: "analysis" },
      { pageName: "Table of Contents", variableName: "table_contents" },
      { pageName: "Report Description", variableName: "description" },
    ],
    2: [
      { pageName: "Report Analysis", variableName: "analysis" },
      { pageName: "Table of Contents", variableName: "table_contents" },
      { pageName: "Report Description", variableName: "description" },
    ],
    1: [{ pageName: "Report Description", variableName: "description" }],
    upcoming: [{ pageName: "Market Insights", variableName: "market" }],
  }

  const pageContents =
    data.report_sub_type == constants.report_release_type.Upcoming_Reports
      ? pages["upcoming"]
      : pages[data.report_type].filter(e => data[e.variableName])

  const [currPage, setCurrPage] = useState(pageContents[0].variableName)

  return (
    <>
      <SEO title={"sheer analytics"} />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-2">
                <img src={ReportBG} />
              </div>
              <div className="col-md-10">
                <h5 className="font-weight-bold">{data.title}</h5>
                <div className="text-muted h6">
                  <small>Published Date : {data.month} |</small>
                  <small> Report Id : {data.report_id} |</small>
                  <small> Format : {data.format} |</small>
                  <small> Slides : {data.pages}</small>
                </div>
              </div>
              <div className="col-md-10">
                <h6 className="font-weight-normal">
                  Report Type : {constants.solution_type_name[data.report_type]}
                </h6>
                <div className="d-flex">
                  <AddToCart />
                </div>
              </div>
            </div>
            <div className="row list-inline justify-content-between">
              <RequestOptions
                options={[
                  {
                    name: "Ask for Discount",
                    link: `/ask-for-discount/${data.report_type}/${data.report_sub_type}/${data.id}/${constants.request_type.discount}`,
                  },
                  {
                    name: "Request Brochure",
                    link: `/request-brochure/${data.report_type}/${data.report_sub_type}/${data.id}/${constants.request_type.brochure}`,
                  },
                  {
                    name: "Ask An Analyst",
                    link: `/ask-an-analyst/${data.report_type}/${data.report_sub_type}/${data.id}/${constants.request_type.analyst}`,
                  },
                  {
                    name: "Download Sample",
                    link: `/request-sample/${data.report_type}/${data.report_sub_type}/${data.id}/${constants.request_type.sample}`,
                  },
                ]}
              />
            </div>
            <ul
              className="nav mt-3 nav-tabs rounded-0 border"
              style={{ backgroundColor: "#c7c7c7" }}
            >
              {pageContents.map((e, i) => {
                return (
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        currPage === e.variableName ? "active" : ""
                        }`}
                      onClick={() => setCurrPage(e.variableName)}
                    >
                      {e.pageName}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="border p-4 font-weight-normal report-content mb-2">
              <div dangerouslySetInnerHTML={{ __html: data[currPage] }}></div>
              <div class="note bg-info text-white p-2 font-weight-lighter mt-3">
                Note: This table of contents is a content of a published report.
                As per client requirement, cross-sectional analysis across all
                industries or specific geography or ‘country-based’ analysis can
                be provided as a part of paid customization. Please place your
                queries on sales@sheeranalyticsandinsights.com or
                query@sheeranalyticsandinsights.com
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="addthis_inline_share_toolbox mb-2 pl-1"></div>
            <script
              type="text/javascript"
              src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59bfbc66ac184d32"
            ></script>
            <div className="col-md-12">
              <div className="licence_right full">
                <h3>Buy Chapters or Sections</h3>
                <div className="why_c_us_inner " style={{ paddingTop: "15px" }}>
                  <p>
                    Customization options available to meet your custom research
                    requirements :
                  </p>
                  <ul className="p-3 ml-1">
                    <li>Request a part of this report</li>
                    <li>Get geography specific report</li>
                    <li>Request historical analysis</li>
                    <li>Check out special discounted pricing</li>
                  </ul>
                  <p></p>
                </div>
                <div className="col-md-12 consultant-section double-grid p-0 mb-0 mt-1">
                  <Link
                    to={`/ask-for-discount/${data.report_type}/${data.report_sub_type}/${data.id}/${constants.request_type.discount}`}
                  >
                    <Button text={"Request Custom Pricing"} block={12} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="licence_right full">
                <h3>Why Choose Us</h3>
                <div className="why_choose_us_inner">
                  <ul className="list-unstyled">
                    <li>
                      <h4 className="why_c_us_h4" style={{ float: "left" }}>
                        <img
                          src="/images/logo/badge-2.png"
                          className="why_c_us_img"
                          width="24"
                          height="24"
                          alt="Research support"
                          style={{ float: "left" }}
                        />
                        24/5 Research support
                      </h4>
                      <p className="why_c_us_text">
                        Get queries resolved by industry expert.
                      </p>
                    </li>
                    <li>
                      <h4 className="why_c_us_h4" style={{ float: "left" }}>
                        <img
                          src="/images/logo/badge-3.png"
                          className="why_c_us_img"
                          width="24"
                          height="24"
                          alt="Custom research service"
                          style={{ float: "left" }}
                        />
                        Custom research service
                      </h4>
                      <p className="why_c_us_text">
                        Exclusive reports and studies to meet your custom
                        requirements.
                      </p>
                    </li>
                    <li>
                      <h4 className="why_c_us_h4" style={{ float: "left" }}>
                        <img
                          src="/images/logo/badge-1.png"
                          className="why_c_us_img"
                          width="24"
                          height="24"
                          alt="Quality assurance"
                          style={{ float: "left" }}
                        />
                        Quality assurance
                      </h4>
                      <p className="why_c_us_text">
                        Widely acclaimed services reccomended by major
                        organizations.
                      </p>
                    </li>
                    <li>
                      <h4 className="why_c_us_h4" style={{ float: "left" }}>
                        <img
                          src="/images/logo/badge-5.png"
                          className="why_c_us_img"
                          width="24"
                          height="24"
                          alt="Information security"
                          style={{ float: "left" }}
                        />
                        Information security
                      </h4>
                      <p className="why_c_us_text">
                        Your personal information security guaranteed.
                      </p>
                    </li>
                    <li>
                      <div className="why_c_us_rate">
                        <a href="#" style={{ float: "left" }}>
                          <img
                            src="/images/logo/sslgodaddy1_new.png"
                            alt="grand view research PCI DSS complaint"
                            width="94"
                          />
                        </a>
                        <img
                          src="/images/logo/paypal-verified.jpg"
                          alt="grand view research paypal verified"
                          width="87"
                          height=""
                          style={{ float: "left", marginLeft: "10px" }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
