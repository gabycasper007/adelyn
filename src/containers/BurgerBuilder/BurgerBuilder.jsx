import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios-order";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then(response => {
        this.props.onSetInitialIngredients(response.data);
      })
      .catch(error => {
        console.log(error);
        this.props.onSetError(true);
      });
  }

  continueOrderHandler = () => {
    this.props.onSetLoading(true);
    axios
      .post("/orders.json", this.props.ingredients)
      .then(response => {
        this.props.onSetPurchasing(false);
        this.props.onSetLoading(false);
      })
      .catch(error => {
        this.props.onSetPurchasing(false);
        this.props.onSetLoading(false);
        console.log(error);
      });
  };

  render() {
    let orderSummary = null,
      burger = this.props.error ? (
        <p>Ingredients can't be loaded</p>
      ) : (
        <Spinner />
      );

    if (this.props.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredients={this.props.ingredients}
            add={ingredient => this.props.onAddIngredient(ingredient)}
            remove={ingredient => this.props.onRemoveIngredient(ingredient)}
            price={this.props.totalPrice}
            ordered={() => this.props.onSetPurchasing(true)}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          cancel={() => this.props.onSetPurchasing(false)}
          continue={this.continueOrderHandler}
          totalPrice={this.props.totalPrice}
        />
      );
    }
    if (this.props.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <>
        <Modal
          show={this.props.purchasing}
          hideBackdrop={() => this.props.onSetPurchasing(false)}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

const mapState = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasing: state.purchasing,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatch = dispatch => {
  return {
    onSetInitialIngredients: ingredients =>
      dispatch({ type: actionTypes.SET_INITIAL_INGREDIENTS, ingredients }),
    onAddIngredient: ingredientType =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientType }),
    onRemoveIngredient: ingredientType =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientType }),
    onSetPurchasing: value =>
      dispatch({ type: actionTypes.SET_PURCHASING, value }),
    onSetLoading: value => dispatch({ type: actionTypes.SET_LOADING, value }),
    onSetError: value => dispatch({ type: actionTypes.SET_ERROR, value })
  };
};

export default connect(
  mapState,
  mapDispatch
)(withErrorHandler(BurgerBuilder, axios));
