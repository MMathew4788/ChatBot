import Greet from "./Greet";
import AskDob from "../SecondQuestion/AskDob";
import React from "react";
import { useState } from "react";
import BotIntro from "./BotIntro";

function FirstGreet() {
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  };
  
  const [isShown, setIsShown] = useState(false);
  function handleFirstClick (event) {
    if (name !== "") {
      setIsShown(true);
    } //toggle shown state
  };


  return (
        <div>
        <BotIntro/>  
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
