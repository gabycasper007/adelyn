import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, index) => (
        <BurgerIngredient key={igkey + index} type={igkey} />
      ));
    })
    .reduce((prev, cur) => prev.concat(cur));

  const messageIfNoIngredients = !transformedIngredients.length && (
    <p>Please select ingredients</p>
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {messageIfNoIngredients}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
