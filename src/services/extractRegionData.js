import { useStaticQuery, graphql } from "gatsby"

export default function() {
  const data = useStaticQuery(graphql`
    {
      allMysqlRegion {
        edges {
          node {
            id
            cat_name
            slug
            status
            created_at
          }
        }
      }
      allMysqlRegionSector {
        edges {
          node {
            id
            reg_cat_id
            sector_name
            slug
            status
            created_at
          }
        }
      }
    }
  `)

  const sectors = data.allMysqlRegionSector.edges.map(sector => {
    return {
      id: sector.node.id.replace("mysql__RegionSector__", ""),
      reg_cat_id: sector.node.reg_cat_id,
      sector_name: sector.node.sector_name,
      slug: sector.node.slug,
      status: sector.node.status,
      created_at: sector.node.created_at,
    }
  })

  const regionSectorList = data.allMysqlRegion.edges.map(region => {
    return {
      id: region.node.id.replace("mysql__Region__", ""),
      cat_name: region.node.cat_name,
      slug: region.node.slug,
      status: region.node.status,
      created_at: region.node.created_at,
      sectorList: sectors.filter(
        e => e.reg_cat_id == region.node.id.replace("mysql__Region__", "")
      ),
    }
  })

  return regionSectorList
}
