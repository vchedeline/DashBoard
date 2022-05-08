export default function SideBar({getDisplay, theme}) {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    getDisplay(evt.target[0].name)
  }

  return (
    <div id="side-bar">
      <form onSubmit={handleSubmit}>
        <input type="submit" name="dashboard" value="Dashboard" className={theme ? "text-dark" : "text-light"}/>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" name="ratings" value="Average Ratings" className={theme ? "text-dark" : "text-light"}/>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" name="reviews" value="Reviews" className={theme ? "text-dark" : "text-light"}/>
      </form>
      
      <form onSubmit={handleSubmit}>
        <input type="submit" name="visitors" value="Website Visitors" className={theme ? "text-dark" : "text-light"}/>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" name="analysis" value="Online Analysis" className={theme ? "text-dark" : "text-light"}/>
      </form>
      <form onSubmit={handleSubmit} >
        <input type="submit" name="settings" value="Settings" className={theme ? "text-dark" : "text-light"}/>
      </form>
    </div>
  )
}