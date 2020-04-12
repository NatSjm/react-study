import React from 'react';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.color = 'red';
	};

	func = () => {
		console.log('============');
	};

	render = () => {
		return <div onClick={this.func}>
			{this.color}
		</div>;
	};
};

export default App;
