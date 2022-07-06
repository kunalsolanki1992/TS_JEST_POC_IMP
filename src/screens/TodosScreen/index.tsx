import React from "react";
import { SafeAreaView, FlatList, Text, ActivityIndicator, StatusBar } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import TODOS_SCREEN_STYLES from "./styles";
import useTodosCustomHook from "./useCustomHook";
import colors from "../../constants/colors";

import Header from "../../components/Header";
import UndoneTodos from "./components/UndoneTodos";
import DoneTodos from "./components/DoneTodos";

import { sortByStatusHelper } from '../../screens/TodosScreen/helper';

const TodosScreen: React.FC = (props: any) => {
    const { userData, todos, callTodos, error, pending, sortByStatusHook } = useTodosCustomHook();

    React.useEffect(() => {
        (() => {
            callTodos()
        })()

        console.log("TODOS == ", todos);
    }, [])

    if (!pending) {
        return (
            <SafeAreaView style={TODOS_SCREEN_STYLES.container}>
                <Header
                    headerTitle={'Todos'}
                    onS1Press={() => sortByStatusHook(todos)}
                />
                
                <FlatList
                    data={todos}
                    renderItem={({ item }) => {
                        if (!item.completed) {
                            return (
                                <UndoneTodos item={item} />
                            )
                        } else {
                            return (
                                <DoneTodos item={item} />
                            )
                        }
                    }}
                />
            </SafeAreaView>
        )
    } else {
        return (
            <ActivityIndicator size={'small'} />
        )
    }
}

export default TodosScreen