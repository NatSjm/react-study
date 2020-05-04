import React from 'react';
import { connect } from 'react-redux';
import Store from 'components/Store';
import Primary from './Primary.jsx';

class Email extends React.Component {
	render = () => {
		return <React.Fragment>
			{this.props.email}
		</React.Fragment>
	};
}

export default connect((state) => {
	return {
		email: state.user.email,
		name: state.user.name,
	};
})(Email);

