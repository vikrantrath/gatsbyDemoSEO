import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlIndustrycategorysector {
        edges {
          node {
            id
            ind_cat_id
            sector_name
            slug
          }
        }
      }
      allMysqlIndustrycategory {
        edges {
          node {
            id
            cat_name
            slug
          }
        }
      }
    }
  `)

  const sectorList = [
    {
      id: 1,
      name: "Consumer Oriented Sector",
      icon: "fa fa-users",
      description:
        "From the latest market research reports on the consumer-oriented sector, you can get a deeper insight of the consumer goods industry and know about its various market segmentations in details.",
    },
    {
      id: 3,
      name: "Technology Sector",
      icon: "fa fa-cogs",
      description:
        "Find the latest market reports and trends in the information technology & market. Check out in-depth market research analysis and global market insights of its various verticals.",
    },
    {
      id: 6,
      name: "Defense Aerospace And Automotives",
      icon: "fa fa-plane",
      description:
        "The aerospace & defense industry research sector is involved in development of various military equipment such as weapon system, control systems, components, and others. Check global market insight.",
    },
    {
      id: 4,
      name: "Life Science",
      icon: "fa fa-globe",
      description:
        "The life science industry & solutions is a very diversified industry which consists of pharmaceuticals, biotechnology, medical devices, and healthcare. Check out the latest market research analysis of the biotechnology, healthcare, and pharmaceutical industry.",
    },
    {
      id: 5,
      name: "Chemical Materials And Energy",
      icon: "fa fa-flask",
      description:
        "The chemicals, materials and energy industry market are growing with the increasing usage of its raw materials by various end-user industries. Find out more through the chemicals, materials and energy industry market research, in-depth market analysis, market forecast and more.",
    },
    {
      id: 7,
      name: "Banking, Financial Services And Insurance Sector",
      icon: "fa fa-money",
      description:
        "According to the industry research firm the demand of integrated solution is driving the market of BFSI along with the growing preferences towards common security platforms which is reducing the rate and difficulties of financial services. More business market research and analysis here.",
    },
  ]

  const industryCategoryList = data.allMysqlIndustrycategory.edges.map(
    industry => {
      return {
        id: industry.node.id,
        name: industry.node.cat_name,
        industrySectorList: data.allMysqlIndustrycategorysector.edges
          .filter(
            sector =>
              sector.node.ind_cat_id ==
              industry.node.id.replace("mysql__Industrycategory__", "")
          )
          .map(sector => {
            return {
              id: sector.node.id.replace("mysql__Industrycategorysector__", ""),
              sectorName: sector.node.sector_name,
              slug: sector.node.slug,
            }
          }),
        slug: industry.node.slug,
      }
    }
  )

  const industryCategorySectorList = sectorList.map(sectorCat => {
    const obj = sectorCat
    const industryCategory = industryCategoryList.find(
      e => e.id.replace("mysql__Industrycategory__", "") == sectorCat.id
    )
    obj.industrySectorList = industryCategory.industrySectorList
    obj.slug = industryCategory.slug
    return obj
  })

  return industryCategorySectorList
}
