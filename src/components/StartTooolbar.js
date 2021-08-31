import React from "react";
import icons from "../data";

const StartToolbar = ({ showStart }) => {
  if (showStart) {
    return (
      <div className="startBar">
        <div className="logo">Windows98</div>
        <div className="startButtons">
          {icons.map((image, index) => (
            <div index={index}>
              <div
                className={`${
                  image.text === "Network" ? "border-black" : "none"
                }`}
              ></div>
              <div
                className={`${
                  image.text === "Network" ? "border-white" : "none"
                }`}
              >
                {" "}
              </div>
              <button className="btn-start-toolbar" id={image.text}>
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

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default StartToolbar;
