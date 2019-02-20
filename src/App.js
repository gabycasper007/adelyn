import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = () => {
  const [initialState, setNewState] = useState({
    persons: [
      {
        age: 5,
        name: "Mya"
      },
      {
        age: 21,
        name: "Jane",
        hobbies: "React"
      },
      {
        age: 15,
        name: "Alice"
      }
    ],
    somedata: "THE DATA"
  });
  const switchNameHandler = () => {
    const persons = initialState.persons.map(pers => {
      if (pers.name === "Jane") pers.age++;
      return pers;
    });
    setNewState({ persons, ...initialState });
  };
  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <button className="btn btn-default" onClick={switchNameHandler}>
        Switch Name
      </button>
      {initialState.persons.map(pers => {
        if (pers.hobbies) {
          return (
            <Person key={pers.age} age={pers.age} name={pers.name}>
              {pers.hobbies}
            </Person>
          );
        } else {
          return <Person key={pers.age} age={pers.age} name={pers.name} />;
        }
      })}
    </div>
  );
};

export default app;
