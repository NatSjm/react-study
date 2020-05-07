import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';

const Wrapper = styled(Primary)`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding: 10px;
	margin-bottom: 10px;
`;

class Header extends React.Component {

    render = () => {
        return <Wrapper>
            <h1>Logo</h1>
            { this.props.children }
        </Wrapper>;
    };
};

export default Header;
