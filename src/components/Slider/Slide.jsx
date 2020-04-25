import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Wrapper = styled(Block)`
	width: 100%;
	height: 100%;
	float: left;
	${({ color = 'grey' }) => 'background-color: '+ color};
`;

class Slide extends React.PureComponent {
	nodeRef = null;

	componentDidMount = () => {
		const width = this.nodeRef
			.parentNode
			.parentNode
			.clientWidth;
		this.nodeRef
			.style
			.width = width +'px';
	};

	render = () => {
		const { color, children } = this.props;

		return <Wrapper 
			ref={(node) => node && (this.nodeRef = node)}
			color={color}>
			{children}
		</Wrapper>;
	};
};

export default Slide;
