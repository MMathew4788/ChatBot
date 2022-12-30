import React from "react";
function Greet(props) {

const name=props.name;

  return <div className=" text-3xl p-6 font-bold">
     Hi {name} , <br></br> Hope you are doing good!!</div>;
}
export default Greet;