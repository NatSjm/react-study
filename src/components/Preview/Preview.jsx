import React from 'react';
import { 
	Title as TitleContext,
	Index as IndexContext, 
} from 'components/Accordion/Contexts.js';

const Preview = () => {
	const title = React.useContext(TitleContext);
	const index = React.useContext(IndexContext);

	return <React.Fragment>
		<h3>{title} {index}</h3>
	</React.Fragment>;
};

export default React.memo(Preview);
