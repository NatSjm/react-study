import React from 'react';
import { 
	BrowserRouter, 
	Switch,
	Route, 
	Link,
} from 'react-router-dom';
import Account from 'routes/Account';
import Main from 'routes/Main';
import News from 'routes/News';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { resolution } from 'components/Store/actions';

class App extends React.Component {
	componentDidMount = () => {
		window.addEventListener('resize', this.props.resolution);
	};

	render = () => {
		return <React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/news">
						<News />
					</Route>
					<Route path="/account">
						<Switch>
							<Route path="/account/test">
								Test
							</Route>
							<Route path="/">
								<Account />
							</Route>
						</Switch>
					</Route>
				</Switch>
				<h1>
					<Link to="/account">
						To account
					</Link>
				</h1>
				<h1>
					<Link to="/">
						To main
					</Link>
				</h1>
			</BrowserRouter>
		</React.Fragment>;
	};
};

export default connect(undefined, (dispatch) => {
	return {
		resolution: bindActionCreators(resolution, dispatch),
	};
})(App);
