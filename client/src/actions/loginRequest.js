import axios from 'axios';
import setJwtToken from '../utils/setJwtToken.js';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types.js';

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('jwtToken');
		setJwtToken(false);
		dispatch(setCurrentUser({}));
	}
}
export function login(data) {
	return dispatch => {
		return axios.post('/login', data)
		.then(res => {
			const token = res.data.token;
			localStorage.setItem('jwtToken', token);
			setJwtToken(token);
			dispatch(setCurrentUser(jwt.decode(token)));
		});
	}
}

