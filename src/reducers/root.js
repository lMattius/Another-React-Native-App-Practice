
const initialState = {
	addNotes: false,
	content: [],
	userInput : "",
	userDescription: "",
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

			case 'USER_DESCRIPTION_UPDATE':

				return{...state,
						userDescription: action.value
						};

			case 'NEW_NOTE':

				return{...state,
						content:[...state.content,{
							key: Math.random(),
							title:action.value,
							description: action.description,
							}]
						};

			case 'NOTE_UPDATE':

				if(action.title.trim() !== ""){

						if(action.description.trim() !== ""){

							return {...state,
										content: state.content.map(note => (note.key === action.key ? {key:action.key, 
																									title: action.title, 
																									description: action.description} : note)),
									};

						}else{

							return {...state,
									content: state.content.map(note => (note.key === action.key ? {key:action.key, 
																							  		title: action.title,
																							 		description:'No description'} : note)),
							};

						} //closing title conditions

				}else{

						if(action.description.trim() !== ""){

							return {...state,
										content: state.content.map(note => (note.key === action.key ? {key:action.key, 
																									  title: 'No Title',
																									 description:action.description} : note)),
									};

						}else{


							return {...state,
										content: state.content.map(note => (note.key === action.key ? {key:action.key, 
																									  title: 'No Title',
																									 description:'No description'} : note)),
									};

						}

				} //closing if statement

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