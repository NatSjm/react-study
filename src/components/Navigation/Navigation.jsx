import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import {
    Link,
} from 'react-router-dom';

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
            <h2>
                <Link to="/account">
                    To account
                </Link>
            </h2>
            <h2>
                <Link to="/news">
                    To news
                </Link>
            </h2>
            <h2>
                <Link to="/">
                    To main
                </Link>
            </h2>
        </Wrapper>;
    };
};

export default Navigation;
