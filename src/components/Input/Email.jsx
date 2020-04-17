import React from 'react';
import Primary from './Primary.jsx';

class Email extends React.Component {
	render = () => {
		return <Primary type="email" placeholder="Введите email" />
	};
}

export default Email;

