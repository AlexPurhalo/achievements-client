// Import node modules
import axios from 'axios';

// Import action types
import { FETCH_ACHIEVEMENTS, CREATE_ACHIEVEMENT, UPDATE_ACHIEVEMENT, DELETE_ACHIEVEMENT } from './types';

// Url for requests manipulation
const ROOT_URL  = 'https://achievements-server.herokuapp.com';

const authConfig = {headers: { authorization: localStorage.getItem('token') }};

// Fetch all person's achievement function
export function fetchAchievements(user_id) {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/users/${user_id}/achievements`)
			.then(response => {
				dispatch({
					type: FETCH_ACHIEVEMENTS,
					payload: response.data.achievements
				});
			});
	}
}

// Create person's achievement function
export function createAchievement(user_id, description) {
	return function(dispatch) {
		const data = {
			"achievement": {
				"user_id": user_id,
				"description": description
			}
		};

		axios.post(`${ROOT_URL}/users/${user_id}/achievements`, data, authConfig)
			.then(response => {
				dispatch({
					type: CREATE_ACHIEVEMENT,
					payload: response.data.achievements
				});
			});
	}
}

// Update person's achievement function
export function updateAchievement(user_id, achievement_id, textToUpdate) {
	const data = { "description": textToUpdate };

	return function(dispatch) {
		axios.put(`${ROOT_URL}/users/${user_id}/achievements/${achievement_id}`, data, authConfig)
			.then(response => {
				dispatch({
					type: UPDATE_ACHIEVEMENT,
					payload: response.data.achievements
				});
			});
	}
}

// Delete person's achievement function
export function deleteAchievement(user_id, achievement_id) {
	return function(dispatch) {
		axios.delete(`${ROOT_URL}/users/${user_id}/achievements/${achievement_id}`, authConfig)
			.then(response => {
				dispatch({
					type: DELETE_ACHIEVEMENT,
					payload: response.data.achievements
				});
			});
	}
}
