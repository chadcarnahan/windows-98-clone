import React from "react";
import icons from "../data";

const StartToolbar = ({ showStart, setToggleModal, setShowStart }) => {
  const displayModal = (text) => {
    if (text === "Shut Down") {
      setToggleModal(true);
      setShowStart(false);
    }
  };

  if (showStart) {
    return (
      <div
        className="startBar"
        id="startBar"
        onMouseLeave={() => setShowStart(false)}
      >
        <div className="logo">Windows98</div>
        <div className="startButtons">
          {icons.map((image, index) => (
            <div index={index} key={index}>
              <div
                className={`${
                  image.text === "Shut Down" ? "border-black" : "none"
                }`}
              ></div>
              <div
                className={`${
                  image.text === "Shut Down" ? "border-white" : "none"
                }`}
              >
                {" "}
              </div>
              <button
                className="btn-start-toolbar"
                id={image.text}
                onClick={() => displayModal(image.text)}
              >
                <img
                  height="20px"
                  width="20px"
                  src={require("../images/" + image.image + ".png").default}
                  key={index}
                  alt="info"
                ></img>
                <p>{image.text}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <></>;
};

export default StartToolbar;
