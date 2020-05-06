import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlPresses {
        edges {
          node {
            id
            title
            meta_title
            meta_desc
            meta_keywords
            ind_cat_id
            ind_sect_id
            body
            quote
            name
            link
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
  return data.allMysqlPresses.edges.map(e => {
    return {
      id: e.node.id,
      title: e.node.title,
      meta_title: e.node.meta_title,
      meta_desc: e.node.meta_desc,
      meta_keywords: e.node.meta_keywords,
      ind_cat_id: e.node.ind_cat_id,
      ind_sect_id: e.node.ind_sect_id,
      body: e.node.body,
      quote: e.node.quote,
      name: e.node.name,
      link: e.node.link,
      image: e.node.image,
      slug: e.node.slug,
      views: e.node.views,
      status: e.node.status,
      created_at: e.node.created_at,
    }
  })
}
