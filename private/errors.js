const CODES = {
	0: 'NOT_FOUND',
	1: 'FOUND',
	2: 'INSERT_OK',
	3: 'ALREADY_IN_USE',
	4: 'NOT_INSERTED',
	5: 'UPDATE_OK',
	6: 'NOT_UPDATED',
	7: 'REMOVE_OK',
	8: 'NOT REMOVED',
	9: 'RECEIVING_OK',
	10: 'RECEIVING_ERROR',
	11: 'SUBSCRIPTION_OK',
	12: 'NOT_SUBSCRIPTED',
	13: 'SUBSCRIPTION_IN_USE',
};

const MESSAGES = {
	NOT_FOUND: (err_message = '') => ({
		message: `The user ${err_message} has not been found`,
		code: CODES[0],
		type: 'error',
	}),
	FOUND: () => ({
		message: `Welcome back!`,
		code: CODES[1],
		type: 'info',
	}),
	INSERT_OK: (name) => ({
		message: `Thank you ${name} for registering!`,
		code: CODES[2],
		type: 'info',
	}),
	ALREADY_IN_USE: (email) => ({
		message: `There is already account with the ${email}`,
		code: CODES[3],
		type: 'error',
	}),
	NOT_INSERTED: () => ({
		message: 'Please input your data more accurate',
		code: CODES[4],
		type: 'error',
	}),
	UPDATE_OK: () => ({
		message: `Your password has been updated`,
		code: CODES[5],
		type: 'info',
	}),
	NOT_UPDATED: () => ({
		message: `Something went wrong... Try to check your data or try again later`,
		code: CODES[6],
		type: 'error',
	}),
	REMOVE_OK: (id) => ({
		message: `The user with id ${id} has been deleted`,
		code: CODES[7],
		type: 'info',
	}),
	NOT_REMOVED: () => ({
		message: 'The user has not been removed',
		code: CODES[8],
		type: 'error',
	}),
	RECEIVED: (type) => ({
		message: `Your ${type} has been received. Thank you!`,
		code: CODES[9],
		type: 'info',
	}),
	NOT_RECEIVED: (type) => ({
		message: `Error has occured. Your ${type} has not  been received..:(`,
		code: CODES[10],
		type: 'error',
	}),
	SUBSCRIPTION: () => ({
		message: `You have been succesfully subscripted. Thank you!`,
		code: CODES[11],
		type: 'info',
	}),
	NOT_SUBSCRIPTED: () => ({
		message: `An error occured, try again later`,
		code: CODES[12],
		type: 'error',
	}),
	SUBSCRIPTION_IN_USE: () => ({
		message: `You already subscribed`,
		code: CODES[13],
		type: 'error',
	}),
};

module.exports = {
	MESSAGES,
};
