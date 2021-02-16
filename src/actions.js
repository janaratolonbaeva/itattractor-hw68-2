import axiosOrders from "./axiosOrders";

export const ADD_TASK = 'ADD_TASK';
export const POST_TASK = 'POST_TASK';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const fetchPostsRequest = () => ({type: FETCH_POSTS_REQUEST});
const fetchPostsSuccess = tasks => ({type: FETCH_POSTS_SUCCESS, tasks});
const fetchPostsError = () => ({type: FETCH_POSTS_ERROR});

export const fetchPosts = () => {
	return async dispatch => {
		dispatch(fetchPostsRequest());
		try {
			const response = await axiosOrders.get('todo.json');
			dispatch(fetchPostsSuccess(response.data))
		} catch(e) {
			dispatch(fetchPostsError());
		}
	}
}

export const add = text => ({type: ADD_TASK, text});

export const postTask = task => {
	return async (dispatch) => {
		try {
			await axiosOrders.post('todo.json', task);
			dispatch(fetchPosts());
		} catch (e) {
			console.log(e);
		}
	}
}



