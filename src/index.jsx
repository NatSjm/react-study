import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'components/Store';
import App from 'components/App.jsx';
import { ThemeProvider } from 'styled-components';
import * as theme from 'theme';

ReactDOM.render( 
	<StoreProvider>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StoreProvider>, 
	document.getElementById('root')
);
