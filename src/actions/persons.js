// Node modules import
import axios from 'axios';

// Import of action types
import { FETCH_PERSONS } from './types';

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
	return function() {
		axios.post(`${ROOT_URL}/sign_in`, { email, password }); // email: email, password: password
	};
}
