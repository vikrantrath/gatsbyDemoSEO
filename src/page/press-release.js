import React, { useState } from "react"
import Layout from "../components/Base/Layout"
import SEO from "../components/Base/SEO"
import InnerPageBanner from "../components/Shared/InnerPageBanner"

import extractIndustryData from "../services/extractIndustryData"

import ItemDiv from "../components/Presses/itemDiv"
import PressReleaseItems from "../components/Presses/pressReleaseItems"

export default function() {
  const industryData = extractIndustryData()

  const [industryCatId, setIndustryCatId] = useState(undefined)
  const [pressYear, setPressYear] = useState(2018)
  const year = new Date().getFullYear()
  const years = []
  for (let i = year; i >= 2018; i--) years.push(i)

  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner
        headingText={"Press Release"}
        linkText={"Press Release"}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div
              className="border border-secondary p-2 bg-light font-weight-bold mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => setIndustryCatId(undefined)}
            >
              All Press Release
            </div>
            {industryData.map(e => {
              return <ItemDiv item={e} setIndustryCatId={setIndustryCatId} />
            })}
          </div>
          <div className="col-md-8">
            <PressReleaseItems
              industryCatId={industryCatId}
              pressYear={pressYear}
            />
          </div>
          <div className="col-md-1 ">
            {years.map(e => {
              return (
                <div
                  onClick={() => setPressYear(e)}
                  className={pressYear === e ? "display-4 text-primary" : ""}
                  style={{ cursor: "pointer" }}
                >
                  {e}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
