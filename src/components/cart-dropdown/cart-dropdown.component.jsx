import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// REDUX
import { selectIsCartOpen } from "../../store/cart/cart.selector.ts";
import { setIsCartOpen } from "../../store/cart/cart.action.ts";
import { selectCartItems } from "../../store/cart/cart.selector.ts";
// COMPONENTS
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
// STYLES
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
