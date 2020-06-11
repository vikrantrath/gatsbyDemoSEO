import React from "react"
import {
  extractPassport1Data,
  extractPassport2Data,
  extractSyndicateReport,
} from "../../services"

import ReportTable from "../Shared/ReportTable"
import InnerPageBanner from "../Shared/InnerPageBanner"

export default function() {
  const data = [
    ...extractSyndicateReport(),
    ...extractPassport1Data(),
    ...extractPassport2Data(),
  ]

  const dataWithDate = data
    .filter(e => e.month)
    .sort((a, b) => new Date(b.month) - new Date(a.month))
  const dataWithoutDate = data.filter(e => !e.month)
  return (
    <>
      <InnerPageBanner
        headingText={`Latest Published Reports`}
        linkText={`Latest Published Reports`}
      />
      <div className="container">
        <ReportTable tableData={[...dataWithDate, ...dataWithoutDate]} />
      </div>
    </>
  )
}
