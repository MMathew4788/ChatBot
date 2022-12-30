import Greet from "./Greet";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  };
  
  const [isShown, setIsShown] = useState(false);
  function handleClick (event) {
    setIsShown(true); //toggle shown state
  };


  return (
    <div className="bg-white">
      <div className="m-px p-3">
        <div>
          Enter your Name :
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className="border border-slate-400 mx-2"
          />
          <button onClick={handleClick} className="px-2 py-0 border rounded-md ml-2 border-black">Submit</button>
        </div>
        {isShown && <Greet name={name} />}
      </div>
    </div>
  );
}

export default App;
