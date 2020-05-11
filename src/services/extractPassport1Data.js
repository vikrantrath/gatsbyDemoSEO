import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlPassLprReport {
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
            slug
            one_cntry
            add_cntry
            discount
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
  return data.allMysqlPassLprReport.edges.map(e => {
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
      report_sub_type: e.node.report_sub_type,
      description: e.node.description,
      table_contents: e.node.table_contents?e.node.table_contents:null,
      slug: e.node.slug,
      one_cntry: e.node.one_cntry,
      add_cntry: e.node.add_cntry,
      discount: e.node.discount,
      pages: e.node.pages,
      format: e.node.format,
      report_id: e.node.report_id,
      status: e.node.status,
      created_at: e.node.created_at,
      updated_at: e.node.updated_at,
    }
  })
}
