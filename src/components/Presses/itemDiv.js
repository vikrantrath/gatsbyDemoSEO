import React, { useState } from "react"
import "./itemDiv.css"

export default function({ item, setIndustryCatId }) {
  const [showItems, setShowItems] = useState(false)
  return (
    <div className="mb-2">
      <div
        className="border border-secondary p-2 bg-light font-weight-bold"
        style={{ cursor: "pointer" }}
        onClick={() => setShowItems(!showItems)}
      >
        {item.name}
      </div>
      {showItems ? (
        <ul className="list-unstyled sectorList">
          {item.industrySectorList.map(e => (
            <li
              className="border border-top-0 border-secondary p-2 font-weight-light"
              onClick={() => setIndustryCatId(e.id)}
              style={{ cursor: "pointer" }}
            >
              {e.sectorName}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  )
}
