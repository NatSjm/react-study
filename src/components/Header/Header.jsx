import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import {
    Link,
} from 'react-router-dom';

const Wrapper = styled(Primary)`
    background-color: #1C1C25;
    background-image: linear-gradient(to top right, rgba(23, 24, 32, 0.9), rgba(51, 51, 51, 0.9));
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding: 10px;
	margin-bottom: 10px;
	color: #61DAFB;
	  & h1{
	  color: #61DAFB;
	  margin-left: 10px;
	  }
	  & a{
	  text-decoration: none;
	  }	
`;

class Header extends React.Component {

    render = () => {
        return <Wrapper>
                <Link to="/">
                    <h1>
                    Logo
                    </h1>
                </Link>
            { this.props.children }
        </Wrapper>;
    };
};

export default Header;
