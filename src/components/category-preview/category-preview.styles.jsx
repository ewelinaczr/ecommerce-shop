import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const Title = styled(Link)`
	color: #2b2b2b;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 25px;
	cursor: pointer;
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 20px;
		row-gap: 50px;
	}
`;
