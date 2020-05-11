import React from "react"

import PressArticleQuote from "./RightRailComponents/pressArticleQuote"
import AddToCart from "../../Shared/addToCart"
import RequestOptions from "./RightRailComponents/requestOptions.js"

export default function({ pressItem }) {
  return (
    <>
      <div className="row">
        <PressArticleQuote quote={pressItem.quote} name={pressItem.name} />
        <AddToCart pressItem={pressItem} cols={12} />
        <RequestOptions pressItem={pressItem} />
      </div>
    </>
  )
}
