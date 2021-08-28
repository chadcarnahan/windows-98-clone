import React from "react";
import computerIcon from "./images/computerIcon.png";

const window = () => {
  return (
    <div className="window">
      <div className="window-header">
        <p className="label">Shut Down Windows</p>
        <div className="btn">x</div>
      </div>
      <div className="window-content">
        <img src={computerIcon} alt="" height="50px" width="50px" />
        <form className="radio-buttons">
          <p>What do you want the computer to do?</p>
          <div className="radio">
            <div>
              <input
                type="radio"
                id="contactChoice1"
                name="contact"
                value="email"
              />
              <label for="contactChoice1">Stand By</label>
            </div>
            <div>
              <input
                type="radio"
                id="contactChoice2"
                name="contact"
                value="phone"
              />
              <label for="contactChoice2">Shut Down</label>
            </div>
            <div>
              <input
                type="radio"
                id="contactChoice3"
                name="contact"
                value="mail"
              />
              <label for="contactChoice3">Restart</label>
            </div>
          </div>
          <div className="btn-row">
            <div className="btn-wide">OK</div>
            <div className="btn-wide">Cancel</div>
            <div className="btn-wide">Help</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default window;
