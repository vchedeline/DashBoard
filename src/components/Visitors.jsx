import React from "react"
import Graph from "./Graph"

export default function Visitors({visitor, theme}) {
  return (
    <div className={theme ? "components-light" : "components-dark" } id="visitors">
      <div id="title">
        <p>Website Visitors</p>
        <p id="visitor-num">{ visitor}</p>
      </div>
      <Graph />
    </div>
  )
}