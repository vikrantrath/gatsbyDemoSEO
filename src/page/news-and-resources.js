import React, { useState } from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/Base/SEO"
import extractNewsData from "../services/extractNewsData"
import InnerPageBanner from "../components/Shared/InnerPageBanner"
import NewsColumns from "../components/News/newsColumns"
import newsImage from "../assets/newsImages/img33.jpg"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function() {
  const data = extractNewsData()
  const [page, setPage] = useState(1)

  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"News and Resources"} linkText={"News"} />
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-1" id="cat">
            <ul className="list list-unstyled border-top">
              <li className="list__item">
                <a href="#news" id="1" onClick={() => setPage(1)}>
                  <input
                    type="radio"
                    className="radio-btn"
                    name="choice"
                    id="nc1"
                    onClick={() => setPage(1)}
                    checked=""
                  />
                  <label for="1" className="label">
                    {" "}
                    In The News
                  </label>
                </a>
              </li>
              <li className="list__item">
                <a href="#news" id="2" onClick={() => setPage(2)}>
                  <input
                    type="radio"
                    className="radio-btn"
                    name="choice"
                    id="nc2"
                    onClick={() => setPage(2)}
                  />
                  <label for="2" className="label">
                    {" "}
                    Whitepapers
                  </label>
                </a>
              </li>
              <li className="list__item">
                <a href="/press-release">
                  <input
                    type="radio"
                    className="radio-btn"
                    name="choice"
                    id="nc0"
                  />
                  <label for="0" className="label">
                    Press Release
                  </label>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row">
              {page === 1
                ? data.map(e => {
                    return (
                      <NewsColumns
                        image={newsImage}
                        title={e.title}
                        slug={e.slug}
                        alt_text={e.alt_text}
                      />
                    )
                  })
                : "Coming Soon......."}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
