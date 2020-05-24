import React from "react"

import {
  extractIndustryData,
  extractPassport1Data,
  extractPassport2Data,
  extractSyndicateReport,
} from "../../services"

import ReportTable from "../Shared/ReportTable"

export default function({ slug }) {
  const industryData = extractIndustryData()
  const allData = [
    ...extractPassport1Data(),
    ...extractPassport2Data(),
    ...extractSyndicateReport(),
  ]
  const industryId = industryData.find(e => e.slug == slug).id
  const data = allData.filter(e => e.ind_cat_id == industryId)
  const dataWithDate = data
    .filter(e => e.month)
    .sort((a, b) => new Date(b.month) - new Date(a.month))
  const dataWithoutDate = data.filter(e => !e.month)
  return <ReportTable tableData={[...dataWithDate, ...dataWithoutDate]} />
}
