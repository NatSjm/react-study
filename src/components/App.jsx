import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import {
    Account,
    Main,
    News
} from 'routes';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {resolution} from 'components/Store/actions';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

class App extends React.Component {
    componentDidMount = () => {
        window.addEventListener('resize', this.props.resolution);
        window.dispatchEvent(new Event('resize'));
    };

    render = () => {
        return <React.Fragment>

            <BrowserRouter>
                <Header>
                    <Navigation>
                    <h2>
                        <Link to="/account">
                            To account
                        </Link>
                    </h2>
                    <h2>
                        <Link to="/news">
                            To news
                        </Link>
                    </h2>
                    <h2>
                        <Link to="/">
                            To main
                        </Link>
                    </h2>
                    </Navigation>
                </Header>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route exact path="/news">
                        <News/>
                    </Route>
                    <Route path="/account">
                        <Switch>
                            <Route path="/account/test">
                                Test
                            </Route>
                            <Route path="/">
                                <Account/>
                            </Route>
                        </Switch>
                    </Route>
                </Switch>

            </BrowserRouter>
        </React.Fragment>;
    };
};

export default connect(undefined, (dispatch) => {
    return {
        resolution: bindActionCreators(resolution, dispatch),
    };
})(App);
