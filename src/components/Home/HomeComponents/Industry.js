import React from "react"
import SectionHeader from "../../Shared/SectionHeader"
import extractIndustryData from "../../../services/extractIndustryData"
import { Link } from "gatsby"
import "./Industry.css"

export default function Industry() {
  const industryCategorySectorList = extractIndustryData()
  return (
    <div className="container-fluid p-4">
      <SectionHeader headingText={"Industry Expertise"} />
      <div className="row">
        {industryCategorySectorList.map(item => {
          return (
            <div class="text-center col-md-6 col-sm-12">
              <div className="col-md-12">
                <div className="industry-icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-md-12">
                <Link
                  className="text-decoration-none text-dark"
                  to={`/report/${item.slug}`}
                >
                  <h5>{item.name}</h5>
                </Link>
              </div>
              <div
                className="font-weight-lighter col-md-12 text-left p-2 mb-4"
                style={{ fontSize: "0.93em" }}
              >
                {item.description}
              </div>
              <div className="container">
                <ul className="row list-unstyled">
                  {item.industrySectorList.map(e => {
                    return (
                      <li class="col-md-4 col-sm-12 text-left p-0">
                        <div className="industry-icon pl-2 ">
                          <i
                            className="fa fa-chevron-right ml-1"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <span
                          className="font-weight-light text-left pl-1"
                          style={{ fontSize: "0.84em" }}
                        >
                          <Link
                            className="text-decoration-none text-dark"
                            to={`/report/sect/${e.slug}`}
                          >
                            {e.sectorName}
                          </Link>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <Link
                className="btn btn-outline-primary mt-2 mb-2 float-left "
                to={`/report/${item.slug}`}
                role="button"
              >
                View Reports
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
