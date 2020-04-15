import React from 'react';
import * as routes from '../routes/index.js';
import '../index.css';
// import Main from './routes/Main.jsx';
// import Account from '../routes/Account.jsx';

const names =[
    'Account',
    'Main'
];
class App extends React.Component {
    render = () => {
        return names.map((moduleName, i) => {
            const Component = routes[moduleName];
            return <Component key={i} />
        });
    };
};

export default App;