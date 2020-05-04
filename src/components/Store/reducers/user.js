
const defaultState = {
	name: 'John',
	email: 'jonh@gmail.com',
	avatar: '',
	validate: false,
};

const user = (state = defaultState, action) => {
	switch (action.type) {
		case 'VALIDATE_ERROR':
			return {
				...state,
				validate: true,
			};

		case 'UPDATE':
			return {
				...state,
				...action.payload,
			};

		default:
			return {
				...state,
				validate: false
			};

	}
};

export default user;

