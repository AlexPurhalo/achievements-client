// Import of actions types
import { FETCH_ACHIEVEMENTS, CREATE_ACHIEVEMENT, DELETE_ACHIEVEMENT, UPDATE_ACHIEVEMENT } from '../actions/types';

// Import of initial state
import { INITIAL_STATE } from './initial_state';

// Actions reducing with state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_ACHIEVEMENTS:
			return { ...state, all_achievements: action.payload };
		case CREATE_ACHIEVEMENT:
			return { ...state, all_achievements: action.payload };
		case DELETE_ACHIEVEMENT:
			return { ...state, all_achievements: action.payload };
		case UPDATE_ACHIEVEMENT:
			return { ...state, all_achievements: action.payload };
		default:
			return state;
	}
}

