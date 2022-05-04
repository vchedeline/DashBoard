import React from "react"

export default function Ratings({rating, theme}) {
  return (
    <div className={theme ? "components-light top-row" : "components-dark top-row" } >
      <p>Average Ratings</p>
      <p id="rating-num">{rating}</p>
    </div>
  )
}