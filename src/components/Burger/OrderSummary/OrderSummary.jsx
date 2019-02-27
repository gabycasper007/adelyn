import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = props => (
  <>
    <h3>Your order</h3>
    <p>A delicious burger with the next ingredients:</p>
    <ul>
      {Object.keys(props.ingredients).map(key => (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}: </span>
          {props.ingredients[key]}
        </li>
      ))}
    </ul>
    <p>Continue to checkout?</p>
    <Button type="Danger" clicked={props.cancel}>
      CANCEL
    </Button>
    <Button type="Success" clicked={props.continue}>
      CONTINUE
    </Button>
  </>
);

export default orderSummary;
