import classes from "BuildControl.module.sass";
import React from "react";

const buildControl = props => {
  return (
    <div>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  );
};

export default buildControl;
