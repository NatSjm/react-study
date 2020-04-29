import React from 'react';
import styled from 'styled-components';
import AccordeonItem from './AccordeonItem';

const AccordeonWrap = styled.div`
   width: 100%;
   
`

export default class Accordeon extends React.Component {

    state = {
        itemDisplay: null
    };

    textsArr = [
        '"Какой-то текст',
        'Возможно ещё текст',
        'Всё так же текст',
        'И здесь тоже что-то написано'
    ];

    onDisplayMethod = (i) => {
        console.log(i);
        this.setState({itemDisplay: i});
    }

    render = () => {
        return <>
            <AccordeonWrap>
                {this.textsArr.map((item, i) =>
                    <AccordeonItem itemDisplay={this.state.itemDisplay === i}
                    onDisplayProp={()=> this.onDisplayMethod(i)}
                                   key={i}
                    >{item}</AccordeonItem>)}
            </AccordeonWrap>
        </>
    }
}