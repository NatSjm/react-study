import React from 'react';
import styled from 'styled-components';
import Select from '../Select.jsx';

const Wrapper = styled(Select)`
	color: red;
`;

class City extends React.Component {
	render = () => {
		return <Wrapper>
			<h3>Mariupol</h3>
			<h3>Kiev</h3>
			<h3>Moscow</h3>
			<h3>Odessa</h3>
		</Wrapper>;
	};
};

export default City;
