import React from "react"

import {
  extractRegionData,
  extractPassport1Data,
  extractPassport2Data,
  extractSyndicateReport,
  extractUpcomingsData,
} from "../../services"

import ReportTable from "../Shared/ReportTable"

export default function({ slug }) {
  const regionData = extractRegionData()
  const allData = [
    ...extractPassport1Data(),
    ...extractPassport2Data(),
    ...extractSyndicateReport(),
    ...extractUpcomingsData(),
  ]
  const regionId = regionData.find(e => e.slug == slug).id
  const data = allData.filter(e => e.reg_cat_id == regionId)
  const dataWithDate = data
    .filter(e => e.month)
    .sort((a, b) => new Date(b.month) - new Date(a.month))
  const dataWithoutDate = data.filter(e => !e.month)
  return <ReportTable tableData={[...dataWithDate, ...dataWithoutDate]} />
}
