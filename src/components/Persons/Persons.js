import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => (
    <Person
      key={person.id}
      age={person.age}
      name={person.name}
      click={() => props.click(person.name)}
      changeName={event => props.changeName(event, person.id)}
      delete={() => props.delete(index)}
    >
      {person.hobbies}
    </Person>
  ));

export default persons;
