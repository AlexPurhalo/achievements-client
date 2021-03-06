// Node modules import
import axios from 'axios';
import { browserHistory } from 'react-router';

// Import of action types
import {
	FETCH_PERSONS_PAGES_INFO,
	FETCH_PERSONS,
	FETCH_SINGLE_PERSON,
	AUTH_USER,
	UPLOAD_PERSON_IMAGE,
	UNAUTH_USER,
	UPDATE_ACCOUNT,
	DELETE_ACCOUNT } from './types';

// Server root path
const ROOT_URL = 'http://localhost:3000';

// headers configuration
const authConfig = {headers: { authorization: localStorage.getItem('token') }};

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

// Changes authenticated flag to false and removes JWT token
export function signOutUser() {
	localStorage.removeItem('token');
	browserHistory.push('/');

	return { type: UNAUTH_USER };
}

export function createPerson({email, password}) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/users`, { user: {email, password} })
			.then(response => {
				dispatch({type: AUTH_USER });
				localStorage.setItem('token', response.data.access_token);
				browserHistory.push('/')
			})
	}
}

// Get request fetch accounts from server
export function fetchPersons(pageNum) {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/users?page=${pageNum}`)
			.then(response => {
				dispatch({
					type: FETCH_PERSONS,
					payload: response.data.users
				})
			});
	}
}

// Takes info about pages
export function fetchPersonsPages() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/users/`)
			.then(response => {
				dispatch({
					type: FETCH_PERSONS_PAGES_INFO,
					payload: response.data.meta.pagination
				})
			})
	}
}

// Get request to fetch data about certain person
export function fetchSinglePerson(id) {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/users/${id}`)
			.then(response => {
				dispatch({
					type: FETCH_SINGLE_PERSON,
					payload: response.data
				})
			})
	}
}

// Delete request to destroy account from other
export function deletePerson(id) {
	return function(dispatch) {
		axios.delete(`${ROOT_URL}/users/${id}`, {headers: { authorization: localStorage.getItem('token') }})
			.then(
				dispatch({ type: DELETE_ACCOUNT }),
				localStorage.removeItem('token'),
				browserHistory.push('/persons/sign_in')
			);
	}
}

export function updatePersonData(id, profileTitle, name, city, age, mobile, email, skype, github, linkedin) {
	return function(dispatch) {
		const data = {
			user: {
				profile: profileTitle,
				name: name,
				city: city,
				age: age,
				mobile: mobile,
				email: email,
				skype: skype,
				github: github,
				linkedin: linkedin
			}
		};

		axios.put(`${ROOT_URL}/users/${id}`, data, authConfig)
			.then(response => {
				dispatch({
					type: UPDATE_ACCOUNT,
					payload: response.data
				})
			})
	}
}

export function uploadPersonPicture(id, image) {
	return function(dispatch) {
		const data = {
			picture: image
		};
		console.log(data);
		axios.put(`${ROOT_URL}/users/${id}`, data, { headers: { authorization: localStorage.getItem('token') }})
			.then(response => {
				dispatch({
					type: UPLOAD_PERSON_IMAGE,
					payload: response.data
				});

				browserHistory.push(`/persons/${id}`);
			});
	}
}
