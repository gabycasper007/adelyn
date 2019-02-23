import React from "react";
import styles from "./Person.module.css";

const person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I am {props.name}, I'm {props.age} years old
        {props.children ? ` and I love ${props.children}.` : "."}
      </p>
      <input type="text" onChange={props.changeName} value={props.name} />
      <button onClick={props.delete}>X</button>
    </div>
  );
};
export default person;
