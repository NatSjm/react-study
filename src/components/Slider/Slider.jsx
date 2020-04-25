import React from 'react';
import Button from 'components/Button';
import Wrapper from './Wrapper.jsx';
import Slide from './Slide.jsx';
import Row from './Row.jsx';

class Slider extends React.PureComponent {
	state = {
		x: 0,
	};

	onPrev = (e) => {
		const currentTarget = e.currentTarget;

		this.setState(({ x }) => ({
			x: x + currentTarget.nextSibling.clientWidth,
		}));
	};

	onNext = (e) => {
		const currentTarget = e.currentTarget;

		this.setState(({ x }) => ({
			x: x - currentTarget.previousSibling.clientWidth,
		}));
	};

	render = () => {
		const { x } = this.state;

		return <React.Fragment>
			<Button onClick={this.onPrev}>
				prev
			</Button>
			<Wrapper>
				<Row x={x}>
					<Slide color="red" />
					<Slide color="green" />
					<Slide color="blue" />
				</Row>
			</Wrapper>
			<Button onClick={this.onNext}>
				next
			</Button>
		</React.Fragment>;
	};
};

export default Slider;
