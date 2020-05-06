import React, { useState } from "react"

export default function({ item }) {
  return (
    <div className="col-md-12 border mb-4 p-3">
      <a
        className="text-decoration-none text-body h5 mb-2 font-weight-bold"
        href={`/press/${item.slug}`}
      >
        {item.title}
      </a>
      <p className="text-muted font-weight-light mt-2">
        Published : {new Date(item.created_at).toDateString()}
      </p>
      <div
        className="text-decoration-none h6 mb-2"
        dangerouslySetInnerHTML={{
          __html: item.body
            .substring(0, 1024)
            .concat(item.body.length > 1027 ? "..." : ""),
        }}
      ></div>
      <a
        className="text-decoration-none btn btn-primary text-uppercase"
        href={`/press/${item.slug}`}
      >
        Read More
      </a>
    </div>
  )
}
