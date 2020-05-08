import React from 'react';
import Block from 'components/Block';
import AccordionItem from './AccordionItem.jsx';
import Content from './Content.jsx';
import {connect} from "react-redux";

class Accordion extends React.PureComponent {
    enableAnimate = true;
    refNode = null;

    stateSetter = (index) => {
        this.props.dispatch({
            type: 'CHANGE_INDEX',
            payload: index
        });
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
        const { activeIndex: index, accordionItems} = this.props;

        return <Block>
            {accordionItems
                ? (() => {
                    return accordionItems.map(({ title, content }, i) => {
                        return <React.Fragment key={i}>
                            <AccordionItem
                                key={i}
                                className={ (i === index && 'opened') }
                                onClick={ this.onClick(i) }>
                                <h3>{ title }</h3>
                            </AccordionItem>
                            {(i === index) && <Content
                                ref={ this.saveRef }>
                                <p>{ content }</p>
                            </Content>}
                        </React.Fragment>
                    });
                })()
                : <React.Fragment/>}
        </Block>;
    };
};

export default connect((state) => {
    return {
        ...state.accordion,
    };
})(Accordion);
