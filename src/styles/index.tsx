import React from "react";
import { StyleSheet } from 'react-native';

import colors from "../constants/colors";
import { DEVICE_WIDTH, HORIZONTAL_DIMENS, VERTICAL_DIMENS } from "../constants/dimens";
import { FONT_SIZE } from "../constants/fonts";

const HEIGHT_AR = 0.08;
const BTN_AR = 0.12;

const REQ_HEIGHT = DEVICE_WIDTH * HEIGHT_AR;
const REQ_BTN_HEIGHT = DEVICE_WIDTH * BTN_AR;

const REQ_WIDTH = DEVICE_WIDTH - (2 * HORIZONTAL_DIMENS._20);

export const GLOBAL_STYLES = StyleSheet.create({
    parent_container: {
        flex: 1,
        // backgroundColor: colors.light_yellow_bg
    },

    parent_bg_image: {
        flex: 1
    },

    headerContainer: {
        width: DEVICE_WIDTH,
        minHeight: REQ_BTN_HEIGHT,
        backgroundColor: colors.theme_blue,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    headerTitle: {
        color: colors.white,
        fontSize: FONT_SIZE._18,
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        marginStart: HORIZONTAL_DIMENS._10
        // backgroundColor: 'red'
    },
    
    actionBtnContainer: {
        width: REQ_BTN_HEIGHT,
        minHeight: REQ_BTN_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    }
})