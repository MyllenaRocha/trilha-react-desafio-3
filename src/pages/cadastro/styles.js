import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

export const Header = styled.header`
	width: 100%;
	height: 47px;
	background: #151515;

	.header__container {
		padding: 0 60px;
	}

	.nav {
		width: 30%;
	}
`;

export const Row = styled.div`
	height: 92%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: none;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 47px;
	align-items: center;
	justify-content: space-between;
`;

export const Button = styled.button`
	color: #fff;
	height: 22px;
	width: 120px;
	left: 963px;
	top: 10px;
	background: #565656;
	border: none;
	border-radius: 11px;
`;

export const Main = styled.main`
	height: 50vh;
	display: flex;
	padding: 141px 65px;

	justify-content: space-between;
`;

export const Title = styled.h1`
	color: #fff;
	height: 308px;
	width: 388px;
	left: 65px;
	top: 141px;
	border-radius: nullpx;
`;

export const InputContainer = styled.div`
	width: 80%;
	height: 50px;

	margin-top: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

export const RowInput = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #3b3450;
	margin-top: 10px;
`;

export const IconContainer = styled.div`
	margin-right: 10px;
	color: #8647ad;
	font-weight: 600;
`;

export const FormContainer = styled.form`
	position: absolute;
	width: 374px;
	height: 450px;
	left: 748px;
	top: 153px;
`;

export const FormTitle = styled.h2`
	font-weight: 700;
	font-size: 32px;
	color: #fff;
`;

export const FormSubTitle = styled.p`
	width: 80%;
	color: #fff;
	font-size: 18px;
	font-weight: 400;
	line-height: 25px;
	letter-spacing: 0em;
	text-align: left;
`;

export const Input = styled.input`
	color: #fff;
	background: transparent;
	height: 30px;
	width: 275px;
	left: 750px;
	top: 313px;
	border: none;
	outline: none;
`;

export const ButtonContainer = styled.button`
	background: #565656;
	border-radius: 22px;
	position: relative;

	color: #ffffff;
	padding: 2px 12px;
	min-width: 76%;
	width: 76%;
	margin-top: 25%;
	margin-bottom: 20px;

	${({ variant }) =>
		variant !== 'primary' &&
		css`
			min-width: 167px;
			height: 33px;

			background: #e4105d;

			&::after {
				content: '';
				position: absolute;
				border: 1px solid #e4105d;
				top: -5px;
				left: -6px;
				width: calc(100% + 10px);
				height: calc(100% + 10px);
				border-radius: 22px;
			}
		`}
`;
