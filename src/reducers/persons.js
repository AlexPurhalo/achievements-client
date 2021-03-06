// Import of actions types
import {
	FETCH_PERSONS,
	FETCH_PERSONS_PAGES_INFO,
	FETCH_SINGLE_PERSON,
	AUTH_USER,
	UNAUTH_USER,
	UPDATE_ACCOUNT,
	DELETE_ACCOUNT
} from '../actions/types';

// Import of initial state
import { INITIAL_STATE } from './initial_state';

// Actions reducing and certain state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_PERSONS:
			return { ...state, all_persons: action.payload };
		case FETCH_PERSONS_PAGES_INFO:
			return { ...state, pages_info: action.payload };
		case FETCH_SINGLE_PERSON:
			return { ...state, single_person: action.payload };
		case AUTH_USER:
			return { ...state, authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		case UPDATE_ACCOUNT:
			return { ...state, single_person: action.payload };
		case DELETE_ACCOUNT:
			return { ...state, authenticated: false };
		default:
			return state;
	}
}

