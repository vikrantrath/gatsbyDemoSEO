import React from "react"
import Button from "../../../Base/button/Button"

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
      <Button text="Add To Cart" block={12} link={"/login"}/>
    </div>
  )
}
