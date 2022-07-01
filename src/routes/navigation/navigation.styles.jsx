import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
	// background-color: red;
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	@media screen and (max-width: 800px) {
		margin-bottom: 0px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 5px 25px;
	@media screen and (max-width: 800px) {
		height: 90%;
		padding: 0px 10px;
	}
`;

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	@media screen and (max-width: 800px) {
		padding: 10px 5px;
	}
`;
