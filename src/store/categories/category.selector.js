import { createSelector } from "reselect";

// memoization - input doesnt change -> return same output
// input selector - gives params to determine output
// category Reducer
const selectCategoryReducer = (state) => state.categories;

// memoize selector
// createSelector (inputSelector(categories Array), outputSelector )
// runs only when input sel changes
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

// memoize selector
// as long as cetagoriesArray dosnt change do not rerun - give back previous return
export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);
