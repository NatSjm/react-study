import styled from 'styled-components';
import Input from './Input.jsx';

const Primary = styled(Input)`
	width: 80%;
	border-radius: 15px;
	border: 3px solid rgb(94, 94, 243);
	padding: 8px 5px 8px 15px;
	font-size: 1.4rem;
	margin-bottom: 20px;

	&:hover,
	&:focus {
		-webkit-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
		-moz-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
		box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0.75);
		border-color: #eee;
	}

	&:first-of-type {
		margin-top: 20px;
	}
`;

export default Primary;
