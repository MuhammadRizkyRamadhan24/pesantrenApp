import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageUser: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 9999,
  },
  containerMenu: {
    width: '100%',
    backgroundColor: Colors.white,
  },
  containerDetail: {
    marginTop: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
