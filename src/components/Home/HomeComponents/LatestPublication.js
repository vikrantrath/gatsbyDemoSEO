import React from "react"
import SectionHeader from "../../Shared/SectionHeader"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function LatestPublication() {
  const data = useStaticQuery(graphql`
    {
      allMysqlPresses {
        edges {
          node {
            title
            slug
          }
        }
      }
      allMysqlLatestreports {
        edges {
          node {
            title
            slug
            report_type
            report_sub_type
          }
        }
      }
    }
  `)

  const mrReports = data.allMysqlLatestreports.edges
    .map(e => {
      return {
        title: e.node.title,
        link: e.node.slug,
        report_type: e.node.report_type,
        report_sub_type: e.node.report_sub_type,
      }
    })
    .slice(0, 7)

  const pressRelease = data.allMysqlPresses.edges
    .map(e => {
      return {
        title: e.node.title,
        link: e.node.slug,
      }
    })
    .slice(0, 8)

  return (
    <div className="container">
      <SectionHeader headingText={"Latest Publications"} />
      <div className="row">
        <div class="text-center col-md-8 col-sm-12">
          <h5 class="text-center">Market Research Reports</h5>
          {mrReports.map(e => {
            return (
              <div className="font-weight-lighter text-left p-2 border">
                <Link
                  to={`/market-research-reports/${e.link}-${e.report_type}${e.report_sub_type}`}
                >
                  {e.title}
                </Link>
              </div>
            )
          })}
          <Link to={`/market-research-reports/latest-published-reports`}>
            <button type="button" class="btn btn-outline-primary mt-2 mb-2">
              View All Latest Reports
            </button>
          </Link>
        </div>
        <div class="text-center col-md-4 col-sm-12">
          <h5 class="text-center">Press Release</h5>
          {pressRelease.map(e => {
            return (
              <div className="font-weight-lighter text-left p-2 border">
                <Link to={`press/${e.link}`} target="_blank">
                  {e.title}
                </Link>
              </div>
            )
          })}
          <Link to={`/press-release`}>
            <button type="button" class="btn btn-outline-primary mt-2 mb-2">
              View All Press
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
