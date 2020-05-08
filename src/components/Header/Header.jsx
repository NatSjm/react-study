import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import Navigation from 'components/Navigation';
import {
    Link,
} from 'react-router-dom';

const Wrapper = styled(Primary)`
    ${({theme}) => {
    return `
          background-color: ${theme.colors.major};
           & h1{
	         color:  ${theme.colors.accent};
	         margin-left: 20px;
	        }
           `
}
    }
    background-image: linear-gradient(to top right, rgba(23, 24, 32, 0.9), rgba(51, 51, 51, 0.9));
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding: 10px;
	margin-bottom: 10px;	 
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
            <Navigation/>
        </Wrapper>;
    };
};

export default Header;
