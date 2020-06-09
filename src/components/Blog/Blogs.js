import React, { useState } from "react"

import extractBlogsData from "../../services/extractBlogsData"

import SEO from "../Base/SEO"
import InnerPageBanner from "../Shared/InnerPageBanner"

export default function() {
  const year = new Date().getFullYear()
  const years = []
  for (let i = year; i >= 2017; i--) years.push(i)
  const [currYear, setCurrYear] = useState(year)
  const data = extractBlogsData()
  function getBlogsByYear() {
    return data
      .filter(e => new Date(e.created_at).getFullYear() == currYear)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  }
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Blog"} linkText={"Blog"} />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {getBlogsByYear().map(e => {
                return (
                  <div class="col-md-5 offset-md-1 blog-box pl-0 pr-0">
                    <div class="col-md-12 p-0" style={{ height: "21em" }}>
                      <img
                        src={e.image.replace("/public", "")}
                        alt={e.alt_text}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <br />
                    <div class="col-md-12 mt-1">
                      <a href={`blog/${e.slug}`} className="pl-0 mb-0">
                        <h4>{e.title}</h4>
                      </a>
                      <div className="mt-1 text-muted">
                        Published: {new Date(e.created_at).toDateString()}
                      </div>
                      <p></p>
                      <p className="ml-0 mr-0 text-justify text-muted font-weight-light">
                        <span style={{ fontSize: "11pt" }}>
                          <span
                            style={{ fontFamily: "Calibri,sans-serif" }}
                            dangerouslySetInnerHTML={{
                              __html: e.body.substring(0, 250).concat("..."),
                            }}
                          ></span>
                        </span>
                      </p>
                      <a
                        href={`blog/${e.slug}`}
                        class="consultant-section double-grid pl-0 mb-0"
                      >
                        <button class="learn-more tran3s p-color-bg hvr-shutter-out-horizontal-two text-uppercase mt-2 ml-0">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-md-1 text-right offset-md-1">
            {years.map(e => {
              return (
                <div
                  onClick={() => setCurrYear(e)}
                  className={
                    currYear === e ? "display-4 text-primary" : "text-right h6"
                  }
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
