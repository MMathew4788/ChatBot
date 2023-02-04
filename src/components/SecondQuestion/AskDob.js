import React from "react";
import DobDetails from "./DobDetails";
import FriendComp from "../ThirdQuestion/FriendComp";
import { useState } from "react";

function AskDob() {
  const [dob, setDob] = useState("");
  const [isShown, setIsShown] = useState(false);

  function handleChange(event) {
    setDob(event.target.value);
  }

  function handleSecondClick (event) {
    if (dob) {
      setIsShown(true);
    }
  };

  return (
    <div>
      <div className="input-container">
      Please enter your Date of Birth and I will tell more about your personality:
          <input
            type="Date"
            name="Date"
            value={dob}
            onChange={handleChange}
            className="input-box min-w-full md:min-w-fit"
          />
          <button onClick={handleSecondClick} className="button" disabled={!dob}>Submit</button>
      </div>
      {isShown && <DobDetails dob={dob}/>}
      {isShown && <FriendComp/>}
    </div>
  );
}
export default AskDob;
