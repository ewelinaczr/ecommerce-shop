import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// COMPONENTS
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// REDUX
import { selectCurrentUser } from "../../store/user/user.selector.ts";
import { selectIsCartOpen } from "../../store/cart/cart.selector.ts";
// ICONS
// import svg logo as component - <Logo> component
import { ReactComponent as Logo } from "../../assets/logo2.svg";
// FIREBASE
import { signOutUser } from "../../utils/firebase/firebase.utils.ts";
// STYLES
import {
	NavigationContainer,
	NavLinks,
	NavLink,
	LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
	// useSelector((state) => state.user.currentUser)
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	return (
		<Fragment>
			<NavigationContainer>
				{/* Link to='/' */}
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

// outlet always render navigation and then any other under it
// nav is the same others are changing
