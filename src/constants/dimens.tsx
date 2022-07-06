import { Dimensions } from 'react-native';

const iPhone8_width = 375;
const iPhone8_height = 667;

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const HORIZONTAL_DIMENS = {
    _20: (DEVICE_WIDTH * 20) / iPhone8_width,
    _10: (DEVICE_WIDTH * 10) / iPhone8_width,
    _6: (DEVICE_WIDTH * 6) / iPhone8_width,
    _1: (DEVICE_WIDTH * 1) / iPhone8_width,
}

export const VERTICAL_DIMENS = {
    _30: (DEVICE_HEIGHT * 30) / iPhone8_height,
    _20: (DEVICE_HEIGHT * 20) / iPhone8_height,
    _10: (DEVICE_HEIGHT * 10) / iPhone8_height,
}