import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: icon => ({
    borderColor: Colors.borderInput,
    backgroundColor: Colors.white,
    fontFamily: 'Poppins-Regular',
    color: Colors.black,
    paddingRight: 25,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    // borderWidth: 1,
    borderBottomWidth: 1,
    fontSize: 12,
    height: 48,
    flex: 1,
    paddingLeft: icon ? 60 : 25,
  }),
  inputDisable: icon => ({
    borderColor: Colors.grey2,
    backgroundColor: Colors.grey2,
    fontFamily: 'Poppins-Regular',
    color: Colors.grey,
    paddingRight: 25,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    // borderWidth: 1,
    borderBottomWidth: 1,
    fontSize: 12,
    height: 48,
    flex: 1,
    paddingLeft: icon ? 60 : 25,
  }),
  wrapInput: { flexDirection: 'row' },
  error: {
    color: Colors.error,
    paddingHorizontal: 4,
    fontSize: 14,
    paddingTop: 4,
  },
  wrapIcon: {
    zIndex: 5,
    elevation: 5,
  },
  icon: {
    zIndex: 5,
    position: 'absolute',
    resizeMode: 'contain',
    width: 35,
    height: 26,
    left: 17,
    top: 15,
    bottom: 8,
  },
  round: {
    borderRadius: 25,
  },
  default: {
    borderRadius: 10,
  },
  hideButton: { position: 'absolute', right: 18, top: 14 },
  textLabel: {
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 2,
  },
});

export default Styles;
