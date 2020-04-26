import React from 'react';
import Button from 'components/Button';
import Wrapper from './Wrapper.jsx';
import Row from './Row.jsx';

class Slider extends React.PureComponent {
	state = {
		x: 0,
	};
	enableClick = true;

	onPrev = (e) => {
		const currentTarget = e.currentTarget;

		if (this.enableClick === true) {
			this.enableClick = false;
			this.setState((currentState) => {
				return currentState.x < 0 
					? {
						x: currentState.x + currentTarget.nextSibling.clientWidth,
					}
					: currentState;
			});
			setTimeout(() => {
				this.enableClick = true;
			}, 800);
		}
	};

	onNext = (e) => {
		const currentTarget = e.currentTarget;

		if (this.enableClick === true) {
			this.enableClick = false;
			this.setState((currentState) => {
				const newValue = currentState.x - currentTarget.previousSibling.clientWidth;
				const rowWidth = -currentTarget.previousSibling.childNodes[0].clientWidth;

				return newValue > rowWidth
					? {
						x: newValue,
					}
					: currentState;
			});
			setTimeout(() => {
				this.enableClick = true;
			}, 800);
		}
	};

	render = () => {
		const { x } = this.state;
		const { children } = this.props;

		return <React.Fragment>
			<Button onClick={this.onPrev}>
				prev
			</Button>
			<Wrapper>
				<Row x={x}>
					{children}
				</Row>
			</Wrapper>
			<Button onClick={this.onNext}>
				next
			</Button>
		</React.Fragment>;
	};
};

export default Slider;
