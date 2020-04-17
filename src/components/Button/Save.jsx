import React from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';

const Wrapper = styled(Button)`
	width: 180px;
	font-size: 1.4rem;
	font-weight: bold;
	padding: 10px 0;
	border-radius: 15px;
	background: rgb(94, 94, 243);
	color: #fff;
	outline: transparent;
	transition: all .1s linear;
	line-height: 1;

	&:hover,
	&:focus {
		-webkit-box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.75);
		-moz-box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.75);
		box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.75);
		color: #eee;
	}

	&:active {
		transform: translate(2px, 3px);
	}
`;

class Save extends React.Component {
	static defaultProps = {
		children: 'Сохранить',
	};

	render = () => {
		return <Wrapper>
			{this.props.children}
		</Wrapper>;
	};
};

export default Save;
