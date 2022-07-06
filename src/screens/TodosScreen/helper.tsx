import React from "react";
import { ITodo } from "../../redux/reducers/types";

export const sortByStatusHelper = (incoming_todos: ITodo[]) : ITodo[] => {
    let sortedTodos = [...incoming_todos].sort((a: any,b: any) => a.completed - b.completed)
    // let sortedTodos = incoming_todos.sort((a: any,b: any) => a.completed - b.completed)
    return sortedTodos;
}