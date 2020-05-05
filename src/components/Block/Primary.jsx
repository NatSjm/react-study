import styled from 'styled-components';
import Flex from './Flex.jsx';
import {connect} from 'react-redux';
import React from "react";

const Primary = styled(Flex)`
	background-color: rgba(121, 121, 132, .4);
	flex-wrap: wrap;
	align-items: center;
		${({ tablet, mobile, theme }) => {
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

// class Primary extends React.PureComponent {
//     render = () => {
//         const { mobile, tablet } = this.props;
//
//         return <Wrapper
//             mobile={mobile}
//             tablet={tablet}>
//             {this.props.children}
//         </Wrapper>;
//     };
// };

//export default Primary;
export default connect((state) => ({
    ...state.resolution,
}))(Primary);
