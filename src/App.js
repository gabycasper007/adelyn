import Radium from "radium";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: "s1",
        age: 5,
        name: "Mya"
      },
      {
        id: "d6",
        age: 21,
        name: "Jane",
        hobbies: "React"
      },
      {
        id: "r8",
        age: 15,
        name: "Alice"
      }
    ],
    somedata: "THE DATA",
    showPersons: false
  };
  incrementAgeHandler = pName => {
    const persons = this.state.persons.map(pers => {
      if (pers.name === pName) pers.age++;
      return pers;
    });
    this.setState({ persons, ...this.state });
  };
  nameChangedHandler = (index, event) => {
    const persons = this.state.persons.map(pers => {
      if (pers.id === index) pers.name = event.target.value;
      return pers;
    });
    this.setState({ persons });
  };
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  deleteHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  nameChangedHandler = (index, event) => {
    const persons = this.state.persons.map(pers => {
      const newPers = { ...pers };
      if (pers.id === index) newPers.name = event.target.value;
      return newPers;
    });
    this.setState({ persons });
  };
  render() {
    const style = {
      backgroundColor: "green",
      padding: "10px",
      border: "1px solid green",
      color: "white",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      },
      "@media (max-width:450px)": {
        backgroundColor: "yellow",
        color: "black"
      }
    };
    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "darkred",
        color: "white"
      };
      persons = this.state.persons.map((pers, index) => {
        return (
          <Person
            key={pers.age}
            age={pers.age}
            name={pers.name}
            click={() => this.incrementAgeHandler(pers.name)}
            changeName={this.nameChangedHandler.bind(this, pers.id)}
            delete={this.deleteHandler.bind(this, index)}
          >
            {pers.hobbies}
          </Person>
        );
      });
    }

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
        {persons}
      </div>
    );
  }
}
export default Radium(App);
