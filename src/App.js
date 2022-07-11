import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// FIREBSE
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils.ts";
// COMPONENTS
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
// REDUX
import { setCurrentUser } from "./store/user/user.action.ts";

const App = () => {
	// SET CURREN USER BEFORE EVERYTHING LOADS
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			// dispatch an action setCU which creates object {type, payload(user)}
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;

// Routes / - parent(navigation) /shop - child(shop)
// index - When there is only / render navigation and home
