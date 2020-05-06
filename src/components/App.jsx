import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Store from 'components/Store';
import Account from 'routes/Account';
import Main from 'routes/Main/index.js';

class App extends React.Component {

    componentDidMount = () => {
        window.addEventListener('resize', this.resizer);
        window.dispatchEvent(new Event('resize'));
    };

     resizer = (e) => {
        const width = e.currentTarget.innerWidth;
        const tabletFlag = width < 780 && width > 420;
        const mobileFlag = width < 420;

        Store.dispatch({
            type: tabletFlag
                ? 'TABLET'
                : mobileFlag
                    ? 'MOBILE'
                    : 'DESCTOP',
        });

    };


    render = () => {
        return <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Main/>
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
