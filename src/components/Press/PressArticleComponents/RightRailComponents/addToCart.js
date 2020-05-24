import React from "react"

export default function({ pressItem }) {
  return (
    <div className="p-4 col-md-12">
      <select
        className="form-control rounded-0 mt-2 mb-2"
        id="exampleFormControlSelect1"
      >
        <option defaultChecked>Get from db</option>
        <option>2</option>
      </select>
      <button
        className={`btn btn-primary text-white mt-2 mb-2 btn-block rounded-0`}
      >
        Add To Cart
      </button>
    </div>
  )
}
