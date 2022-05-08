import Reviews from "./Reviews";
import Ratings from "./Ratings";
import Analysis from "./Analysis";
import Visitors from "./Visitors";

export default function DisplayArea({ theme, display }) {
  const displayDashboard = () => {
    return (
      <div className="display-area">
        <Reviews theme={theme} review="1,281" id="top-row" />
        <Ratings theme={theme} rating="4.6" id="top-row" />
        <Analysis theme={theme} analysis={[100, 918, 399]} id="top-row" />
        <Visitors theme={theme} visitor="888" id="visitors" />
      </div>
    );
  };

  const displayComponent = (component) => {
    if (component === "reviews") {
      return (
        <div className="display-area">
          <Reviews theme={theme} review="1,281" id="full-display" />
        </div>
      );
    }
    if (component === "ratings") {
      return (
        <div className="display-area">
          <Ratings theme={theme} rating="4.6" id="full-display" />
        </div>
      );
    }
    if (component === "analysis") {
      return (
        <div className="display-area">
          <Analysis theme={theme} analysis={[100, 918, 399]} id="full-display" />
        </div>
      );
    }
    if (component === "visitors") {
      return (
        <div className="display-area">
          <Visitors theme={theme} visitor="888" id="full-display" />
        </div>
      );
    }
  };

  return display === "dashboard"
    ? displayDashboard()
    : displayComponent(display);
}
