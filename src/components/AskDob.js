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
      <div>
      Please enter your Date of Birth <br></br>
      and I will tell more about your personality:
          <input
            type="Date"
            name="Date"
            className="border border-slate-400 mx-2"
          />
          <button onClick={handleSecondClick} className="px-2 py-0 border rounded-md ml-2 border-black">Submit</button>
      </div>
      {isShown && <DobDetails/>}
    </div>
  );
}
export default AskDob;
