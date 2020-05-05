import React from 'react';
import Block from 'components/Block';
import AccordionItem from './AccordionItem.jsx';
import Content from './Content.jsx';

class Accordion extends React.PureComponent {
    state = {
        index: -1,
    };
    enableAnimate = true;
    refNode = null;


    // onClick = (index) => (e) => {
    //     e.preventDefault();
    //
    //     if (index === this.state.index && this.enableAnimate) {
    //         this.enableAnimate = false;
    //         this.refNode.style.height = 0;
    //         setTimeout(() => {
    //             this.setState(() => ({
    //                 index: -1
    //             }));
    //             this.enableAnimate = true;
    //         }, 400);
    //     } else {
    //         this.setState(() => ({
    //             index: index,
    //         }));
    //     }
    // };

    stateSetter = (index) => {
        this.setState((currentState) => ({
            index: currentState.index === index
                ? -1
                : index,
        }));
    };
    onClick = (index) => (e) => {
        e.preventDefault();

        if (this.refNode && this.enableAnimate) {
            this.enableAnimate = false;
            this.refNode.style.height = 0;
            new Promise(() => {
                setTimeout(() => {
                    this.stateSetter(index)
                }, 500);
            }).then(this.enableAnimate = true);
        } else {
            this.stateSetter(index);
        }
    };

    saveRef = (node) => {
        this.refNode = node;

        if (node && this.enableAnimate) {

            const height = node.clientHeight;

            this.enableAnimate = false;
            node.style.height = '0px';

            setTimeout(() => {
                setTimeout(() => {
                    node.style.transition = '.4s all';
                    node.style.height = height + 'px';
                }, 0);

                setTimeout(() => {
                    this.enableAnimate = true;
                }, 400);
            }, 0);
        }
    };

    render = () => {
        const {index} = this.state;
        const {children} = this.props;
        const childrenArray = (!children || Array.isArray(children))
            ? children
            : [children];

        return <Block>
            {childrenArray
                ? (() => {
                    return childrenArray.map(({props}, i) => {
                        return <React.Fragment key={i}>
                            <AccordionItem
                                key={i}
                                className={(i === index && 'opened')}
                                onClick={this.onClick(i)}>
                                <h3>{props.title}</h3>
                            </AccordionItem>
                            {(i === index) && <Content
                                ref={this.saveRef}>
                                {props.children}
                            </Content>}
                        </React.Fragment>
                    });
                })()
                : <React.Fragment/>}
        </Block>;
    };
};

export default Accordion;
