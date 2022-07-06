import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import TODOS_SCREEN_STYLES from '../styles';

const UndoneTodos: React.FC = (props: any) => {
    return (
        <TouchableOpacity style={TODOS_SCREEN_STYLES.undoneContainer}>
            <Text style={TODOS_SCREEN_STYLES.undoneTodoText}>{props.item.title}</Text>
        </TouchableOpacity>
    )
}

export default UndoneTodos