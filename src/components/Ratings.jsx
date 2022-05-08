import { Doughnut } from 'react-chartjs-2';
import doughnutChart from "./doughnutChart"

export default function Ratings({ rating, theme, id }) {
  const myDoughnut = () => {
    return (
      <div>
        <Doughnut data={doughnutChart} />
      </div>
    )
  }
  
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id} >
      <h1>Average Ratings</h1>
      {id === "full-display" ? myDoughnut() : (<p id="rating-num">{rating}</p>)}
    </div>
  )
}