import React from "react"

export default function({ pressItem, cols }) {
  return (
    <div className="p-4 col-md-12">
      <select
        className={`form-control col-md-${cols}`}
        id="exampleFormControlSelect1"
        style={{ display: cols == 12 ? "block" : "inline" }}
      >
        <option defaultChecked>Get from db</option>
        <option>2</option>
      </select>
      <button
        className={`btn btn-primary text-white mt-2 mb-2 col-md-${cols} rounded-0`}
      >
        Add To Cart
      </button>
    </div>
  )
}
