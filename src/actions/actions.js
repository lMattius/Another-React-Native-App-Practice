import {OPEN_ADD_NOTES,
		CLOSE_ADD_NOTES} from './actionTypes';

export const openAddMenu = () => {
	return{type: OPEN_ADD_NOTES,};
};

export const closeAddMenu = () => {
	return {type: CLOSE_ADD_NOTES,};
};