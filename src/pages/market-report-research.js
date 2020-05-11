import React from "react"
import { Router } from "@reach/router"
import Report from "../components/Report/Report"

export default function() {
  return (
    <Router>
      <Report path="/market-report-research/:slug" />
    </Router>
  )
}
