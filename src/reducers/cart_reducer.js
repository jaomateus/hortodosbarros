import { ADD_TO_CART } from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, plant } = action.payload;

    // check if plant is already in the cart
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: plant.scientific_name,
        amount,
        image: plant.image_url,
        price: plant.price,
        max: plant.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default cart_reducer;
