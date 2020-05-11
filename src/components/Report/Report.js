import React from "react"

import extractPassport1Data from "../../services/extractPassport1Data"
import extractPassport2Data from "../../services/extractPassport2Data"
import extractSyndicateReport from "../../services/extractSyndicateReport"
import extractUpcomingData from "../../services/extractUpcomingsData"
import { getReportByType } from "../../services/extractReportsData"

import AddToCart from "../Shared/addToCart"

export default function({ slug }) {
  const data = getReportByType(
    extractSyndicateReport(),
    extractPassport1Data(),
    extractPassport2Data(),
    extractUpcomingData(),
    slug
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddToCart cols={6} />
        </div>
      </div>
      <h6>{data.title}</h6>
    </div>
  )
}
