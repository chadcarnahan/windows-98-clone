import React from "react";
import startLogo from "../images/startLogo.png";
import StartToolbar from "./StartTooolbar";
import shutDown from "../images/shutDown.png";
import { useState } from "react";

const Toolbar = ({ toggleModal, setToggleModal }) => {
  const [showStart, setShowStart] = useState(false);
  const date = new Date();
  const dateString =
    date.getHours() <= 12
      ? String(date.getHours() + ":" + date.getMinutes() + "A.M")
      : String((date.getHours() % 12) + ":" + date.getMinutes() + " P.M");

  return (
    <div>
      <footer className="toolbar">
        <div className="start-toolbar">
          <button
            onClick={() => setShowStart(!showStart)}
            className="btn-wide btn-start"
          >
            <img height="20px" width="20px" src={startLogo} alt="start" /> Start
          </button>
          <div className="line-thin"></div>
          <div className="line-thin line-thin-shadow"></div>
          <div className="line-thick"></div>
          {toggleModal && (
            <button
              className={`${
                showStart ? "btn-tb btn-wide" : "btn-wide btn-tb btn-tb-pressed"
              }`}
            >
              <img
                height="20px"
                width="20px"
                src={shutDown}
                alt="shut down"
              ></img>
              <p>Shut Down</p>
            </button>
          )}
        </div>
        <div className="time">
          <p>{dateString}</p>
        </div>
      </footer>
      <StartToolbar
        showStart={showStart}
        setShowStart={setShowStart}
        setToggleModal={setToggleModal}
      />
    </div>
  );
};

export default Toolbar;
