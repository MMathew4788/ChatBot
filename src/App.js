import FirstGreet from "./components/FirstGreet";
import BotIntro from "./components/BotIntro";
import React from "react";

function App() {
  return (
    <div className="global-container">
        <BotIntro/>
        <FirstGreet />
    </div>
  );
}

export default App;
