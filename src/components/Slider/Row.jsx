import styled from 'styled-components';
import Block from 'components/Block';

const Row = styled(Block)`
	width: ${({ children }) => children.length * 100}%;
	height: 100%;
	transition: .8s;
	transform: translate(${({ x = 0 }) => x +'px'},0px);
`;

export default Row;
