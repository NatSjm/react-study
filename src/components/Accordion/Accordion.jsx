import React from 'react';
import {connect} from 'react-redux';
import Block from 'components/Block';
import AccordionItem from './AccordionItem.jsx';
import Content from './Content.jsx';
import onClick from './onClick.js';

const Accordion = ({ accordionItems }) => {
	const [ state, setState ] = React.useState(() => {
		return {
			index: -1,
			test: false,
		};
	});
	const refNode = React.useRef(null);

	// onMount
	React.useEffect(() => {
		setTimeout(() => {
			setState((currentState) => ({
				...currentState,
				test: true,
			}));
		}, 4000);
	}, []);

	// onUpdateIndex
	React.useEffect(() => {
		console.log('index')
	}, [
		state.index,
	]);

	// onUpdateTest
	React.useEffect(() => {
		console.log('test')
	}, [
		state.test,
	]);

	// console.log('state.index', state.index)
	return <Block>
		{accordionItems
			? accordionItems.map(({ title, content }, i) => {
				return <React.Fragment key={i}>
					<AccordionItem
						key={i}
						className={ (i === state.index && 'opened') }
						onClick={onClick(i, setState)}>
						<h3>{ title }</h3>
					</AccordionItem>
					{(i === state.index) && <Content ref={refNode}>
						<p>{ content }</p>
					</Content>}
				</React.Fragment>
			})
			: <React.Fragment/>}
	</Block>;
};

Accordion.defaultProps = {
	accordionItems: [],
};

export default connect((state) => {
	return {
		...state.accordion,
	};
})(React.memo(Accordion));

// class Accordion extends React.PureComponent {
//     enableAnimate = true;
//     refNode = null;

	// static defaultProps = {
	// 	children: [],
	// };

//     stateSetter = (index) => {
//         this.props.dispatch({
//             type: 'CHANGE_INDEX',
//             payload: index
//         });
//     };

//     saveRef = (node) => {
//         this.refNode = node;

//         if (node && this.enableAnimate) {

//             const height = node.clientHeight;

//             this.enableAnimate = false;
//             node.style.height = '0px';

//             setTimeout(() => {
//                 setTimeout(() => {
//                     node.style.transition = '.4s all';
//                     node.style.height = height + 'px';
//                 }, 0);

//                 setTimeout(() => {
//                     this.enableAnimate = true;
//                 }, 400);
//             }, 0);
//         }
//     };


    // render = () => {
    //     const { activeIndex: index, accordionItems} = this.props;

    //     return <Block>
    //         {accordionItems
    //             ? (() => {
    //                 return accordionItems.map(({ title, content }, i) => {
    //                     return <React.Fragment key={i}>
    //                         <AccordionItem
    //                             key={i}
    //                             className={ (i === index && 'opened') }
    //                             onClick={ this.onClick(i) }>
    //                             <h3>{ title }</h3>
    //                         </AccordionItem>
    //                         {(i === index) && <Content
    //                             ref={ this.saveRef }>
    //                             <p>{ content }</p>
    //                         </Content>}
    //                     </React.Fragment>
    //                 });
    //             })()
    //             : <React.Fragment/>}
    //     </Block>;
    // };
// };

// export default connect((state) => {
//     return {
//         ...state.accordion,
//     };
// })(Accordion);
