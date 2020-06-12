import React from "react"
import { Link } from "gatsby"
import "../Base/FooterComponents/Hotlinks.css"

export default function({ region }) {
  return (
    <div className="shadow-lg">
      <div className="display-4 mb-4">
        <Link
          to={`/report/reg/${region.slug}`}
          className="text-decoration-none text-white"
        >
          {region.cat_name}
        </Link>
      </div>
      <div className="row">
        {region.sectorList.map(sector => {
          return (
            <div className="col-md-4 h5 ml-5 p-2 regBox">
              <Link
                to={`/report/reg/sect/${sector.slug}`}
                className="text-decoration-none text-white cool-link"
              >
                {sector.sector_name}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
