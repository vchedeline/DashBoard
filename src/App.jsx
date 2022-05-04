import './App.css';
import SideBar from "./components/SideBar"
import Reviews from "./components/Reviews"
import Ratings from "./components/Ratings"
import Analysis from "./components/Analysis"
import Visitors from "./components/Visitors"

export default function App() {
  return (
    <div id="board">    
      <SideBar />
      <Reviews />
      <Ratings />
      <Analysis />
      <Visitors />
    </div>
  );
}
