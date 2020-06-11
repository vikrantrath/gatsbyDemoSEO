import React from "react"
import { Router } from "@reach/router"
import Report from "../components/Report/Report"
import LatestPublishedReports from "../components/Report/LatestPublishedReports"

export default function(props) {
  return (
    <Router basepath="/market-report-research">
      <LatestPublishedReports path="/latest-published-reports" />
      <Report path="/:slug" />
    </Router>
  )
}
