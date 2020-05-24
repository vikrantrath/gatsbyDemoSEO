import React from "react"

import { Router } from "@reach/router"

import NewAndResources from "./news-and-resources"
import PressArticle from "../components/Press/pressArticle"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function(props) {
  console.log(props)
  return (
    <Router basepath="/press">
      <NewAndResources path="/" />
      <PressArticle path="/:slug" />
    </Router>
  )
}
