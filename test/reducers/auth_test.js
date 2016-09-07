// Test helpers import
import { expect } from '../test_helper';
import authReducer from '../../src/reducers/auth';
import { AUTH_USER } from '../../src/actions/types';

// Specs
describe('Authentication Reducer', () => {
	it('Changes authenticated boolean to true if user signed in', () => {
		const action = { type: AUTH_USER, payload: { email: "aladin228@mail.com", password: "abagalamaga" }};

		expect(authReducer({}, action)).to.eql({authenticated: true});
	})
});




