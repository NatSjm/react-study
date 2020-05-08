import styled from 'styled-components';

const PageTitle = styled.h3`
font-size: 30px;
margin-left: 5%;
${({theme}) => {
    return `
           color: ${theme.colors.major};
           `;
}
    }
`
export default PageTitle;
