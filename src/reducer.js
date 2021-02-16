import {ADD_TASK, FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, POST_TASK} from "./actions";

const initialState = {
	tasksList: null,
	task: '',
	loading: true,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {...state, task: action.text};
		case POST_TASK:
			return {...state, task: state.task};
		case FETCH_POSTS_REQUEST:
			return {...state, loading: true};
		case FETCH_POSTS_SUCCESS:
			return {...state, tasksList: action.tasks};
		case FETCH_POSTS_ERROR:
			return {...state, loading: false};
		default:
			return state;
	}

	return state;
}

export default reducer;