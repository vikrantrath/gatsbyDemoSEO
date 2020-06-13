import React from "react"

import Consulting from "../components/Solutions/Consulting"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

export default function () {
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Consulting Enquiry"} linkText={"Consulting Enquiry"} />
      <Consulting />
    </>
  )
}