import axios from 'axios';

export const get = () => async (dispatch) => {
	const {data} = await axios.get('http://127.0.0.1:3006/news');
	dispatch({
		type: "SET_NEWS",
		payload: data,
	});
};

