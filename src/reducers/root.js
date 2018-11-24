
const initialState = {
	addNotes: false
};

const reducer = (state = initialState, action) => {

		switch(action.type){

			case 'OPEN_ADD_NOTES':
				return {...state, 
						addNotes: true,
				};

			case 'CLOSE_ADD_NOTES':
				return {...state, 
						addNotes: false,
				};

			default:

				return state;
		}
}

export default reducer;