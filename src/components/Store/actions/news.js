import axios from 'axios';

export const get = function (page, callback) {
	return async (dispatch) => {
		try {
			const { data: { items, total } } = await axios.get('http://127.0.0.1:3006/news/'+ page);

			callback(total, () => {
				dispatch({
					type: 'SET_NEWS',
					payload: items,
				});
			});
		}
		catch (err) {
			console.log('err', err.message, err);
		}
	}
};
