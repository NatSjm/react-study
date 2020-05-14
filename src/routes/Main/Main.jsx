import React from 'react';
import {PageTitle} from 'components/Text';
import Accordion from 'components/Accordion';



class Main extends React.Component {

    render = () => {
		return <div>
            <PageTitle>Main</PageTitle>
            <Accordion />
        </div>;
    };
};

export default Main;
