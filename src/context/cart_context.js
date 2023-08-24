import React, { useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART, CLEAR_CART, REMOVE_CART_ITEM } from "../actions";

const CartContext = React.createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

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
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  // toggle amount
  const toggleAmount = (id, value) => {};
  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

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
