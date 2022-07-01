import { BaseLabel, BestsellerLabel, DiscountLabel } from "./label.styles";

export const LABEL_TYPE_CLASSES = {
	base: "base",
	bestseller: "bestseller",
	discount: "discount",
};

const getLabel = (labelType = LABEL_TYPE_CLASSES.base) =>
	({
		[LABEL_TYPE_CLASSES.base]: BaseLabel,
		[LABEL_TYPE_CLASSES.bestseller]: BestsellerLabel,
		[LABEL_TYPE_CLASSES.discount]: DiscountLabel,
	}[labelType]);

const Label = ({ children, labelType, ...otherProps }) => {
	const CustomLabel = getLabel(labelType);
	return <CustomLabel {...otherProps}>{children}</CustomLabel>;
};

export default Label;
