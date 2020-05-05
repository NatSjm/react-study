import React from 'react';
import { Primary as BlockPrimary } from 'components/Block';
import { Avatar as InputAvatar } from 'components/Input';
import { User as FormUser } from 'components/Form';

class Account extends React.Component {
	render = () => {
		return <>
			<BlockPrimary >
				<InputAvatar style={{backgroundColor: 'blue'}}/>
				<FormUser />
			</BlockPrimary>
		</>;

	};
};

export default Account;
