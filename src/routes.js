// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Persons from './components/persons/index';
import NewPerson from './components/persons/new';
import SignIn from './components/auth/sign_in';

// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Persons} />
		<Route path="persons/new" component={NewPerson} />
		<Route path="sign_in" component={SignIn} />
	</Route>
);
