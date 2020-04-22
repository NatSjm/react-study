import React from 'react';
import Primary from './Primary.jsx';

class Name extends React.Component {
	render = () => {
		return <Primary type="text" placeholder="Введите имя" />
	};
}

export default Name;
