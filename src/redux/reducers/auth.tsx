import ActionTypes from "../ActionTypes";

const initialState = {
    user: {},
    movies: [],
    pending: false,
    error: null,
    todos: []
}

const LoginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                user: action.payload
            }

        case ActionTypes.GET_MOVIES_REQUEST:
            return {
                ...state,
                // pending: true
            }

        case ActionTypes.GET_MOVIES_REQUEST_SUCCESS:
            return {
                ...state,
                // pending: false,
                movies: action.payload,
                // error: null
            }

        case ActionTypes.GET_MOVIES_REQUEST_FAILURE:
            return {
                ...state,
                // pending: false,
                movies: [],
                // error: "Failed"
            }

        case ActionTypes.FETCH_TODO_REQUEST:
            return {
                ...state,
                pending: true
            }

        case ActionTypes.FETCH_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: action.payload.todos,
                error: null
            }

        case ActionTypes.FETCH_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: [],
                error: action.payload.error
            }

        case ActionTypes.SORT_TODOS_BY_STATUS: 
            return {
                ...state,
                todos: action.payload
            }

        default:
            return initialState;
    }
}

export default LoginReducer;