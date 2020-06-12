import React from "react"

import Industry from "../components/Home/HomeComponents/Industry"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

export default function(params) {
  return (
    <>
      <InnerPageBanner headingText={"Industries"} linkText={"Industries"} />
      <div className="world-bg" style={{ minHeight: "100%" }}>
        <div
          className="opacity force-white-text"
          style={{ minHeight: "100%", width: "100%" }}
        >
          <Industry mode={`white`} />
        </div>
      </div>
    </>
  )
}
