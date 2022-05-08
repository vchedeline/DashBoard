export default function Reviews({review, theme, id}) {
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <p>Reviews</p>
      <p id="review-num">{review}</p>
    </div>
  )
}