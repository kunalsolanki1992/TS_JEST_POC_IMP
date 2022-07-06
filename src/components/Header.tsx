import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { GLOBAL_STYLES } from "../styles";

const Header: React.FC = (props: any) => {
    return (
        <View style={GLOBAL_STYLES.headerContainer}>
            <Text style={GLOBAL_STYLES.headerTitle}>{props.headerTitle}</Text>

            <TouchableOpacity style={GLOBAL_STYLES.actionBtnContainer} onPress={props.onS1Press}>
                <Text style={GLOBAL_STYLES.headerTitle}>{'S1'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header;
