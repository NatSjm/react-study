//import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Content = styled(Block)`
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 2px;
    margin: 0 auto;
    ${ ({ theme }) => `background-color: ${theme.colors.lime};` }
`;

export default Content;
