
const initialState = {
	addNotes: false,
	content: [],
	userInput : "",
	selectedNote: null,
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

			case 'UPDATE_USER_INPUT':

				return{...state,
						userInput: action.value
						};

			case 'NEW_NOTE':

				return{...state,
						content:[...state.content,{
							key: Math.random(),
							title:action.value,
							}]
						};

			case 'NOTE_UPDATE':

				if(action.title.trim() !== ""){

				return {...state,
							content: state.content.map(note => (note.key === action.key ? {key:action.key, title: action.title} : note)),
						};

				}else{

				return {...state,
							content: state.content.map(note => (note.key === action.key ? {key:action.key, title: 'No Title'} : note)),
						};

				}

			case 'ERASE_NOTE':

				return {...state,
						content: state.content.filter(note => note.key !== action.key)
						};

			case 'CONTENT_OPEN':

				return {...state,
						selectedNote: action.note,
				};

			case 'CLEAN_SELECTED':

				return {...state,
						selectedNote:null,
				};

			default:

				return state;
		}
}

export default reducer;