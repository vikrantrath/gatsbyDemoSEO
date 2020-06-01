import React from "react"

import { Router, Match } from "@reach/router"

import Layout from "../components/Base/Layout"
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
import Report from "../page/report"
import News from "../page/news"
import Blog from "../page/blog"
import SearchResults from "../page/searchResults"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function index(props) {
  function ErrorDisplay() {
    return <h1>Not Found</h1>
  }
  console.log(props)
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Press path="/press/:slug" />
        <MarketReportResearch path="/market-research-reports/:slug" />
        <About path="/about-us" />
        <ConsultingSolutions path="/consulting-solutions" />
        <Contact path="/contact-us" />
        <DataMarketMonitoring path="/data-market-monitoring" />
        <NewsAndResources path="/news-and-resources" />
        <News path="/news/*" />
        <Blog path="/blog/*" />
        <PassportReport path="/passport-reports" />
        <PressRelease path="/press-release" />
        <SyndicateReport path="/syndicate-reports" />
        <Report path="/report/*" />
        <SearchResults path="/search-results/:slug" />
        <ErrorDisplay default />
      </Router>
    </Layout>
  )
}
