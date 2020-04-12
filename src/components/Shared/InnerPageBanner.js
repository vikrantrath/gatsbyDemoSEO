import React from "react"
import "./InnerPageBanner.css"
export default function({ headingText, linkText }) {
  return (
    <section className="banner-background">
      <div className="opacity">
        <div className="container">
          <h1 className="font-weight-bold text-white">{headingText}</h1>
          <ul className="list-unstyled list-inline text-white col-md-12 pl-0">
            <li className="list-inline-item">
              <a className="text-decoration-none text-white" href="/">
                Home
              </a>
            </li>
            <li className="list-inline-item">.</li>
            <li className="list-inline-item">{linkText}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
