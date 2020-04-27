import React from 'react';
import Button from 'components/Button';

class Tabs extends React.PureComponent {
	state = {
		index: 0,
	};

	onClick = (index) => (e) => {
		e.preventDefault();

		this.setState((currentState) => ({
			index,
		}));
	};

	render = () => {
		const { index } = this.state;
		const { children } = this.props;
		let Content = <React.Fragment />;

		return <React.Fragment>
			{Array.isArray(children)
				? (() => {
					Content = children[index];
					
					return children.map((item, i) => {
						return <Button 
							key={i}
							onClick={this.onClick(i)}>
							{item.props.title}
						</Button>;
					});
				})()
				: typeof children === 'object'
					? (() => {
						Content = children;
						return <React.Fragment />;
					})()
					: <React.Fragment />}
			{Content}
		</React.Fragment>;
	};
};

export default Tabs;
