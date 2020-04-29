import React from 'react';
import styled from 'styled-components';

const ItemWrap = styled.div`
  margin-bottom: 30px;
`

const ItemButton = styled.div`
    width: 200px;
    height: 50px;
    background: blue; 
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const ItemText = styled.div`
   font-size:16px;
   line-height: 19px;
   border: 1px solid red;
   padding: 16px;
   width: 50%;
`

export default class AccordeonItem extends React.Component {
    render = () => {
        return <ItemWrap>
            <ItemButton onClick={this.props.onDisplayProp}>Открыть</ItemButton>
            {this.props.itemDisplay && <ItemText>{this.props.children}</ItemText>}
        </ItemWrap>
    }
}
