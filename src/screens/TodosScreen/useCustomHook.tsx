import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux imports
import { fetchTodoRequest, sortTodosByStatus } from '../../redux/actions/auth';
import { ITodo } from '../../redux/reducers/types';

const useTodosCustomHook = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state: any) => state.user.user);
    const pending = useSelector((state: any) => state.user.pending);
    const todos = useSelector((state: any) => state.user.todos);
    const error = useSelector((state: any) => state.user.error);

    const callTodos = () => { dispatch(fetchTodoRequest()) }

    const sortByStatusHook = (incoming_todos: ITodo[]) => { 
        dispatch(sortTodosByStatus(incoming_todos)) 
        console.log("NEW TODOS == ", incoming_todos);
    }

    return {
        userData,
        pending,
        todos,
        error,
        callTodos,
        sortByStatusHook
    }
}

export default useTodosCustomHook;
