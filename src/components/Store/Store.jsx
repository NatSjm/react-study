import React from 'react';
import { 
	createStore,
	combineReducers, 
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider as ReduxProvider } from 'react-redux';
import * as reducers from './reducers';

const testMiddleware = (store) => {
	return (next) => {
		return (action) => {
			return next(action);
		};
	};
};

const store = createStore(combineReducers(reducers), undefined, applyMiddleware(thunk, testMiddleware));

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
