export const get = () => (dispatch) => {
//const response = fetch('http://0.0.0.0:3006/news');
const response = fetch('http://localhost:3006/news');

	response.then((data) => {
		data.text().then((data) => {
			data = JSON.parse(data);
			dispatch({
				type: 'SET_NEWS',
				payload: data,
			});
		});
	});
};
