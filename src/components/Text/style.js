import {StyleSheet} from 'react-native';
import {RatioHelper} from 'src/helpers/index';

const Styles = StyleSheet.create({
  weight_default: {
    fontFamily: 'Poppins-Regular',
  },
  weight_thin: {
    fontFamily: 'Poppins-Thin',
  },
  weight_regular: {
    fontFamily: 'Poppins-Regular',
  },
  weight_italic: {
    fontFamily: 'Poppins-Italic',
  },
  weight_medium: {
    fontFamily: 'Poppins-Medium',
  },
  weight_semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  weight_bold: {
    fontFamily: 'Poppins-Bold',
  },
  color: color => ({
    color: color || '#333333',
  }),
  font_xxxs: {
    fontSize: RatioHelper.normalize(8),
  },
  font_xxs: {
    fontSize: RatioHelper.normalize(10),
  },
  font_xs: {
    fontSize: RatioHelper.normalize(12),
  },
  font_s: {
    fontSize: RatioHelper.normalize(14),
  },
  font_m: {
    fontSize: RatioHelper.normalize(16),
  },
  font_l: {
    fontSize: RatioHelper.normalize(20),
  },
  font_xl: {
    fontSize: RatioHelper.normalize(24),
  },
  align: textAlign => ({
    textAlign,
  }),
  mt: size => ({
    marginTop: size,
  }),
  ml: size => ({
    marginLeft: size,
  }),
  mr: size => ({
    marginRight: size,
  }),
  mb: size => ({
    marginBottom: size,
  }),
});

export default Styles;
