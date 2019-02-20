import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name}, I'm {props.age} years old
        {props.children ? ` and I love ${props.children}.` : "."}
      </p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
  );
};
export default person;
