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
        <div>
        <div className="input-container">
          Please enter your Name :
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className="input-box"
          />
          <button onClick={handleFirstClick} className="button">Submit</button>
        </div>
        {isShown && <Greet name={name} />}
        {isShown && <AskDob/>}
      </div>
  );
}

export default FirstGreet;
