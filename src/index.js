// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

// Components import
import routes from './routes';

// Reducers import
import reducers from './reducers';

// Store definition with Middleware applying and Rendering of React Document Object Model (DOM)
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.querySelector('#react-application')
);
