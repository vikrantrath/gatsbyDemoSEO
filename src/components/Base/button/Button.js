import React from "react"

import "./button.scss"

export default function({ text, block, link }) {
  return (
    <div
      className={`col-md-${block} consultant-section double-grid`}
      style={{ paddingLeft: "0px", marginBottom: "0px", marginTop: "0.5em" }}
    >
      <a
        href={link}
        className="learn-more tran3s p-color-bg hvr-shutter-out-horizontal-two"
        style={{ width: "100%", fontSize: "0.9em" }}
      >
        {text}
      </a>
    </div>
  )
}
