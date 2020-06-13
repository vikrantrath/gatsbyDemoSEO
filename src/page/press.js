import React from "react"

import { Router } from "@reach/router"

import NewAndResources from "./news-and-resources"
import PressArticle from "../components/Press/pressArticle"

export default function (props) {
  return (
    <Router basepath="/press">
      <NewAndResources path="/" />
      <PressArticle path="/:slug" />
    </Router>
  )
}
