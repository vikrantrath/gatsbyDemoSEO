import React from "react"
import InnerPageBanner from "../components/Shared/InnerPageBanner"
import QueryForm from "../components/Contact/ContactComponents/ContactForm"

export default function (params) {
  return (
    <>
      <InnerPageBanner headingText={"Submit Query"} linkText={"Submit Query"} />
      <div className="container mb-5 pb-5">
        <QueryForm />
      </div>
    </>
  )
}
