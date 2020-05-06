import React from "react"

export default function({ pressItem }) {
  return (
    <div className="col-md-12 p-4">
        <select class="form-control" id="exampleFormControlSelect1">
          <option defaultChecked>Get from db</option>
          <option>2</option>
        </select>
        <button className="btn btn-primary text-white btn-block mt-2 mb-2" width="100%">Add To Cart</button>
    </div>
  )
}
