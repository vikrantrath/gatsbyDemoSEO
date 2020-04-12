import React from "react"
import extractContactData from "../../../services/extractContactData"

export default function CompanyInfo() {
  const data = extractContactData()
  return (
    <>
      <h3 className="mb-5">Company Info</h3>
      <div>
        {data.map(e => {
          return (
            <div key={e.id}>
              <div className="mb-4">
                <h6 className="text-primary mb-3">US Office</h6>
                <p className="text-muted font-weight-regular mb-0">
                  Milwaukee, Wisconsin
                  <br />
                  U.S
                </p>
                <p className="text-muted">
                  <i class="fa fa-phone mr-2" aria-hidden="true"></i>
                  +1-414-240-5010{" "}
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-primary mb-3">Corporate office </h6>
                <p className="text-muted font-weight-regular mb-0">
                  {e.address1}
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-primary mb-3">Branch Office</h6>
                <p className="text-muted font-weight-regular mb-0">
                  {e.address2}
                </p>
              </div>
              <div className="mb-4">
                <h6 className="text-primary mb-3">Contact details</h6>
                <ul className="text-muted font-weight-regular mb-0 list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      <i class="fa fa-phone mr-2" aria-hidden="true"></i>
                      {e.phone}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      <i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                      {e.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
