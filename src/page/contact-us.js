import React from "react"

import Contact from "../components/Contact/Contact"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

export default function () {
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Contact Us"} linkText={"Contact"} />
      <Contact />
    </>
  )
}
