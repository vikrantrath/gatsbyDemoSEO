import extractPassport1Report from "./extractPassport1Data"
import extractPassport2Report from "./extractPassport2Data"
import getConstants from "./constants"

// const passport1Data = extractPassport1Report()
// const passport2Data = extractPassport2Report()
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
    e => e.report_type == solutionType
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
  const [solutionType, releaseType] = slug.substring(
    slug.length - 2,
    slug.length
  )
  const actualSlug = slug.substring(0, slug.length - 3)
  if (releaseType == constants.report_release_type.Upcoming_Reports) {
    return upcomings.find(e => e.slug.toLowerCase() == actualSlug.toLowerCase())
  } else {
    if (solutionType == constants.solution_type.Syndicate_Report) {
      return syndicateReport.find(e => e.slug == actualSlug)
    } else if (solutionType == constants.solution_type.Passport_Report_1) {
      return passport1Data.find(e => e.slug == actualSlug)
    } else {
      return passport2Data.find(e => e.slug == actualSlug)
    }
  }
}
