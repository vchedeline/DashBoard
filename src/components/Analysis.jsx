export default function Analysis({analysis, theme, id}) {
  const myAnalysis = analysis.map((ele, idx) => {
    return (
      <>
        <li id="analysis-num">{ele}</li>
      </>
    )
  })
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <h1>Sentiment Analysis</h1>
      <ul>
      {myAnalysis}
      </ul>
    </div>
  )
}