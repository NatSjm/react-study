
const resolution = (e) => (dispatch) => {
	const width = e.currentTarget.innerWidth;
	const tabletFlag = width < 780 && width > 420;
	const mobileFlag = width < 420;

	dispatch({
		type: tabletFlag
			? 'TABLET'
			: mobileFlag
				? 'MOBILE'
				: '',
	});
};

export default resolution;
