import React from "react"

export default function({ pressItem }) {
  return (
    <>
      <select
        className={`form-control col-md-6 rounded-0 mt-2 mb-2`}
        id="exampleFormControlSelect1"
        style={{ display: "inline" }}
      >
        <option defaultChecked>Get from db</option>
        <option>2</option>
      </select>
      <button
        className={`btn btn-primary text-white mb-2 col-md-5 ml-1 rounded-0`}
      >
        Add To Cart
      </button>
    </>
  )
}
