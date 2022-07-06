import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../screens/auth/styles";

const ThemeButton: React.FC = (props: any) => {
    return (
        <TouchableOpacity style={styles.theme_button} onPress={props.onPress}>
            <Text style={styles.theme_btn_text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default ThemeButton;