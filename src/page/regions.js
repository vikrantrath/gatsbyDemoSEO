import React from "react"
import InnerPageBanner from "../components/Shared/InnerPageBanner"
import extractRegionData from "../services/extractRegionData"
import RegionCard from "../components/Regions/regionCard"
import SectionHeader from "../components/Shared/SectionHeader"

export default function(params) {
  const data = extractRegionData()
  return (
    <>
      <InnerPageBanner headingText={"Region"} linkText={"Region"} />
      <div className="world-bg" style={{ minHeight: "100%" }}>
        <div
          className="opacity force-white-text"
          style={{ minHeight: "100%", width: "100%" }}
        >
          <div className="border-bottom mb-4">
            <SectionHeader headingText={"Regions"} />
            <h5 className="text-white font-weight-light font-italic">
              Reports from all around the world
            </h5>
          </div>
          <div className="row">
            {data.map(region => {
              return (
                <div className="col-md-6 mb-4">
                  <RegionCard region={region} />{" "}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
