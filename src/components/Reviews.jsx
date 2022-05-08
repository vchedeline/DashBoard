export default function Reviews({review, theme, id}) {
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <h1>Reviews</h1>
      <p id="review-num">{review}</p>
    </div>
  )
}