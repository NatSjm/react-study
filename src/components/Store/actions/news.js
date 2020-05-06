
export const get = () => (dispatch) => {
	const response = fetch('http://0.0.0.0:3006/news');

	response.then((data) => {
		data.text().then((data) => {
			// dispatch({
			// 	type: '',
			// 	payload: data,
			// });
		});
	});
};
