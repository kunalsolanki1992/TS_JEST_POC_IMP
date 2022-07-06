import { StyleSheet } from "react-native";

import colors from "../../constants/colors";
import { DEVICE_WIDTH, HORIZONTAL_DIMENS, VERTICAL_DIMENS } from "../../constants/dimens";
import { FONT_SIZE } from "../../constants/fonts";

const HEIGHT_AR = 0.08;
const BTN_AR = 0.12;

const REQ_HEIGHT = DEVICE_WIDTH * HEIGHT_AR;
const REQ_BTN_HEIGHT = DEVICE_WIDTH * BTN_AR;

const REQ_WIDTH = DEVICE_WIDTH - (2 * HORIZONTAL_DIMENS._20);

const TODOS_SCREEN_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_bg
    },

    undoneContainer: {
        width: REQ_WIDTH,
        alignSelf: 'center',
        marginVertical: VERTICAL_DIMENS._10,
        paddingHorizontal: HORIZONTAL_DIMENS._20,
        paddingVertical: HORIZONTAL_DIMENS._6,
        minHeight: REQ_HEIGHT - HORIZONTAL_DIMENS._1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        borderRadius: HORIZONTAL_DIMENS._6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: HORIZONTAL_DIMENS._1 },
        shadowOpacity: 0.8,
        shadowRadius: HORIZONTAL_DIMENS._1,
        elevation: 2,
    },

    doneTodoText: {
        color: colors.light_grey,
        textDecorationLine: 'line-through',
        fontSize: FONT_SIZE._16
    },

    undoneTodoText: {
        color: colors.theme_brown,
        fontSize: FONT_SIZE._16
    }
})

export default TODOS_SCREEN_STYLES;