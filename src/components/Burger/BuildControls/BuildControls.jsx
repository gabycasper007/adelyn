import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const buildControls = props => (
  <div className={classes.BuildControls}>
    {Object.keys(props.ingredients).map(ingredient => {
      const ingr = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
      return <BuildControl label={ingr} />;
    })}
  </div>
);

export default buildControls;
