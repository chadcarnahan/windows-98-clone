import React from "react";
import Toolbar from "./components/Toolbar";
import Homescreen from "./components/Homescreen";
import StartToolbar from "./components/StartTooolbar";
import { useState } from "react";

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div>
      <Homescreen toggleModal={toggleModal} setToggleModal={setToggleModal} />
      <Toolbar toggleModal={toggleModal} setToggleModal={setToggleModal} />
      <StartToolbar />
    </div>
  );
};

export default App;
