// PARENT CONTAINER
import React from "react";
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import { GLOBAL_STYLES } from "../styles";
import images from "../constants/images";

const ParentContainer: React.FC = (props: any) => {
    return (
        <View style={GLOBAL_STYLES.parent_container}>
            {/* <ImageBackground source={images.parent_background} style={GLOBAL_STYLES.parent_bg_image} resizeMode={'cover'}> */}
                <SafeAreaView>
                    {props.children}
                </SafeAreaView>
            {/* </ImageBackground> */}
        </View>
    )
}

export default ParentContainer;