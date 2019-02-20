import React from "react";

const person = props => {
  return (
    <p>
      I am {props.name}, I'm {props.age} years old
      {props.children ? ` and I love ${props.children}.` : "."}
    </p>
  );
};
export default person;
