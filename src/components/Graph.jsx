import { Line } from 'react-chartjs-2';
import graphData from "./graphData"
import graphOptions from "./graphOptions"

export default function Graph() {
  return (
    <div id="graph">
      <Line options={graphOptions} data={graphData} />
    </div>
  )
}