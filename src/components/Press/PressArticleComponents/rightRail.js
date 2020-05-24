import React from "react"

import PressArticleQuote from "./RightRailComponents/pressArticleQuote"
import AddToCart from "./RightRailComponents/addToCart"
import RequestOptions from "./RightRailComponents/requestOptions.js"

export default function({ pressItem }) {
  return (
    <>
      <div className="row">
        {pressItem.quote && (
          <PressArticleQuote quote={pressItem.quote} name={pressItem.name} />
        )}
        <AddToCart pressItem={pressItem} />
        <RequestOptions pressItem={pressItem} />
      </div>
    </>
  )
}
