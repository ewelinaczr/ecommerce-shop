import { USER_ACTION_TYPES } from "./user.types";
import {
	createAction,
	withMatcher,
	ActionWithPayload,
	Action,
} from "../../utils/reducer/reducer.utils";
import { UserData } from "../../utils/firebase/firebase.utils";

export type setCurrentUser = ActionWithPayload<
	USER_ACTION_TYPES.SET_CURRENT_USER,
	UserData
>;

export const setCurrentUser = withMatcher(
	(user: UserData): setCurrentUser =>
		// returns action object {type, paylaod}
		createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export type SignUpStart = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_UP_START,
	{ email: string; password: string; displayName: string }
>;

export const signUpStart = withMatcher(
	(email: string, password: string, displayName: string): SignUpStart =>
		createAction(USER_ACTION_TYPES.SIGN_UP_START, {
			email,
			password,
			displayName,
		})
);
