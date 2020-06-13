import React from "react"

import DataMarketMonitoring from "../components/Solutions/DataMarketMonitoring"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

export default function () {
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Data Market Monitoring"} linkText={"Data Market Monitoring"} />
      <DataMarketMonitoring />
    </>
  )
}
