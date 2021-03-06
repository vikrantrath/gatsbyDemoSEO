import React, { useState } from "react"
import { Link } from "gatsby"
export default function SolutionCard({ item }) {
  const [swapDiv, setSwapDiv] = useState(false)
  return (
    <Link
      to={item.link}
      className="text-center col-md-2 col-sm-6 rounded bg-white rounded align-items-center d-flex text-decoration-none"
      style={{
        height: "243px",
        width: "100%",
      }}
      onMouseEnter={() => setSwapDiv(true)}
      onMouseLeave={() => setSwapDiv(false)}
    >
      {swapDiv ? (
        <div
          className="text-white text-left p-1"
          style={{ backgroundColor: `${item.borderColor}`, height: "100%" }}
        >
          <p
            className="font-weight-bold"
            style={{ fontSize: "0.9em", padding: "0px", lineHeight: "20px" }}
          >
            {item.hoverHeading}
          </p>
          <p
            className="font-weight-light"
            style={{ fontSize: "0.8em", padding: "0px", lineHeight: "20px" }}
          >
            {item.hoverText}
          </p>
        </div>
      ) : (
          <div
            className="text-dark solcat"
            style={{
              borderBottom: `0.7em solid ${item.borderColor}`,
              height: "100%",
              width: "100%",
            }}
          >
            <div className="mt-4">
              <img src={item.itemSrc} height="93px" width="93px" />
              <h6 className="font-weight-normal p-2">{item.title}</h6>
            </div>
          </div>
        )}
    </Link>
  )
}
