import React from "react"

import Button from "../Base/button/Button"
import { getRates } from "../../services/extractReportsData"

export default function({ reportItem }) {
  return (
    <>
      <select
        className={`form-control col-md-6 rounded-0 mt-2 mb-2 mr-3`}
        id="exampleFormControlSelect1"
        style={{ display: "inline" }}
      >
        {getRates(reportItem)}
      </select>
      <Button text="Add To Cart" block={4} link={"/login"} />
    </>
  )
}
