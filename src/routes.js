// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Persons from './components/persons/index';
import NewPerson from './components/persons/new';
import SignIn from './components/auth/sign_in';
import Person from './components/persons/show';
import EditPerson from './components/persons/edit';

// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Persons} />
		<Route path="persons/sign_up" component={NewPerson} />
		<Route path="persons/sign_in" component={SignIn} />
		<Route path="persons/:id" component={Person} />
		<Route path="persons/:id/edit" component={EditPerson} />
	</Route>
);
