import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import Account from 'routes/Account';
import Main from 'routes/Main';

class App extends React.Component {

	render = () => {
		return <React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Main />
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

export default App;
