import styled from "styled-components";

export const BaseLabel = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: red;
	color: white;
	text-transform: uppercase;
	font-family: "Roboto Condensed", sans-serif;
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const BestsellerLabel = styled(BaseLabel)`
	background-color: red;
	color: white;

	&:hover {
		border: 1px solid black;
		background-color: white;
	}
`;

export const DiscountLabel = styled(BaseLabel)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;
