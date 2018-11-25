import {OPEN_ADD_NOTES,
		CLOSE_ADD_NOTES,
		NEW_NOTE,
		UPDATE_USER_INPUT,
		NOTE_UPDATE,
		ERASE_NOTE,
		CONTENT_OPEN,
		CLEAN_SELECTED,} from './actionTypes';

export const openAddMenu = () => {
	return{type: OPEN_ADD_NOTES,};
};

export const closeAddMenu = () => {
	return {type: CLOSE_ADD_NOTES,};
};

export const newNotes = (title) => {
	return {type: NEW_NOTE,
			value:title};
};

export const updateUserInput = (value) => {
	return {type: UPDATE_USER_INPUT,
			value};
};

export const updateNote = (note) => {
	return {type: NOTE_UPDATE,
			key: note.key,
			title: note.title };
};

export const eraseNote = (key) => {
	return {type: ERASE_NOTE,
			key,};
};

export const openNote = (note) => {
	return {type: CONTENT_OPEN,
			note,};
};

export const cleanSelectedNote = () => {
	return {type: CLEAN_SELECTED,};
};