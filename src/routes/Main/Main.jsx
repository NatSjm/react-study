import React from 'react';
import {PageTitle} from 'components/Text';
import Accordion from 'components/Accordion';
import Preview from 'components/Preview';

class Main extends React.Component {

    render = () => {
		return <div>
            <PageTitle>Main</PageTitle>
            <Accordion>
            	<Preview />
            </Accordion>
        </div>;
    };
};

export default Main;
