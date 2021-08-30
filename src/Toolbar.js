import React from "react";
import startLogo from "./images/startLogo.png";

const Toolbar = () => {
  const date = new Date();
  const dateString =
    date.getHours() <= 12
      ? String(date.getHours() + ":" + date.getMinutes() + "A.M")
      : String((date.getHours() % 12) + ":" + date.getMinutes() + " P.M");

  return (
    <div>
      <footer className="toolbar">
        <div className="start-toolbar">
          <button className="btn-wide btn-start">
            <img height="20px" width="20px" src={startLogo} alt="start" /> Start
          </button>
          <div className="line-thin"></div>
          <div className="line-thin line-thin-shadow"></div>
          <div className="line-thick"></div>
        </div>
        <div className="time">
          <p>{dateString}</p>
        </div>
      </footer>
    </div>
  );
};

export default Toolbar;
