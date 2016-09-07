// Node modules import
import { AUTH_USER, UNAUTH_USER } from '../actions/types';

// Changing of authenticated condition
export default function(state = {}, action) {
	switch(action.type) {
		case AUTH_USER:
			console.log({ ...state, authenticated: true });
			return { ...state, authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
	}

	return state
}
