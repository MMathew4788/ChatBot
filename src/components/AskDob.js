import React from "react";
import DobDetails from "./DobDetails";
import { useState } from "react";

function AskDob() {
  const [isShown, setIsShown] = useState(false);
  function handleSecondClick (event) {
    setIsShown(true); //toggle shown state
  };

  return (
    <div>
      <div className="input-container">
      Please enter your Date of Birth <br></br>
      and I will tell more about your personality:
          <input
            type="Date"
            name="Date"
            className="input-box"
          />
          <button onClick={handleSecondClick} className="button">Submit</button>
      </div>
      {isShown && <DobDetails/>}
    </div>
  );
}
export default AskDob;
