import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import SHOP_DATA from "../../shop-data";
// COMPONENTS
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
// FIREBASE
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.ts";
// import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
// REDUX
import { setCategories } from "../../store/categories/category.action.ts";

const Shop = () => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	addCollectionAndDocuments("categories", SHOP_DATA);
	// }, []);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments("categories");
			dispatch(setCategories(categoriesArray));
		};

		getCategoriesMap();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
