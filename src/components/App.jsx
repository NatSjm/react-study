import React from 'react';
import Tabs from 'components/Tabs';
import Block from 'components/Block';
import Text from 'components/Text';

// const names = [
// 	'Account',
// ];


class App extends React.Component {
	render = () => {
		return <Tabs>
			<Block title={<Text>First</Text>}>
				11111111111111111
			</Block>
			<Block title="Second">
				2222222222222222
			</Block>
			<Block title="Three">
				3333333333333333
			</Block>
		</Tabs>;
	};
};

export default App;
