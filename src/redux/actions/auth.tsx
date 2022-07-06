import ActionTypes from "../ActionTypes";
import {
    FetchTodoRequest,
    FetchTodoSuccess,
    FetchTodoSuccessPayload,
    FetchTodoFailure,
    FetchTodoFailurePayload,
    ITodo,
} from "../reducers/types";
import { sortByStatusHelper } from '../../screens/TodosScreen/helper'

export const login = (user: any) => {
    // console.log("USERRR == ", user);
    return {
        type: ActionTypes.LOGIN,
        payload: user
    }
}

// export const getMovies = (movies: any) => {
//     // console.log("USERRR == ", user);
//     return {
//         type: ActionTypes.GET_MOVIES,
//         payload: movies
//     }
// }

export const getMoviesRequest = () => ({
    type: ActionTypes.GET_MOVIES_REQUEST,
});

export const getMoviesRequestSuccess = (
    payload: any
) => ({
    type: ActionTypes.GET_MOVIES_REQUEST_SUCCESS,
    payload,
});

export const getMoviesRequestFailure = (
    payload: any
) => ({
    type: ActionTypes.GET_MOVIES_REQUEST_FAILURE,
    payload,
});

export const fetchTodoRequest = (): FetchTodoRequest => ({
    type: ActionTypes.FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (
    payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
    type: ActionTypes.FETCH_TODO_SUCCESS,
    payload,
});

export const fetchTodoFailure = (
    payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
    type: ActionTypes.FETCH_TODO_FAILURE,
    payload,
});

export const sortTodosByStatus = (incoming_todos: ITodo[]) => {
    // let sortedTodos = incoming_todos.sort((a: any,b: any) => a.completed - b.completed)

    return {
        type: ActionTypes.SORT_TODOS_BY_STATUS,
        payload: sortByStatusHelper(incoming_todos)
        // payload: [{
        //     userId: 123,
        //     id: 123,
        //     title: "Changed",
        //     completed: false
        // }]
    }
}


