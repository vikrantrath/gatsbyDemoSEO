import { useStaticQuery, graphql } from "gatsby"

export default function () {
  const data = useStaticQuery(graphql`
    {
      allMysqlSyndicatereport {
        edges {
          node {
            id
            meta_title
            meta_desc
            meta_keywords
            report_type
            ind_cat_id
            ind_sect_id
            reg_cat_id
            reg_sect_id
            title
            report_sub_type
            description
            table_contents
            toc2
            analysis
            slug
            single_user_price
            multiple_user_price
            discount
            month
            pages
            format
            report_id
            status
            created_at
            updated_at
          }
        }
      }
    }
  `)
  return data.allMysqlSyndicatereport.edges.map(e => {
    return {
      id: e.node.id.replace("mysql__Syndicatereport__", ""),
      meta_title: e.node.meta_title,
      meta_desc: e.node.meta_desc,
      meta_keywords: e.node.meta_keywords || '',
      report_type: e.node.report_type,
      ind_cat_id: e.node.ind_cat_id,
      ind_sect_id: e.node.ind_sect_id,
      reg_cat_id: e.node.reg_cat_id,
      reg_sect_id: e.node.reg_sect_id,
      title: e.node.title,
      report_sub_type: e.node.report_sub_type,
      description: e.node.description,
      table_contents: e.node.table_contents,
      toc2: e.node.toc2,
      analysis: e.node.analysis,
      slug: e.node.slug,
      single_user_price: e.node.single_user_price,
      multiple_user_price: e.node.multiple_user_price,
      discount: e.node.discount,
      month: e.node.month,
      pages: e.node.pages,
      format: e.node.format,
      report_id: e.node.report_id,
      status: e.node.status,
      created_at: e.node.created_at,
      updated_at: e.node.updated_at,
    }
  })
}
