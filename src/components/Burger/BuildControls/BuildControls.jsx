import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const buildControls = props => {
  const isPurchaseable = Object.values(props.ingredients).reduce(
    (sum, el) => sum + el,
    0
  );
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {Object.keys(props.ingredients).map(ingredient => {
        const ingr = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        return (
          <BuildControl
            key={ingr}
            label={ingr}
            add={() => props.add(ingredient)}
            remove={() => props.remove(ingredient)}
            value={props.ingredients[ingredient]}
          />
        );
      })}
      <button disabled={!isPurchaseable} className={classes.OrderButton}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
