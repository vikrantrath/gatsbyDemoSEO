import React, { useState } from "react"

import PressItem from "./pressItem"

import extractPressesData from "../../services/extractPressesData"

export default function({ industryCatId, pressYear }) {
  const pressData = extractPressesData()
  function getPressData() {
    return industryCatId
      ? pressData.filter(
          e =>
            e.ind_sect_id == industryCatId &&
            new Date(e.created_at).getFullYear() == pressYear
        )
      : pressData.filter(e => new Date(e.created_at).getFullYear() == pressYear)
  }
  return getPressData().length > 0
    ? getPressData().map(e => {
        return <PressItem item={e} />
      })
    : "Coming Soon"
}
