import React from "react";
import { useState } from "react";
import FriendCompResult from "./FriendCompResult";

function FriendComp() {
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
        <div className="input-container">
          Please enter your Friend's Name :
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className="input-box"
          />
          <button onClick={handleFirstClick} className="button">Submit</button>
        </div>
        {isShown && <FriendCompResult name={name} />}
        {isShown && <div className="output-container"> 
        Hope you enjoyed the chat with me<br></br>
        Bye!!!!
        </div>}
        
      </div>
  );
}

export default FriendComp;
