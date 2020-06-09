import React from "react"

import Button from "../Base/button/Button"

export default function ({ pressItem }) {
  return (
    <>
      <select
        className={`form-control col-md-6 rounded-0 mt-2 mb-2 mr-3`}
        id="exampleFormControlSelect1"
        style={{ display: "inline" }}
      >
        <option defaultChecked>Get from db</option>
        <option>2</option>
      </select>
      <Button text="Add To Cart" block={4} link={"/login"} />
    </>
  )
}
