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
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam',
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure',
        '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi'
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