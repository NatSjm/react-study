import React from 'react';
import { 
	createStore,
	combineReducers, 
} from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import * as reducers from './reducers';

const store = createStore(combineReducers(reducers));

setTimeout(() => {
	store.dispatch({ 
		type: 'UPDATE', 
		payload: { 
			email: 'test@mail.com', 
			name: 'Jonh' 
		} 
	});
}, 4000);

class Provider extends React.PureComponent {
	render = () => {
		const { children } = this.props;

		return <ReduxProvider store={store}>
			{children}
		</ReduxProvider>;
	};
};

export default store;
export {
	Provider,
};
