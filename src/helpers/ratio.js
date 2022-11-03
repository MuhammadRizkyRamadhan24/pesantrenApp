import { Dimensions, PixelRatio, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelRatio = PixelRatio.get();
const devicePlatform = Platform.OS === 'ios' ? 'ios' : 'android';

const platformScale = (value1, value2) => {
  if (Platform.OS === 'ios') {
    return value1;
  } else {
    return value2;
  }
};

const normalize = size => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  } else {
    if (PixelRatio >= 3) {
      return Math.round(PixelRatio.roundToNearestPixel(size) - 1);
    } else {
      return size;
    }
  }
};

const responsive = (size1 = 0, size2 = 0) => {
  if (screenWidth <= 350) {
    return size1;
  } else if (screenWidth <= 400) {
    return size2 * 0.8;
  } else {
    return size2;
  }
};

export default {
  screenWidth,
  screenHeight,
  pixelRatio,
  devicePlatform,
  platformScale,
  normalize,
  responsive,
};
