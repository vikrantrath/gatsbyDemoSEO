import React from "react"

export default function({ quote, name }) {
  return (
    <div className="ml-4 mr-2 col-md-12 bg-light border rounded-lg p-4">
      <i className="fa fa-quote-left"></i>
      {quote.includes("<i>") ? (
        <div dangerouslySetInnerHTML={{ __html: quote }}></div>
      ) : (
        <div className="text-muted h5">{quote}</div>
      )}
      <i className="fa fa-quote-right"></i>
      <div className="text-right font-weight-bold text-muted">-{name}</div>
    </div>
  )
}
