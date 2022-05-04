import {useState} from 'react';
import './App.css';
import SideBar from "./components/SideBar"
import Reviews from "./components/Reviews"
import Ratings from "./components/Ratings"
import Analysis from "./components/Analysis"
import Visitors from "./components/Visitors"

export default function App() {
  const [theme, setTheme] = useState(true);
  const styleMode = () => {
    setTheme(!theme)
  }; 
  
  return (
    <div className={theme ? "light-board" : "dark-board" } id="board"> 
      <header>
        <div>
          My Dashboard
        </div>
        <button onClick={styleMode}>{theme ? "Dark Mode" : "Light Mode"}</button>
      </header>  
      <SideBar />
      <Reviews theme={theme} review="1,281"/>
      <Ratings theme={theme} rating="4.6"/>
      <Analysis theme={theme} analysis={[100,918,399]}/>
      <Visitors theme={theme} visitor="888"/>
    </div>
  );
}
