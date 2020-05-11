import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlPass2Report {
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
            analysis
            slug
            single
            multi
            database
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
  return data.allMysqlPass2Report.edges.map(e => {
    return {
      id: e.node.id,
      meta_title: e.node.meta_title,
      meta_desc: e.node.meta_desc,
      meta_keywords: e.node.meta_keywords,
      report_type: e.node.report_type,
      ind_cat_id: e.node.ind_cat_id,
      ind_sect_id: e.node.ind_sect_id,
      reg_cat_id: e.node.reg_cat_id,
      reg_sect_id: e.node.reg_sect_id,
      title: e.node.title,
      press_title: e.node.press_title,
      report_sub_type: e.node.report_sub_type,
      description: e.node.description,
      table_contents: e.node.table_contents,
      toc2: e.node.toc2,
      analysis: e.node.analysis,
      press_release: e.node.press_release,
      slug: e.node.slug,
      single: e.node.single,
      multi: e.node.multi,
      database: e.node.database,
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
