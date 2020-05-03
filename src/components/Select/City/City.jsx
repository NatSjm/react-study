import React from 'react';
import styled from 'styled-components';
import Select from '../Select.jsx';

const Wrapper = styled(Select)`
	color: ${({ theme: { colors: { primary } } }) => primary};
`;
const cities = [
	'Mariupol',
	'Kiev',
	'Moscow',
	'Odessa',
];
class City extends React.Component {
	state = {
		display: true,
	};

	render = () => {
		return <Wrapper>
			{Content}
		</Wrapper>;
	};
};

const Content = cities.map((name, i) => <h1 key={i}>{name}</h1>);

export default City;
