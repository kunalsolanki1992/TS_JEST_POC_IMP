import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

import { DEVICE_WIDTH, HORIZONTAL_DIMENS, VERTICAL_DIMENS } from "../../constants/dimens";
import { FONT_SIZE } from "../../constants/fonts";

const HEIGHT_AR = 0.08;
const BTN_AR = 0.12;

const REQ_HEIGHT = DEVICE_WIDTH * HEIGHT_AR;
const REQ_BTN_HEIGHT = DEVICE_WIDTH * BTN_AR;

const REQ_WIDTH = DEVICE_WIDTH - (2* HORIZONTAL_DIMENS._20);

export default StyleSheet.create({
  textInput: {
    marginHorizontal: HORIZONTAL_DIMENS._20,
    alignSelf: 'center',
    width: REQ_WIDTH,
    color: colors.black,
    borderBottomColor: colors.theme_brown,
    borderBottomWidth: HORIZONTAL_DIMENS._1,
    marginTop: VERTICAL_DIMENS._20,
    minHeight: REQ_HEIGHT,
    fontSize: FONT_SIZE._16
  },  

  theme_button: {
    minHeight: REQ_BTN_HEIGHT,
    width: REQ_WIDTH,
    backgroundColor: colors.theme_brown,
    borderRadius: HORIZONTAL_DIMENS._6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: HORIZONTAL_DIMENS._1 },
    shadowOpacity: 0.8,
    shadowRadius: HORIZONTAL_DIMENS._1,
    elevation: 2,
    marginTop: VERTICAL_DIMENS._30,
    alignSelf: 'center'
  },

  theme_btn_text: {
    color: colors.light_yellow_bg,
    fontSize: FONT_SIZE._18
  }
})