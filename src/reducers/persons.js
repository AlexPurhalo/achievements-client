// Import of actions types
import { FETCH_PERSONS, FETCH_SINGLE_PERSON } from '../actions/types';

// Import of initial state
import { INITIAL_STATE } from './initial_state';

// Actions reducing and certain state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_PERSONS:
			return { ...state, all_persons: action.payload };
		case FETCH_SINGLE_PERSON:
			return { ...state, single_person: action.payload };
		default:
			return state;
	}
}

