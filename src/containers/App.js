import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import "./App.css";

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

  nameChangedHandler = (event, index) => {
    const persons = this.state.persons.map(pers => {
      const newPers = { ...pers };
      if (pers.id === index) newPers.name = event.target.value;
      return newPers;
    });
    this.setState({ persons });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.incrementAgeHandler}
          changeName={this.nameChangedHandler}
          delete={this.deleteHandler}
        />
      );
    }
    return (
      <div className="App">
        <Cockpit clicked={this.togglePersonsHandler} title={this.props.title} />
        {persons}
      </div>
    );
  }
}
export default App;
