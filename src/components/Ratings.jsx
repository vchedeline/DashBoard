export default function Ratings({rating, theme, id}) {
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id} >
      <p>Average Ratings</p>
      <p id="rating-num">{rating}</p>
    </div>
  )
}