import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlAbouts {
        edges {
          node {
            id
            description
          }
        }
      }
    }
  `)
  return data.allMysqlAbouts.edges.map(e => {
    return {
      id: e.node.id,
      description: e.node.description,
    }
  })
}
