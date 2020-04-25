import React from 'react';
import { 
	Dropdown as ButtonDropdown,
	Option as ButtonOption, 
} from 'components/Button';

class Select extends React.PureComponent {
	state = {
		display: false,
		index: 0,
		// test: {
		// 	step: 0,
		// },
	};

	onDisplay = (e) => {
		e.preventDefault();

		this.setState((currentState) => {
			return {
				index: currentState.index,
				display: !currentState.display,
			};
		});
	};

	onClickItem = (index) => (e) => {
		e.preventDefault();

		this.setState((currentState) => {
			return {
				index,
				display: false,
			};
		});
	};

	render = () => {
		console.log('render');
		const isArray = Array.isArray(this.props.children);

		return <React.Fragment>
			<ButtonDropdown id="drop" onClick={this.onDisplay} className={this.props.className}>
				{isArray
					? this.props.children[this.state.index]
					: this.props.children}
			</ButtonDropdown>
			{this.state.display
				? isArray
					? this.props
						.children
						.map((item, index) => {
							return <ButtonOption 
								key={index}
								onClick={this.onClickItem(index)}>
								{item}
							</ButtonOption>;
						})
					: <ButtonOption onClick={this.onClickItem(0)}>
						{this.props.children}
					</ButtonOption>
				: <React.Fragment />}
		</React.Fragment>;
	};
};

export default Select;
