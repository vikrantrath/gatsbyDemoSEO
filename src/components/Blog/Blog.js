import React from "react"

import extractBlogsData from "../../services/extractBlogsData"

import SEO from "../Base/SEO"
import InnerPageBanner from "../Shared/InnerPageBanner"

import "./Blog.css"

export default function({ slug }) {
  const data = extractBlogsData().find(e => e.slug == slug)
  return (
    <>
      <SEO title={"sheer analytics"} />
      <InnerPageBanner headingText={"Blog"} linkText={"Blog"} />
      <div class="col-md-8 offset-md-2 mb-4">
        <img
          src={data.image.replace("/public", "")}
          alt="Best consumer drinks for festivals christmas new year"
          width="100%"
          height="100%"
        />
      </div>
      <div class="col-md-8 offset-md-2">
        <div className="h4 mt-2" style={{ lineHeight: "38px" }}>
          {data.title}
        </div>
        <div className="text-muted">
          Published: {new Date(data.created_at).toDateString()}
        </div>
        <i
          className="fa fa-eye text-muted"
          style={{ paddingRight: "0.5em" }}
        ></i>
        <span className="text-muted">{data.views}</span>
        <div
          className="text-muted mt-4 blog"
          dangerouslySetInnerHTML={{ __html: data.body }}
        ></div>
      </div>
      <div class="col-md-8 offset-md-2 mb-2">
        <div
          class="sharethis-inline-share-buttons st-left st-has-labels  st-inline-share-buttons st-animated"
          id="st-1"
        >
          <div
            class="st-btn st-first"
            data-network="facebook"
            style={{ display: "inline-block " }}
          >
            <img
              alt="facebook sharing button"
              src="https://platform-cdn.sharethis.com/img/facebook.svg"
            />
            <span class="st-label">Share</span>
          </div>
          <div
            class="st-btn"
            data-network="twitter"
            style={{ display: "inline-block " }}
          >
            <img
              alt="twitter sharing button"
              src="https://platform-cdn.sharethis.com/img/twitter.svg"
            />
            <span class="st-label">Tweet</span>
          </div>
          <div
            class="st-btn"
            data-network="email"
            style={{ display: "inline-block " }}
          >
            <img
              alt="email sharing button"
              src="https://platform-cdn.sharethis.com/img/email.svg"
            />
            <span class="st-label">Email</span>
          </div>
          <div
            class="st-btn"
            data-network="linkedin"
            style={{ display: "inline-block " }}
          >
            <img
              alt="linkedin sharing button"
              src="https://platform-cdn.sharethis.com/img/linkedin.svg"
            />
            <span class="st-label">Share</span>
          </div>
          <div
            class="st-btn st-last"
            data-network="sharethis"
            style={{ display: "inline-block " }}
          >
            <img
              alt="sharethis sharing button"
              src="https://platform-cdn.sharethis.com/img/sharethis.svg"
            />
            <span class="st-label">Share</span>
          </div>
        </div>
      </div>
    </>
  )
}
