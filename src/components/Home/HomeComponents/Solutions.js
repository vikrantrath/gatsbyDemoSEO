import React from "react"
import SectionHeader from "../../Shared/SectionHeader"
import SolutionCard from "./SolutionCard"
import extractSolutionData from "../../../services/extractSolutionData"
export default function Solutions(props) {
  const items = extractSolutionData()
  return (
    <div className="container">
      <SectionHeader headingText={"Solutions We Provide"} />
      <div className="row">
        {items.map(item => (
          <SolutionCard item={item} />
        ))}
      </div>
    </div>
  )
}
