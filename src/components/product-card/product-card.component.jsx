import { useDispatch, useSelector } from "react-redux";
import Label, { LABEL_TYPE_CLASSES } from "../label bestseller/label.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
	ProductCartContainer,
	Footer,
	Name,
	Price,
	LabelContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl, bestseller, discount } = product;
	// console.log(product);
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={`${name}`} />
			{/* <LabelContainer>
				Hello<Label labelType={LABEL_TYPE_CLASSES.bestseller}>Bestseller</Label>
			</LabelContainer> */}
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to card
			</Button>
		</ProductCartContainer>
	);
};

export default ProductCard;
