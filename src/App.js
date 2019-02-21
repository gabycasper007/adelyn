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
    somedata: "THE DATA",
    showPersons: false
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
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  render() {
    const style = {
      backgroundColor: "blue",
      padding: "10px",
      border: "1px solid green",
      color: "white"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button
          style={style}
          className="btn btn-default"
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {this.state.showPersons
          ? this.state.persons.map(pers => {
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
            })
          : null}
      </div>
    );
  }
}
export default App;
