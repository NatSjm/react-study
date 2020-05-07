import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';

const Wrapper = styled(Primary)`
	flex-direction: column;
	width: 100%;
	padding: 20px;
	border-bottom: 1px solid grey;
	height: 100px;
	background-color: white;
	align-items: flex-start;
	justify-content: space-between;
	
`;

class NewsItem extends React.Component {

    render = () => {
        return <Wrapper>
            {this.props.children}
        </Wrapper>;
    };
};

export default NewsItem;
