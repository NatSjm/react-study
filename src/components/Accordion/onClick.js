
let timeout;
const onClick = (e, index, action) => {
	e.preventDefault();

	clearTimeout(timeout);
	timeout = setTimeout(() => {
		action((currentState) => ({
			...currentState,
			index,
		}));
	}, 0);
};

export default onClick;
