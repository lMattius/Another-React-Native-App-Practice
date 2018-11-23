import {openAddNotes, closeAddNotes} from '../actions/index';
import {OPEN_ADD_NOTES,
		CLOSE_ADD_NOTES} from '../actions/actions';

const initialState = {
	addNotes: true,
}

const reducer = (state = initialState, action) => {

		switch(action.type){
			case OPEN_ADD_NOTES:
				return {...state, 
						addNotes: true,
				};

			case CLOSE_ADD_NOTES:
				return {...state, 
						addNotes: false,
				};

			default:

				return state;
		}
}

export default reducer;