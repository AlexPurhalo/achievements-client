// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

// Components import
import routes from './routes';

// Reducers import
import reducers from './reducers';

// Store definition with Middleware applying and Rendering of React Document Object Model (DOM)
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const reduced_store = createStoreWithMiddleware(reducers);

// Takes token from localStorage
const token = localStorage.getItem('token');

// If token exist changes state of authenticated boolean
if (token) reduced_store.dispatch({ type: AUTH_USER });

ReactDOM.render(
	<Provider store={reduced_store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.querySelector('#react-application')
);
