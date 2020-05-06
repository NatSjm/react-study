import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { news } from 'components/Store/actions';
import Block from 'components/Block';
import Text from 'components/Text';

class News extends React.Component {
	static defaultProps = {
		data: [],
	};

	componentDidMount = () => {
		this.props.news.get();
	};

	render = () => {
		const { data } = this.props;

		return data.map(({ 
			id, 
			title, 
			description 
		}, i) => {
			return <Block>
				<Text>
					{id} {title}
				</Text>
				<Block>
					{description}
				</Block>
			</Block>;
		});
	};
};

export default connect((store) => ({
	data: store.news,
}), (dispatch) => ({
	news: bindActionCreators(news, dispatch),
}))(News);
