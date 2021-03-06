import React from "react"

import SEO from "../components/Base/SEO"
import Form from '../components/Enquiry/Form'

export default function ({ slug }) {
  return (
    <>
      <SEO title={"Sheer Analytics and Insights Ask For Discount"} />
      <Form headingText={"analyst"} linkText={"AskForDiscount"} slug={slug} />
    </>
  )
}
