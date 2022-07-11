import { USER_ACTION_TYPES } from "./user.types";
import { setCurrentUser } from "./user.action";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
	currentUser: UserData | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
};

// not pointing to specific reducer anymore (vs useReducer)
// so by default return unchanged state - not this type changed
// One combined root reducer for all actions
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (setCurrentUser.match(action)) {
		return { ...state, currentUser: action.payload };
	}
	return state;
	// switch (type) {
	// 	case USER_ACTION_TYPES.SET_CURRENT_USER:
	// 		return { ...state, currentUser: payload };
	// 	default:
	// 		return state;
	// }
};
