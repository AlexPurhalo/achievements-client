// Node modules import
import axios from 'axios';
import { browserHistory } from 'react-router';

// Import of action types
import { FETCH_PERSONS, AUTH_USER } from './types';

// Server root path
const ROOT_URL = 'http://localhost:3000/';

// Get request fetch accounts from server
export function fetchPersons() {
	const request = axios.get(`${ROOT_URL}/persons`);

	return {
		type: FETCH_PERSONS,
		payload: request
	}
}

// Creates session
export function signInUser({ email, password }) {
	return function(dispatch) {
		// Sends request to get the data like access_token, id, etc...
		axios.post(`${ROOT_URL}/sign_in`, { email, password }) // email: email, password: password
			.then(response => {
				// Updates state to indicate that user signed in
				dispatch({ type: AUTH_USER });
				// Saves JWT token that was rendered from server
				localStorage.setItem('token', response.data.access_token);
				// Redirects to	root path
				browserHistory.push('/');
			});
	};
}
