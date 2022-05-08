export default function Settings({ styleMode, theme, id }) {
  return (
    <div className={theme ? "components-light" : "components-dark"} id={id}>
      <h1>Dashboard Settings</h1>
      <div id="settings">
        <h2>Change Theme</h2>
        <button onClick={styleMode} className={theme ? "btn-dark" : "btn-light"}>
          {theme ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}
