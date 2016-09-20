// Node modules import
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers import
import personsReducer from './persons';
import achievementsReducer from './achievements';

// State holding in combine reducers
const rootReducer = combineReducers({
	persons: personsReducer,
	achievements: achievementsReducer,
	form: formReducer

});

export default rootReducer;
