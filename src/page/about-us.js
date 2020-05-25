import React from "react"

import SEO from "../components/Base/SEO"
import extractAboutData from "../services/extractAboutData"
import InnerPageBanner from '../components/Shared/InnerPageBanner'

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function() {
  const data = extractAboutData()
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"About Us"} linkText={"About"}/>
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
