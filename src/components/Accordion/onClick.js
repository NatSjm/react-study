
let timeout;
const onClick = (index, action) => (e) => {
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
