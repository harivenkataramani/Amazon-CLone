export const initialState = {
  basket: [],
  totalPrice: 0,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //spread operator copies the initial state
        ...state,
        //updates the initialState Basket Value
        basket: [...state.basket, action.item],
        totalPrice: state.totalPrice + action.item.price,
      };

    default:
      return state;
  }
};

export default reducer;
