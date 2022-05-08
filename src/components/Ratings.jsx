export default function Ratings({rating, theme, id}) {
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id} >
      <h1>Average Ratings</h1>
      <p id="rating-num">{rating}</p>
    </div>
  )
}