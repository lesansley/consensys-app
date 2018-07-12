import * as type from './types';

export const userLogin = cred => {
	return {
		type: type.USER_LOGIN,
		payload: cred
	};
};

export const userAttest = cred => {
	return {
		type: type.USER_ATTEST,
		payload: cred
	};
};

export const userVerify = cred => {
	return {
		type: type.USER_VERIFY,
		payload: cred
	};
};

export const userLogout = () => {
	return {
		type: type.USER_LOGOUT
	};
};
