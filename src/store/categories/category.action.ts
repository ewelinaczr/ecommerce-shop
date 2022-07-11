import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import {
	createAction,
	ActionWithPayload,
	withMatcher,
} from "../../utils/reducer/reducer.utils";

// what returns
export type FetchCategories = ActionWithPayload<
	CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
	Category[]
>;
// types of actions that are allowed
// export type CategoryAction = FetchCategories;

export const setCategories = withMatcher(
	(categoriesArray: Category[]): FetchCategories =>
		createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
);

// WITHOUT TYPESCRIPT
// export const setCategories = (categoriesArray) =>
// 	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
