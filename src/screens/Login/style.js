import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerLogo: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingVertical: 30,
    // backgroundColor: Colors.primary,
  },
  containerRegister: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  mainContainer: {
    padding: 32,
    // marginTop: 10,
  },
  btn: {
    marginTop: 50,
  },
});

export default Styles;
