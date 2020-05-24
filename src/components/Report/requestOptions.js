import React from "react"

export default function({ options }) {
  console.log(options)
  return (
    <div className="col-md-12 p-3 list-inline justify-content-between">
      {options.map(e => {
        return (
          <a
            className={`btn btn-primary text-white font-weight-normal mt-2 mb-2 mr-3 text-capitalize rounded-0 list-inline-item`}
            style={{width:"22%"}}
          >
            {e.name}
          </a>
        )
      })}
    </div>
  )
}
