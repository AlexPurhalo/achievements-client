// Import node modules
import axios from 'axios';

// Import action types
import { FETCH_SKILLS, CREATE_SKILL, DELETE_SKILL } from './types';

// Url for requests manipulation
const ROOT_URL  = 'http://localhost:3000';

// headers configuration
const authConfig = {headers: { authorization: localStorage.getItem('token') }};

export function fetchSkills(user_id) {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/users/${user_id}/skills`)
			.then(response => {
				dispatch({
					type: FETCH_SKILLS,
					payload: response.data.skills
				});
			});
	}
}
