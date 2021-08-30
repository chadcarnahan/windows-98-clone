import React from "react";
import icons from "./data";

const Homescreen = () => {
  return (
    <div className="icon-grid">
      {icons.map((image, index) => (
        <button>
          <img
            src={require("./images/" + image.image + ".png").default}
            key={index}
            alt="info"
          ></img>
          <p>{image.text}</p>
        </button>
      ))}
    </div>
  );
};

export default Homescreen;
