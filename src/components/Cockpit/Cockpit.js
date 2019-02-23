import React from "react";

const cockpit = props => {
  return (
    <div>
      <h1>Hi, I'm a React app</h1>
      <button className="btn btn-default" onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
