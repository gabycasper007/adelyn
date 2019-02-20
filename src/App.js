import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
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
    ]
  };
  handleClick = () => {
    console.log("Clicked!");
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button onClick={this.handleClick}>Switch Name</button>
        {this.state.persons.map(pers => {
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
  }
}

export default App;
