import React from "react";
import Window from "./Window";
import Toolbar from "./Toolbar";
import Homescreen from "./Homescreen";
import StartToolbar from "./StartTooolbar";
import { useState } from "react";
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
