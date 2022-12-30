import React from "react";
function Greet(props) {

const name=props.name;

  return <div className="output-container">
     Hi {name} , <br></br> Hope you are doing good!!</div>;
}
export default Greet;