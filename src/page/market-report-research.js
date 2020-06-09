import React from "react"
import { Router } from "@reach/router"
import Report from "../components/Report/Report"

export default function(props) {
  return (
    <Router basepath="/market-report-research">
      <Latest path="/latest-published-reports" />
      <Report path="/:slug" />
    </Router>
  )

  function Latest() {
    return <h1>Hiiii</h1>
  }
}
