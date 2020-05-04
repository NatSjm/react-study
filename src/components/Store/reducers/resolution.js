
const defaultProps = {
	mobile: false,
	table: false,
};

const resolution = (state = defaultProps, action) => {
	switch (action.type) {
		case 'TABLET':
			return { ...state, mobile: false, table: true };

		case 'MOBILE':
			return { ...state, mobile: true };

		default:
			return state;
	}
};

export default resolution;
