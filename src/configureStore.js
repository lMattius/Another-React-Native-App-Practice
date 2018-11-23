import notesReducer from './reducers/root.js'
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
	notes: notesReducer,
});

const configureStore = () => {

	return createStore(rootReducer);

};

export default configureStore;