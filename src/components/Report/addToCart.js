import React from "react"

import Button from "../Base/button/Button"
import { getRates } from "../../services/extractReportsData"

<<<<<<< HEAD
export default function({ reportItem }) {
=======
export default function ({ pressItem }) {
>>>>>>> 05efb83c5dc1c647730aecc9479cf736994f9181
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
