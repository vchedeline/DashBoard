import React from "react"

export default function Reviews({review, theme}) {
  return (
    <div className={theme ? "components-light top-row" : "components-dark top-row" }>
      <p>Reviews</p>
      <p id="review-num">{review}</p>
    </div>
  )
}