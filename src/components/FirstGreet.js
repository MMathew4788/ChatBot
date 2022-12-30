import Greet from "./Greet";
import AskDob from "./AskDob";
import React from "react";
import { useState } from "react";

function FirstGreet() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  };
  
  const [isShown, setIsShown] = useState(false);
  function handleFirstClick (event) {
    setIsShown(true); //toggle shown state
  };


  return (
        <div className="m-px p-3">
        <div>
          Please enter your Name :
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className="border border-slate-400 mx-2"
          />
          <button onClick={handleFirstClick} className="px-2 py-0 border rounded-md ml-2 border-black">Submit</button>
        </div>
        {isShown && <Greet name={name} />}
        {isShown && <AskDob/>}
      </div>
  );
}

export default FirstGreet;
