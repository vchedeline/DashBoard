import { Bubble } from 'react-chartjs-2';
import bubbleChartData from "./bubbleChartData"
import bubbleChartOptions from "./bubbleChartOptions"

export default function Analysis({ analysis, theme, id }) {
  const myAnalysis = analysis.map((ele, idx) => {
    return (
      <ul>
        <li id="analysis-num">{ele}</li>
      </ul>
    )
  })

  const bubbleChart = () => {
    return (
      <Bubble options={bubbleChartOptions} data={bubbleChartData} />
    )
  }
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <h1>Sentiment Analysis</h1>
      {id === "full-display" ? bubbleChart() : myAnalysis}
    </div>
  )
}