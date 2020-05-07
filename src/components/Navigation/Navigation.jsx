import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';

const Wrapper = styled(Primary)`
	flex-direction: row;
	width: 400px;
	margin-left: 20px;
	magrin-right: 0px;
	justify-content: space-around;
	flex-direction: row;
	background-color: transparent;
	& a{
	text-decoration: none;
	color: white;
	}
`;

class Navigation extends React.Component {

    render = () => {
        return <Wrapper>
            { this.props.children }
        </Wrapper>;
    };
};

export default Navigation;
