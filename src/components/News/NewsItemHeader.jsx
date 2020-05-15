import styled from 'styled-components';
import Flex from 'components/Block';

const NewsItemHeader = styled(Flex)`
min-height: 16px;
& span{
	color: #B7B8B7;
	margin-right: 20px;
	font-size: 12px;
	text-transform: upperCase;	
	}
`;
 export default  NewsItemHeader;
