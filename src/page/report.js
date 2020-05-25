import React from "react"

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

import {
  extractIndustryData,
  extractRegionData,
  extractPassport1Data,
  extractPassport2Data,
  extractSyndicateReport,
  extractUpcomingsData,
} from "../services"
import ReportTable from "../components/Shared/ReportTable"
import InnerPageBanner from "../components/Shared/InnerPageBanner"
import SEO from "../components/Base/SEO"
import HyperlinkList from "../components/Shared/HyperlinkList"

export default function(props) {
  const uri = props["*"]
  const slug = [...uri.split("/")].pop()
  const allData = [
    ...extractPassport1Data(),
    ...extractPassport2Data(),
    ...extractSyndicateReport(),
    ...extractUpcomingsData(),
  ]
  const regionData = extractRegionData()
  const industryData = extractIndustryData()
  let slugObj = undefined
  let id = undefined
  let varName = undefined
  let leftSideCat1 = undefined
  let leftSideCat2 = undefined
  let data = undefined

  if (uri.match("reg/sect")) {
    slugObj = regionData
      .map(e => e.sectorList)
      .flat()
      .find(e => e.slug === slug)
    slugObj.name = slugObj.sector_name
    id = slugObj.id
    varName = "reg_sect_id"
    leftSideCat1 = {
      name: "Regions",
      linkList: regionData
        .find(e => e.id == slugObj.reg_cat_id)
        .sectorList.map(ele => {
          return {
            name: ele.sector_name,
            href: `/report/reg/sect/${ele.slug}`,
          }
        }),
    }
    data = allData.filter(e => e[varName] == id)
    leftSideCat2 = {
      name: "Industries",
      linkList: [...new Set(data.map(e => e.ind_sect_id))].sort().map(e => {
        const obj = industryData
          .map(e => e.industrySectorList)
          .flat()
          .find(ele => ele.id == e)
        return {
          name: obj.sectorName,
          //industry sector and region sector
          href: `/report/regionsectorreports/${obj.id}/${slugObj.id}`,
        }
      }),
    }
  } else if (uri.match("reg/")) {
    slugObj = regionData.find(e => e.slug == slug)
    slugObj.name = slugObj.cat_name
    id = slugObj.id
    varName = "reg_cat_id"
    leftSideCat1 = {
      name: "Regions",
      linkList: slugObj.sectorList.map(ele => {
        return {
          name: ele.sector_name,
          href: `/report/reg/sect/${ele.slug}`,
        }
      }),
    }
    data = allData.filter(e => e[varName] == id)
    leftSideCat2 = {
      name: "Industries",
      linkList: [...new Set(data.map(e => e.ind_sect_id))].sort().map(e => {
        const obj = industryData
          .map(e => e.industrySectorList)
          .flat()
          .find(ele => ele.id == e)
        return {
          name: obj.sectorName,
          //industry sector id and region id
          href: `/report/regionreports/${obj.id}/${slugObj.id}`,
        }
      }),
    }
  } else if (uri.match("sect/")) {
    slugObj = industryData
      .map(e => e.industrySectorList)
      .flat()
      .find(e => e.slug === slug)
    slugObj.name = slugObj.sectorName
    id = slugObj.id
    varName = "ind_sect_id"
    leftSideCat1 = {
      name: "Categories",
      linkList: industryData
        .find(e => e.id == slugObj.ind_cat_id)
        .industrySectorList.map(ele => {
          return {
            name: ele.sectorName,
            href: `/report/sect/${ele.slug}`,
          }
        }),
    }
    data = allData.filter(e => e[varName] == id)
    leftSideCat2 = {
      name: "Regions",
      linkList: [...new Set(data.map(e => e.reg_cat_id))].sort().map(e => {
        const obj = regionData.find(ele => ele.id == e)
        return {
          name: obj.cat_name,
          //region id and industry sector id
          href: `/report/industrysectorreports/${obj.id}/${slugObj.id}`,
        }
      }),
    }
  } else if (uri.match("regionsectorreports/")) {
    //industry sector and region sector
    const [industrySectorId, regionSectorId] = [...uri.split("/")].splice(
      [...uri.split("/")].length - 2
    )
    data = allData.filter(
      e => e.ind_sect_id == industrySectorId && e.reg_sect_id == regionSectorId
    )
    const regionSectorObj = regionData
      .map(e => e.sectorList)
      .flat()
      .find(e => e.id == regionSectorId)
    leftSideCat1 = {
      name: "Regions",
      linkList: regionData
        .find(e => e.id == regionSectorObj.reg_cat_id)
        .sectorList.map(e => {
          return {
            name: e.sector_name,
            href: `/report/reg/sect/${e.slug}`,
          }
        }),
    }
    // leftSideCat2 = {
    //   name: "Categories",
    //   linkList: industryData
    //     .find(e => e.id == industrySectorObj.ind_cat_id)
    //     .industrySectorList.map(ele => {
    //       return {
    //         name: ele.sectorName,
    //         href: `/report/sect/${ele.slug}`,
    //       }
    //     }),
    // }
    const industrySectorList = industryData
      .map(e => e.industrySectorList)
      .flat()
    leftSideCat2 = {
      name: "Industries",
      linkList: [...new Set(data.map(e => e.ind_sect_id))].map(e => {
        const obj = industrySectorList.find(ele => ele.id == e)
        return {
          name: obj.sectorName,
          href: `/report/sect/${obj.slug}`,
        }
      }),
    }
    slugObj = { name: regionSectorObj.sector_name }
  } else if (uri.match("regionreports/")) {
    //industry sector id and region id
    const [industrySectorId, regionId] = [...uri.split("/")].splice(
      [...uri.split("/")].length - 2
    )
    data = allData.filter(
      e => e.ind_sect_id == industrySectorId && e.reg_cat_id == regionId
    )
    leftSideCat1 = {
      name: "Regions",
      linkList: regionData
        .find(e => e.id == regionId)
        .sectorList.map(e => {
          return {
            name: e.sector_name,
            href: `/report/reg/sect/${e.slug}`,
          }
        }),
    }

    leftSideCat2 = {
      name: "Industries",
      linkList: industryData
        .map(e => e.industrySectorList)
        .flat()
        .filter(e => e.id == industrySectorId)
        .map(e => {
          return {
            name: e.sectorName,
            href: `/report/regionreports/${industrySectorId}/${regionId}`,
          }
        }),
    }
    slugObj = {
      name: regionData.find(e => e.id == regionId).cat_name,
    }
  } else if (uri.match("industryreports/")) {
    //region id & industry id
    const [regionId, industryId] = [...uri.split("/")].splice(
      [...uri.split("/")].length - 2
    )
    data = allData.filter(
      e => e.reg_cat_id == regionId && e.ind_cat_id == industryId
    )
    leftSideCat1 = {
      name: "Categories",
      linkList: industryData
        .find(e => e.id == industryId)
        .industrySectorList.map(ele => {
          return {
            name: ele.sectorName,
            href: `/report/sect/${ele.slug}`,
          }
        }),
    }
    leftSideCat2 = {
      name: "Regions",
      linkList: regionData
        .filter(e => e.id == regionId)
        .map(e => {
          return {
            name: e.cat_name,
            href: `/report/industryreports/${regionId}/${industryId}`,
          }
        }),
    }
    slugObj = {
      name: industryData.find(e => e.id == industryId).name,
    }
  } else if (uri.match("industrysectorreports/")) {
    //region id and industry sector id reg_cat_id && ind_sect_id
    const [regionId, industrySectorId] = [...uri.split("/")].splice(
      [...uri.split("/")].length - 2
    )
    data = allData.filter(
      e => e.reg_cat_id == regionId && e.ind_sect_id == industrySectorId
    )
    const industrySectorObj = industryData
      .map(e => e.industrySectorList)
      .flat()
      .find(e => e.id == industrySectorId)
    leftSideCat1 = {
      name: "Categories",
      linkList: industryData
        .find(e => e.id == industrySectorObj.ind_cat_id)
        .industrySectorList.map(ele => {
          return {
            name: ele.sectorName,
            href: `/report/sect/${ele.slug}`,
          }
        }),
    }
    leftSideCat2 = {
      name: "Regions",
      linkList: regionData
        .filter(e => e.id == regionId)
        .map(e => {
          return {
            name: e.cat_name,
            href: `/report/industrysectorreports/${regionId}/${industrySectorId}`,
          }
        }),
    }
    slugObj = {
      name: industrySectorObj.sectorName,
    }
  } else {
    slugObj = industryData.find(e => e.slug == slug)
    slugObj.name = slugObj.name
    id = slugObj.id
    varName = "ind_cat_id"
    leftSideCat1 = {
      name: "Categories",
      linkList: slugObj.industrySectorList.map(ele => {
        return {
          name: ele.sectorName,
          href: `/report/sect/${ele.slug}`,
        }
      }),
    }
    data = allData.filter(e => e[varName] == id)
    leftSideCat2 = {
      name: "Regions",
      linkList: [...new Set(data.map(e => e.reg_cat_id))].sort().map(e => {
        const obj = regionData.find(ele => ele.id == e)
        return {
          name: obj.cat_name,
          //region id & industry id
          href: `/report/industryreports/${obj.id}/${slugObj.id}`,
        }
      }),
    }
  }

  const dataWithDate = data
    .filter(e => e.month)
    .sort((a, b) => new Date(b.month) - new Date(a.month))
  const dataWithoutDate = data.filter(e => !e.month)
  const tableData = [...dataWithDate, ...dataWithoutDate]

  return (
    <>
      <SEO title={"sheer analytics"} />
      {slugObj && <InnerPageBanner headingText={slugObj.name} linkText={""} />}
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {leftSideCat1 && (
              <HyperlinkList
                headingText={leftSideCat1.name}
                linkList={leftSideCat1.linkList}
              />
            )}
            {leftSideCat2 && (
              <HyperlinkList
                headingText={leftSideCat2.name}
                linkList={leftSideCat2.linkList}
              />
            )}
          </div>
          <div className="col-md-10">
            <ReportTable tableData={tableData} />
          </div>
        </div>
      </div>
    </>
  )
}
