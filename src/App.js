import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: 0,
        age: 5,
        name: "Mya"
      },
      {
        id: 1,
        age: 21,
        name: "Jane",
        hobbies: "React"
      },
      {
        id: 2,
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
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
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
export default App;
