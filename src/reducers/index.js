// Node modules import
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers import
import PersonsReducer from './persons';
import authReducer from './auth';

// State holding in combine reducers
const rootReducer = combineReducers({
	persons: PersonsReducer,
	form: formReducer,
	auth: authReducer
});

export default rootReducer;
