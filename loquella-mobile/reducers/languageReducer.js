import * as types from '../actions';

const initialState = 'ENG';

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SET_LANGUAGE: {
			return action.payload;
		}
		default:
			return state;
	}
};
