// Test helpers import
import { expect } from '../test_helper';
import PersonsReducer from '../../src/reducers/persons';
import { FETCH_PERSONS } from '../../src/actions/types';

// Specs
describe('Persons Reducer', () => {
	it('handles action with unknown type', () => {
		expect(PersonsReducer(undefined, {})).to.eql({all_persons: [], single_person: null});
	});

	it('handles action of FETCH_PERSONS', () => {
		const action = { type: FETCH_PERSONS, payload: {
			data: [{id: 1, email: 'alex@mail.com'}, {id: 2, email: 'aladin228@mail.com'}]
		}};

		expect(PersonsReducer([], action)).to.eql({
			all_persons: [{id: 1, email: 'alex@mail.com'}, {id: 2, email: 'aladin228@mail.com'}]
		});
	})
});




