import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';

import styles from "../styles";

const FormInput: React.FC = (props: any) => {
    return (
        <TextInput
            style={styles.textInput}
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={(text) => props.onChangeText(text)}
            secureTextEntry={props.secureTextEntry}
        />
    )
}

export default FormInput;