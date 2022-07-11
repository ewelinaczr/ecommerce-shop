import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";

// input selector - gives params to determine output
// takes only cart reducer
const selectCartReducer = (state: RootState): CartState => state.cart;

// select state slice
export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);

// select state slice
export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

// set new cart total
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	)
);

// set new cart count
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
