import React, { useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART } from "../actions";

const CartContext = React.createContext();

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, amount, plant) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, plant } });
  };

  // remove item
  const removeItem = (id) => {};
  // toggle amount
  const toggleAmount = (id, value) => {};
  // clear cart
  const clearCart = () => {};

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

//make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
