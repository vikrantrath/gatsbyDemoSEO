import React from "react"
import "./newsColumns.css"
import { Link } from "gatsby"

export default function({ image, slug, alt_text, title }) {
  return (
    <div className="col-md-3 offset-md-1 news-box">
      <Link className="text-decoration-none" to={`/news/${slug}`}>
        <div className="col-md-12 p-0" height="13em">
          <img src={image} alt={alt_text} width="100%" height="100%" />
        </div>
        <br />
        <div className="col-md-12">
          <center>
            <span className="font-weight-bold text-uppercase h5 mb-4">
              In The News
            </span>
            <br />
            <div className="mb-2"></div>
            <span className="text-dark font-weight-normal h4">{title}</span>
            <br />
            <br />
            <u className="text-dark">READ THE STORY</u>
          </center>
        </div>
      </Link>
      <div class="col-md-12 p-0 mt-1">
        <center>
          <h4>Share:</h4>
          <br />
          <div class="col-md-6 offset-md-3 mb-2">
            <div class="sharethis-inline-share-buttons"></div>
          </div>
        </center>
      </div>
    </div>
  )
}
