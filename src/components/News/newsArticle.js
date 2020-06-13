import React from "react"

import extractNewsData from "../../services/extractNewsData"

import Layout from "../Base/Layout"
import SEO from "../Base/SEO"
import InnerPageBanner from "../Shared/InnerPageBanner"

import Article from "../Shared/Article"

import "font-awesome/css/font-awesome.min.css"
import "./newsColumns.css"

import newsImage from "../../assets/newsImages/img33.jpg"
import HyperlinkList from "../Shared/HyperlinkList"

export default function ({ slug }) {
  const item = slug
  const allNewsData = extractNewsData()

  function getArticleData() {
    if (item) {
      return allNewsData.find(e => e.slug == item)
    }
    return null
  }
  const data = getArticleData()
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner
        headingText={"News and Resources"}
        linkText={data.title.substring(0, 50) + "..."}
      />
      {data ? (
        <div className="container">
          <div className="row">
            <div className="col-md-3 article mb-4">
              <HyperlinkList
                headingText={"Press & News"}
                linkList={[
                  { name: "All News", href: "/news-and-resources" },
                  { name: "Press Release", href: "/press-release" },
                ]}
              />
            </div>
            <div className="col-md-9 article mb-4">
              <div className="col-md-12 p-0" height="13em">
                <img
                  src={data.image.replace("/public", "")}
                  width="100%"
                  height="100%"
                />
              </div>
              <Article pressItem={data} />
            </div>
          </div>
        </div>
      ) : (
          "Not Found"
        )}
    </>
  )
}
