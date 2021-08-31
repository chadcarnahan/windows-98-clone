import React from "react";
import icons from "./data";
import Draggable from "react-draggable"; // The default

const Homescreen = () => {
  return (
    <div className="icon-grid">
      {icons.map((image, index) => (
        <Draggable>
          <button>
            <img
              src={require("./images/" + image.image + ".png").default}
              key={index}
              alt="info"
            ></img>
            <p>{image.text}</p>
          </button>
        </Draggable>
      ))}
    </div>
  );
};

export default Homescreen;
