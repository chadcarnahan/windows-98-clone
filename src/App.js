import React from "react";
import Window from "./components/Window";
import Toolbar from "./components/Toolbar";
import Homescreen from "./components/Homescreen";
import StartToolbar from "./components/StartTooolbar";

const App = () => {
  return (
    <div>
      <Window />
      <Homescreen />
      <Toolbar />
      <StartToolbar />
    </div>
  );
};

export default App;
