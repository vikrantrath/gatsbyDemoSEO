import React from "react"

import SEO from "../components/Base/SEO"
import Form from '../components/Enquiry/Form'

export default function ({ slug }) {
  return (
    <>
      <SEO title={"Sheer Analytics and Insights Request Sample"} />
      <Form headingText={"sample"} linkText={"AskForDiscount"} slug={slug} />
    </>
  )
}
