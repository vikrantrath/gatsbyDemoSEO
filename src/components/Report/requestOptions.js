import React from "react"
import { Link } from "gatsby"
import Button from "../Base/button/Button"

export default function ({ options }) {
  return (
    <>
      {options.map(e => {
        return (
          <div className="col-md-3">
            <Link to={e.link}>
              <Button text={e.name} block={12} />
            </Link>
          </div>
        )
      })}
    </>
  )
}
