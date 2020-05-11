import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlNews {
        edges {
          node {
            id
            news_cat
            title
            alt_text
            meta_title
            meta_desc
            meta_keywords
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
  return data.allMysqlNews.edges.map(e => {
    return {
      id: e.node.id,
      news_cat: e.node.news_cat,
      title: e.node.title,
      alt_text: e.node.alt_text,
      meta_title: e.node.meta_title,
      meta_desc: e.node.meta_desc,
      meta_keywords: e.node.meta_keywords,
      body: e.node.body,
      image: e.node.image,
      slug: e.node.slug,
      month: e.node.month,
      views: e.node.views,
      status: e.node.status,
      created_at: e.node.created_at,
    }
  })
}
