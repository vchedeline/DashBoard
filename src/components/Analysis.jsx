import React from "react"

export default function Analysis({analysis, theme}) {
  const myAnalysis = analysis.map((ele) => {
    return (
      <>
        <p id="analysis-num">{ele}</p>
      </>
    )
  })
  return (
    <div className={theme ? "components-light top-row" : "components-dark top-row" }>
      <p>Sentiment Analysis</p>
      <div id="analysis">
        {myAnalysis}
      </div>
    </div>
  )
}