import React from "react"
import constants from "../../services/constants"
import { Link } from "gatsby"

export default function({ tableData }) {
  function getCorporatePrice(
    reg_cat_id,
    one_cntry,
    single_user_price,
    multiple_user_price
  ) {
    if (reg_cat_id != 7) {
      return multiple_user_price
    } else {
      if (one_cntry == 300) {
        return 500
      } else if (single_user_price == 3795) {
        return 6795
      } else {
        return 7795
      }
    }
  }

  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th width="50%">Title</th>
          <th>Published</th>
          <th>Price</th>
          <th width="20%">TOC Available</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(e => {
          return (
            <tr>
              <td width="50%">
                <Link
                  className="text-decoration-none"
                  to={`/market-report-research/${e.slug}-${e.report_type}${e.report_sub_type}`}
                >
                  <div
                    width="50%"
                    className="text-primary"
                    dangerouslySetInnerHTML={{ __html: e.title }}
                  ></div>
                </Link>
                <br />
                {e.description ? (
                  <div
                    width="50%"
                    dangerouslySetInnerHTML={{
                      __html: e.description.substring(
                        0,
                        e.description.indexOf(".")
                      ),
                    }}
                  ></div>
                ) : (
                  ""
                )}
              </td>
              <td className="text-center text-muted pt-3">
                {e.report_sub_type ==
                constants().report_release_type.Latest_Published_Reports
                  ? e.month
                  : "Upcoming Report"}
              </td>
              <td>
                <div className="text-center mb-3 text-muted">
                  {e.report_sub_type ==
                  constants().report_release_type.Latest_Published_Reports
                    ? `Single User Price: $${
                        e.single_user_price ? e.single_user_price : ""
                      }`
                    : `Direct Insights: $${e.direct_insights}`}
                </div>
                <div className="text-center text-muted">
                  Corporate User Licence: $
                  {getCorporatePrice(
                    e.reg_cat_id,
                    e.one_cntry,
                    e.single_user_price,
                    e.multiple_user_price
                  )}
                </div>
              </td>
              <td className="text-center">
                {e.table_contents ? (
                  <i class="fa fa-check-square-o" aria-hidden="true"></i>
                ) : (
                  ""
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
