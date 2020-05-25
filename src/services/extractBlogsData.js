import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlBlogs {
        edges {
          node {
            id
            title
            meta_title
            meta_desc
            meta_keywords
            alt_text
            ind_cat_id
            ind_sect_id
            body
            image
            slug
            views
            status
            created_at
          }
        }
      }
    }
  `)
  return data.allMysqlBlogs.edges.map(e => {
    return {
      id: e.node.id.replace("mysql__Blogs__", ""),
      title: e.node.title,
      meta_title: e.node.meta_title,
      meta_desc: e.node.meta_desc,
      meta_keywords: e.node.meta_keywords,
      alt_text: e.node.alt_text,
      ind_cat_id: e.node.ind_cat_id,
      ind_sect_id: e.node.ind_sect_id,
      body: e.node.body,
      image: e.node.image,
      slug: e.node.slug,
      views: e.node.views,
      status: e.node.status,
      created_at: e.node.created_at,
    }
  })
}
