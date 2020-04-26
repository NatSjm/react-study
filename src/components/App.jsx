import React from 'react';
import Slider, {
	Slide,
} from 'components/Slider';

// const names = [
// 	'Account',
// ];


class App extends React.Component {
	static defaultProps = {
		data: [{
			id: 1,
			text: 'oewjojg',
			color: 'red'
		}, {
			color: 'blue'
		}, {
			color: 'green'
		}]
	};

	render = () => {
		const { data = [] } = this.props;

		return <Slider>
			{data.map((item, i) => {
				return <Slide { ...item } key={i}>
					<h1>{i}</h1>
				</Slide>
			})}
		</Slider>;
	};
};

export default App;
