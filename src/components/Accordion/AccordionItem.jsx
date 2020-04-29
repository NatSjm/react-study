import styled from 'styled-components';
import { Flex } from 'components/Block';

const AccordionItem = styled(Flex)`
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
	width: 400px;
	padding-left: 10px;
	background-color: ghostwhite;
	border: 1px solid gainsboro;
	font-weight: bolder;
	cursor: pointer;
	
	
	&.opened h3{
	  color: darkblue;
	}
`;

export default AccordionItem;
