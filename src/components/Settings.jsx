export default function Settings({styleMode, theme, id}) {
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <h1>Dashboard Settings</h1>
      <div>
        Change Theme:
        <button onClick={styleMode}>{theme ? "Dark Mode" : "Light Mode"}</button>
      </div>
    </div>
  )
}