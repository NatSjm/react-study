import React from 'react';
import Block from 'components/Block';
import AccordionItem from './AccordionItem.jsx';

class Accordion extends React.PureComponent {
    state = {
        index: -1,
    };

    onClick = (index) => (e) => {
        e.preventDefault();
        const newStateIndex = this.state.index === index ? -1 : index;
        this.setState((currentState) => ({
            index: newStateIndex,
        }));
    };

    render = () => {
        const {index} = this.state;
        const {children} = this.props;
        const childrenArray = (!children || Array.isArray(children))
            ? children
            : new Array(children);
        return <Block>
            {childrenArray ?
                (() => {
                    return childrenArray.map(({props}, i) => {
                        return (
                            <AccordionItem key={i}
                                           className={(i === index && 'opened')}
                                           onClick={this.onClick(i)}>
                                <h3>{props.title}</h3>
                                {(i === index) && props.children}
                            </AccordionItem>
                        );
                    });
                })()
                : <React.Fragment/>
            }
        </Block>;
    };
};

export default Accordion;
