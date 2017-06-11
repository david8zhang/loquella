/* eslint-disable arrow-body-style */
import * as types from './types';

export const setLanguage = (language) => {
	return {
		type: types.SET_LANGUAGE,
		payload: language
	};
};
