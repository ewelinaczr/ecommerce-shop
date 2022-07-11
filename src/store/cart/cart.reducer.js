import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
};
// Reducers only store readable values
// Reducer should not handle buisiness logic
// Whatever needed to update is a payload
// Reducer only updates state 

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: payload,
        // payload = {cartItems / cartCount / cartTotal} - new values to store 
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			return state;
	}
};

