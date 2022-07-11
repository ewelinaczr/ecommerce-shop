import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.action";

export type CartState = {
	readonly isCartOpen: boolean;
	readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};
// Reducers only store readable values
// Reducer should not handle buisiness logic
// Whatever needed to update is a payload
// Reducer only updates state

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: AnyAction
): CartState => {
	if (setIsCartOpen.match(action)) {
		return {
			...state,
			isCartOpen: action.payload,
		};
	}
	if (setCartItems.match(action)) {
		return {
			...state,
			cartItems: action.payload,
		};
	}
	return state;
	// switch (action.type) {
	// 	case CART_ACTION_TYPES.SET_CART_ITEMS:
	// 		return {
	// 			...state,
	// 			cartItems: action.payload,
	// 			// payload = {cartItems / cartCount / cartTotal} - new values to store
	// 		};
	// 	case CART_ACTION_TYPES.SET_IS_CART_OPEN:
	// 		return {
	// 			...state,
	// 			isCartOpen: action.payload,
	// 		};
	// 	default:
	// 		return state;
	// }
};
