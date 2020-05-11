import React from "react"

export default function({ pressItem }) {
  return (
    <>
      <div className="text-decoration-none text-body h4 mb-2 font-weight-bold">
        {pressItem.title}
      </div>
      <div className="text-muted font-weight-light mt-2">
        Published : {new Date(pressItem.created_at).toDateString()}
      </div>
      <i className="fa fa-eye text-muted" style={{ paddingRight: "0.5em" }}></i>
      <span className="text-muted">{pressItem.views}</span>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: pressItem.body }}
      ></div>
    </>
  )
}
