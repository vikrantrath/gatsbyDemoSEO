import React from "react"

import { Router } from "@reach/router"

import Home from "../page/home"
import Press from "../page/press"
import MarketReportResearch from "../page/market-report-research"

import About from "../page/about-us"
import ConsultingSolutions from "../page/consulting-solutions"
import Contact from "../page/contact-us"
import DataMarketMonitoring from "../page/data-market-monitoring"
import NewsAndResources from "../page/news-and-resources"
import PassportReport from "../page/passport-reports"
import PressRelease from "../page/press-release"
import SyndicateReport from "../page/syndicate-reports"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Layout from "../components/Base/Layout"

export default function index(props) {
  function ErrorDisplay() {
    return <h1>Not Found</h1>
  }
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Press path="/press/:slug" />
        <MarketReportResearch path="/market-research-reports/:slug" />
        <About path="/about-us" />
        <ConsultingSolutions path="/consulting-solutions" />
        <Contact path="/contact-us" />
        <DataMarketMonitoring path="/data-market-Monitoring" />
        <NewsAndResources path="/news-and-resources" />
        <PassportReport path="/passport-reports" />
        <PressRelease path="/press-release" />
        <SyndicateReport path="/syndicate-reports" />
        <ErrorDisplay default />
      </Router>
    </Layout>
  )
}
