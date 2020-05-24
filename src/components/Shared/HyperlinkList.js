import React from "react"

export default function({ linkList, headingText }) {
  return (
    <>
      <h4 className="mb-4 border-bottom">{headingText}</h4>
      <ul className="list-unstyled">
        {linkList.map(e => {
          return (
            <li className="mb-1">
              <a className="text-decoration-none text-dark" href={e.href}>
                {e.name}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
