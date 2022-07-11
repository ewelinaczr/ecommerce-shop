// ACTION TYPES AND TS TYPES

// ienumerable type
export enum CATEGORIES_ACTION_TYPES {
	SET_CATEGORIES = "category/SET_CATEGORIES",
}

// single products
export type CategoryItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

// products categories (face,body,hair)
export type Category = {
	title: string;
	imageUrl: string;
	items: CategoryItem[];
};

//
export type CategoryMap = {
	[key: string]: CategoryItem[];
};
