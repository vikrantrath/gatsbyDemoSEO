import React from "react"

import Contact from "../components/Contact/Contact"
import Layout from "../components/Base/Layout"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"
import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function() {
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Contact Us"} linkText={"Contact"} />
      <Contact />
    </>
  )
}
