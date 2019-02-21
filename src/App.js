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
  incrementAgeHandler = pName => {
    const persons = this.state.persons.map(pers => {
      if (pers.name === pName) pers.age++;
      return pers;
    });
    this.setState({ persons, ...this.state });
  };
  nameChangedHandler = (index, event) => {
    const persons = this.state.persons;
    persons[index].name = event.target.value;
    this.setState({ persons });
  };
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  deleteHandler = index => {
    const persons = this.state.persons;
    delete persons[index];
    this.setState({ persons });
  };
  render() {
    const style = {
      backgroundColor: "blue",
      padding: "10px",
      border: "1px solid green",
      color: "white"
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((pers, index) => {
        return (
          <Person
            key={pers.age}
            age={pers.age}
            name={pers.name}
            click={() => this.incrementAgeHandler(pers.name)}
            changeName={this.nameChangedHandler.bind(this, index)}
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
export default App;
