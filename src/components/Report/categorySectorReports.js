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
  const industrySectorId = industryData
    .map(e => e.industrySectorList)
    .flat()
    .find(e => e.slug === slug).id
  const data = allData.filter(e => e.ind_sect_id == industrySectorId)
  const dataWithDate = data
    .filter(e => e.month)
    .sort((a, b) => new Date(b.month) - new Date(a.month))
  const dataWithoutDate = data.filter(e => !e.month)
  return <ReportTable tableData={[...dataWithDate, ...dataWithoutDate]} />
}
