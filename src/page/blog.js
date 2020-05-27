import React from "react"
import { Router } from "@reach/router"

import Blogs from "../components/Blog/Blogs"
import Blog from "../components/Blog/Blog"

export default function(props) {
  return (
    <Router basepath="/blog">
      <Blogs path="/" />
      <Blog path="/:slug" />
    </Router>
  )
}
