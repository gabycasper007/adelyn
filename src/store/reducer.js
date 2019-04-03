import * as actionTypes from "./actions";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  purchasing: false,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INITIAL_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients
      };
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] + 1
        },
        totalPrice: correctDecimals(
          +state.totalPrice + INGREDIENT_PRICES[action.ingredientType]
        )
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType]
            ? state.ingredients[action.ingredientType] - 1
            : 0
        },
        totalPrice: state.ingredients[action.ingredientType]
          ? correctDecimals(
              +state.totalPrice - INGREDIENT_PRICES[action.ingredientType]
            )
          : state.totalPrice
      };
    case actionTypes.SET_PURCHASING:
      return {
        ...state,
        purchasing: action.value
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.value
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.value
      };
    default:
      return state;
  }
};

const correctDecimals = price => {
  return price.toFixed(2);
};

export default reducer;
