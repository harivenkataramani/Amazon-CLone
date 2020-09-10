export const initialState = {
  basket: [],
  totalPrice: 0,
  user: null,
};

const reducer = (state, action) => {
  console.log(action, state.basket);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //spread operator copies the initial state
        ...state,
        //updates the initialState Basket Value
        basket: [...state.basket, action.item],
        totalPrice: state.totalPrice + action.item.price,
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (baskItem) => baskItem.id === action.id
      );

      console.log(index);

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("No id found");
      }
      return {
        //spread operator copies the initial state
        ...state,
        basket: newBasket,
        totalPrice: state.totalPrice - action.price,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
