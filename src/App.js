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
    ],
    somedata: "THE DATA"
  };
  switchNameHandler = pName => {
    const persons = this.state.persons.map(pers => {
      if (pers.name === pName) pers.age++;
      return pers;
    });
    this.setState({ persons, ...this.state });
  };
  nameChangedHandler = event => {
    const val = event.target.value;
    console.log(val);

    this.setState({
      persons: [
        {
          age: 5,
          name: "Mya"
        },
        {
          age: 21,
          name: val,
          hobbies: "React"
        },
        {
          age: 15,
          name: "Alice"
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button className="btn btn-default" onClick={this.switchNameHandler}>
          Switch Name
        </button>
        {this.state.persons.map(pers => {
          if (pers.hobbies) {
            return (
              <Person
                key={pers.age}
                age={pers.age}
                name={pers.name}
                click={() => this.switchNameHandler(pers.name)}
                changeName={this.nameChangedHandler}
              >
                {pers.hobbies}
              </Person>
            );
          } else {
            return (
              <Person
                key={pers.age}
                age={pers.age}
                name={pers.name}
                click={this.switchNameHandler.bind(this, pers.name)}
                changeName={this.nameChangedHandler}
              />
            );
          }
        })}
      </div>
    );
  }
}
export default App;
