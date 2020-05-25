import React from "react"

import { Router } from "@reach/router"

import NewAndResources from "./news-and-resources"
import NewsArticle from "../components/News/newsArticle"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function(props) {
  return (
    <Router basepath="/news">
      <NewAndResources path="/" />
      <NewsArticle path="/:slug" />
    </Router>
  )
}
