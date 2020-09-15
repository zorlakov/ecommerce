import { createSelector } from 'reselect';

// get entire state, return just a piece/slice of it (INPUT SELECTOR)
const selectCart = (state) => state.cart;

// OUTPUT SELECTOR
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      // Use reduce to break down cart items into "singles", so we get the total number of
      // items in the cart
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
