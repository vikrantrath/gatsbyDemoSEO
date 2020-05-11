import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlUpcomings {
        edges {
          node {
            id
            report_type
            ind_cat_id
            ind_sect_id
            reg_cat_id
            reg_sect_id
            title
            report_sub_type
            market
            table_contents
            discount
            slug
            direct_insights
            single_user_price
            multiple_user_price
            status
            created_at
            updated_at
          }
        }
      }
    }
  `)
  return data.allMysqlUpcomings.edges.map(e => {
    return {
      id: e.node.id,
      report_type: e.node.report_type,
      ind_cat_id: e.node.ind_cat_id,
      ind_sect_id: e.node.ind_sect_id,
      reg_cat_id: e.node.reg_cat_id,
      reg_sect_id: e.node.reg_sect_id,
      title: e.node.title,
      report_sub_type: e.node.report_sub_type,
      market: e.node.market,
      table_contents: e.node.table_contents,
      discount: e.node.discount,
      slug: e.node.slug,
      direct_insights: e.node.direct_insights,
      single_user_price: e.node.single_user_price,
      multiple_user_price: e.node.multiple_user_price,
      status: e.node.status,
      created_at: e.node.created_at,
      updated_at: e.node.updated_at,
    }
  })
}
