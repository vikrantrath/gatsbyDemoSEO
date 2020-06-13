import React from "react"

import { Router } from "@reach/router"

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
import AskForDiscount from "../page/ask-for-discount"
import AskAnAnalyst from "../page/ask-an-analyst"
import RequestSample from "../page/request-sample"
import RequestBrowser from "../page/request-brochure"
import SubmitQuery from "../page/submit-query"
import Industry from "../page/industry"
import Regions from "../page/regions"
import Solution from "../page/solutions"

export default function index(props) {
  function ErrorDisplay() {
    return <h1>Not Found</h1>
  }
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Press path="/press/:slug" />
        <MarketReportResearch path="/market-report-research/:slug" />
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
        <RequestBrowser path="/request-brochure/:slug" />
        <AskForDiscount path="/ask-for-discount/:slug" />
        <AskAnAnalyst path="/ask-an-analyst/:slug" />
        <RequestSample path="/request-sample/:slug" />
        <Industry path="/industry" />
        <Regions path="/regions" />
        <Solution path="/solutions" />
        <SubmitQuery path="/submit-query" />
        <ErrorDisplay default />
      </Router>
    </Layout>
  )
}
