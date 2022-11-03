import {Colors} from 'src/utils/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    paddingVertical: 9,
    paddingHorizontal: wp(8),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.defaultColor,
  },
  default: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  link: {
    borderWidth: 0,
    backgroundColor: Colors.white,
  },
  outlined: {
    borderWidth: 2,
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
  },
});

export default Styles;
