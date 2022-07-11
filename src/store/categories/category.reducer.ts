import { AnyAction } from "redux";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { setCategories } from "./category.action";

export type CategoriesState = {
	readonly categories: Category[];
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
	categories: [],
};

export const categoriesReducer = (
	state = CATEGORIES_INITIAL_STATE,
	action = {} as AnyAction
): CategoriesState => {
	if (setCategories.match(action)) {
		return { ...state, categories: action.payload };
	}
	return state;
	// switch (action.type) {
	// 	case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
	// 		return { ...state, categories: action.payload };
	// 	default:
	// 		return state;
	// }
};
