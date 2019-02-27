import React from "react";

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
  </>
);

export default orderSummary;
