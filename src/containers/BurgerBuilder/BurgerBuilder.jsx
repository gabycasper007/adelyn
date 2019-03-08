import React, { Component } from "react";
import axios from "../../axios-order";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasing: false,
    loading: false
  };

  addIngredientHandler = type => {
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [type]: this.state.ingredients[type] + 1
      },
      totalPrice: this.correctDecimals(
        +this.state.totalPrice + INGREDIENT_PRICES[type]
      )
    });
  };

  removeIngredientHandler = type => {
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [type]: this.state.ingredients[type]
          ? this.state.ingredients[type] - 1
          : 0
      },
      totalPrice: this.state.ingredients[type]
        ? this.correctDecimals(+this.state.totalPrice - INGREDIENT_PRICES[type])
        : this.state.totalPrice
    });
  };

  correctDecimals = price => {
    return price.toFixed(2);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  cancelOrderHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  continueOrderHandler = () => {
    this.setState({ loading: true });
    axios
      .post("/orders.json", this.state.ingredients)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        // if (response.status === 200) {
        // }
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
        console.log(error);
      });
  };

  render() {
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        cancel={this.cancelOrderHandler}
        continue={this.continueOrderHandler}
        totalPrice={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          hideBackdrop={this.cancelOrderHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
