export default function SideBar({getDisplay, theme}) {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    getDisplay(evt.target[0].name)
  }

  return (
    <div id="side-bar">
      <form onSubmit={handleSubmit}>
        <input type="submit" name="dashboard" value="Dashboard"/>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" name="ratings" value="Average Ratings"/>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" name="reviews" value="Reviews"/>
      </form>
      
      <form onSubmit={handleSubmit}>
        <input type="submit" name="visitors" value="Customers"/>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" name="analysis" value="Online Analysis"/>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" name="settings" value="Settings"/>
      </form>
    </div>
  )
}