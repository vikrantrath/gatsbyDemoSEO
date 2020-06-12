import React from "react"
import InnerPageBanner from "../components/Shared/InnerPageBanner"
import Solutions from "../components/Home/HomeComponents/Solutions"

export default function(params) {
  return (
    <>
      <InnerPageBanner headingText={"Solutions"} linkText={"Solutions"} />
      <div className="container mb-5 pb-5">
        <Solutions />
      </div>
    </>
  )
}
