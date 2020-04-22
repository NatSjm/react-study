import React from 'react';
import styled from 'styled-components';
import { 
	Name as InputName,
	Email as InputEmail, 
} from 'components/Input';
import { Save as ButtonSave } from 'components/Button';
import Form from './Form.jsx';

const Wrapper = styled(Form)`
	flex-direction: column;
	width: 480px;
`;

class User extends React.Component {
	render = () => {
		return <Wrapper>
			<InputName />
			<InputEmail />
			<ButtonSave>
				Добавить 
			</ButtonSave>
		</Wrapper>;
	};
};

export default User;
