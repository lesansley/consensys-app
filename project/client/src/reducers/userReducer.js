import * as type from '../actions/types';

const initialState = {};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.USER_LOGIN:
			return Object.assign({}, state, action.payload);
		case type.USER_ATTEST:
			return Object.assign({}, state, action.payload);
		case type.USER_VERIFY:
			return Object.assign({}, state, action.payload);
		case type.USER_LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default userReducer;
