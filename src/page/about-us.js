import React from "react"

import SEO from "../components/Base/SEO"
import extractAboutData from "../services/extractAboutData"
import InnerPageBanner from '../components/Shared/InnerPageBanner'

export default function () {
  const data = extractAboutData()
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"About Us"} linkText={"About"} />
      <div className="container">
        {data.map(e => (
          <div
            dangerouslySetInnerHTML={{ __html: e.description }}
          />
        ))}
      </div>
    </>
  )
}
