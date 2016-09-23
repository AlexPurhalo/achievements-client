// Import of actions types
import { FETCH_SKILLS, CREATE_SKILL, DELETE_SKILL } from '../actions/types'

// Import of initial state
import { INITIAL_STATE } from './initial_state';

// Actions reducing and certain state returning
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_SKILLS:
			return { ...state, all_skills: action.payload };
		default:
			return state;
	}
}
