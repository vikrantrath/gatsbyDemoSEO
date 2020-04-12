import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlContacts {
        edges {
          node {
            id
            address1
            address2
            email
            phone
            twitter
            facebook
            googlep
            linkedin
          }
        }
      }
    }
  `)

  console.log(data)

  return data.allMysqlContacts.edges.map(e => {
    return {
      id: e.node.id,
      address1: e.node.address1,
      address2: e.node.address2,
      email: e.node.email,
      phone: e.node.phone,
      twitter: e.node.twitter,
      facebook: e.node.facebook,
      googlep: e.node.googlep,
      linkedin: e.node.linkedin,
    }
  })
}
