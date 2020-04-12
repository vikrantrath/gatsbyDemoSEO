import React from "react"

import Consulting from "../components/Solutions/Consulting"
import Layout from "../components/Base/Layout"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"
import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function() {
  return (
    <Layout>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Consulting Enquiry"} linkText={"Consulting Enquiry"} />
      <Consulting />
    </Layout>
  )
}