import styled from 'styled-components';
import Primary from './Primary.jsx';
import {connect} from 'react-redux';
//import React from "react";

const Secondary = styled(Primary)`
${({tablet, mobile, theme}) => {
    const type = (tablet || mobile)
        ? 'primaryMobile'
        : 'primaryDesktop';
  
    return `
    flex-direction: ${theme.blocks[type].flexDirection};
    padding: ${theme.blocks[type].padding};
        `
}
    }

`;


export default connect((state) => ({
    ...state.resolution,
}))(Secondary);
