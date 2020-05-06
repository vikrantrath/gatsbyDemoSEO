import React from "react"

import extractPressesData from "../../services/extractPressesData"

import Layout from "../Base/Layout"
import SEO from "../Base/SEO"
import InnerPageBanner from "../Shared/InnerPageBanner"

import LeftRail from "./PressArticleComponents/leftRail"
import RightRail from "./PressArticleComponents/rightRail"

import "../../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./pressArticle.css"

export default function({ slug }) {
  const item = slug
  const allPressData = extractPressesData()

  function getArticleData() {
    if (item) {
      console.log("page * :", item)
      return allPressData.find(e => e.slug == item)
    }
    return null
  }
  const data = getArticleData()
  console.log(data)
  return (
    <Layout>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner
        headingText={"Press"}
        linkText={data.title.substring(0, 50) + "..."}
      />
      {data ? (
        <div className="container">
          <div className="row">
            <div className="col-md-9 pressArticle">
              <LeftRail pressItem={data} />
            </div>
            <div className="col-md-3">
              <RightRail pressItem={data} />
            </div>
          </div>
        </div>
      ) : (
        "Not Found"
      )}
    </Layout>
  )
}
