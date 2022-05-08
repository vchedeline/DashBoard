import Graph from "./Graph"

export default function Visitors({visitor, theme, id}) {
  return (
    <div className={theme ? "components-light" : "components-dark" } id={id}>
      <div id="title">
        <p>Website Visitors</p>
        <p id="visitor-num">{ visitor}</p>
      </div>
      <Graph />
    </div>
  )
}