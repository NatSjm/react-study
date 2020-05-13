import React from 'react';
import Loader from 'components/Loader';
import Button from 'components/Button';

class Paginate extends React.PureComponent {
	static defaultProps = {
		func: () => {},
		index: 1,
		limit: 10,
	};

	state = {
		index: this.props.index,
		total: 0,
		limit: this.props.limit,
	};

	componentDidMount = () => {
		this.props.func(this.state.index, (total, callback) => {
			this.setState((currentState) => ({
				...currentState,
				total,
			}), callback)
		});
	};

	onPage = (index) => (e) => {
		const { index: currentIndex } = this.state;

		if (index !== currentIndex) {
			this.props.func(index, (total, callback) => {
				this.setState((currentState) => ({
					...currentState,
					total,
					index,
				}), callback)
			});
		}
	};

	render = () => {
		const { children = [] } = this.props;
		const { total, limit, index } = this.state;
		const pages = Math.ceil(total / limit);

		return <React.Fragment>
			{children.length > 0
				? children
				: <Loader />}
			{index > 1
				? <Button onClick={this.onPage(1)}>
					First Page
				</Button>
				: <React.Fragment />}
			{(() => {
				let i = 0,
					collector = [];

				while (i < pages) {
					const index = i + 1;

					collector.push(<Button 
						key={i}
						onClick={this.onPage(index)}>
						{index}
					</Button>);
					i++;
				}
				return collector;
			})()}
			{index < pages
				? <Button onClick={this.onPage(pages)}>
					Last Page
				</Button>
				: <React.Fragment />}
		</React.Fragment>;
	};
};

export default Paginate;
