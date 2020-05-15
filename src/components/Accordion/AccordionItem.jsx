import React from 'react';
import styled from 'styled-components';
import {Flex} from 'components/Block';
import { Index as IndexContext } from './Contexts.js';
import onClickFunc from './onClick.js';

const Wrapper = styled(Flex)`
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);  
	width: 400px;
	padding-left: 10px;
	background-color: ghostwhite;
	border: 1px solid gainsboro;
	font-weight: bolder;
	cursor: pointer;
	margin: 0 auto;
	
	
	&.opened h3{
	  color: darkblue;
	}
`;

const AccordionItem = ({ action, ...props }) => {
	const index = React.useContext(IndexContext);
	const onClick = React.useCallback((e) => onClickFunc(e, index, action), [
		index,
		action,
	]);

	return <Wrapper { ...props } onClick={onClick} />;
};

export default AccordionItem;
