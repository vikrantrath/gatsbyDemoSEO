import React from "react"

import PressArticleQuote from "./RightRailComponents/pressArticleQuote"
import AddToCart from "./RightRailComponents/addToCart"
import RequestOptions from "../../Report/requestOptions"

import {
  constants,
  extractPassport1Data,
  extractPassport2Data,
  extractSyndicateReport,
  extractUpcomingsData,
} from "../../../services"

import { getReportByType } from "../../../services/extractReportsData"

export default function({ pressItem }) {
  const reportItem = getReportByType(
    extractSyndicateReport(),
    extractPassport1Data(),
    extractPassport2Data(),
    extractUpcomingsData(),
    pressItem.link.replace(
      "https://www.sheeranalyticsandinsights.com/market-report-research/",
      ""
    )
  )
  const CONSTANTS = constants()
  return (
    <>
      <div className="row">
        {pressItem.quote && (
          <PressArticleQuote quote={pressItem.quote} name={pressItem.name} />
        )}
        <AddToCart reportItem={reportItem} />
        <RequestOptions
          options={[
            {
              name: "Request Brochure",
              link: `/request-brochure/${reportItem.report_type}/${reportItem.report_sub_type}/${reportItem.id}/${CONSTANTS.request_type.brochure}`,
            },
            {
              name: "Ask An Analyst",
              link: `/ask-an-analyst/${reportItem.report_type}/${reportItem.report_sub_type}/${reportItem.id}/${CONSTANTS.request_type.analyst}`,
            },
            {
              name: "Download Sample",
              link: `/request-sample/${reportItem.report_type}/${reportItem.report_sub_type}/${reportItem.id}/${CONSTANTS.request_type.sample}`,
            },
          ]}
          blocks={"12"}
        />
      </div>
    </>
  )
}
