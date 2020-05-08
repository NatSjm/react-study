import React from 'react';
import { Secondary as BlockSecondary } from 'components/Block';
import { Avatar as InputAvatar } from 'components/Input';
import { User as FormUser } from 'components/Form';

class Account extends React.Component {
	render = () => {
		return <>
			<BlockSecondary >
				<InputAvatar/>
				<FormUser />
			</BlockSecondary>
		</>;

	};
};

export default Account;
