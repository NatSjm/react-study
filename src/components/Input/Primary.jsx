import styled from 'styled-components';
import Input from './Input.jsx';

const Primary = styled(Input)`
	${({theme}) => `
		width: ${theme.inputs.primary.width};
		border-radius: ${theme.inputs.primary.borderRadius};
		border: ${theme.inputs.primary.border};
		padding: ${theme.inputs.primary.padding};
		font-size: ${theme.inputs.primary.fontSize};
		margin-bottom: ${theme.inputs.primary.marginBottom};
		&:hover,
		&:focus {
			-webkit-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
			-moz-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
			box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
			border-color: #eee;
		}

		&:first-of-type {
			margin-top: 20px;
		}`}`;

export default Primary;
