import React from "react";
import icons from "../data";
import Draggable from "react-draggable"; // The default
import ShutdownModal from "./ShutdownModal";
const Homescreen = ({ toggleModal, setToggleModal }) => {
  const displayModal = (text) => {
    if (text === "Shut Down") {
      setToggleModal(true);
    }
    console.log(toggleModal);
  };
  return (
    <div>
      <div className="icon-container">
        <div className="icon-grid">
          {icons.map((image, index) => (
            <Draggable>
              <button
                onDoubleClick={() => {
                  displayModal(image.text);
                }}
              >
                <img
                  src={require("../images/" + image.image + ".png").default}
                  key={index}
                  alt="info"
                ></img>
                <p>{image.text}</p>
              </button>
            </Draggable>
          ))}
        </div>
      </div>
      <ShutdownModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
    </div>
  );
};

export default Homescreen;
