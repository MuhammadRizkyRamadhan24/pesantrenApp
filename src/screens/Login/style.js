import {StyleSheet} from 'react-native';
import {Colors} from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerLogo: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: Colors.primary,
  },
  logo: {
    width: 220,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'center',
  },
  mainContainer: {
    padding: 32,
    marginTop: 10,
  },
  btn: {
    marginTop: 50,
  },
});

export default Styles;
