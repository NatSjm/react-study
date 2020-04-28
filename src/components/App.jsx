import React from 'react';
import Accordion from 'components/Accordion';
import Block from 'components/Block';


// const names = [
// 	'Account',
// ];


class App extends React.Component {
    static defaultProps = {
        data: [{
            title: 'First',
            content: '1111111111'
        }, {
            title: 'Second',
            content: '22222222'
        }, {
            title: 'Third',
            content: '3333333333'
        }]
    };

    render = () => {
        const {data = []} = this.props;
        return <Accordion>
            {data.map(({title, content}, i) => {
                return <Block title={title} key={i}>
                    <p>{content}</p>
                </Block>
            })}
        </Accordion>;
    };
};

export default App;
