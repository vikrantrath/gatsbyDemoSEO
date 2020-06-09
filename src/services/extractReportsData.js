import getConstants from "./constants"
import React from "react"
const constants = getConstants()

export function getAllReportsByType(
  solutionData,
  upcomingsData,
  solutionType,
  solutionData2 = []
) {
  const data = []
  data.push(...solutionData)
  data.push(...solutionData2)
  const upcomingSyndicateData = upcomingsData.filter(
    e => e.report_type && solutionType.includes(e.report_type.toString())
  )
  data.push(...upcomingSyndicateData)
  return data
}

export function getReportByType(
  syndicateReport,
  passport1Data,
  passport2Data,
  upcomings,
  slug
) {
  console.log(slug)
  const [solutionType, releaseType] = slug.substring(
    slug.length - 2,
    slug.length
  )
  const actualSlug = slug.substring(0, slug.length - 3)
  if (releaseType == constants.report_release_type.Upcoming_Reports) {
    return upcomings.find(e => e.slug.toLowerCase() == actualSlug.toLowerCase())
  } else {
    if (solutionType == constants.solution_type.Syndicate_Report) {
      return syndicateReport.find(
        e => e.slug.toLowerCase() == actualSlug.toLowerCase()
      )
    } else if (solutionType == constants.solution_type.Passport_Report_1) {
      return passport1Data.find(
        e => e.slug.toLowerCase() == actualSlug.toLowerCase()
      )
    } else {
      return passport2Data.find(
        e => e.slug.toLowerCase() == actualSlug.toLowerCase()
      )
    }
  }
}

export function getRates(reportItem) {
  if (reportItem.report_sub_type == 1 && reportItem.report_type == 2) {
    return getSynPrices(reportItem)
  } else if (reportItem.report_sub_type == 1 && reportItem.report_type == 1) {
    return getLPR1Prices(reportItem)
  } else if (reportItem.report_sub_type == 1 && reportItem.report_type == 4) {
    return getPass2Prices(reportItem)
  } else {
    return getOtherPrices(reportItem)
  }
}

function getOtherPrices(reportItem) {
  return [
    reportItem.direct_insights ? (
      <option value="5">
        CEO or Director Insights Report Price: $ {reportItem.direct_insights}
      </option>
    ) : (
      ""
    ),
    reportItem.single_user_price ? (
      <option value="6">
        Single User Price: $ {reportItem.single_user_price}
      </option>
    ) : (
      ""
    ),
    reportItem.multiple_user_price ? (
      <option value="7">
        Multiple User Price: $ {reportItem.multiple_user_price}
      </option>
    ) : (
      ""
    ),
  ]
}

function getLPR1Prices(reportItem) {
  return [
    reportItem.one_cntry ? (
      <option value="3">One Country Price: $ {reportItem.one_cntry}</option>
    ) : (
      ""
    ),
    reportItem.add_cntry ? (
      <option value="4">
        Additional Country Price: $ {reportItem.add_cntry}
      </option>
    ) : (
      ""
    ),
  ]
}

function getSynPrices(reportItem) {
  return [
    reportItem.single_user_price ? (
      <option value="1">
        Single User Price: $ {reportItem.single_user_price}
      </option>
    ) : (
      ""
    ),
    reportItem.multiple_user_price ? (
      <option value="2">
        Multiple User Price: $ {reportItem.multiple_user_price}
      </option>
    ) : (
      ""
    ),
  ]
}

function getPass2Prices(reportItem) {
  return [
    reportItem.single ? (
      <option value="8">Single User License: $ {reportItem.single}</option>
    ) : (
      ""
    ),
    reportItem.multi ? (
      <option value="9">Multi User License: $ {reportItem.multi}</option>
    ) : (
      ""
    ),
    reportItem.database ? (
      <option value="10">Database: $ {reportItem.database}</option>
    ) : (
      ""
    ),
  ]
}
