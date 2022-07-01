import styled from "styled-components";

export const CategoryContainer = styled.div`
	margin-top: 47px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 20px;
		row-gap: 50px;
	}
`;

export const Title = styled.h2`
	color: #2b2b2b;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 25px;
	text-align: center;
`;
