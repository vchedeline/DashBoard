export default function CustReviews({ review, theme, id }) {
  const reviews = [
    {
    quote: "I saw this on TV and wanted to give it a try.",
    user: "Glenda G."
  },
  {
    quote: "This website works quite well. It romantically improves my golf by a lot.",
    user: "Tim M."
    },
    {
      quote: "I tried to nail it but got strawberry all over it.",
      user: "Mark O."
    },
    {
      quote: "It only works when I'm South Korea.", 
      user: "Pierre C."
    }
  ]
  
  const allReviews = reviews.map((ele, idx) => {
     return (
      <p>
        "{ele.quote}"<span> - {ele.user}</span>
      </p>
    );
  });

  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <h1>Reviews</h1>
      {id === "full-display" ? allReviews : <p id="review-num">{review}</p>}
    </div>
  );
}
