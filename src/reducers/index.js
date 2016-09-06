// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import PersonsReducer from './persons';

// State holding in combine reducers
const rootReducer = combineReducers({
	persons: PersonsReducer
});

export default rootReducer;
