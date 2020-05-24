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
  const regionSectorId = regionData
    .map(e => e.sectorList)
    .flat()
    .find(e => e.slug === slug).id
  const data = allData.filter(e => e.reg_sect_id == regionSectorId)
  const dataWithDate = data
    .filter(e => e.month)
    .sort((a, b) => new Date(b.month) - new Date(a.month))
  const dataWithoutDate = data.filter(e => !e.month)
  return <ReportTable tableData={[...dataWithDate, ...dataWithoutDate]} />
}
