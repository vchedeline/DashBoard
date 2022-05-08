export default function Analysis({analysis, theme, id}) {
  const myAnalysis = analysis.map((ele, idx) => {
    return (
      <>
        <p id="analysis-num">{ele}</p>
      </>
    )
  })
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <p>Sentiment Analysis</p>
      <div id="analysis">
        {myAnalysis}
      </div>
    </div>
  )
}