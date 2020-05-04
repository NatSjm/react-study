import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import Input from './Input.jsx';
import logo from 'img/avatar.png';

const Wrapper = styled(Block)`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 5px solid rgb(94, 94, 243);
	object-fit: cover;
	margin: 0 30px 10px 0;
	background: #fff;& input {
	
	${({ theme })=> `
		display: ${theme.avatar.avatarPrimary.display};
		width: ${theme.avatar.avatarPrimary.width};
		height: ${theme.avatar.avatarPrimary.height};
		cursor: ${theme.avatar.avatarPrimary.cursor};
		position: ${theme.avatar.avatarPrimary.position};
		top: ${theme.avatar.avatarPrimary.top};
		left: ${theme.avatar.avatarPrimary.left};
		opacity: ${theme.avatar.avatarPrimary.opacity};

	`}}

	&:before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background-image: url(${(props) => props.src});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
`;

class Avatar extends React.Component {
	state = {
		src: logo,
	};

	onChange = (e) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.currentTarget.files[0]);
		reader.onload = () => {
			let newFile = reader.result;


			this.setState({ src: newFile });
		};
	};

	render = () => {
		return <Wrapper src={this.state.src}>
			<Input type="file" name="avatar" onChange={this.onChange}/>
		</Wrapper>;
	};
};

export default Avatar;
