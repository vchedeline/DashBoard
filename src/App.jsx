import {useState} from 'react';
import './App.css';
import DisplayArea from './components/DisplayArea';
import SideBar from "./components/SideBar"

export default function App() {
  const [theme, setTheme] = useState(true);
  const [display, setDisplay] = useState("dashboard");

  const styleMode = () => {
    setTheme(!theme)
  }; 

  const getDisplay = (goTo) => {
    setDisplay(goTo);
  }

  return (
    <div className={theme ? "light-board" : "dark-board" } id="board"> 
      <header>
        <div>
          Chedou's Dashboard
        </div>
        <button onClick={styleMode}>{theme ? "Dark Mode" : "Light Mode"}</button>
      </header>  
      <SideBar getDisplay={getDisplay}/>
      <DisplayArea theme={theme} display={display}/>
    </div>
  );
}
