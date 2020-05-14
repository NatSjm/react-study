import React from 'react';
import { useSelector } from 'react-redux';
import Block from 'components/Block';
import AccordionItem from './AccordionItem.jsx';
import Content from './Content.jsx';
import { 
	Index as IndexContext,
	Title as TitleContext, 
} from './Contexts.js';

const Accordion = ({ children }) => {
	const { accordionItems } = useSelector(state => state.accordion || []);
	const [ state, setState ] = React.useState(() => {
		return {
			index: -1,
		};
	});

	return <Block>
		{accordionItems
			? accordionItems.map(({ title, content }, i) => {
				return <IndexContext.Provider key={i} value={i}>
					<TitleContext.Provider value={title}>
						<AccordionItem
							key={i}
							action={setState}
							className={ (i === state.index && 'opened') }>
							{children}
						</AccordionItem>
					</TitleContext.Provider>
					{(i === state.index) && <Content>
						{content}
					</Content>}
				</IndexContext.Provider>
			})
			: <React.Fragment/>}
	</Block>;
};

Accordion.defaultProps = {
	accordionItems: [],
};

export default React.memo(Accordion);
