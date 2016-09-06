// Node modules import
import axios from 'axios';

// Import of action types
import { FETCH_PERSONS } from './types';

const ROOT_URL = 'http://localhost:3000/';

export function fetchPersons() {
	const request = axios.get(`${ROOT_URL}/persons`);

	return {
		type: FETCH_PERSONS,
		payload: request
	}
}
