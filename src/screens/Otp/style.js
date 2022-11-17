import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeFieldRoot: { marginTop: 60 },
  containerOtp: {
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 50,
  },
});


export default Styles;
