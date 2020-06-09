import React from "react"
import Button from "../../../Base/button/Button"
import { getRates } from "../../../../services/extractReportsData"

export default function({ reportItem }) {
  return (
    <div className="p-4 col-md-12">
      <select
        className="form-control rounded-0 mt-2 mb-2"
        id="exampleFormControlSelect1"
      >
        {getRates(reportItem)}
      </select>
      <Button text="Add To Cart" block={12} link={"/login"} />
    </div>
  )
}
