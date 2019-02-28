import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = props => {
  return (
    <div onClick={props.showMenu} className={classes.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrawerToggle;
