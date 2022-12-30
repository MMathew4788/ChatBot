import React from "react";
function FriendCompResult(props) {

const name=props.name;

  return <div className="output-container">
    Your Friend {name} is {Math.floor(Math.random() * (99 - 70 + 1)) + 70} % compatible with you</div>;
}
export default FriendCompResult;