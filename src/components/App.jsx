import React from 'react';
import * as routes from 'routes/index.js';

const names = [
	'Account',
];


class App extends React.Component {
	render = () => {
		return names.map((moduleName, i) => {
			const Component = routes[moduleName];
			return <Component key={i} />;
		});
	};
};

export default App;
